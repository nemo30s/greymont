import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import PageMeta from './components/PageMeta'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StartSection from './components/StartSection'
import FeaturesChess from './components/FeaturesChess'
import FeaturesGrid from './components/FeaturesGrid'
import StatsSection from './components/StatsSection'
import CtaFooter from './components/CtaFooter'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Book from './pages/Book'
import WebDesignAntwerpen from './pages/WebDesignAntwerpen'
import SeoAntwerpen from './pages/SeoAntwerpen'
import WebshopAntwerpen from './pages/WebshopAntwerpen'
import AiAutomatisering from './pages/AiAutomatisering'

export function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <div id="home"><HeroSection /></div>
        <div id="process" style={{ scrollMarginTop: '80px' }}><StartSection /></div>
        <div id="services" style={{ scrollMarginTop: '80px' }}><FeaturesChess /></div>
        <FeaturesGrid />
        <StatsSection />
        <div id="contact" style={{ scrollMarginTop: '80px' }}><CtaFooter /></div>
      </main>
    </div>
  )
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/book" element={<Book />} />
        <Route path="/web-design-antwerpen" element={<WebDesignAntwerpen />} />
        <Route path="/seo-antwerpen" element={<SeoAntwerpen />} />
        <Route path="/webshop-antwerpen" element={<WebshopAntwerpen />} />
        <Route path="/ai-automatisering" element={<AiAutomatisering />} />
      </Routes>
      <Analytics />
    </>
  )
}
