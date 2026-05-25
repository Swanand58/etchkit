import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('fs-extra', () => ({
  default: {
    writeJSON: vi.fn(),
    ensureDir: vi.fn(),
    writeFile: vi.fn(),
    pathExists: vi.fn(),
  },
}))

const mockPrompt = vi.fn()
vi.mock('enquirer', () => ({
  default: {
    prompt: mockPrompt,
  },
}))

const mockSpinner = {
  start: vi.fn().mockReturnThis(),
  succeed: vi.fn().mockReturnThis(),
}
vi.mock('ora', () => ({
  default: vi.fn(() => mockSpinner),
}))

vi.mock('picocolors', () => ({
  default: {
    bold: (s: string) => s,
    cyan: (s: string) => s,
    dim: (s: string) => s,
    red: (s: string) => s,
  },
}))

import { init } from '../commands/init'
import fs from 'fs-extra'

vi.spyOn(console, 'log').mockImplementation(() => {})

const defaultAnswers = {
  framework: 'Next.js',
  typescript: true,
  componentsDir: 'components/ui',
}

function setupHappyPath(overrides: Partial<typeof defaultAnswers> = {}, cssExists = true) {
  mockPrompt.mockResolvedValueOnce({ ...defaultAnswers, ...overrides })
  vi.mocked(fs.writeJSON).mockResolvedValue(undefined as never)
  vi.mocked(fs.ensureDir).mockResolvedValue(undefined as never)
  vi.mocked(fs.writeFile).mockResolvedValue(undefined as never)
  vi.mocked(fs.pathExists).mockResolvedValue(cssExists as never)
}

describe('init command', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockSpinner.start.mockReturnThis()
    mockSpinner.succeed.mockReturnThis()
  })

  it('writes etchkit.config.json with prompt answers', async () => {
    setupHappyPath()
    await init()
    expect(fs.writeJSON).toHaveBeenCalledWith(
      expect.stringContaining('etchkit.config.json'),
      expect.objectContaining({
        framework: 'Next.js',
        typescript: true,
        componentsDir: 'components/ui',
      }),
      expect.any(Object),
    )
  })

  it('writes utils.ts when typescript is true', async () => {
    setupHappyPath({ typescript: true })
    await init()
    const calls = vi.mocked(fs.writeFile).mock.calls
    const utilsCall = calls.find(([p]) => String(p).includes('utils'))
    expect(utilsCall).toBeDefined()
    expect(String(utilsCall![0])).toContain('utils.ts')
    expect(String(utilsCall![1])).toContain('ClassValue')
  })

  it('writes utils.js when typescript is false', async () => {
    setupHappyPath({ typescript: false })
    await init()
    const calls = vi.mocked(fs.writeFile).mock.calls
    const utilsCall = calls.find(([p]) => String(p).includes('utils'))
    expect(utilsCall).toBeDefined()
    expect(String(utilsCall![0])).toContain('utils.js')
    expect(String(utilsCall![1])).toContain('require')
  })

  it('writes to app/globals.css when it exists', async () => {
    setupHappyPath({}, true)
    await init()
    const calls = vi.mocked(fs.writeFile).mock.calls
    const cssCall = calls.find(([p]) => String(p).includes('.css'))
    expect(String(cssCall![0])).toContain('app')
    expect(String(cssCall![0])).toContain('globals.css')
  })

  it('falls back to src/index.css when app/globals.css does not exist', async () => {
    setupHappyPath({}, false)
    await init()
    const calls = vi.mocked(fs.writeFile).mock.calls
    const cssCall = calls.find(([p]) => String(p).includes('.css'))
    expect(String(cssCall![0])).toContain('src')
    expect(String(cssCall![0])).toContain('index.css')
  })

  it('writes postcss.config.mjs', async () => {
    setupHappyPath()
    await init()
    const calls = vi.mocked(fs.writeFile).mock.calls
    const postcssCall = calls.find(([p]) => String(p).includes('postcss'))
    expect(postcssCall).toBeDefined()
    expect(String(postcssCall![0])).toContain('postcss.config.mjs')
  })

  it('ensures lib dir and componentsDir exist', async () => {
    setupHappyPath({ componentsDir: 'src/components' })
    await init()
    const ensureDirCalls = vi.mocked(fs.ensureDir).mock.calls.map(([p]) => String(p))
    expect(ensureDirCalls.some(p => p.includes('lib'))).toBe(true)
    expect(ensureDirCalls.some(p => p.includes('src/components'))).toBe(true)
  })

  it('shows success spinner', async () => {
    setupHappyPath()
    await init()
    expect(mockSpinner.succeed).toHaveBeenCalledWith('etchkit initialized')
  })

  it('includes registry url in config', async () => {
    setupHappyPath()
    await init()
    expect(fs.writeJSON).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ registry: expect.stringContaining('etchkit') }),
      expect.any(Object),
    )
  })

  it('handles Vite framework selection', async () => {
    setupHappyPath({ framework: 'Vite + React' })
    await init()
    expect(fs.writeJSON).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ framework: 'Vite + React' }),
      expect.any(Object),
    )
  })
})
