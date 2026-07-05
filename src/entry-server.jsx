import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Home } from './App.jsx'
import Book from './pages/Book.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import OverOns from './pages/OverOns.jsx'
import Contact from './pages/Contact.jsx'
import WebDesignAntwerpen from './pages/WebDesignAntwerpen.jsx'
import SeoAntwerpen from './pages/SeoAntwerpen.jsx'
import WebshopAntwerpen from './pages/WebshopAntwerpen.jsx'
import AiAutomatisering from './pages/AiAutomatisering.jsx'

const PAGES = {
  '/': Home,
  '/book': Book,
  '/privacy': Privacy,
  '/terms': Terms,
  '/over-ons': OverOns,
  '/contact': Contact,
  '/web-design-antwerpen': WebDesignAntwerpen,
  '/seo-antwerpen': SeoAntwerpen,
  '/webshop-antwerpen': WebshopAntwerpen,
  '/ai-automatisering': AiAutomatisering,
}

export function render(url) {
  const Component = PAGES[url]
  if (!Component) return ''
  return renderToString(
    <StaticRouter location={url}>
      <Component />
    </StaticRouter>
  )
}
