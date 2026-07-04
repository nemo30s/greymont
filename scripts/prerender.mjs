import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { applySeoToHtml } from './apply-seo-html.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.resolve(__dirname, '../dist')

const ROOT_MARKER =
  '<div id="root"><h1 style="position:absolute;left:-9999px;">Greymont</h1></div>'

const SSR_ROUTES = [
  '/web-design-antwerpen',
  '/seo-antwerpen',
  '/webshop-antwerpen',
  '/ai-automatisering',
]

const STATIC_META_ROUTES = ['/book', '/privacy', '/terms']

async function prerender() {
  const template = fs.readFileSync(path.resolve(distPath, 'index.html'), 'utf-8')
  const homepageHtml = applySeoToHtml(template, '/')
  fs.writeFileSync(path.resolve(distPath, 'index.html'), homepageHtml)

  const { render } = await import(path.resolve(distPath, 'server/entry-server.js'))

  for (const route of SSR_ROUTES) {
    try {
      const appHtml = render(route)
      const html = applySeoToHtml(
        homepageHtml.replace(ROOT_MARKER, `<div id="root">${appHtml}</div>`),
        route,
      )
      const routeDir = path.resolve(distPath, route.slice(1))
      fs.mkdirSync(routeDir, { recursive: true })
      fs.writeFileSync(path.resolve(routeDir, 'index.html'), html)
      console.log(`✓ Prerendered ${route}`)
    } catch (e) {
      console.error(`✗ Failed ${route}:`, e.message)
    }
  }

  for (const route of STATIC_META_ROUTES) {
    try {
      const html = applySeoToHtml(homepageHtml, route)
      const routeDir = path.resolve(distPath, route.slice(1))
      fs.mkdirSync(routeDir, { recursive: true })
      fs.writeFileSync(path.resolve(routeDir, 'index.html'), html)
      console.log(`✓ Meta prerendered ${route}`)
    } catch (e) {
      console.error(`✗ Failed ${route}:`, e.message)
    }
  }

  console.log('Done.')
}

prerender()
