import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'XQuant Beginner',
  description: '《XQuant：人人都是量化交易员》开源书稿',
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '阅读', link: '/book/preface' },
      { text: '配套练习', link: 'https://github.com/xingwudao/xquant-learning' }
    ],
    sidebar: [
      {
        text: 'XQuant Beginner',
        items: [
          { text: '项目首页', link: '/' },
          { text: '前言', link: '/book/preface' },
          { text: '开始动手之前', link: '/book/getting-started' },
          { text: '第 1 章：第一次跑通一个完整策略', link: '/book/q1-how-to-profit' },
          { text: '第 2 章：选出你的投资宇宙', link: '/book/q2-what-to-buy' },
          { text: '第 3 章：给 ETF 分钱', link: '/book/q3-how-much' },
          { text: '第 4 章：给策略加规则', link: '/book/q4-when-to-trade' },
          { text: '第 5 章：策略好不好？', link: '/book/q5-how-to-validate' },
          { text: '第 6 章：看清好看的回测', link: '/book/q6-avoid-overfitting' },
          { text: '第 7 章：真的下单', link: '/book/q7-execution' },
          { text: '第 8 章：让策略活着', link: '/book/q8-iteration' },
          { text: '第 9 章：持续寻找盈利机会', link: '/book/q9-daily-work' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xingwudao/xquant-learning' }
    ],
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    search: {
      provider: 'local'
    }
  }
})
