'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const features = [
  {
    title: '전문성 있는 강사진',
    description: '원어민과 한국인 강사의 체계적인 협업 교육으로 완벽한 학습 환경을 제공합니다.',
    icon: '👨‍🏫',
    color: 'from-blue-500 to-blue-600',
    stats: '15년+ 경력'
  },
  {
    title: '맞춤형 커리큘럼',
    description: '개인의 수준과 목표에 맞는 완전 개인화된 학습 계획으로 최적의 결과를 보장합니다.',
    icon: '📚',
    color: 'from-green-500 to-green-600',
    stats: '100% 맞춤형'
  },
  {
    title: '최신 교육 시설',
    description: '첨단 기술과 쾌적한 환경이 결합된 최고의 학습 공간에서 집중력을 극대화합니다.',
    icon: '🏢',
    color: 'from-purple-500 to-purple-600',
    stats: '2024년 신축'
  },
  {
    title: '실전 중심 교육',
    description: '이론보다는 실제 상황에서 활용할 수 있는 실용적인 영어 능력 향상에 집중합니다.',
    icon: '🎯',
    color: 'from-red-500 to-red-600',
    stats: '95% 실전 적용'
  }
]

const achievements = [
  { number: '1,200+', label: '수료생', icon: '🎓' },
  { number: '98%', label: '만족도', icon: '⭐' },
  { number: '15년', label: '교육 경력', icon: '🏆' },
  { number: '24/7', label: '학습 지원', icon: '💬' }
]

const testimonials = [
  {
    name: '김민수',
    role: '대학생',
    content: '토익 900점 달성! 체계적인 커리큘럼 덕분에 단기간에 목표를 달성할 수 있었습니다.',
    rating: 5
  },
  {
    name: '박지영',
    role: '직장인',
    content: '업무에 바로 적용할 수 있는 실용적인 영어를 배울 수 있어서 정말 만족합니다.',
    rating: 5
  }
]

export default function AboutSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="about" className="section-padding relative overflow-hidden section-gradient">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      {/* 플로팅 요소들 */}
      <motion.div
        className="absolute top-20 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 -left-10 w-32 h-32 bg-accent-coral/10 rounded-full blur-2xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container relative z-10">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100/30 mb-6">
            <span className="text-primary font-semibold text-sm">🏫 About ENG Academy</span>
          </div>
          <h2 className="section-title">
            혁신적인 영어 교육의 <br />
            <span className="highlight-text">새로운 기준</span>
          </h2>
          <p className="text-xl text-warm-600 max-w-3xl mx-auto leading-relaxed">
            15년간 축적된 교육 노하우와 최신 교육 기술을 결합하여 <br />
            학생 개개인의 성공을 위한 최적의 학습 환경을 제공합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center mb-20">
          {/* 왼쪽: 이미지와 통계 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* 메인 이미지 */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                <Image
                  src="/images/about/classroom.jpg"
                  alt="ENG Academy 현대적인 교실 환경"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* 이미지 내 정보 오버레이 */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-warm-800">현재 진행 중인 수업</h4>
                        <p className="text-sm text-warm-600">Advanced Speaking Class</p>
                      </div>
                      <div className="text-2xl">🎓</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 플로팅 통계 카드들 */}
              <motion.div
                className="absolute -top-6 -right-6 stat-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-warm-600">학생 만족도</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 stat-card"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">📈</div>
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <div className="text-sm text-warm-600">성적 향상률</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 오른쪽: 콘텐츠 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-warm-800 mb-4">
                왜 <span className="highlight-text">ENG Academy</span>를 선택해야 할까요?
              </h3>
              <p className="text-lg text-warm-600 leading-relaxed">
                단순한 영어 학습을 넘어서, 글로벌 시대에 필요한 실질적인 커뮤니케이션 능력을 
                키우는 것이 저희의 목표입니다. 체계적인 시스템과 개인별 관리를 통해 
                확실한 결과를 보장합니다.
              </p>
            </div>

            {/* 특징 카드들 */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`feature-card cursor-pointer transition-all duration-300 ${
                    activeFeature === index ? 'ring-2 ring-primary/30 scale-[1.02]' : ''
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-coral/10 flex items-center justify-center text-3xl">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-warm-800">{feature.title}</h4>
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {feature.stats}
                        </span>
                      </div>
                      <p className="text-warm-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 성과 통계 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary-100/30 mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-warm-800 mb-8">
            <span className="highlight-text">검증된 성과</span>로 증명하는 교육의 질
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-warm-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 간단한 후기 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-warm-800 mb-8">
            학생들의 <span className="highlight-text">생생한 후기</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="testimonial-card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-coral rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-800">{testimonial.name}</h4>
                    <p className="text-sm text-warm-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-warm-700 leading-relaxed mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 