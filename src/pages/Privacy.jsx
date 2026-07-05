import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const SECTIONS = [
  {
    title: 'Welke gegevens we verzamelen',
    body: `We verzamelen de gegevens die je zelf met ons deelt — zoals je naam, e-mailadres en de informatie die je doorgeeft wanneer je een gesprek inplant of ons rechtstreeks mailt. Daarnaast verzamelen we anonieme gebruiksstatistieken (bezochte pagina's, browsertype) via Vercel Analytics om de website te verbeteren. Deze statistieken zijn niet herleidbaar tot jou als persoon.`,
  },
  {
    title: 'Waarvoor we je gegevens gebruiken',
    body: `We gebruiken je gegevens om te antwoorden op je vragen, gesprekken in te plannen en op te volgen, de diensten te leveren waarvoor je ons inschakelt, en onze website en dienstverlening te verbeteren. We verkopen, verhuren of verhandelen je persoonsgegevens nooit aan derden.`,
  },
  {
    title: 'Cookies',
    body: `Deze website gebruikt geen cookies. Onze statistieken lopen via Vercel Analytics, een privacyvriendelijke oplossing die zonder cookies werkt en geen individuele bezoekers volgt. Je hoeft dus niets te accepteren of te weigeren.`,
  },
  {
    title: 'Diensten van derden',
    body: `We gebruiken een beperkt aantal betrouwbare externe diensten: Calendly voor het inplannen van gesprekken en Vercel voor hosting en anonieme statistieken. Deze diensten hebben een eigen privacybeleid; we delen enkel de gegevens die strikt nodig zijn om hun functie te vervullen.`,
  },
  {
    title: 'Bewaartermijn',
    body: `We bewaren je persoonsgegevens niet langer dan nodig voor het doel waarvoor ze verzameld zijn, of zolang de wet dat vereist. Wil je dat we je gegevens verwijderen? Eén mail volstaat en we handelen je verzoek snel af.`,
  },
  {
    title: 'Jouw rechten',
    body: `Je hebt het recht om je persoonsgegevens in te kijken, te corrigeren of te laten verwijderen. Je kan ook een eerder gegeven toestemming intrekken. Ben je niet tevreden over hoe we met je gegevens omgaan, dan kan je een klacht indienen bij de Gegevensbeschermingsautoriteit (gegevensbeschermingsautoriteit.be). Neem voor al deze rechten gewoon contact met ons op.`,
  },
  {
    title: 'Contact',
    body: `Vragen over dit privacybeleid of over hoe we met je gegevens omgaan? Mail ons op hello@greymont.agency. We antwoorden doorgaans binnen twee werkdagen.`,
  },
]

export default function Privacy() {
  return (
    <div className="bg-black min-h-screen">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5 border-b border-white/5"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}>
        <Link to="/">
          <img src={logoIcon} alt="Greymont" className="h-12 w-12 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-body text-sm"
        >
          <ArrowLeft size={14} />
          Terug naar de site
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-8 pt-40 pb-32">
        <div className="mb-16">
          <div className="inline-flex liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-white text-sm font-medium font-body">Juridisch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading italic text-white leading-[0.88] tracking-tight mb-4">
            Privacybeleid
          </h1>
          <p className="text-white/40 font-body font-light text-sm">Laatst bijgewerkt: juli 2026</p>
        </div>

        <div className="flex flex-col gap-12">
          {SECTIONS.map(({ title, body }) => (
            <div key={title} className="flex flex-col gap-3">
              <h2 className="text-white font-body font-medium text-lg">{title}</h2>
              <p className="text-white/55 font-body font-light text-base leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <span className="text-white/30 text-xs font-body">© 2026 Greymont. Alle rechten voorbehouden.</span>
          <Link to="/terms" className="text-white/30 text-xs font-body hover:text-white/60 transition-colors">
            Algemene voorwaarden
          </Link>
        </div>
      </div>
    </div>
  )
}
