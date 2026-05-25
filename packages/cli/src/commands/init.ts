import path from 'path'
import fs from 'fs-extra'
import pc from 'picocolors'
import ora from 'ora'

const GLOBALS_CSS = `@import "tailwindcss";
@import "@etchkit/tailwind";

@layer base {
  * {
    border-color: var(--color-border);
  }
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-feature-settings: "cv11", "ss01";
  }
}
`

const POSTCSS_CONFIG = `const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
`

const UTILS_TS = `import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`

const UTILS_JS = `const { clsx } = require('clsx')
const { twMerge } = require('tailwind-merge')

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

module.exports = { cn }
`

export async function init() {
  const { default: enquirer } = await import('enquirer')
  const { prompt } = enquirer as any

  console.log(pc.bold('\netchkit init\n'))

  const answers = await prompt([
    {
      type: 'select',
      name: 'framework',
      message: 'Which framework?',
      choices: ['Next.js', 'Vite + React', 'Remix'],
    },
    {
      type: 'confirm',
      name: 'typescript',
      message: 'TypeScript?',
      initial: true,
    },
    {
      type: 'input',
      name: 'componentsDir',
      message: 'Components directory',
      initial: 'components/ui',
    },
  ]) as { framework: string; typescript: boolean; componentsDir: string }

  const spinner = ora('Setting up etchkit…').start()
  const cwd = process.cwd()

  const config = {
    framework: answers.framework,
    typescript: answers.typescript,
    componentsDir: answers.componentsDir,
    registry: 'https://etchkit-www.vercel.app/registry',
  }

  await fs.writeJSON(path.join(cwd, 'etchkit.config.json'), config, { spaces: 2 })

  const utilsDir = path.join(cwd, 'lib')
  await fs.ensureDir(utilsDir)
  await fs.writeFile(
    path.join(utilsDir, answers.typescript ? 'utils.ts' : 'utils.js'),
    answers.typescript ? UTILS_TS : UTILS_JS
  )

  await fs.ensureDir(path.join(cwd, answers.componentsDir))

  const cssPath = path.join(cwd, 'app', 'globals.css')
  const altCssPath = path.join(cwd, 'src', 'index.css')
  const cssTarget = (await fs.pathExists(cssPath)) ? cssPath : altCssPath
  await fs.writeFile(cssTarget, GLOBALS_CSS)

  await fs.writeFile(path.join(cwd, 'postcss.config.mjs'), POSTCSS_CONFIG)

  spinner.succeed('etchkit initialized')

  console.log('\n' + pc.bold('Next steps:'))
  console.log(`  1. Install deps:`)
  console.log(`     ${pc.cyan('npm install tailwindcss @tailwindcss/postcss @etchkit/tailwind')}`)
  console.log(`  2. Add components:`)
  console.log(`     ${pc.cyan('npx @etchkit/cli@latest add button')}`)
}
