import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const CALENDLY_URL = 'https://calendly.com/diaconu-ionut029/30min'

const BULLETS = [
  { label: 'Duration', value: '30 minutes' },
  { label: 'Format', value: 'Google Meet or phone' },
  { label: 'What to expect', value: 'No pitch, no pressure — just an honest look at what your business needs' },
  { label: 'Next step', value: "A clear proposal within 24 hours if it's a fit" },
]

export default function Book() {

  return (
    <div className="bg-black min-h-screen text-white">

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-4 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <Link to="/" className="focus:outline-none">
          <img src={logoIcon} alt="Greymont" className="h-10 w-10 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-body"
        >
          <ArrowLeft size={14} />
          Back to site
        </Link>
      </div>

      <div className="pt-24 pb-20 px-8 lg:px-16 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex liquid-glass rounded-full px-3.5 py-1 mb-5">
            <span className="text-white text-sm font-medium font-body">Free Audit Call</span>
          </div>
          <h1 className="font-heading italic text-white leading-[0.9] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            Let's talk about your business.
          </h1>
          <p className="text-white/50 font-body font-light max-w-md mx-auto" style={{ fontSize: '15px' }}>
            Thirty minutes to understand where you are and what's possible. Completely free, no strings attached.
          </p>
        </div>

        {/* Two-col layout */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">

          {/* Left — what to expect */}
          <div className="flex flex-col gap-6">
            <h2 className="font-body font-medium text-white/80 text-sm uppercase tracking-widest">What to expect</h2>
            <ul className="flex flex-col gap-5">
              {BULLETS.map(({ label, value }) => (
                <li key={label} className="flex flex-col gap-1">
                  <span className="text-white/30 font-body text-xs uppercase tracking-wider">{label}</span>
                  <span className="text-white font-body font-light text-sm leading-relaxed">{value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 liquid-glass rounded-2xl p-5">
              <p className="text-white/40 font-body font-light text-xs leading-relaxed">
                We take on a limited number of new clients each month to keep the quality of work high. If there's a fit, you'll have a proposal in your inbox within 24 hours.
              </p>
            </div>
          </div>

          {/* Right — Calendly inline */}
          <div className="liquid-glass rounded-2xl overflow-hidden" style={{ minHeight: '660px' }}>
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="660"
              style={{ border: 'none' }}
              title="Book a call"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
