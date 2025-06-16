import { motion, Transition } from 'framer-motion'
import Button from '../common/Button'
import AnimatedSection from '../common/AnimatedSection'

const floatingAnimation = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "reverse" as const,
  }
}

const scrollIndicatorAnimation = {
  animate: { y: [0, 10, 0] },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "reverse" as const,
  }
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-mint/30 to-white/10" />
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={floatingAnimation.animate}
        transition={floatingAnimation.transition}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-mint/20 rounded-full blur-3xl"
        animate={floatingAnimation.animate}
        transition={{
          ...floatingAnimation.transition,
          duration: 10
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection animation="fade" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8">
              미래를 선도하는<br />
              <span className="text-gold">영어 교육의 혁신</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              체계적인 커리큘럼과 전문 강사진이 함께하는<br />
              차별화된 영어 교육을 경험하세요
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="primary"
                size="lg"
                withGlow
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                무료 상담 신청
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() => document.getElementById('curriculum')?.scrollIntoView()}
              >
                커리큘럼 살펴보기
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={scrollIndicatorAnimation.animate}
          transition={scrollIndicatorAnimation.transition}
          className="text-primary/50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
} 