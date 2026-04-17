import { ArrowUpRight } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">

      {/* Logo — standalone top left */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="focus:outline-none"
        aria-label="Back to top"
      >
        <img src={logoIcon} alt="Greymont" className="h-16 w-16 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
      </button>

      {/* Nav pill — centered */}
      <nav
        className="liquid-glass rounded-full flex items-center"
        style={{ padding: '7px 10px' }}
      >
        <div className="hidden md:flex items-center gap-0.5">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-medium text-white/90 font-body hover:text-white transition-colors whitespace-nowrap"
              style={{ padding: '7px 14px', fontSize: '13px' }}
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{ paddingLeft: '6px', paddingRight: '4px' }}>
          <a
            href="https://calendly.com/diaconu-ionut029/30min"
            className="flex items-center gap-1 bg-white text-black rounded-full font-body font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
            style={{ padding: '7px 14px', fontSize: '13px' }}
          >
            Get Started
            <ArrowUpRight size={13} />
          </a>
        </div>
      </nav>

      {/* Spacer to balance the logo on the right */}
      <div className="h-12 w-12" />
    </div>
  )
}
