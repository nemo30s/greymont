import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const SERVICES = [
  'Automatische leadopvolging & kwalificatie',
  'AI-gestuurde klantcommunicatie',
  'Automatische rapportage & dashboards',
  'Workflow automatisering (offboarding, onboarding)',
  'Koppeling tussen tools & systemen',
  'AI agents op maat voor jouw business',
]

const FAQS = [
  {
    q: 'Wat is AI automatisering precies?',
    a: 'AI automatisering betekent dat repetitieve taken in jouw business automatisch worden uitgevoerd door software — zonder dat jij of je medewerkers er tijd aan moeten besteden. Denk aan automatische e-mails, leadopvolging, rapportage of klantvragen beantwoorden.',
  },
  {
    q: 'Is AI automatisering iets voor kleine bedrijven?',
    a: 'Absoluut. Kleine bedrijven hebben er juist het meeste baat bij — elke uur die je bespaart op repetitieve taken is een uur dat je kan besteden aan je klanten of groei. De instapdrempel is ook veel lager dan de meeste mensen denken.',
  },
  {
    q: 'Wat kost AI automatisering?',
    a: 'Dat hangt af van de complexiteit van de workflow. Een eenvoudige leadopvolging kan starten vanaf €800 als eenmalig project. Complexere systemen met meerdere integraties kosten meer. We bespreken dit altijd na een gratis analyse van jouw processen.',
  },
  {
    q: 'Welke tools gebruiken jullie voor automatisering?',
    a: 'We werken met de beste tools op de markt — afhankelijk van wat het beste past bij jouw situatie. Denk aan Make, n8n, Zapier, maar ook directe API-integraties en custom AI agents gebouwd op de nieuwste taalmodellen.',
  },
  {
    q: 'Hoe weten jullie welke processen ik kan automatiseren?',
    a: 'Dat beginnen we altijd met een gratis gesprek van 30 minuten. We stellen gerichte vragen over hoe je business werkt en identificeren de taken die de meeste tijd kosten en het makkelijkst te automatiseren zijn. Dat geeft jou direct inzicht, ook als je daarna niet met ons werkt.',
  },
]

export default function AiAutomatisering() {
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
            <span className="text-white text-sm font-medium font-body">AI Automatisering</span>
          </div>
          <h1 className="font-heading italic text-white leading-[0.88] tracking-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            Laat AI het werk doen. Jij groeit.
          </h1>
          <p className="text-white/60 font-body font-light text-lg leading-relaxed max-w-2xl mb-8">
            Greymont bouwt AI automatiseringen voor bedrijven die slimmer willen werken. We identificeren de taken die jouw team de meeste tijd kosten en vervangen ze door systemen die 24/7 draaien — zonder fouten, zonder pauzes.
          </p>
          <Link to="/book" className="inline-flex items-center gap-2 liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium hover:opacity-90 transition-opacity">
            Gratis analyse inplannen
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* What's included */}
        <div className="mb-20">
          <h2 className="font-heading italic text-white text-4xl mb-8 leading-tight">Wat we automatiseren voor jou.</h2>
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
          <h2 className="font-heading italic text-white text-4xl leading-tight">Waarom AI automatisering nu het verschil maakt.</h2>
          <p>
            Bedrijven die AI integreren in hun processen groeien sneller, werken efficiënter en bieden een betere klantervaring — met hetzelfde team of zelfs minder mensen. Dit is geen toekomstmuziek meer. Het gebeurt nu, ook bij kleine en middelgrote bedrijven in België.
          </p>
          <p>
            Bij Greymont bouwen we geen generieke oplossingen. We analyseren hoe jouw business werkt, identificeren de bottlenecks en bouwen automatiseringen die exact passen bij jouw workflow. Of het nu gaat om automatische leadopvolging, AI-gestuurde klantenservice of complexe rapportagesystemen.
          </p>
          <p>
            Het resultaat: jij en je team besteden tijd aan werk dat er écht toe doet. Klanten, strategie, groei. De rest draait automatisch op de achtergrond.
          </p>
          <p>
            We combineren AI automatisering altijd met een sterke digitale aanwezigheid. Een goed systeem heeft ook een professionele website nodig die leads aantrekt. Bekijk ook onze web design en SEO diensten om het volledige plaatje te zien.
          </p>
        </div>

        {/* Internal links */}
        <div className="mb-20">
          <h2 className="font-heading italic text-white text-3xl mb-6 leading-tight">Meer van Greymont.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Web Design Antwerpen', desc: 'Websites die converteren', href: '/web-design-antwerpen' },
              { label: 'SEO Antwerpen', desc: 'Hoger ranken op Google', href: '/seo-antwerpen' },
              { label: 'Webshop Antwerpen', desc: 'E-commerce op maat', href: '/webshop-antwerpen' },
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
          <h2 className="font-heading italic text-white text-4xl mb-8 leading-tight">Veelgestelde vragen over AI automatisering.</h2>
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
          <h2 className="font-heading italic text-white text-4xl mb-4 leading-tight">Wat kan jij automatiseren?</h2>
          <p className="text-white/50 font-body font-light text-sm mb-8 max-w-sm mx-auto">30 minuten. Gratis. We analyseren jouw processen en vertellen je eerlijk wat er mogelijk is.</p>
          <Link to="/book" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium hover:bg-white/90 transition-colors">
            Gratis analyse inplannen
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  )
}
