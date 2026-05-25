import { describe, it, expect } from 'vitest'
import fs from 'fs-extra'
import path from 'path'

const REGISTRY_DIR = path.resolve(__dirname, '../../../../registry/components')

const ALL_COMPONENTS = [
  'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'avatar', 'badge',
  'breadcrumb', 'button', 'calendar', 'card', 'carousel', 'chart', 'checkbox',
  'collapsible', 'command', 'context-menu', 'copy-button', 'dialog', 'drawer',
  'dropdown-menu', 'empty-state', 'form', 'hover-card', 'input', 'input-otp',
  'kbd', 'label', 'menubar', 'navigation-menu', 'number-input', 'pagination',
  'popover', 'progress', 'radio-group', 'resizable', 'scroll-area', 'select',
  'separator', 'sheet', 'sidebar', 'skeleton', 'slider', 'sonner', 'stepper',
  'switch', 'table', 'tabs', 'textarea', 'timeline', 'toggle', 'toggle-group',
  'tooltip',
]

describe('Component registry', () => {
  it('has 52 components', () => {
    expect(ALL_COMPONENTS).toHaveLength(52)
  })

  it('has a JSON file for every component', () => {
    const missing: string[] = []
    for (const comp of ALL_COMPONENTS) {
      const file = path.join(REGISTRY_DIR, `${comp}.json`)
      if (!fs.existsSync(file)) missing.push(comp)
    }
    expect(missing, `Missing registry files: ${missing.join(', ')}`).toHaveLength(0)
  })

  it('each registry JSON has required fields and valid source', () => {
    for (const comp of ALL_COMPONENTS) {
      const file = path.join(REGISTRY_DIR, `${comp}.json`)
      if (!fs.existsSync(file)) continue

      const json = fs.readJsonSync(file)
      expect(json, `${comp}.json: missing "name"`).toHaveProperty('name')
      expect(json, `${comp}.json: missing "source"`).toHaveProperty('source')
      expect(typeof json.source, `${comp}.json: "source" must be a string`).toBe('string')
      expect(json.source.length, `${comp}.json: "source" is empty`).toBeGreaterThan(0)
    }
  })

  it('each registry source contains a valid React component export', () => {
    const invalid: string[] = []
    for (const comp of ALL_COMPONENTS) {
      const file = path.join(REGISTRY_DIR, `${comp}.json`)
      if (!fs.existsSync(file)) continue

      const json = fs.readJsonSync(file)
      const hasExport = json.source?.includes('export')
      const hasImport = json.source?.includes('import')
      if (!hasExport || !hasImport) invalid.push(comp)
    }
    expect(invalid, `Components missing import/export:\n${invalid.join('\n')}`).toHaveLength(0)
  })
})
