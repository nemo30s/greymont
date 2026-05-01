import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StartSection from './components/StartSection'
import FeaturesChess from './components/FeaturesChess'
import FeaturesGrid from './components/FeaturesGrid'
import StatsSection from './components/StatsSection'
import Testimonials from './components/Testimonials'
import CtaFooter from './components/CtaFooter'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Book from './pages/Book'
import WebDesignAntwerpen from './pages/WebDesignAntwerpen'
import SeoAntwerpen from './pages/SeoAntwerpen'
import WebshopAntwerpen from './pages/WebshopAntwerpen'
import AiAutomatisering from './pages/AiAutomatisering'

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <div id="home"><HeroSection /></div>
        <div id="process" style={{ scrollMarginTop: '80px' }}><StartSection /></div>
        <div id="services" style={{ scrollMarginTop: '80px' }}><FeaturesChess /></div>
        <div id="work" style={{ scrollMarginTop: '80px' }}><Testimonials /></div>
        <FeaturesGrid />
        <StatsSection />
        <div id="contact" style={{ scrollMarginTop: '80px' }}><CtaFooter /></div>
      </main>
    </div>
  )
}

export default function App() {
  return (
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
  )
}
