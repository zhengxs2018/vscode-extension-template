import { window } from 'vscode'
import type { ExtensionContext } from 'vscode'

export function activate(context: ExtensionContext) {
  window.showInformationMessage('你好')
}

export function deactivate() {}
