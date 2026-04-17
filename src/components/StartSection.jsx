import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import HlsVideo from './HlsVideo'

const SRC = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'

const STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    body: "We learn your business, your goals, and what's holding you back. No templates. No assumptions. Just a clear picture of what you actually need.",
  },
  {
    number: '02',
    title: 'We Build & Automate',
    body: 'Design, development, SEO foundations, and AI automations — all executed by one team, in parallel. Most clients are live in under two weeks.',
  },
  {
    number: '03',
    title: 'It Compounds',
    body: 'Traffic climbs. Leads arrive. Your automations run while you sleep. Every month, the gap between you and your competitors widens — and it widens on its own.',
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
            <span className="text-white text-sm font-medium font-body">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-xl">
            Simple process. Serious results.
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
          <a
            href="https://calendly.com/diaconu-ionut029/30min"
            className="inline-flex items-center gap-1.5 liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium hover:opacity-90 transition-opacity"
          >
            Book a Free Call
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
