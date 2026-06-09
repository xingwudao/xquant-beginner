# XQuant Beginner

《XQuant：人人都是量化交易员》开源书稿。

本仓库存放可发布的书稿源码、图片和发布配置。书中配套的
spec 与 notebook 不放在这里，统一维护在：

`https://github.com/xingwudao/xquant-learning`

## 在线发布

本仓库支持两种发布方式：

- GitBook：通过 `.gitbook.yaml`、`README.md`、`SUMMARY.md` 同步发布
- 静态网页：通过 VitePress 构建为纯静态站点

## 本地阅读

直接从 `SUMMARY.md` 开始阅读，或打开 `book/` 目录下的章节文件。

## 本地预览静态站点

先安装 Node.js，然后运行：

```bash
npm install
npm run docs:dev
```

构建静态站点：

```bash
npm run docs:build
```

预览构建结果：

```bash
npm run docs:preview
```

构建产物位于 `.vitepress/dist/`。

## 配套练习仓库

书中所有动手实验对应的 spec 和 notebook 位于：

`https://github.com/xingwudao/xquant-learning`

阅读正文时，如果看到类似 `q1-how-to-profit/specs/` 的路径，
请到 `xquant-learning` 仓库中查看对应文件。

## 许可证

本仓库采用双许可证：

- 书稿正文与图片：`CC BY-NC-SA 4.0`
- 构建脚本、配置文件和自动化工作流：`MIT`

也就是说，你可以在署名、非商业、相同方式共享的前提下传播和改编
书稿内容；构建相关代码和配置可按 MIT 许可证使用。
