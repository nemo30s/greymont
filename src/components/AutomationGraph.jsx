import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const W = 540
const H = 280
const INX = 95
const OUTX = 445
const HUB_X = W / 2
const HUB_Y = H / 2
const NODE_R = 18
const HUB_R = 36

const INPUTS = [
  { label: 'New Lead', y: 72 },
  { label: 'Form Submit', y: 140 },
  { label: 'Booked Call', y: 208 },
]

const OUTPUTS = [
  { label: 'Email Sent', y: 55 },
  { label: 'CRM Updated', y: 110 },
  { label: 'Report Ready', y: 170 },
  { label: 'Slack Alert', y: 228 },
]

// Animation timing (seconds)
const IN_STAGGER = 0.55
const LINE_OFFSET = 0.25
const LINE_DUR = 0.5
const HUB_DELAY = INPUTS.length * IN_STAGGER + 0.35
const OUT_BASE = HUB_DELAY + 0.55
const OUT_STAGGER = 0.4
const CYCLE_MS = 9200

function dist(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

export default function AutomationGraph() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), CYCLE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ padding: '16px' }}>
      <svg key={tick} viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" overflow="visible">
        <defs>
          <filter id="ag-glow">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Input → Hub lines */}
        {INPUTS.map((inp, i) => {
          const len = dist(INX, inp.y, HUB_X, HUB_Y)
          return (
            <motion.line
              key={`il-${i}`}
              x1={INX} y1={inp.y} x2={HUB_X} y2={HUB_Y}
              stroke="rgba(255,255,255,0.22)"
              strokeWidth={1}
              strokeDasharray={len}
              initial={{ strokeDashoffset: len, opacity: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 1 }}
              transition={{
                strokeDashoffset: { delay: i * IN_STAGGER + LINE_OFFSET, duration: LINE_DUR, ease: 'easeInOut' },
                opacity: { delay: i * IN_STAGGER + LINE_OFFSET, duration: 0.2 },
              }}
            />
          )
        })}

        {/* Hub → Output lines */}
        {OUTPUTS.map((out, i) => {
          const len = dist(HUB_X, HUB_Y, OUTX, out.y)
          return (
            <motion.line
              key={`ol-${i}`}
              x1={HUB_X} y1={HUB_Y} x2={OUTX} y2={out.y}
              stroke="rgba(255,255,255,0.22)"
              strokeWidth={1}
              strokeDasharray={len}
              initial={{ strokeDashoffset: len, opacity: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 1 }}
              transition={{
                strokeDashoffset: { delay: OUT_BASE + i * OUT_STAGGER, duration: LINE_DUR, ease: 'easeInOut' },
                opacity: { delay: OUT_BASE + i * OUT_STAGGER, duration: 0.2 },
              }}
            />
          )
        })}

        {/* Input nodes */}
        {INPUTS.map((inp, i) => (
          <motion.g
            key={`in-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * IN_STAGGER, duration: 0.4 }}
          >
            <circle
              cx={INX} cy={inp.y} r={NODE_R}
              fill="rgba(255,255,255,0.06)"
              stroke="rgba(255,255,255,0.38)"
              strokeWidth={1}
              filter="url(#ag-glow)"
            />
            <circle cx={INX} cy={inp.y} r={3.5} fill="rgba(255,255,255,0.85)" />
            <text
              x={INX - NODE_R - 9} y={inp.y}
              textAnchor="end"
              dominantBaseline="middle"
              fill="rgba(255,255,255,0.65)"
              fontSize="11"
              fontFamily="system-ui, sans-serif"
              fontWeight="300"
            >
              {inp.label}
            </text>
          </motion.g>
        ))}

        {/* Hub */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: HUB_DELAY, duration: 0.5 }}
        >
          {/* Outer pulse ring */}
          <motion.circle
            cx={HUB_X} cy={HUB_Y} r={HUB_R + 14}
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth={1}
            initial={{ opacity: 0, r: HUB_R + 14 }}
            animate={{ opacity: [0, 0.6, 0], r: [HUB_R + 14, HUB_R + 32, HUB_R + 46] }}
            transition={{
              delay: HUB_DELAY + 0.3,
              duration: 2.2,
              ease: 'easeOut',
              repeat: Infinity,
              repeatDelay: 0.8,
            }}
          />
          <circle
            cx={HUB_X} cy={HUB_Y} r={HUB_R}
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth={1.5}
            filter="url(#ag-glow)"
          />
          <text
            x={HUB_X} y={HUB_Y - 7}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgba(255,255,255,0.92)"
            fontSize="14"
            fontFamily="system-ui, sans-serif"
            fontWeight="500"
          >
            AI
          </text>
          <text
            x={HUB_X} y={HUB_Y + 11}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgba(255,255,255,0.38)"
            fontSize="7"
            fontFamily="system-ui, sans-serif"
            fontWeight="300"
            letterSpacing="1.5"
          >
            ENGINE
          </text>
        </motion.g>

        {/* Output nodes */}
        {OUTPUTS.map((out, i) => (
          <motion.g
            key={`out-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: OUT_BASE + i * OUT_STAGGER + LINE_DUR, duration: 0.4 }}
          >
            <circle
              cx={OUTX} cy={out.y} r={NODE_R}
              fill="rgba(255,255,255,0.06)"
              stroke="rgba(255,255,255,0.38)"
              strokeWidth={1}
              filter="url(#ag-glow)"
            />
            <circle cx={OUTX} cy={out.y} r={3.5} fill="rgba(255,255,255,0.85)" />
            <text
              x={OUTX + NODE_R + 9} y={out.y}
              textAnchor="start"
              dominantBaseline="middle"
              fill="rgba(255,255,255,0.65)"
              fontSize="11"
              fontFamily="system-ui, sans-serif"
              fontWeight="300"
            >
              {out.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}
