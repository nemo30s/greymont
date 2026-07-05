import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoIcon from '../assets/logo-icon.png'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Diensten', href: '#services' },
  { label: 'Werkwijze', href: '#process' },
  { label: 'Over', to: '/over-ons' },
  { label: 'Contact', to: '/contact' },
]

const LINK_CLASS =
  'font-medium text-white/90 font-body hover:text-white transition-colors whitespace-nowrap'
const LINK_STYLE = { padding: '7px 14px', fontSize: '13px' }

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      // Always show at top of page
      if (y < 60) {
        setVisible(true)
      } else {
        setVisible(y < lastY.current)
      }
      lastY.current = y
      setMenuOpen(false) // close the mobile menu on scroll
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16"
      style={{
        top: '16px',
        transform: visible ? 'translateY(0)' : 'translateY(-120%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Logo — standalone top left */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="focus:outline-none"
        aria-label="Terug naar boven"
      >
        <img src={logoIcon} alt="Greymont" className="h-16 w-16 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
      </button>

      {/* Nav pill + mobile dropdown wrapper (no overflow clipping here) */}
      <div className="relative">
        <nav
          className="liquid-glass rounded-full flex items-center"
          style={{ padding: '7px 10px' }}
        >
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {LINKS.map((link) =>
              link.to ? (
                <Link key={link.label} to={link.to} className={LINK_CLASS} style={LINK_STYLE}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className={LINK_CLASS} style={LINK_STYLE}>
                  {link.label}
                </a>
              ),
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center text-white/90 hover:text-white transition-colors"
            style={{ padding: '7px 8px' }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div style={{ paddingLeft: '6px', paddingRight: '4px' }}>
            <Link
              to="/book"
              className="flex items-center gap-1 bg-white text-black rounded-full font-body font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
              style={{ padding: '7px 14px', fontSize: '13px' }}
            >
              Plan een gesprek
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </nav>

        {/* Mobile dropdown — sibling of the pill so liquid-glass overflow:hidden can't clip it */}
        {menuOpen && (
          <div
            className="md:hidden absolute right-0 top-full mt-3 min-w-[200px] rounded-2xl border border-white/10 flex flex-col overflow-hidden"
            style={{
              background: 'rgba(16, 16, 18, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
              padding: '6px',
            }}
          >
            {LINKS.map((link) => {
              const cls =
                'text-white/90 font-body font-medium hover:bg-white/10 rounded-xl transition-colors'
              const st = { padding: '11px 14px', fontSize: '14px' }
              const close = () => setMenuOpen(false)
              return link.to ? (
                <Link key={link.label} to={link.to} onClick={close} className={cls} style={st}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} onClick={close} className={cls} style={st}>
                  {link.label}
                </a>
              )
            })}
          </div>
        )}
      </div>

      {/* Spacer to balance the logo on the right */}
      <div className="h-12 w-12" />
    </div>
  )
}
