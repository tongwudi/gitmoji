# Gitmoji VSCode 插件

一个帮助你在Git提交时快速添加规范前缀的VSCode插件，让提交消息更加标准化和美观。

## 功能特性

- ✨ 快速添加Git提交规范前缀
- 🎨 支持自定义Emoji表情
- 🔧 可配置的提交类型映射
- 📝 智能替换已存在的前缀
- 🚀 一键式操作，提升开发效率

## 安装方法

1. 打开 VSCode
2. 进入扩展面板 (Ctrl+Shift+X)
3. 搜索 "Gitmoji"
4. 点击安装

或者通过命令行安装：

```bash
code --install-extension tongwudi.gitmoji
```

## 使用方法

### 基本使用

1. 在 VSCode 中打开 Git 源代码管理面板
2. 点击工具栏中的 Gitmoji 图标
3. 从弹出的列表中选择合适的提交类型
4. 前缀会自动添加到提交消息框中

### 命令面板

你也可以通过命令面板使用：

1. 按下 `Ctrl+Shift+P` 打开命令面板
2. 输入 "添加规范前缀"
3. 选择合适的提交类型

## 配置选项

你可以在 VSCode 设置中自定义提交前缀映射：

1. 打开设置 (Ctrl+,)
2. 搜索 "gitmoji"
3. 编辑 `gitmoji.prefixes` 配置项

### 默认前缀映射

| 前缀 | Emoji | 描述 |
|------|-------|------|
| feat | ✨ | 新功能 |
| fix | 🐛 | 修复bug |
| docs | 📝 | 文档变更 |
| style | 💄 | 样式变更 |
| patch | 🩹 | 小修复 |
| refactor | ♻️ | 代码重构 |
| test | ✅ | 测试变更 |
| chore | 🎉 | 其他变更 |
| perf | ⚡️ | 性能优化 |
| tag | 🔖 | 标签变更 |
| init | 🎉 | 初始化 |
| security | 🔒 | 安全变更 |
| ci | 👷 | CI/CD |
| build | 🏗️ | 构建变更 |
| revert | ⏪️ | 回滚变更 |

### 自定义配置示例

在 `settings.json` 中添加：

```json
{
  "gitmoji.prefixes": [
    {
      "prefix": "feat",
      "emoji": "✨",
      "description": "新功能"
    },
    {
      "prefix": "fix",
      "emoji": "🐛",
      "description": "修复bug"
    }
  ]
}
```

## 提交规范

本插件遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范，推荐的提交格式：

```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

示例：
- `✨ feat: 添加用户登录功能`
- `🐛 fix: 修复页面加载错误`
- `📝 docs: 更新API文档`

## 开发指南

### 项目结构

```
src/
├── extension.ts    # 插件入口文件
├── utils.ts        # 工具函数
└── type.d.ts       # TypeScript 类型定义
```

### 本地开发

1. 克隆仓库
```bash
git clone https://github.com/tongwudi/gitmoji.git
```

2. 安装依赖
```bash
npm install
```

3. 编译代码
```bash
npm run compile
```

4. 在 VSCode 中按 F5 启动调试

### 发布插件

```bash
# 打包插件
npm run package

# 发布到市场
npm run publish
```

## 常见问题

### Q: 如何在多个项目中使用不同的前缀配置？

A: 你可以在 VSCode 的工作区设置中为不同项目配置不同的前缀映射。

### Q: 插件不工作怎么办？

A: 请确保：
1. 已安装并启用了 Git 扩展
2. 当前文件夹是一个 Git 仓库
3. 在源代码管理面板中使用

## 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 相关链接

- [GitHub 仓库](https://github.com/tongwudi/gitmoji)
- [VSCode 市场](https://marketplace.visualstudio.com/items?itemName=tongwudi.gitmoji)
- [问题反馈](https://github.com/tongwudi/gitmoji/issues)
- [Conventional Commits 规范](https://www.conventionalcommits.org/)

---

**让 Git 提交更加规范美观！** 🎯
