import type { ExtensionContext } from 'vscode'
import { commands } from 'vscode'
import { showPrefixPicker } from './utils'

export const activate = (context: ExtensionContext) => {
  const disposable = commands.registerCommand(
    'gitmoji.addPrefix',
    showPrefixPicker
  )
  context.subscriptions.push(disposable)
}
