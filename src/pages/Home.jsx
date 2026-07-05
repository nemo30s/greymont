import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StartSection from '../components/StartSection'
import FeaturesChess from '../components/FeaturesChess'
import FeaturesGrid from '../components/FeaturesGrid'
import StatsSection from '../components/StatsSection'
import CtaFooter from '../components/CtaFooter'

export default function Home() {
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
