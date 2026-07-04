import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

function FeatureVideo({ videoSrc, zoomIn }) {
  return (
    <div className="liquid-glass rounded-2xl overflow-hidden w-full aspect-video relative">
      {zoomIn ? (
        <div className="absolute" style={{ inset: '-7%', width: '114%', height: '114%' }}>
          <video src={videoSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>
      ) : (
        <video src={videoSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.4)' }} />
    </div>
  )
}

function ChessRow({ title, body, cta, videoSrc, looped, reverse }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-16`}>
      {/* Text side */}
      <motion.div
        className="flex-1 flex flex-col items-start gap-5"
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      >
        <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">{title}</h3>
        <p className="text-white/60 font-body font-light text-base md:text-lg leading-relaxed">{body}</p>
        <Link
          to="/book"
          className="liquid-glass-strong rounded-full px-5 py-2.5 text-white text-sm font-body font-medium flex items-center gap-1.5 hover:opacity-90 transition-opacity"
        >
          {cta}
          <ArrowUpRight size={14} />
        </Link>
      </motion.div>

      {/* Media side */}
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 1, 0.5, 1] }}
      >
        <FeatureVideo videoSrc={videoSrc} zoomIn={looped} />
      </motion.div>
    </div>
  )
}

export default function FeaturesChess() {
  return (
    <section className="px-8 lg:px-16 py-24">

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="inline-flex liquid-glass rounded-full px-3.5 py-1 mb-4">
          <span className="text-white text-sm font-medium font-body">What We Do</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          One system. Built to fill your calendar
        </h2>
      </motion.div>

      <ChessRow
        title="The Site"
        body="A site that sells, not just impresses. Designed to convert, built to rank, ready to grow."
        cta="Book a Call"
        videoSrc="/videos/feature-web.mp4"
        reverse={false}
      />

      <ChessRow
        title="The Search"
        body="SEO baked in from day one. Schema, structure, speed, and search console — built into the architecture, not patched on later."
        cta="Book a Call"
        videoSrc="/videos/feature-seo.mp4"
        reverse={true}
      />

      <ChessRow
        title="The Smarts"
        body="Custom AI features your competitors can't ship. Booking assistants, lead qualifiers, multilingual chatbots — built into the site, not bolted on."
        cta="Book a Call"
        videoSrc="/videos/feature-ai.mp4"
        looped={true}
        reverse={false}
      />
    </section>
  )
}
