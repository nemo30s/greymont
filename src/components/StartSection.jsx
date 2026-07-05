import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import HlsVideo from './HlsVideo'

const SRC = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'

const STEPS = [
  {
    number: '01',
    title: 'Kennismakingsgesprek',
    body: 'We leren je zaak kennen, je doelen, en wat je tegenhoudt. Geen templates. Geen aannames. Gewoon een helder beeld van wat je écht nodig hebt.',
  },
  {
    number: '02',
    title: 'Bouwen & automatiseren',
    body: 'Design, development, SEO-fundament en AI-automatisering — alles uit één hand, parallel uitgevoerd. De meeste klanten staan binnen twee weken live.',
  },
  {
    number: '03',
    title: 'Het groeit vanzelf',
    body: 'Je verkeer stijgt. Leads komen binnen. Je automatisering draait terwijl jij slaapt. Elke maand wordt de kloof met je concurrenten groter — en dat gebeurt vanzelf.',
  },
]

export default function StartSection() {
  return (
    <section className="relative" style={{ minHeight: '700px' }}>
      <HlsVideo src={SRC} className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to top, black, transparent)' }} />

      <div className="relative z-20 px-8 lg:px-16 py-40">

        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 mb-5">
            <span className="text-white text-sm font-medium font-body">Hoe het werkt</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-xl">
            Eenvoudig proces. Serieuze resultaten.
          </h2>
        </motion.div>

        {/* Cards — cascade in */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {STEPS.map(({ number, title, body }, i) => (
            <motion.div
              key={number}
              className="liquid-glass rounded-2xl p-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="text-white/20 font-heading italic text-5xl leading-none">{number}</span>
              <h3 className="text-white font-body font-medium text-xl">{title}</h3>
              <p className="text-white/60 font-body font-light text-base leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
        >
          <Link
            to="/book"
            className="inline-flex items-center gap-1.5 liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium hover:opacity-90 transition-opacity"
          >
            Plan een gratis gesprek
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
