'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: '김민지',
    role: '마케팅 매니저',
    company: '삼성전자',
    image: '/images/testimonials/review1.jpg',
    content: '업무에 필요한 영어 실력을 키우고 싶어서 등록했는데, 실전 비즈니스 영어 수업이 정말 도움이 많이 되었어요. 특히 이메일 작성과 회의 진행 스킬이 많이 향상되어서 승진에도 도움이 되었습니다.',
    rating: 5,
    course: '비즈니스 영어 과정',
    category: 'business',
    achievement: 'TOEIC 950점 달성',
    duration: '6개월'
  },
  {
    id: 2,
    name: '이준호',
    role: '대학원생',
    company: '서울대학교',
    image: '/images/testimonials/review2.jpg',
    content: 'IELTS 시험 준비를 위해 다녔는데, 목표 점수를 달성할 수 있었습니다. 체계적인 커리큘럼과 선생님들의 꼼꼼한 피드백 덕분에 효율적으로 공부할 수 있었어요. 덕분에 해외 대학원 진학도 성공했습니다!',
    rating: 5,
    course: 'IELTS 준비 과정',
    category: 'test',
    achievement: 'IELTS 8.0 달성',
    duration: '4개월'
  },
  {
    id: 3,
    name: '박서연',
    role: '고등학생',
    company: '대원외고',
    image: '/images/testimonials/review3.jpg',
    content: '원어민 선생님과의 회화 수업이 가장 좋았어요. 처음에는 말하기가 많이 부끄러웠는데, 이제는 자신감 있게 영어로 대화할 수 있게 되었습니다. 교환학생 프로그램에도 선발되었어요!',
    rating: 5,
    course: '실용 영어 회화 과정',
    category: 'conversation',
    achievement: '교환학생 선발',
    duration: '8개월'
  },
  {
    id: 4,
    name: '최현우',
    role: '취업준비생',
    company: '연세대학교',
    image: '/images/testimonials/review4.jpg',
    content: '취업을 위한 영어 면접 준비에 큰 도움이 되었습니다. 모의 면접 연습과 발음 교정을 통해 자신감을 얻을 수 있었고, 실제 면접에서도 좋은 결과를 얻었어요. 외국계 회사에 취업 성공했습니다!',
    rating: 5,
    course: '취업 영어 과정',
    category: 'business',
    achievement: '외국계 기업 취업',
    duration: '3개월'
  },
  {
    id: 5,
    name: '정수빈',
    role: '초등학생',
    company: '서울초등학교',
    image: '/images/testimonials/review1.jpg',
    content: '영어가 어려웠는데 선생님들이 재미있게 가르쳐주셔서 이제 영어가 제일 좋은 과목이 되었어요! 파닉스부터 차근차근 배워서 이제 영어책도 혼자 읽을 수 있어요.',
    rating: 5,
    course: '어린이 영어 과정',
    category: 'kids',
    achievement: '영어 읽기 능력 향상',
    duration: '1년'
  },
  {
    id: 6,
    name: '강민수',
    role: '의사',
    company: '서울대병원',
    image: '/images/testimonials/review2.jpg',
    content: '의료진으로서 국제학회 발표를 준비하기 위해 수강했습니다. 전문 분야별 어휘와 프레젠테이션 스킬을 체계적으로 배울 수 있어서 국제학회에서 성공적으로 발표할 수 있었습니다.',
    rating: 5,
    course: '전문 영어 과정',
    category: 'business',
    achievement: '국제학회 발표 성공',
    duration: '5개월'
  },
  {
    id: 7,
    name: '윤채원',
    role: '주부',
    company: '프리랜서',
    image: '/images/testimonials/review3.jpg',
    content: '육아맘이지만 영어 실력을 키우고 싶어서 온라인 수업을 시작했어요. 유연한 시간표와 개인 맞춤 수업 덕분에 아이들 돌보면서도 꾸준히 공부할 수 있었습니다. 지금은 영어 번역 일을 하고 있어요!',
    rating: 5,
    course: '온라인 영어 과정',
    category: 'conversation',
    achievement: '프리랜서 번역가',
    duration: '10개월'
  },
  {
    id: 8,
    name: '조영호',
    role: '중학생',
    company: '강남중학교',
    image: '/images/testimonials/review4.jpg',
    content: 'TOEFL Junior 시험 준비를 했는데 선생님이 정말 친절하게 알려주셨어요. 어려운 문법도 쉽게 설명해주시고, 모르는 것도 계속 물어볼 수 있어서 좋았어요. 목표 점수보다 더 높은 점수를 받았어요!',
    rating: 5,
    course: '중학생 영어 과정',
    category: 'test',
    achievement: 'TOEFL Junior 고득점',
    duration: '6개월'
  }
]

