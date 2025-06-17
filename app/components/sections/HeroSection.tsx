import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-light/30 to-accent-peach/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/hero-pattern.svg')] opacity-5" />
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-32 w-64 h-64 bg-accent-coral/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-dark">영어의 새로운 시작</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              원어민과 함께하는 실전 영어 회화부터<br />
              비즈니스 영어까지, 당신의 영어 실력을<br />
              한 단계 더 높여드립니다.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full transition-all shadow-soft">
                무료 레벨 테스트
              </button>
              <button className="bg-white text-primary hover:bg-primary-light/50 px-8 py-3 rounded-full border-2 border-primary transition-all">
                커리큘럼 살펴보기
              </button>
            </motion.div>
          </div>

          {/* 3D Graphic Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-xl mx-auto">
              {/* 3D Floating Elements */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-0 left-0 w-32 h-32 bg-primary-light rounded-2xl shadow-soft"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute top-1/4 right-1/4 w-40 h-40 bg-accent-coral/20 rounded-full shadow-soft"
                  animate={{
                    y: [-20, 0, -20],
                    rotate: [10, 0, 10],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-accent-peach/30 rounded-3xl shadow-soft"
                  animate={{
                    y: [10, -10, 10],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">누적 수강생</p>
                    <p className="text-2xl font-bold text-neutral-800">1,000+</p>
                  </div>
                </div>
              </motion.div>

              {/* Additional Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-6 top-1/2 bg-white p-6 rounded-xl shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-accent-peach p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">강의 만족도</p>
                    <p className="text-2xl font-bold text-neutral-800">98%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 