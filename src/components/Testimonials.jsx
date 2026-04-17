import { motion } from 'motion/react'

const TESTIMONIALS = [
  {
    quote: "We went from invisible on Google to ranking on page one for our three most valuable keywords — in under 90 days. The SEO work alone paid for everything.",
    name: 'J.W.',
    role: 'Founder, Legal Services',
  },
  {
    quote: "They automated our entire client onboarding. What used to take our team four hours now happens in minutes, without anyone touching it. I genuinely didn't think that was possible.",
    name: 'P.N.',
    role: 'COO, Healthcare',
  },
  {
    quote: "The site they built us looks better than anything our previous agency produced — and it launched in 11 days. We've had three inbound leads reference the website specifically.",
    name: 'T.G.',
    role: 'CEO, Advisory',
  },
]

export default function Testimonials() {
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
          <span className="text-white text-sm font-medium font-body">Client Stories</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Don&apos;t take our word for it.
        </h2>
      </motion.div>

      {/* Cards — deck cascade */}
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map(({ quote, name, role }, i) => (
          <motion.div
            key={name}
            className="liquid-glass rounded-2xl p-8 flex flex-col gap-6"
            initial={{ opacity: 0, y: 50, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
            style={{ transformOrigin: 'top center' }}
          >
            <p className="text-white/80 font-body font-light text-base italic leading-relaxed flex-1">
              &ldquo;{quote}&rdquo;
            </p>
            <div>
              <p className="text-white font-body font-medium text-base">{name}</p>
              <p className="text-white/50 font-body font-light text-sm mt-0.5">{role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
