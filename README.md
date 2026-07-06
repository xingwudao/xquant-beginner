# XQuant Beginner

《XQuant：人人都是量化交易员》开源书稿。

本仓库存放可发布的书稿源码、图片和发布配置。书中配套的
spec 与 notebook 不放在这里，统一维护在：

`https://github.com/xingwudao/xquant-learning`

在线阅读：

`https://xingwudao.github.io/xquant-beginner/`

课程与正式书信息：

`https://xquant.shop/courses`

添加作者微信 `xquanter` 进入读者群。请备注：`XQuant 读者`。

## 作者与服务

### 刑无刀

本文作者 @刑无刀。《机器学习：实用案例解析》译者，《推荐系统》
作者，极客时间《推荐系统 36 式》专栏作者，开源书《人人都是
量化交易员》作者，15 年 AI 从业经验，贝壳（纽交所 + 港交所
双重上市公司，股票代码 BEKE/2423）前技术总监。

- 公众号：刑无刀
- 小红书：刑无刀

<img src="./book/images/home/xingwudao.jpg" alt="公众号：刑无刀" width="180">

### MatrixSpk

本文作者 @MatrixSpk，多年财务及投资经验，系北大 MBA，
公众号「i锐角」主理人。

- 公众号：i锐角

<img src="./book/images/home/iruijiao.jpg" alt="公众号：i锐角" width="180">

### XQuant-Shop

XQuant-Shop 是面向全球个人投资者的一站式量化投资决策平台，
简称 XQuant 平台。XQuant 平台集成标准化量化数据可视化看板、
零门槛策略搭建工具与自动化工作流体系，帮助普通投资者快速搭建
专属量化投资策略。

- 服务号：XQuant-Shop

<img src="./book/images/home/xquant-shop.jpg" alt="XQuant-Shop 服务号" width="180">

## 在线发布

本仓库支持两种发布方式：

- GitBook：通过 `.gitbook.yaml`、`README.md`、`SUMMARY.md` 同步发布
- 静态网页：通过 VitePress 构建为纯静态站点

## 本地阅读

直接从 `SUMMARY.md` 开始阅读，或打开 `book/` 目录下的章节文件。

## 反馈与读者群

如果你发现错别字、概念不清或实验结果不一致，请提交 Issue：

`https://github.com/xingwudao/xquant-beginner/issues/new/choose`

参与反馈前建议阅读：

`CONTRIBUTING.md`

添加作者微信 `xquanter` 进入读者群。请备注：`XQuant 读者`。

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

## 课程与正式书

课程、正式书和后续更新会放在主站：

`https://xquant.shop/courses`

本仓库是开源书稿版本，用于公开阅读和收集反馈。正式书会在吸收
开源反馈后整理为更稳定的版本。

如果您不会写代码、不想阅读全书，不妨看看组合商店：`https://xquant.shop/products` 。

## 许可证

本仓库采用双许可证：

- 书稿正文与图片：`CC BY-NC-SA 4.0`
- 构建脚本、配置文件和自动化工作流：`MIT`

也就是说，你可以在署名、非商业、相同方式共享的前提下传播和改编
书稿内容；构建相关代码和配置可按 MIT 许可证使用。

## 风险提示

本书只用于教育和研究，不构成投资建议。历史表现不代表未来收益，
任何策略都可能亏损。
