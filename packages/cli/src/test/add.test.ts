import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('fs-extra', () => ({
  default: {
    pathExists: vi.fn(),
    readJSON: vi.fn(),
    ensureDir: vi.fn(),
    writeFile: vi.fn(),
  },
}))

vi.mock('execa', () => ({
  execaCommand: vi.fn(),
}))

const mockSpinner = {
  start: vi.fn().mockReturnThis(),
  succeed: vi.fn().mockReturnThis(),
  warn: vi.fn().mockReturnThis(),
}
vi.mock('ora', () => ({
  default: vi.fn(() => mockSpinner),
}))

vi.mock('picocolors', () => ({
  default: {
    red: (s: string) => s,
    cyan: (s: string) => s,
    dim: (s: string) => s,
    bold: (s: string) => s,
  },
}))

import { add } from '../commands/add'
import fs from 'fs-extra'
import { execaCommand } from 'execa'

const mockExit = vi.spyOn(process, 'exit').mockImplementation((code?: string | number | null) => {
  throw new Error(`process.exit(${code})`)
})
vi.spyOn(console, 'error').mockImplementation(() => {})
vi.spyOn(console, 'log').mockImplementation(() => {})

const config = { typescript: true, componentsDir: 'components/ui' }
const registryEntry = { name: 'button', source: 'export function Button() { return null }' }

function setupHappyPath(pnpm = true) {
  vi.mocked(fs.pathExists)
    .mockResolvedValueOnce(true as never)   // config
    .mockResolvedValueOnce(true as never)   // registry file
    .mockResolvedValueOnce(pnpm as never)   // pnpm-lock.yaml
  vi.mocked(fs.readJSON)
    .mockResolvedValueOnce(config as never)
    .mockResolvedValueOnce(registryEntry as never)
  vi.mocked(fs.ensureDir).mockResolvedValue(undefined as never)
  vi.mocked(fs.writeFile).mockResolvedValue(undefined as never)
  vi.mocked(execaCommand).mockResolvedValue(undefined as never)
}

describe('add command', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockSpinner.start.mockReturnThis()
    mockSpinner.succeed.mockReturnThis()
    mockSpinner.warn.mockReturnThis()
  })

  it('exits 1 when etchkit.config.json not found', async () => {
    vi.mocked(fs.pathExists).mockResolvedValueOnce(false as never)
    await expect(add('button')).rejects.toThrow('process.exit(1)')
    expect(mockExit).toHaveBeenCalledWith(1)
  })

  it('exits 1 when component not in registry', async () => {
    vi.mocked(fs.pathExists)
      .mockResolvedValueOnce(true as never)
      .mockResolvedValueOnce(false as never)
    vi.mocked(fs.readJSON).mockResolvedValueOnce(config as never)
    await expect(add('nonexistent')).rejects.toThrow('process.exit(1)')
    expect(mockExit).toHaveBeenCalledWith(1)
  })

  it('writes .tsx and installs with pnpm when pnpm-lock.yaml exists', async () => {
    setupHappyPath(true)
    await add('button')
    expect(fs.writeFile).toHaveBeenCalledWith(
      expect.stringContaining('button.tsx'),
      registryEntry.source,
    )
    expect(execaCommand).toHaveBeenCalledWith(
      expect.stringContaining('pnpm add'),
      expect.any(Object),
    )
    expect(mockSpinner.succeed).toHaveBeenCalled()
  })

  it('installs with npm when no pnpm-lock.yaml', async () => {
    setupHappyPath(false)
    await add('button')
    expect(execaCommand).toHaveBeenCalledWith(
      expect.stringContaining('npm install'),
      expect.any(Object),
    )
  })

  it('writes .jsx when typescript is false', async () => {
    vi.mocked(fs.pathExists)
      .mockResolvedValueOnce(true as never)
      .mockResolvedValueOnce(true as never)
      .mockResolvedValueOnce(false as never)
    vi.mocked(fs.readJSON)
      .mockResolvedValueOnce({ typescript: false, componentsDir: 'components/ui' } as never)
      .mockResolvedValueOnce(registryEntry as never)
    vi.mocked(fs.ensureDir).mockResolvedValue(undefined as never)
    vi.mocked(fs.writeFile).mockResolvedValue(undefined as never)
    vi.mocked(execaCommand).mockResolvedValue(undefined as never)
    await add('button')
    expect(fs.writeFile).toHaveBeenCalledWith(
      expect.stringContaining('button.jsx'),
      expect.any(String),
    )
  })

  it('uses default componentsDir when missing from config', async () => {
    vi.mocked(fs.pathExists)
      .mockResolvedValueOnce(true as never)
      .mockResolvedValueOnce(true as never)
      .mockResolvedValueOnce(false as never)
    vi.mocked(fs.readJSON)
      .mockResolvedValueOnce({ typescript: true } as never)
      .mockResolvedValueOnce(registryEntry as never)
    vi.mocked(fs.ensureDir).mockResolvedValue(undefined as never)
    vi.mocked(fs.writeFile).mockResolvedValue(undefined as never)
    vi.mocked(execaCommand).mockResolvedValue(undefined as never)
    await add('kbd')
    expect(fs.writeFile).toHaveBeenCalledWith(
      expect.stringContaining('components/ui'),
      expect.any(String),
    )
  })

  it('warns when install fails but still marks component as added', async () => {
    setupHappyPath(false)
    vi.mocked(execaCommand).mockRejectedValueOnce(new Error('network error') as never)
    await add('button')
    expect(mockSpinner.warn).toHaveBeenCalled()
    expect(mockSpinner.succeed).toHaveBeenCalled()
  })

  it('includes radix deps in install command for button', async () => {
    setupHappyPath(true)
    await add('button')
    const cmd = vi.mocked(execaCommand).mock.calls[0][0] as string
    expect(cmd).toContain('@radix-ui/react-slot')
  })

  it('only installs common deps for component with no radix deps', async () => {
    vi.mocked(fs.pathExists)
      .mockResolvedValueOnce(true as never)
      .mockResolvedValueOnce(true as never)
      .mockResolvedValueOnce(false as never)
    vi.mocked(fs.readJSON)
      .mockResolvedValueOnce(config as never)
      .mockResolvedValueOnce({ name: 'kbd', source: 'export {}' } as never)
    vi.mocked(fs.ensureDir).mockResolvedValue(undefined as never)
    vi.mocked(fs.writeFile).mockResolvedValue(undefined as never)
    vi.mocked(execaCommand).mockResolvedValue(undefined as never)
    await add('kbd')
    const cmd = vi.mocked(execaCommand).mock.calls[0][0] as string
    expect(cmd).toContain('clsx')
    expect(cmd).not.toContain('@radix-ui')
  })
})
