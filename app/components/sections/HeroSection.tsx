import { motion } from 'framer-motion'
import Button from '../common/Button'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-warm/20" />
      <div className="hero-pattern" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              영어로<br />
              <span className="gradient-text">세상과 소통하세요</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              체계적인 커리큘럼과 전문 강사진이 여러분의 영어 실력 향상을 도와드립니다.
              지금 바로 시작하세요!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#contact" variant="primary">
                무료 체험 신청
              </Button>
              <Button href="#curriculum" variant="secondary">
                커리큘럼 보기
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 