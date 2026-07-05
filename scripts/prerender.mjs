import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { applySeoToHtml } from './apply-seo-html.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.resolve(__dirname, '../dist')

// Empty root in the built shell — replaced with server-rendered HTML per route.
const ROOT_MARKER = '<div id="root"></div>'

// Every route is server-rendered so hydrateRoot() has matching markup on all of them.
const SSR_ROUTES = [
  '/',
  '/web-design-antwerpen',
  '/seo-antwerpen',
  '/webshop-antwerpen',
  '/ai-automatisering',
  '/book',
  '/over-ons',
  '/contact',
  '/privacy',
  '/terms',
]

function outFile(route) {
  return route === '/'
    ? path.resolve(distPath, 'index.html')
    : path.resolve(distPath, route.slice(1), 'index.html')
}

async function prerender() {
  const template = fs.readFileSync(path.resolve(distPath, 'index.html'), 'utf-8')
  const { render } = await import(path.resolve(distPath, 'server/entry-server.js'))

  for (const route of SSR_ROUTES) {
    try {
      const appHtml = render(route)
      if (!appHtml) throw new Error('render() returned empty string')
      if (!template.includes(ROOT_MARKER)) throw new Error(`ROOT_MARKER not found in template`)

      const withApp = template.replace(ROOT_MARKER, `<div id="root">${appHtml}</div>`)
      const html = applySeoToHtml(withApp, route)

      const file = outFile(route)
      fs.mkdirSync(path.dirname(file), { recursive: true })
      fs.writeFileSync(file, html)
      console.log(`✓ Prerendered ${route}`)
    } catch (e) {
      console.error(`✗ Failed ${route}:`, e.message)
      process.exitCode = 1
    }
  }

  console.log('Done.')
}

prerender()
