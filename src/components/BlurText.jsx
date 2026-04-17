import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function BlurText({
  text = '',
  className = '',
  delay = 100,
  startDelay = 0,
  direction = 'bottom',
  animateBy = 'words',
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const elements = animateBy === 'words' ? text.split(' ') : text.split('')

  const hiddenVariant = {
    filter: 'blur(10px)',
    opacity: 0,
    y: direction === 'bottom' ? 50 : -50,
  }
  const midVariant = {
    filter: 'blur(5px)',
    opacity: 0.5,
    y: direction === 'bottom' ? -5 : 5,
  }
  const visibleVariant = {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
  }

  return (
    <span ref={ref} className={className} style={{ display: 'inline' }}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={hiddenVariant}
          animate={isVisible ? visibleVariant : hiddenVariant}
          transition={{
            delay: startDelay / 1000 + (i * delay) / 1000,
            duration: 0.7,
            ease: 'easeOut',
          }}
          style={{ display: 'inline-block' }}
        >
          {el}
          {animateBy === 'words' && i < elements.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  )
}
