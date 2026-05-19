import type { Uri, QuickPickItem } from 'vscode'

export type PrefixItem = {
  prefix: string
  emoji?: string
  description?: string
}

export type PrefixQuickPickItem = QuickPickItem & {
  prefixItem: PrefixItem
}

type GitRepository = ScmContext & {
  inputBox: {
    value: string
  }
}

export interface GitApi {
  repositories: GitRepository[]
}

export type GitExtension = {
  getAPI(version: 1): GitApi
}

export type ScmContext = {
  rootUri: Uri
}