const categories = [
  { id: 'all', label: '전체', icon: '💬', count: testimonials.length },
  { id: 'business', label: '비즈니스', icon: '💼', count: testimonials.filter(t => t.category === 'business').length },
  { id: 'test', label: '시험 대비', icon: '📝', count: testimonials.filter(t => t.category === 'test').length },
  { id: 'conversation', label: '회화', icon: '🗣️', count: testimonials.filter(t => t.category === 'conversation').length },
  { id: 'kids', label: '어린이', icon: '👶', count: testimonials.filter(t => t.category === 'kids').length }
]

const stats = [
  { number: '98%', label: '수강생 만족도', icon: '⭐' },
  { number: '1,200+', label: '누적 수강생', icon: '🎓' },
  { number: '4.9/5', label: '평균 평점', icon: '💯' },
  { number: '95%', label: '목표 달성률', icon: '🎯' }
]

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [filteredTestimonials.length])

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-white">
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-pattern opacity-10" />
      <motion.div
        className="absolute top-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 -right-20 w-80 h-80 bg-accent-coral/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="container relative z-10">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100/30 mb-6">
            <span className="text-primary font-semibold text-sm">💬 Testimonials</span>
          </div>
          <h2 className="section-title">
            수강생들의 <br />
            <span className="highlight-text">생생한 성공 스토리</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            실제 수강생들이 들려주는 변화와 성장의 이야기를 <br />
            확인해보세요.
          </p>
        </motion.div>

        {/* 통계 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-100/30 shadow-lg"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* 카테고리 필터 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setCurrentTestimonial(0)
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white/80 text-neutral-700 hover:bg-primary/10 border border-primary-100/30'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id ? 'bg-white/20' : 'bg-primary/10 text-primary'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* 메인 후기 (대형 카드) */}
        <motion.div
          key={filteredTestimonials[currentTestimonial]?.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          {filteredTestimonials[currentTestimonial] && (
            <div className="testimonial-card">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* 프로필 이미지 */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <Image
                      src={filteredTestimonials[currentTestimonial].image}
                      alt={filteredTestimonials[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* 후기 내용 */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                    {[...Array(filteredTestimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-6 italic">
                    &ldquo;{filteredTestimonials[currentTestimonial].content}&rdquo;
                  </blockquote>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-neutral-800">
                      {filteredTestimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {filteredTestimonials[currentTestimonial].role}
                    </p>
                    <p className="text-neutral-600">
                      {filteredTestimonials[currentTestimonial].company}
                    </p>
                  </div>

                  {/* 성과 배지 */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      📚 {filteredTestimonials[currentTestimonial].course}
                    </span>
                    <span className="px-4 py-2 bg-accent-coral/10 text-accent-coral rounded-full text-sm font-semibold">
                      🏆 {filteredTestimonials[currentTestimonial].achievement}
                    </span>
                    <span className="px-4 py-2 bg-accent-warm/10 text-neutral-700 rounded-full text-sm font-semibold">
                      ⏰ {filteredTestimonials[currentTestimonial].duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* 네비게이션 도트 */}
        <div className="flex justify-center space-x-3 mb-16">
          {filteredTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* 다른 후기들 (작은 카드들) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredTestimonials
            .filter((_, index) => index !== currentTestimonial)
            .slice(0, 6)
            .map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="feature-card cursor-pointer"
                onClick={() => setCurrentTestimonial(filteredTestimonials.findIndex(t => t.id === testimonial.id))}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-neutral-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {testimonial.achievement}
                  </span>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* 하단 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent-coral/10 to-primary/10 rounded-3xl p-12 border border-primary-100/30">
            <h3 className="text-3xl font-bold text-neutral-800 mb-4">
              다음 성공 스토리의 주인공이 되어보세요! 🌟
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              지금까지 1,200명 이상의 수강생들이 목표를 달성했습니다. <br />
              여러분도 함께하세요!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                무료 상담 신청 ✨
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                체험 수업 예약 📚
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 