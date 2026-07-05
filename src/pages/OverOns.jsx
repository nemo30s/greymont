import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ionuț Diaconu',
  alternateName: 'Ionut Diaconu',
  jobTitle: 'Oprichter',
  worksFor: { '@id': 'https://greymont.agency/#business' },
  url: 'https://greymont.agency/over-ons',
  knowsAbout: ['Webdesign', 'SEO', 'AI-automatisering'],
}

const SECTIONS = [
  {
    h2: 'Wie ik ben',
    paragraphs: [
      'Ik ben Ionuț Diaconu. Ik bouw dingen — websites, automatiseringen, systemen die klanten opleveren. Greymont is mijn bureau, en als je met Greymont werkt, werk je met mij: wie je site ontwerpt, is dezelfde die hem bouwt, live zet en elke maand rapporteert wat hij opbrengt.',
      'Ik studeer toegepaste informatica en ik ben hongerig. Voor jou betekent dat twee dingen: ik werk met de nieuwste technieken in plaats van de gemakkelijkste, en jouw resultaat is mijn reputatie — middelmatig werk kan ik me letterlijk niet permitteren.',
    ],
  },
  {
    h2: 'Waarom Greymont bestaat',
    paragraphs: [
      'Ik wilde iets bouwen dat van mij is en dat ertoe doet. Geen tussenpersoon, geen doorgeefluik — een bureau waar het werk en de verantwoordelijkheid bij dezelfde persoon liggen.',
      'Want lokale ondernemers krijgen vandaag twee smaken: de "goedkope website"-verkopers die een template afleveren en verdwijnen, of grote bureaus met mooie pitches waar je project bij een stagiair belandt. Greymont is het derde pad: het vakmanschap van een bureau, de directheid van één aanspreekpunt, en één maatstaf die telt — brengt je site klanten op, of niet?',
    ],
  },
  {
    h2: 'Hoe ik werk',
    paragraphs: [
      'Ik hou van moeilijke problemen en ik hou van winnen. Jouw groei is hoe ik win. Concreet: ik zeg eerlijk wat je nodig hebt, ook als dat minder is dan je dacht. Ik bouw snel — meestal live binnen twee weken. En ik verstop me niet achter vage rapporten: elke maand zie je wat er binnenkwam en wat het opleverde.',
    ],
  },
]

export default function OverOns() {
  return (
    <div className="bg-black min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
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
            <span className="text-white text-sm font-medium font-body">Over Greymont</span>
          </div>
          <h1 className="font-heading italic text-white leading-[0.88] tracking-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            De persoon achter Greymont
          </h1>
          <p className="text-white/60 font-body font-light text-lg leading-relaxed max-w-2xl">
            Geen bureau met tien man en een receptie. Eén bouwer met hoge standaarden — en dat is precies het punt.
          </p>
        </div>

        {/* Founder photo */}
        <div className="mb-20 flex justify-center">
          <div className="liquid-glass rounded-full overflow-hidden w-52 h-52 md:w-72 md:h-72">
            <img
              src="/ionut.jpeg"
              alt="Ionuț Diaconu, oprichter van Greymont"
              width={256}
              height={256}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {SECTIONS.map(({ h2, paragraphs }) => (
            <div key={h2} className="space-y-6 text-white/60 font-body font-light text-base leading-relaxed">
              <h2 className="font-heading italic text-white text-4xl leading-tight">{h2}</h2>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="liquid-glass rounded-2xl p-10 text-center mt-20">
          <h2 className="font-heading italic text-white text-4xl mb-6 leading-tight max-w-md mx-auto">
            Benieuwd of ik jouw zaak kan helpen groeien?
          </h2>
          <Link to="/book" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium hover:bg-white/90 transition-colors">
            Plan een gratis gesprek
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  )
}
