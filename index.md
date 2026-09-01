---
title: 人人都是量化交易员：XQuant Beginner 量化交易入门
description: 《XQuant：人人都是量化交易员》是面向零基础读者的量化交易自学开源书，带你用 AI 编程和 Python 从投资想法出发，完成数据获取、策略回测、风险评估、过拟合检查、交易执行和因子研究。
---

# XQuant Beginner

《XQuant：人人都是量化交易员》开源书稿。

这是一本面向零基础读者的量化交易入门书。它不要求你先成为
程序员，也不要求你一开始就掌握复杂金融模型。你会用 AI 编程工具
和 Python，把一个投资想法写成可执行规则，再通过数据、回测和复查
判断它是否站得住。

本书适合正在搜索“量化交易入门”“量化交易自学”“Python 量化回测”
的读者。它的重点不是给你一个神奇策略，而是帮你建立一条能反复
使用的研究路径：提出想法、写清规则、跑出结果、评估风险、怀疑结论、
继续迭代。

> 最新书稿已更新至 [XQuant 量化课堂页](https://xquant.shop/courses)。
> 想阅读最新版官方书稿，请前往图书页。

## 先从这里开始

- [前言](book/preface.md)：理解这本书的学习路径
- [准备工作](book/getting-started.md)：搭好 AI 编程工具和 Python 环境
- [第 1 章：跑通第一个策略](book/q1-how-to-profit.md)：完成第一次策略回测

完整目录见 [SUMMARY.md](SUMMARY.md)。

## 你会学到什么

- 如何把投资想法写成策略规格说明书，也就是 spec
- 如何让 AI 辅助生成和运行 Python 量化代码
- 如何获取 ETF 数据并完成第一个策略回测
- 如何做基准对比、收益评估和风险评估
- 如何识别过拟合、数据泄露和参数优化陷阱
- 如何理解交易执行、监控诊断、策略迭代和因子研究

## 课程结构

- 准备工作：AI 编程工具和 Python 环境
- 第 1 章：跑通第一个策略
- 第 2 章：先选买什么：从 3 只 ETF 开始
- 第 3 章：决定各买多少：3 种分法实测
- 第 4 章：决定何时买卖：再平衡、止损、止盈
- 第 5 章：判断策略好不好：4 个关键视角
- 第 6 章：别高兴太早：防止过拟合
- 第 7 章：从理想到现实：执行交易
- 第 8 章：策略跑起来以后：监控、诊断、迭代
- 第 9 章：持续寻找机会：因子研究入门

## 配套资源

本仓库存放可发布的书稿源码、图片和发布配置。书中配套的 spec 与
notebook 不放在这里，统一维护在：

`https://github.com/xingwudao/xquant-learning`

## 快速入口

- 课程与正式书信息：`https://xquant.shop/courses`
- 配套练习：`https://github.com/xingwudao/xquant-learning`
- 书稿反馈：`https://github.com/xingwudao/xquant-beginner/issues/new/choose`
- 读者群：添加作者微信 `xquanter`，备注 `XQuant 读者`

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

## 许可证

本仓库采用双许可证：

- 书稿正文与图片：`CC BY-NC-SA 4.0`
- 构建脚本、配置文件和自动化工作流：`MIT`

## 风险提示

本书只用于教育和研究，不构成投资建议。历史表现不代表未来收益，
任何策略都可能亏损。
