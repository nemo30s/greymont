import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoIcon from '../assets/logo-icon.png'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Diensten', href: '#services' },
  { label: 'Werkwijze', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(true)
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

      {/* Spacer to balance the logo on the right */}
      <div className="h-12 w-12" />
    </div>
  )
}
