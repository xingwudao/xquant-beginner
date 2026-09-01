import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const distDir = join(process.cwd(), '.vitepress', 'dist')
const bookDir = join(process.cwd(), 'book')

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
    name: 'home title targets quant trading beginner intent',
    run: () => {
      const html = readFileSync(join(distDir, 'index.html'), 'utf8')
      return /<title>[^<]*量化交易入门[^<]*<\/title>/.test(html)
    }
  },
  {
    name: 'home description targets self-study and backtest intent',
    run: () => {
      const html = readFileSync(join(distDir, 'index.html'), 'utf8')
      return (
        html.includes('人人都是量化交易员') &&
        html.includes('量化交易自学') &&
        html.includes('策略回测')
      )
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
    name: 'chapter has page-specific SEO title',
    run: () => {
      const html = readFileSync(join(distDir, 'book/q1-how-to-profit.html'), 'utf8')
      return /<title>[^<]*量化交易入门第 1 章[^<]*<\/title>/.test(html)
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
    name: 'structured data targets beginner quant trading intent',
    run: () => {
      const html = readFileSync(join(distDir, 'index.html'), 'utf8')
      return (
        html.includes('application/ld+json') &&
        html.includes('"@type":"Book"') &&
        html.includes('人人都是量化交易员') &&
        html.includes('量化交易入门') &&
        html.includes('量化交易自学入门')
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
