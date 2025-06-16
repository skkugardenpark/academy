import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = ''
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.2 1']
  })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return 100
      case 'down':
        return -100
      case 'left':
        return 100
      case 'right':
        return -100
      default:
        return 0
    }
  }

  const getPropertyToAnimate = () => {
    return direction === 'left' || direction === 'right' ? 'x' : 'y'
  }

  const y = useTransform(scrollYProgress, [0, 1], [getInitialPosition(), 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  const motionProps = {
    ref,
    style: {
      [getPropertyToAnimate()]: y,
      opacity
    },
    initial: { opacity: 0, [getPropertyToAnimate()]: getInitialPosition() },
    transition: { duration, delay }
  }

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  )
} 