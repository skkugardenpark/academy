'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Button from '../common/Button'
import Image from 'next/image'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const features = [
    { icon: '🎯', title: '개인 맞춤 수업', desc: '수준별 맞춤 커리큘럼' },
    { icon: '👥', title: '소규모 클래스', desc: '최대 8명 소수정예' },
    { icon: '🏆', title: '검증된 결과', desc: '95% 만족도 달성' },
    { icon: '💡', title: '혁신적 교육법', desc: '실전 중심 학습' }
  ]

  const stats = [
    { number: '1,200+', label: '수강생' },
    { number: '95%', label: '만족도' },
    { number: '15년', label: '교육 경험' },
    { number: '24/7', label: '학습 지원' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [features.length])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-pattern opacity-30" />
      
      {/* 플로팅 요소들 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-coral/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent-pink/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 왼쪽 콘텐츠 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* 배지 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100/30"
            >
              <span className="text-primary font-semibold text-sm">🎉 2024년 최고의 영어 교육원</span>
            </motion.div>

            {/* 메인 타이틀 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-title"
            >
              영어로 <br />
              <span className="relative">
                세상과 소통하세요
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/30 to-accent-coral/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </motion.h1>

            {/* 서브 타이틀 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-warm-600 leading-relaxed"
            >
              <span className="highlight-text">체계적인 커리큘럼</span>과 <span className="highlight-text">전문 강사진</span>이 
              여러분의 영어 실력 향상을 도와드립니다. <br />
              지금 바로 시작하여 글로벌 인재로 성장하세요!
            </motion.p>

            {/* 특징 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-white shadow-lg border-primary-200 scale-105' 
                      : 'bg-white/50 border-primary-100/30 hover:bg-white/80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h3 className="font-semibold text-warm-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-warm-600">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA 버튼들 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="#contact" variant="primary" className="text-lg px-8 py-4">
                <span className="flex items-center space-x-2">
                  <span>무료 체험 신청</span>
                  <span>🚀</span>
                </span>
              </Button>
              <Button href="#curriculum" variant="secondary" className="text-lg px-8 py-4">
                <span className="flex items-center space-x-2">
                  <span>커리큘럼 보기</span>
                  <span>📚</span>
                </span>
              </Button>
            </motion.div>

            {/* 통계 정보 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-4 gap-6 pt-8 border-t border-primary-100/30"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-warm-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 오른쪽 이미지 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* 메인 이미지 */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="ENG Academy 학습 환경"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* 오버레이 정보 */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-warm-800">
                        현재 <span className="text-primary font-bold">127명</span>이 학습 중
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 플로팅 카드들 */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-primary-100/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-sm font-semibold text-warm-800">최우수 교육원</div>
                <div className="text-xs text-warm-600">2024년 수상</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-primary-100/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-2xl mb-2">📈</div>
                <div className="text-sm font-semibold text-warm-800">실력 향상</div>
                <div className="text-xs text-warm-600">평균 85% 상승</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-warm-600">더 많은 정보 보기</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-primary rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 