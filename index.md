# XQuant Beginner

《XQuant：人人都是量化交易员》开源书稿。

本仓库存放可发布的书稿源码、图片和发布配置。书中配套的
spec 与 notebook 不放在这里，统一维护在：

`https://github.com/xingwudao/xquant-learning`

## 快速入口

- 课程与正式书信息：`https://xquant.shop/courses`
- 读者群：添加作者微信 `xquanter`，备注 `XQuant 读者`
- 配套练习：`https://github.com/xingwudao/xquant-learning`
- 书稿反馈：`https://github.com/xingwudao/xquant-beginner/issues/new/choose`


## 开始阅读

- [前言](book/preface.md)
- [开始动手之前](book/getting-started.md)
- [第 1 章：第一次跑通一个完整策略](book/q1-how-to-profit.md)

完整目录见 [SUMMARY.md](SUMMARY.md)。

## 反馈与读者群

- [提交书稿反馈](book/feedback.md)
- [参与贡献说明](CONTRIBUTING.md)
- 添加作者微信 `xquanter` 进入读者群

## 在线发布

本仓库支持两种发布方式：

- GitBook：通过 `.gitbook.yaml`、`README.md`、`SUMMARY.md` 同步发布
- 静态网页：通过 VitePress 构建为纯静态站点

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

## 课程与正式书

课程、正式书和后续更新会放在主站：

`https://xquant.shop/courses`

## 许可证

本仓库采用双许可证：

- 书稿正文与图片：`CC BY-NC-SA 4.0`
- 构建脚本、配置文件和自动化工作流：`MIT`

## 风险提示

本书只用于教育和研究，不构成投资建议。历史表现不代表未来收益，
任何策略都可能亏损。
