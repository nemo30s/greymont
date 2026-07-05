import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import logoIcon from '../assets/logo-icon.webp'

const SERVICES = [
  'Op maat gemaakte website design',
  'Mobile-first development',
  'Snelle laadtijden & technische optimalisatie',
  'SEO-klare structuur van dag één',
  'Integratie met boekings- en automatiseringssystemen',
  'Doorlopende ondersteuning & updates',
]

const FAQS = [
  {
    q: 'Wat kost een professionele website in Antwerpen?',
    a: 'De prijs hangt af van de scope en complexiteit van het project — aantal pagina\'s, integraties, en specifieke functionaliteiten. We bespreken dit altijd transparant tijdens een gratis gesprek, zodat je vooraf precies weet wat je krijgt en wat het kost.',
  },
  {
    q: 'Hoe lang duurt het om een website te bouwen?',
    a: 'We leveren standaard binnen 1 tot 2 weken op. Van ontwerp tot lancering begeleiden we alles — snel, zonder in te boeten op kwaliteit.',
  },
  {
    q: 'Werken jullie alleen met bedrijven in Antwerpen?',
    a: 'We zijn gevestigd in Antwerpen maar bouwen voor bedrijven door heel België en internationaal. Locatie is geen beperking — een goede website werkt overal.',
  },
  {
    q: 'Kan ik mijn website daarna zelf beheren?',
    a: 'Ja — we bouwen websites die eenvoudig te beheren zijn. Wil je dat wij het beheer op ons nemen? Dat kan via onze maandelijkse retainer formule.',
  },
  {
    q: 'Doen jullie ook webshops?',
    a: 'Absoluut. We bouwen e-commerce oplossingen op maat voor bedrijven in Antwerpen en daarbuiten. Bekijk ook onze webshop pagina voor meer info.',
  },
]

export default function WebDesignAntwerpen() {
  return (
    <div className="bg-black min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
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
        <div className="mb-20">
          <div className="inline-flex liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-white text-sm font-medium font-body">Web Design Antwerpen</span>
          </div>
          <h1 className="font-heading italic text-white leading-[0.88] tracking-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            Web design in Antwerpen dat klanten oplevert.
          </h1>
          <p className="text-white/60 font-body font-light text-lg leading-relaxed max-w-2xl mb-8">
            Greymont bouwt professionele websites voor bedrijven in Antwerpen en omstreken. Geen templates, geen compromissen — alleen op maat gemaakte websites die snel laden, goed ranken op Google en bezoekers omzetten in klanten.
          </p>
          <Link to="/book" className="inline-flex items-center gap-2 liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium hover:opacity-90 transition-opacity">
            Gratis gesprek inplannen
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* What's included */}
        <div className="mb-20">
          <h2 className="font-heading italic text-white text-4xl mb-8 leading-tight">Wat zit er in elke website.</h2>
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
          <h2 className="font-heading italic text-white text-4xl leading-tight">Waarom kiezen voor Greymont in Antwerpen?</h2>
          <p>
            Veel Antwerpse bedrijven hebben een website die er misschien goed uitziet, maar die eigenlijk niets doet. Ze ranken niet op Google, ze converteren geen bezoekers en ze zijn niet geoptimaliseerd voor mobiel. Dat is wat wij anders doen.
          </p>
          <p>
            Bij Greymont bouwen we websites met één doel: resultaten. Elke beslissing — van de structuur tot de snelheid tot de tekst — is gericht op meer klanten voor jouw business. We bouwen voor Antwerpse kmo's, zelfstandigen en groeiende bedrijven die begrijpen dat een goede website een investering is, geen kostenpost.
          </p>
          <p>
            We combineren web design met SEO en AI-automatisering zodat jouw website niet alleen mooi is, maar ook actief werkt voor je bedrijf — ook als jij slaapt. Eén systeem, één doel: meer aanvragen genereren via je website.
          </p>
          <p>
            Of je nu een volledig nieuwe website nodig hebt, je huidige site wil verbeteren, of op zoek bent naar een webshop — we bespreken alles tijdens een gratis gesprek van 30 minuten. Geen verplichtingen, geen verborgen kosten.
          </p>
        </div>

        {/* Internal links */}
        <div className="mb-20">
          <h2 className="font-heading italic text-white text-3xl mb-6 leading-tight">Meer van Greymont.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'SEO Antwerpen', desc: 'Hoger ranken op Google', href: '/seo-antwerpen' },
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
          <h2 className="font-heading italic text-white text-4xl mb-8 leading-tight">Veelgestelde vragen.</h2>
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
          <h2 className="font-heading italic text-white text-4xl mb-4 leading-tight">Klaar om te starten?</h2>
          <p className="text-white/50 font-body font-light text-sm mb-8 max-w-sm mx-auto">30 minuten. Gratis. We bekijken samen wat jouw website nodig heeft.</p>
          <Link to="/book" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium hover:bg-white/90 transition-colors">
            Gratis gesprek inplannen
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  )
}
