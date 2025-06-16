import { motion, Transition, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'float'
  withGlass?: boolean
}

interface AnimationConfig {
  initial: Record<string, number>
  whileInView: Record<string, number>
  animate?: Record<string, number[]>
  transition: Transition
}

const animations: Record<string, AnimationConfig> = {
  fade: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  'slide-up': {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, type: 'spring', stiffness: 100 }
  },
  'slide-left': {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, type: 'spring', stiffness: 100 }
  },
  'slide-right': {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, type: 'spring', stiffness: 100 }
  },
  'scale': {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  },
  'float': {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    animate: { y: [0, -10, 0] },
    transition: { 
      duration: 0.5,
      y: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'fade',
  withGlass = false
}: AnimatedSectionProps) {
  const animationProps = {
    ...animations[animation],
    transition: {
      ...animations[animation].transition,
      delay
    },
    viewport: { once: true }
  }

  return (
    <motion.div
      className={`
        ${className}
        ${withGlass ? 'glass-effect' : ''}
      `}
      {...animationProps}
    >
      {children}
    </motion.div>
  )
} 