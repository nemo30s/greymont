import { Suspense } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Home from './pages/Home.jsx'
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
  // Wrap in Suspense so the server emits the same boundary the client hydrates
  // (App wraps <Routes> in <Suspense>) — keeps hydration markers aligned.
  return renderToString(
    <StaticRouter location={url}>
      <Suspense fallback={null}>
        <Component />
      </Suspense>
    </StaticRouter>
  )
}
