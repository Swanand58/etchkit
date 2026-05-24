import { Command } from 'commander'
import { init } from './commands/init'
import { add } from './commands/add'

const program = new Command()

program
  .name('etchkit')
  .description('etchkit CLI — copy-paste UI components into your project')
  .version('0.0.1')

program
  .command('init')
  .description('Initialize etchkit in your project')
  .action(init)

program
  .command('add <component>')
  .description('Add a component to your project')
  .action(add)

program.parse()
