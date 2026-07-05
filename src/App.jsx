import { Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import PageMeta from './components/PageMeta'

// Preload-aware lazy: suspends until the chunk is loaded, but renders
// synchronously once it is. main.jsx preloads the current route's chunk before
// hydrateRoot, so the initial route never suspends during hydration — no
// fallback flash, no mismatch. Other routes load on demand during navigation.
function lazyRoute(factory) {
  let Mod = null
  let promise = null
  function preload() {
    if (!promise) promise = factory().then((m) => { Mod = m.default })
    return promise
  }
  function LazyRoute(props) {
    if (!Mod) throw preload()
    return <Mod {...props} />
  }
  LazyRoute.preload = preload
  return LazyRoute
}

const ROUTES = [
  { path: '/', Comp: lazyRoute(() => import('./pages/Home.jsx')) },
  { path: '/privacy', Comp: lazyRoute(() => import('./pages/Privacy.jsx')) },
  { path: '/terms', Comp: lazyRoute(() => import('./pages/Terms.jsx')) },
  { path: '/book', Comp: lazyRoute(() => import('./pages/Book.jsx')) },
  { path: '/over-ons', Comp: lazyRoute(() => import('./pages/OverOns.jsx')) },
  { path: '/contact', Comp: lazyRoute(() => import('./pages/Contact.jsx')) },
  { path: '/web-design-antwerpen', Comp: lazyRoute(() => import('./pages/WebDesignAntwerpen.jsx')) },
  { path: '/seo-antwerpen', Comp: lazyRoute(() => import('./pages/SeoAntwerpen.jsx')) },
  { path: '/webshop-antwerpen', Comp: lazyRoute(() => import('./pages/WebshopAntwerpen.jsx')) },
  { path: '/ai-automatisering', Comp: lazyRoute(() => import('./pages/AiAutomatisering.jsx')) },
]

// Preload a route's chunk (called before hydration for the current path).
export function preloadRoute(pathname) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '') || '/'
  const match = ROUTES.find((r) => r.path === path)
  return match ? match.Comp.preload() : Promise.resolve()
}

// Client-side navigation keeps the previous scroll position, so a link clicked
// near the bottom of one page would land you at the bottom of the next. Reset to
// the top whenever the path changes (hash-only changes are left alone).
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <PageMeta />
      <ScrollToTop />
      <Suspense fallback={<div className="bg-black min-h-screen" />}>
        <Routes>
          {ROUTES.map(({ path, Comp }) => (
            <Route key={path} path={path} element={<Comp />} />
          ))}
        </Routes>
      </Suspense>
      <Analytics />
    </>
  )
}
