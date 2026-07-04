import { motion } from 'motion/react'
import HlsVideo from './HlsVideo'

const SRC = 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'

const STATS = [
  { value: '14 days', label: 'Live, or we keep building until you are.' },
  { value: 'Day 1', label: 'SEO baked in from the first commit.' },
  { value: 'No handoffs', label: 'The person who designs is the person who ships.' },
  { value: 'Real numbers', label: 'Monthly reporting. No vanity metrics.' },
]

export default function StatsSection() {
  return (
    <section className="relative py-32">
      <HlsVideo
        src={SRC}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'saturate(0)' }}
      />

      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to top, black, transparent)' }} />

      <div className="relative z-20 px-8 lg:px-16">
        <motion.div
          className="liquid-glass rounded-3xl p-12 md:p-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          <p className="text-white/40 font-body font-light text-sm tracking-widest uppercase mb-10">
            How we work
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                  {value}
                </span>
                <span className="text-white/60 font-body font-light text-base">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
