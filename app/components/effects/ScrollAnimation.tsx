import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollAnimation({
  children,
  className = ''
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0.5 1']
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [50, 0])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        y,
      }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
} 