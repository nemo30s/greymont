import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const SERVICES = [
  'Op maat gebouwde webshop',
  'Productbeheer & categorieboom',
  'Veilige betalingsintegratie',
  'Mobile-first & razendsnel',
  'SEO-geoptimaliseerd van dag één',
  'Koppeling met boekhouding & stockbeheer',
]

const FAQS = [
  {
    q: 'Wat kost een webshop laten maken in Antwerpen?',
    a: 'Een professionele webshop bij Greymont start vanaf €600. De prijs hangt af van het aantal producten, de gewenste functionaliteiten en integraties. We bespreken dit altijd transparant tijdens een gratis gesprek.',
  },
  {
    q: 'Wat is beter: WordPress/WooCommerce of een custom webshop?',
    a: 'Dat hangt af van jouw situatie. WordPress/WooCommerce is snel op te zetten en flexibel. Een custom oplossing geeft meer controle en snelheid. We adviseren je eerlijk welke aanpak het beste past bij jouw business.',
  },
  {
    q: 'Kan ik mijn webshop zelf beheren na oplevering?',
    a: 'Ja — we zorgen dat je producten, prijzen en bestellingen eenvoudig zelf kan beheren. Wil je ontzorgd worden? Dan nemen we het beheer op ons via onze maandelijkse retainer.',
  },
  {
    q: 'Doen jullie ook SEO voor webshops?',
    a: 'Absoluut. Een webshop zonder SEO is een winkel zonder etalage. We optimaliseren elke pagina zodat je gevonden wordt door mensen die actief zoeken naar jouw producten.',
  },
  {
    q: 'Hoe lang duurt het om een webshop te bouwen?',
    a: 'Een standaard webshop is binnen 2 tot 3 weken live. Grotere projecten met complexe integraties kunnen iets langer duren. We geven altijd een eerlijke inschatting vooraf.',
  },
]

export default function WebshopAntwerpen() {
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
            <span className="text-white text-sm font-medium font-body">Webshop Antwerpen</span>
          </div>
          <h1 className="font-heading italic text-white leading-[0.88] tracking-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            Een webshop laten maken in Antwerpen.
          </h1>
          <p className="text-white/60 font-body font-light text-lg leading-relaxed max-w-2xl mb-8">
            Greymont bouwt professionele webshops voor Antwerpse bedrijven die online willen verkopen. Snel, veilig en volledig op maat — van kleine boutiques tot groeiende e-commerce bedrijven.
          </p>
          <Link to="/book" className="inline-flex items-center gap-2 liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium hover:opacity-90 transition-opacity">
            Gratis gesprek inplannen
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* What's included */}
        <div className="mb-20">
          <h2 className="font-heading italic text-white text-4xl mb-8 leading-tight">Wat zit er in elke webshop.</h2>
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
          <h2 className="font-heading italic text-white text-4xl leading-tight">Waarom een professionele webshop het verschil maakt.</h2>
          <p>
            Een webshop is meer dan een online catalogus. Het is je beste verkoper — 24 uur per dag, 7 dagen per week actief, zonder dat jij erbij moet zijn. Maar dan moet die webshop wel goed werken: snel laden, makkelijk navigeren en vertrouwen uitstralen bij de bezoeker.
          </p>
          <p>
            Veel Antwerpse bedrijven werken met standaard webshop platforms die traag zijn, er generiek uitzien en slecht ranken op Google. Bij Greymont bouwen we webshops die opvallen, snel zijn en gevonden worden door mensen die actief zoeken naar jouw producten.
          </p>
          <p>
            We denken ook verder dan de lancering. Met onze maandelijkse retainer houden we jouw webshop up-to-date, voegen we nieuwe producten toe en optimaliseren we de SEO zodat je organisch blijft groeien. Jij focust op je business, wij zorgen voor de techniek.
          </p>
          <p>
            Of je nu een fysieke winkel hebt in Antwerpen en online wil uitbreiden, of volledig digitaal wil starten — we bespreken alles tijdens een gratis gesprek van 30 minuten.
          </p>
        </div>

        {/* Internal links */}
        <div className="mb-20">
          <h2 className="font-heading italic text-white text-3xl mb-6 leading-tight">Meer van Greymont.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Web Design Antwerpen', desc: 'Websites die converteren', href: '/web-design-antwerpen' },
              { label: 'SEO Antwerpen', desc: 'Hoger ranken op Google', href: '/seo-antwerpen' },
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
          <h2 className="font-heading italic text-white text-4xl mb-8 leading-tight">Veelgestelde vragen over webshops.</h2>
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
          <h2 className="font-heading italic text-white text-4xl mb-4 leading-tight">Klaar om online te verkopen?</h2>
          <p className="text-white/50 font-body font-light text-sm mb-8 max-w-sm mx-auto">30 minuten. Gratis. We bekijken samen wat jouw webshop nodig heeft om te slagen.</p>
          <Link to="/book" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium hover:bg-white/90 transition-colors">
            Gratis gesprek inplannen
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  )
}
