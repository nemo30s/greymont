import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const SERVICES = [
  'Zoekwoordenonderzoek per markt',
  'On-page SEO optimalisatie',
  'Technische SEO & snelheid',
  'Lokale SEO & Google Business Profile',
  'Maandelijkse rankingrapportage',
  'Content strategie & optimalisatie',
]

const FAQS = [
  {
    q: 'Hoe lang duurt het voor ik resultaten zie van SEO?',
    a: 'SEO is een langetermijninvestering. De eerste bewegingen zijn zichtbaar binnen 4 tot 8 weken. Significante resultaten — meer verkeer, meer aanvragen — zie je typisch na 3 tot 6 maanden consistent werk.',
  },
  {
    q: 'Wat is het verschil tussen lokale SEO en gewone SEO?',
    a: 'Lokale SEO richt zich op zoekopdrachten met een geografische component — zoals "webdesigner Antwerpen" of "accountant in de buurt". Het omvat ook optimalisatie van je Google Business Profile zodat je verschijnt in de kaart-resultaten.',
  },
  {
    q: 'Kan ik zelf aan SEO doen?',
    a: 'Technisch wel, maar SEO vereist consistentie, kennis en tijd. De meeste ondernemers die het zelf proberen geven op na een maand omdat ze geen resultaten zien. Wij zorgen dat het systematisch en correct gebeurt.',
  },
  {
    q: 'Werkt SEO ook voor kleine bedrijven in Antwerpen?',
    a: 'Absoluut — voor lokale bedrijven is SEO juist extra krachtig. Je concurreert niet met de hele wereld, maar met een handvol lokale spelers. Met de juiste aanpak is de top 3 haalbaar.',
  },
  {
    q: 'Wat is jullie aanpak voor SEO?',
    a: 'We starten met een grondige analyse van jouw huidige positie en die van je concurrenten. Dan bouwen we een plan: technische fixes, content optimalisatie en lokale signalen. Elke maand meten we de voortgang en sturen bij waar nodig.',
  },
]

export default function SeoAntwerpen() {
  return (
    <div className="bg-black min-h-screen text-white">
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
        <div className="mb-20">
          <div className="inline-flex liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-white text-sm font-medium font-body">SEO Antwerpen</span>
          </div>
          <h1 className="font-heading italic text-white leading-[0.88] tracking-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            Hoger ranken op Google in Antwerpen.
          </h1>
          <p className="text-white/60 font-body font-light text-lg leading-relaxed max-w-2xl mb-8">
            Greymont is een SEO bureau in Antwerpen dat lokale bedrijven helpt gevonden te worden door de juiste mensen op het juiste moment. We combineren technische SEO, content optimalisatie en lokale zoekmachine marketing voor meetbare resultaten.
          </p>
          <Link to="/book" className="inline-flex items-center gap-2 liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium hover:opacity-90 transition-opacity">
            Gratis SEO gesprek
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* What's included */}
        <div className="mb-20">
          <h2 className="font-heading italic text-white text-4xl mb-8 leading-tight">Wat zit er in onze SEO aanpak.</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {SERVICES.map(s => (
              <div key={s} className="flex items-start gap-3 liquid-glass rounded-xl p-4">
                <Check size={16} className="text-white/60 shrink-0 mt-0.5" />
                <span className="text-white/80 font-body text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Body content */}
        <div className="mb-20 space-y-6 text-white/60 font-body font-light text-base leading-relaxed">
          <h2 className="font-heading italic text-white text-4xl leading-tight">SEO die écht werkt voor Antwerpse bedrijven.</h2>
          <p>
            De meeste bedrijven in Antwerpen hebben een website, maar slechts een handvol verschijnt op de eerste pagina van Google. Het verschil zit niet in geluk — het zit in een doordachte SEO strategie die consistent wordt uitgevoerd.
          </p>
          <p>
            Bij Greymont geloven we dat SEO geen mysterie is. Het is een combinatie van technische correctheid, relevante content en lokale signalen die Google vertellen dat jouw bedrijf de beste keuze is voor zoekers in Antwerpen. We leggen je altijd uit wat we doen en waarom.
          </p>
          <p>
            We werken met Antwerpse kmo's, vrije beroepen en groeiende bedrijven die begrijpen dat online zichtbaarheid direct impact heeft op hun omzet. Of je nu een advocatenkantoor, een kliniek of een retailzaak hebt — de aanpak is altijd op maat.
          </p>
          <p>
            SEO wordt ook steeds belangrijker buiten Google. Pagina's die goed ranken op Google worden ook geciteerd door AI-tools zoals ChatGPT en Perplexity wanneer mensen vragen stellen over jouw vakgebied. Eén solide SEO aanpak geeft je zichtbaarheid op alle platformen tegelijk.
          </p>
        </div>

        {/* Internal links */}
        <div className="mb-20">
          <h2 className="font-heading italic text-white text-3xl mb-6 leading-tight">Meer van Greymont.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Web Design Antwerpen', desc: 'Websites die converteren', href: '/web-design-antwerpen' },
              { label: 'Webshop Antwerpen', desc: 'E-commerce op maat', href: '/webshop-antwerpen' },
              { label: 'AI Automatisering', desc: 'Workflows automatiseren', href: '/ai-automatisering' },
            ].map(l => (
              <Link key={l.href} to={l.href} className="liquid-glass rounded-xl p-5 hover:opacity-80 transition-opacity">
                <div className="text-white font-body font-medium text-sm mb-1">{l.label}</div>
                <div className="text-white/40 font-body text-xs">{l.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="font-heading italic text-white text-4xl mb-8 leading-tight">Veelgestelde vragen over SEO.</h2>
          <div className="space-y-0">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="border-t border-white/10 py-6">
                <h3 className="text-white font-body font-medium text-base mb-3">{q}</h3>
                <p className="text-white/50 font-body font-light text-sm leading-relaxed">{a}</p>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>

        {/* CTA */}
        <div className="liquid-glass rounded-2xl p-10 text-center">
          <h2 className="font-heading italic text-white text-4xl mb-4 leading-tight">Waar sta jij nu op Google?</h2>
          <p className="text-white/50 font-body font-light text-sm mb-8 max-w-sm mx-auto">We doen een gratis analyse van jouw huidige positie en vertellen je eerlijk wat er mogelijk is.</p>
          <Link to="/book" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium hover:bg-white/90 transition-colors">
            Gratis SEO analyse
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  )
}
