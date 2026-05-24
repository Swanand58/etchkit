import path from 'path'
import fs from 'fs-extra'
import pc from 'picocolors'
import ora from 'ora'
import { execaCommand } from 'execa'

const REGISTRY_BASE = path.resolve(__dirname, '../../../../registry/components')

const RADIX_DEPS: Record<string, string[]> = {
  checkbox: ['@radix-ui/react-checkbox'],
  select: ['@radix-ui/react-select'],
  dialog: ['@radix-ui/react-dialog'],
  tabs: ['@radix-ui/react-tabs'],
  switch: ['@radix-ui/react-switch'],
  tooltip: ['@radix-ui/react-tooltip'],
  separator: ['@radix-ui/react-separator'],
  avatar: ['@radix-ui/react-avatar'],
  label: ['@radix-ui/react-label'],
  button: ['@radix-ui/react-slot'],
}

const COMMON_DEPS = ['clsx', 'tailwind-merge', 'class-variance-authority', 'lucide-react']

export async function add(component: string) {
  const cwd = process.cwd()
  const configPath = path.join(cwd, 'etchkit.config.json')

  if (!(await fs.pathExists(configPath))) {
    console.error(pc.red('etchkit.config.json not found. Run `etchkit init` first.'))
    process.exit(1)
  }

  const config = await fs.readJSON(configPath)
  const componentsDir = path.join(cwd, config.componentsDir ?? 'components/ui')
  const registryFile = path.join(REGISTRY_BASE, `${component}.json`)

  if (!(await fs.pathExists(registryFile))) {
    console.error(pc.red(`Component "${component}" not found in registry.`))
    process.exit(1)
  }

  const spinner = ora(`Adding ${component}…`).start()

  const entry = await fs.readJSON(registryFile)
  const ext = config.typescript ? 'tsx' : 'jsx'
  const outPath = path.join(componentsDir, `${component}.${ext}`)

  await fs.ensureDir(componentsDir)
  await fs.writeFile(outPath, entry.source)

  const radixDeps = RADIX_DEPS[component] ?? []
  const allDeps = [...COMMON_DEPS, ...radixDeps]

  try {
    const pm = await detectPackageManager(cwd)
    const installCmd = pm === 'pnpm' ? `pnpm add ${allDeps.join(' ')}` : `npm install ${allDeps.join(' ')}`
    await execaCommand(installCmd, { cwd, stdio: 'pipe' })
  } catch {
    spinner.warn(`Could not install deps automatically. Run manually:`)
    console.log(pc.dim(`  npm install ${allDeps.join(' ')}`))
  }

  spinner.succeed(`Added ${pc.cyan(component)} → ${pc.dim(path.relative(cwd, outPath))}`)
}

async function detectPackageManager(cwd: string): Promise<'pnpm' | 'npm'> {
  if (await fs.pathExists(path.join(cwd, 'pnpm-lock.yaml'))) return 'pnpm'
  return 'npm'
}
