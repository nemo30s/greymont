import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlurText from './BlurText'
import HlsVideo from './HlsVideo'
import ThreeLogo from './ThreeLogo'

const HERO_VIDEO = 'https://stream.mux.com/hAavkyE3o2l82Efoxg9S4ZYv601pQysWJLpNnuwo01dIw.m3u8'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ height: '100vh', minHeight: '700px' }}>

      {/* Video background — full-screen, blurred */}
      <div className="absolute inset-0 z-0">
        <HlsVideo
          src={HERO_VIDEO}
          className="w-full h-full object-cover"
          style={{ filter: 'blur(14px)', transform: 'scale(1.08)' }}
        />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 52%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.62) 52%, rgba(0,0,0,0.94) 100%)',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{ height: '280px', background: 'linear-gradient(to bottom, transparent, black)' }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 pt-20 md:pt-[120px]" style={{ gap: '28px' }}>

        {/* TOP — headline + subheadline */}
        <div className="flex flex-col items-center text-center" style={{ gap: '20px' }}>
          <motion.h1
            className="font-heading italic text-white leading-[0.9] tracking-tight md:tracking-[-2px]"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.8rem)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="md:whitespace-nowrap" style={{ display: 'block', marginBottom: '6px' }}>
              <BlurText
                text="Webdesign, SEO & AI-automatisering uit Antwerpen"
                delay={80}
                direction="bottom"
                animateBy="words"
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-white/60 font-body font-light leading-relaxed max-w-xs"
            style={{ fontSize: '14px' }}
            initial={{ filter: 'blur(10px)', opacity: 0, y: 16 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: 'easeOut' }}
          >
            Websites, SEO en AI-features als één systeem —
            gemeten aan één cijfer: geboekte gesprekken met klanten.
          </motion.p>
        </div>

        {/* MIDDLE — 3D logo, scale-only entrance (no opacity change = true black always) */}
        <motion.div
          initial={{ scale: 0.84 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <ThreeLogo className="w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80" />
        </motion.div>

        {/* BOTTOM — CTA buttons */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ filter: 'blur(8px)', opacity: 0, y: 16 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
        >
          <Link
            to="/book"
            className="liquid-glass-strong rounded-full text-white font-body font-medium flex items-center gap-1.5 hover:opacity-90 transition-opacity"
            style={{ padding: '10px 22px', fontSize: '13px' }}
          >
            Plan een gesprek
            <ArrowUpRight size={14} />
          </Link>
          <a
            href="#services"
            className="bg-white text-black rounded-full font-body font-medium hover:bg-white/90 transition-colors"
            style={{ padding: '10px 22px', fontSize: '13px' }}
          >
            Wat we doen
          </a>
        </motion.div>

      </div>
    </section>
  )
}
