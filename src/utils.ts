import { workspace, extensions, window } from 'vscode'
import type {
  GitApi,
  GitExtension,
  PrefixItem,
  ScmContext,
  PrefixQuickPickItem
} from '../type'

const LEADING_PREFIX_PATTERN = /^\S+:\s+/

const getConfiguredPrefixes = () => {
  const config = workspace.getConfiguration('gitmoji')
  const prefixes = config.get<PrefixItem[]>('prefixes', [])

  return prefixes.flatMap((item: PrefixItem) => {
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      return []
    }

    const { prefix, emoji, description } = item

    if (typeof prefix !== 'string' || !prefix.trim()) {
      return []
    }

    return [
      {
        prefix,
        emoji: typeof emoji === 'string' ? emoji : undefined,
        description: typeof description === 'string' ? description : undefined
      }
    ]
  })
}

const getGitApi = async (): Promise<GitApi | undefined> => {
  const extension = extensions.getExtension<GitExtension>('vscode.git')

  if (!extension) {
    return undefined
  }

  if (!extension.isActive) {
    await extension.activate()
  }

  return extension.exports.getAPI(1)
}

const getPrefixValue = (item: PrefixItem) => {
  return `${item.prefix}${item.emoji ?? ''}: `
}

const replacePrefix = (message: string, nextPrefix: string) => {
  if (LEADING_PREFIX_PATTERN.test(message)) {
    return message.replace(LEADING_PREFIX_PATTERN, nextPrefix)
  }

  return `${nextPrefix}${message}`
}

export const showPrefixPicker = async (context: ScmContext) => {
  const prefixes = getConfiguredPrefixes()

  if (prefixes.length === 0) {
    void window.showErrorMessage('暂未配置提交前缀。')
    return
  }

  const gitApi = await getGitApi()

  if (!gitApi) {
    void window.showErrorMessage('Git 插件未激活。请先激活插件。')
    return
  }

  const repository = gitApi.repositories.find(r => {
    return r.rootUri?.path === context.rootUri?.path
  })

  if (!repository) {
    void window.showErrorMessage('当前工作目录不是 Git 仓库。')
    return
  }

  const items = prefixes.map(prefixItem => ({
    label: getPrefixValue(prefixItem),
    description: prefixItem.description,
    prefixItem
  }))

  const selected = await window.showQuickPick<PrefixQuickPickItem>(items, {
    placeHolder: '请选择提交前缀'
  })

  if (!selected) {
    return
  }

  const nextPrefix = getPrefixValue(selected.prefixItem)

  const genInput = replacePrefix(repository.inputBox.value, nextPrefix)

  repository.inputBox.value = genInput
}
