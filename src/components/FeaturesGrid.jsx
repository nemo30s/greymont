import { Layers, BrainCircuit, TrendingUp, Users } from 'lucide-react'
import { motion } from 'motion/react'

const CARDS = [
  {
    Icon: Layers,
    title: 'Alles uit één hand',
    body: 'Design, development, SEO en automatisering — één visie, nul frictie tussen schakels.',
  },
  {
    Icon: BrainCircuit,
    title: 'AI-native als standaard',
    body: 'Elk project wordt opgeleverd met automatisering ingebouwd. Niet achteraf toegevoegd. Niet optioneel. Standaard.',
  },
  {
    Icon: TrendingUp,
    title: 'SEO vanaf dag één',
    body: 'Technische SEO, contentstructuur en performance zitten in elke build — niet achteraf gerepareerd.',
  },
  {
    Icon: Users,
    title: 'Een partner, geen leverancier',
    body: 'Maandelijkse samenwerking, echte rapportering, en iemand die jouw groei behandelt als zijn eigen.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="px-8 lg:px-16 py-24">

      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="inline-flex liquid-glass rounded-full px-3.5 py-1 mb-4">
          <span className="text-white text-sm font-medium font-body">Waarom Greymont</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Dit maakt het verschil.
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARDS.map(({ Icon, title, body }, i) => (
          <motion.div
            key={title}
            className="liquid-glass rounded-2xl p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
              <Icon size={18} className="text-white" />
            </div>
            <h3 className="text-white font-body font-medium text-lg">{title}</h3>
            <p className="text-white/60 font-body font-light text-base leading-relaxed">{body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
