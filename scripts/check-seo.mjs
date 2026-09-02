import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const distDir = join(process.cwd(), '.vitepress', 'dist')
const bookDir = join(process.cwd(), 'book')
const homeTitle =
  'AI 量化交易入门：《人人都是量化交易员》开源书 | 用 AI 和 Python 跑通第一个策略'
const homeDescription =
  'AI 量化交易入门开源书：用 AI 编程工具和 Python 从零跑通策略回测、风险评估与因子研究'
const chapterPages = [
  'preface.md',
  'getting-started.md',
  'q1-how-to-profit.md',
  'q2-what-to-buy.md',
  'q3-how-much.md',
  'q4-when-to-trade.md',
  'q5-how-to-validate.md',
  'q6-avoid-overfitting.md',
  'q7-execution.md',
  'q8-iteration.md',
  'q9-daily-work.md'
]

function hasFrontmatterField(markdown, field) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/)
  return Boolean(match && new RegExp(`^${field}:\\s+\\S`, 'm').test(match[1]))
}

const checks = [
  {
    name: 'sitemap.xml is generated',
    run: () => existsSync(join(distDir, 'sitemap.xml'))
  },
  {
    name: 'robots.txt is generated',
    run: () => existsSync(join(distDir, 'robots.txt'))
  },
  {
    name: 'home title leads with AI quant beginner intent',
    run: () => {
      const html = readFileSync(join(distDir, 'index.html'), 'utf8')
      return html.includes(`<title>${homeTitle}</title>`)
    }
  },
  {
    name: 'home description leads with AI quant intent',
    run: () => {
      const html = readFileSync(join(distDir, 'index.html'), 'utf8')
      return html.includes(`<meta name="description" content="${homeDescription}">`)
    }
  },
  {
    name: 'home hero states the AI-assisted learning difference',
    run: () => {
      const html = readFileSync(join(distDir, 'index.html'), 'utf8')
      return html.includes('AI 量化交易入门') && html.includes('Vibe Coding')
    }
  },
  {
    name: 'home has canonical URL',
    run: () => {
      const html = readFileSync(join(distDir, 'index.html'), 'utf8')
      return html.includes('<link rel="canonical" href="https://xingwudao.github.io/xquant-beginner/">')
    }
  },
  {
    name: 'chapter title leads with AI quant prefix',
    run: () => {
      const html = readFileSync(join(distDir, 'book/q1-how-to-profit.html'), 'utf8')
      return /<title>AI 量化 · [^<]*第 1 章[^<]*<\/title>/.test(html)
    }
  },
  {
    name: 'Open Graph metadata is present',
    run: () => {
      const html = readFileSync(join(distDir, 'index.html'), 'utf8')
      return html.includes('property="og:title"') && html.includes('property="og:url"')
    }
  },
  {
    name: 'structured data targets AI quant beginner intent',
    run: () => {
      const html = readFileSync(join(distDir, 'index.html'), 'utf8')
      return (
        html.includes('application/ld+json') &&
        html.includes('"@type":"Book"') &&
        html.includes('人人都是量化交易员') &&
        html.includes('AI 量化交易入门') &&
        html.includes('Vibe Coding')
      )
    }
  },
  {
    name: 'book pages have SEO title and description frontmatter',
    run: () => {
      const pages = readdirSync(bookDir).filter((file) => file.endsWith('.md'))
      return pages.every((page) => {
        const markdown = readFileSync(join(bookDir, page), 'utf8')
        return hasFrontmatterField(markdown, 'title') && hasFrontmatterField(markdown, 'description')
      })
    }
  },
  {
    name: 'rendered chapter titles lead with AI quant prefix',
    run: () => chapterPages.every((page) => {
      const htmlPage = page.replace(/\.md$/, '.html')
      const html = readFileSync(join(distDir, 'book', htmlPage), 'utf8')
      return /<title>AI 量化 · [^<]+<\/title>/.test(html)
    })
  }
]

let failed = 0

for (const check of checks) {
  if (check.run()) {
    console.log(`PASS ${check.name}`)
  } else {
    failed += 1
    console.error(`FAIL ${check.name}`)
  }
}

if (failed > 0) {
  process.exit(1)
}
