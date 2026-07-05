import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const CONTACT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: 'https://greymont.agency/contact',
  name: 'Contact — Greymont Antwerpen',
  mainEntity: { '@id': 'https://greymont.agency/#business' },
}

export default function Contact() {
  return (
    <div className="bg-black min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_SCHEMA) }}
      />
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5 border-b border-white/5"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}>
        <Link to="/">
          <img src={logoIcon} alt="Greymont" className="h-12 w-12 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>
        <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-body text-sm">
          <ArrowLeft size={14} />
          Terug naar site
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-8 pt-40 pb-32">

        {/* Hero */}
        <div className="mb-16">
          <div className="inline-flex liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-white text-sm font-medium font-body">Contact</span>
          </div>
          <h1 className="font-heading italic text-white leading-[0.88] tracking-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            Contact
          </h1>
          <p className="text-white/60 font-body font-light text-lg leading-relaxed max-w-2xl">
            Eén aanspreekpunt, korte lijnen. Bel, mail, of plan direct een gesprek in — ik antwoord meestal binnen een dag.
          </p>
        </div>

        {/* NAP + opening hours */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          <div className="liquid-glass rounded-2xl p-8">
            <h2 className="text-white/40 font-body text-sm tracking-widest uppercase mb-5">Gegevens</h2>
            <address className="not-italic space-y-2 text-white/80 font-body">
              <div className="text-white font-medium">Greymont</div>
              <div>Antwerpen, België</div>
              <div><a href="tel:+32491916606" className="hover:text-white transition-colors">+32 491 91 66 06</a></div>
              <div><a href="mailto:hello@greymont.agency" className="hover:text-white transition-colors">hello@greymont.agency</a></div>
            </address>
          </div>
          <div className="liquid-glass rounded-2xl p-8">
            <h2 className="text-white/40 font-body text-sm tracking-widest uppercase mb-5">Openingsuren</h2>
            <p className="text-white/80 font-body">Maandag–vrijdag<br />9:00–18:00</p>
          </div>
        </div>

        {/* CTA */}
        <div className="liquid-glass rounded-2xl p-10 text-center">
          <p className="text-white/50 font-body font-light text-sm mb-8 max-w-sm mx-auto">
            Liever meteen een gesprek? 30 minuten, gratis en vrijblijvend.
          </p>
          <Link to="/book" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium hover:bg-white/90 transition-colors">
            Plan een gratis gesprek
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  )
}
