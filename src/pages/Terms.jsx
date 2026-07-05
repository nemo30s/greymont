import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoIcon from '../assets/logo-icon.webp'

const SECTIONS = [
  {
    title: 'Diensten',
    body: `Greymont levert webdesign en -development, SEO-beheer en AI-automatisering aan klanten, op projectbasis of via een maandelijkse samenwerking. De concrete scope, deliverables en timing van elke opdracht worden vastgelegd in een afzonderlijk voorstel dat beide partijen goedkeuren vóór de start van het werk.`,
  },
  {
    title: 'Betaling',
    body: `Projectwerk start doorgaans na betaling van een voorschot; het saldo is verschuldigd bij oplevering of volgens schriftelijk afgesproken mijlpalen. Maandelijkse samenwerkingen worden vooraf per maand gefactureerd. Bij facturen die 14 dagen na vervaldatum onbetaald blijven, kan het werk worden gepauzeerd tot de betaling is ontvangen.`,
  },
  {
    title: 'Intellectuele eigendom',
    body: `Na volledige betaling ben jij eigenaar van alle deliverables die specifiek voor jouw project zijn gemaakt: designs, code en teksten. Greymont behoudt het recht om het werk te tonen in zijn portfolio en cases, tenzij je daar schriftelijk bezwaar tegen maakt. Bestaande tools, frameworks en eigen systemen die bij de uitvoering worden gebruikt, blijven eigendom van Greymont.`,
  },
  {
    title: 'Revisies en scope',
    body: `Elk voorstel bevat een afgesproken aantal revisierondes. Vragen die buiten de afgesproken scope vallen — extra functies, herontwerpen of wijzigingen aan de oorspronkelijke briefing — kunnen extra kosten met zich meebrengen. We verwittigen je altijd vóór we werk buiten de scope uitvoeren.`,
  },
  {
    title: 'Vertrouwelijkheid',
    body: `Beide partijen houden alle niet-publieke bedrijfsinformatie die tijdens de samenwerking wordt gedeeld vertrouwelijk: strategieën, klantgegevens, prijzen en interne processen. Deze verplichting blijft gelden na afloop van de samenwerking.`,
  },
  {
    title: 'Aansprakelijkheid',
    body: `Greymont is niet aansprakelijk voor indirecte schade of gevolgschade die voortvloeit uit het gebruik van onze diensten. Onze totale aansprakelijkheid is beperkt tot het bedrag dat je ons in de drie maanden vóór de claim hebt betaald. We geven geen garanties op specifieke Google-posities, bezoekersaantallen of omzetcijfers — die hangen af van factoren buiten onze controle.`,
  },
  {
    title: 'Beëindiging',
    body: `Beide partijen kunnen een lopende samenwerking beëindigen met een schriftelijke opzegtermijn van 30 dagen. Bij beëindiging blijven de kosten voor het reeds geleverde werk verschuldigd. Voorschotten zijn niet terugbetaalbaar zodra het werk is gestart.`,
  },
  {
    title: 'Toepasselijk recht',
    body: `Op deze voorwaarden is het Belgisch recht van toepassing. Geschillen worden eerst in onderling overleg en te goeder trouw besproken. Raken we er niet uit, dan zijn de rechtbanken van Antwerpen bevoegd.`,
  },
  {
    title: 'Wijzigingen',
    body: `We kunnen deze voorwaarden af en toe aanpassen. Bij elke wijziging passen we de datum bovenaan deze pagina aan. Wie na een wijziging gebruik blijft maken van onze diensten, aanvaardt de aangepaste voorwaarden.`,
  },
  {
    title: 'Contact',
    body: `Vragen over deze voorwaarden? Mail ons op hello@greymont.agency.`,
  },
]

export default function Terms() {
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
            Algemene voorwaarden
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
          <Link to="/privacy" className="text-white/30 text-xs font-body hover:text-white/60 transition-colors">
            Privacybeleid
          </Link>
        </div>
      </div>
    </div>
  )
}
