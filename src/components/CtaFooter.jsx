import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HlsVideo from './HlsVideo'

const SRC = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

export default function CtaFooter() {
  return (
    <section className="relative">
      <HlsVideo
        src={SRC}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to top, black, transparent)' }}
      />

      <div className="relative z-20 flex flex-col items-center text-center px-8 lg:px-16 pt-40 pb-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] max-w-2xl mb-6">
          The next step is a conversation.
        </h2>

        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-sm mb-4">
          Thirty minutes. No pitch, no pressure. Just an honest look at where you are and what&apos;s possible.
        </p>

        {/* Scarcity signal */}
        <p className="text-white/30 font-body font-light text-xs mb-10 tracking-wide">
          We take on a limited number of new clients each month.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://calendly.com/diaconu-ionut029/30min"
            className="liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            Book a Free Call
            <ArrowUpRight size={15} />
          </a>
          <a
            href="#services"
            className="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium hover:bg-white/90 transition-colors"
          >
            See Our Work
          </a>
        </div>

        <div className="mt-32 pt-8 border-t border-white/10 w-full flex items-center justify-between flex-wrap gap-4 text-center sm:text-left">
          <span className="text-white/40 text-xs font-body w-full sm:w-auto">© 2026 Greymont. All rights reserved.</span>
          <div className="flex items-center gap-6 w-full sm:w-auto justify-center sm:justify-end">
            <Link to="/privacy" className="text-white/40 text-xs font-body hover:text-white/60 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-white/40 text-xs font-body hover:text-white/60 transition-colors">Terms</Link>
            <a href="mailto:diaconu.ionut029@gmail.com" className="text-white/40 text-xs font-body hover:text-white/60 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}
