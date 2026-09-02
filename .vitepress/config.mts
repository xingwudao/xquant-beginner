import { defineConfig, type HeadConfig } from 'vitepress'

const siteUrl = 'https://xingwudao.github.io/xquant-beginner/'
const siteTitle =
  'AI 量化交易入门：《人人都是量化交易员》开源书 | 用 AI 和 Python 跑通第一个策略'
const siteDescription =
  'AI 量化交易入门开源书：用 AI 编程工具和 Python 从零跑通策略回测、风险评估与因子研究'
const repoUrl = 'https://github.com/xingwudao/xquant-beginner'
const learningRepoUrl = 'https://github.com/xingwudao/xquant-learning'
const courseUrl = 'https://xquant.shop/courses'
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'AI 量化交易入门：《人人都是量化交易员》',
  alternateName: [
    'XQuant：人人都是量化交易员',
    'AI 量化交易入门',
    'Vibe Coding 量化交易入门',
    '量化交易入门',
    '量化交易自学教程'
  ],
  headline: siteTitle,
  description: siteDescription,
  inLanguage: 'zh-CN',
  url: siteUrl,
  isAccessibleForFree: true,
  learningResourceType: '开源书稿',
  keywords: [
    'AI 量化交易入门',
    'AI 量化交易',
    'Vibe Coding',
    'AI 编程工具',
    '量化交易入门',
    '量化交易自学',
    '量化交易自学入门',
    'Python量化交易',
    'AI量化交易',
    '策略回测',
    '因子研究'
  ],
  author: [
    {
      '@type': 'Person',
      name: '刑无刀'
    },
    {
      '@type': 'Person',
      name: 'MatrixSpk'
    }
  ],
  publisher: {
    '@type': 'Organization',
    name: 'XQuant-Shop',
    url: 'https://xquant.shop/'
  },
  sameAs: [repoUrl, learningRepoUrl, courseUrl]
}

function pageToUrl(page: string) {
  const route = page
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')
    .replace(/README$/, 'README')

  const path = route === '' ? '' : route
  return new URL(path, siteUrl).href
}

function meta(name: string, content: string): HeadConfig {
  return ['meta', { name, content }]
}

function property(property: string, content: string): HeadConfig {
  return ['meta', { property, content }]
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'XQuant Beginner',
  titleTemplate: ':title | 人人都是量化交易员',
  description: siteDescription,
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: siteUrl
  },
  head: [
    meta('author', '刑无刀, MatrixSpk'),
    meta('keywords', 'AI 量化交易入门, AI 量化交易, Vibe Coding, AI 编程工具, Python 量化交易, 策略回测, 风险评估, 因子研究, open-xquant'),
    meta('theme-color', '#2563eb'),
    property('og:site_name', 'AI 量化入门 · XQuant Beginner'),
    property('og:type', 'book'),
    property('og:locale', 'zh_CN'),
    property('og:title', siteTitle),
    property('og:description', siteDescription),
    property('og:url', siteUrl),
    property('og:image:alt', 'AI 量化交易入门《人人都是量化交易员》开源书'),
    meta('twitter:card', 'summary'),
    meta('twitter:title', siteTitle),
    meta('twitter:description', siteDescription),
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify(jsonLd)
    ]
  ],
  transformHead({ page, title, description }) {
    const url = pageToUrl(page)
    return [
      ['link', { rel: 'canonical', href: url }],
      property('og:title', title || siteTitle),
      property('og:description', description || siteDescription),
      property('og:url', url),
      meta('twitter:title', title || siteTitle),
      meta('twitter:description', description || siteDescription)
    ]
  },
  themeConfig: {
    nav: [
      { text: '阅读', link: '/book/preface' },
      { text: '反馈', link: '/book/feedback' },
      { text: '课程', link: 'https://xquant.shop/courses' },
      { text: '配套练习', link: 'https://github.com/xingwudao/xquant-learning' }
    ],
    sidebar: [
      {
        text: 'XQuant Beginner',
        items: [
          { text: '项目首页', link: '/' },
          { text: '前言', link: '/book/preface' },
          { text: '准备工作', link: '/book/getting-started' },
          { text: '第 1 章：跑通第一个策略', link: '/book/q1-how-to-profit' },
          { text: '第 2 章：先选买什么：从 3 只 ETF 开始', link: '/book/q2-what-to-buy' },
          { text: '第 3 章：决定各买多少：3 种分法实测', link: '/book/q3-how-much' },
          { text: '第 4 章：决定何时买卖：再平衡、止损、止盈', link: '/book/q4-when-to-trade' },
          { text: '第 5 章：判断策略好不好：4 个关键视角', link: '/book/q5-how-to-validate' },
          { text: '第 6 章：别高兴太早：防止过拟合', link: '/book/q6-avoid-overfitting' },
          { text: '第 7 章：从理想到现实：执行交易', link: '/book/q7-execution' },
          { text: '第 8 章：策略跑起来以后：监控、诊断、迭代', link: '/book/q8-iteration' },
          { text: '第 9 章：持续寻找机会：因子研究入门', link: '/book/q9-daily-work' },
          { text: '反馈与读者群', link: '/book/feedback' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: repoUrl }
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
