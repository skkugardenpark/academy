'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

interface ContactFormData {
  name: string
  phone: string
  email: string
  level: string
  course: string
  preferredTime: string
  message: string
}

const levels = [
  { value: 'beginner', label: '초급 (Beginner)', description: '기초 문법과 단어를 배우고 싶어요' },
  { value: 'intermediate', label: '중급 (Intermediate)', description: '일상 회화가 가능하지만 더 향상시키고 싶어요' },
  { value: 'advanced', label: '고급 (Advanced)', description: '비즈니스나 전문 분야 영어를 배우고 싶어요' },
  { value: 'unknown', label: '잘 모르겠음', description: '정확한 수준을 모르겠어요' }
]

const courses = [
  { value: 'general', label: '일반 영어 과정', icon: '📚' },
  { value: 'business', label: '비즈니스 영어', icon: '💼' },
  { value: 'ielts', label: 'IELTS 준비', icon: '📝' },
  { value: 'toeic', label: 'TOEIC 준비', icon: '🎯' },
  { value: 'conversation', label: '영어 회화', icon: '🗣️' },
  { value: 'kids', label: '어린이 영어', icon: '👶' },
  { value: 'online', label: '온라인 수업', icon: '💻' }
]

const timeSlots = [
  { value: 'morning', label: '오전 (09:00-12:00)', icon: '🌅' },
  { value: 'afternoon', label: '오후 (13:00-17:00)', icon: '☀️' },
  { value: 'evening', label: '저녁 (18:00-21:00)', icon: '🌆' },
  { value: 'weekend', label: '주말', icon: '🎉' }
]

const contactMethods = [
  {
    title: '전화 상담',
    description: '즉시 전문 상담사와 연결',
    value: '02-1234-5678',
    icon: '📞',
    color: 'primary',
    available: '평일 09:00-20:00, 주말 10:00-17:00'
  },
  {
    title: '카카오톡',
    description: '간편하게 채팅으로 문의',
    value: '@engacademy',
    icon: '💬',
    color: 'accent-coral',
    available: '24시간 언제든지'
  },
  {
    title: '이메일',
    description: '자세한 문의사항 전달',
    value: 'info@engacademy.co.kr',
    icon: '✉️',
    color: 'accent-warm',
    available: '24시간 내 답변'
  },
  {
    title: '방문 상담',
    description: '직접 방문하여 상담',
    value: '서울 강남구 테헤란로 123',
    icon: '🏢',
    color: 'primary',
    available: '사전 예약 필수'
  }
]

const benefits = [
  { title: '무료 레벨테스트', icon: '📋', description: '정확한 실력 진단' },
  { title: '맞춤 커리큘럼', icon: '🎯', description: '개인별 학습 계획' },
  { title: '체험 수업', icon: '🎪', description: '무료 체험 기회' },
  { title: '진도 관리', icon: '📈', description: '체계적인 학습 관리' }
]

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState(0)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormData>()

  const selectedLevel = watch('level')
  const selectedCourse = watch('course')

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // API 호출 로직
      console.log('Form data:', data)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSuccess(true)
      reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white">
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-pattern opacity-10" />
      <motion.div
        className="absolute top-40 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 720] }}
        transition={{ duration: 30, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 -right-32 w-80 h-80 bg-accent-coral/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [720, 360, 0] }}
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
            <span className="text-primary font-semibold text-sm">📞 Contact Us</span>
          </div>
          <h2 className="section-title">
            영어 여행의 <br />
            <span className="highlight-text">첫걸음을 함께해요</span>
          </h2>
          <p className="text-xl text-warm-600 max-w-3xl mx-auto leading-relaxed">
            무료 상담부터 레벨테스트, 체험수업까지! <br />
            여러분의 영어 실력 향상을 위한 완벽한 솔루션을 제공합니다.
          </p>
        </motion.div>

        {/* 상담 혜택 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-100/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="font-bold text-warm-800 mb-2">{benefit.title}</h3>
              <p className="text-sm text-warm-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* 연락 방법들 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
                          <h3 className="text-2xl font-bold text-warm-800 mb-6">
              💫 다양한 상담 방법
            </h3>
              
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`feature-card cursor-pointer transition-all duration-300 ${
                    selectedMethod === index ? 'ring-2 ring-primary shadow-xl scale-105 bg-primary/5' : ''
                  }`}
                  onClick={() => setSelectedMethod(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-warm-800 mb-1">{method.title}</h4>
                      <p className="text-warm-600 text-sm mb-2">{method.description}</p>
                      <p className="font-semibold text-primary">{method.value}</p>
                      <p className="text-xs text-warm-500 mt-1">{method.available}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* 지도 정보 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="feature-card"
              >
                <h4 className="font-bold text-warm-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  오시는 길
                </h4>
                <div className="space-y-3">
                  <div className="text-warm-700">
                    <strong>주소:</strong> 서울특별시 강남구 테헤란로 123 퓨처빌딩 8층
                  </div>
                  <div className="text-warm-700">
                    <strong>지하철:</strong> 2호선 강남역 3번 출구 도보 5분
                  </div>
                  <div className="text-warm-700">
                    <strong>버스:</strong> 146, 472, 643 강남역 정류장
                  </div>
                  <div className="text-warm-700">
                    <strong>주차:</strong> 건물 지하 주차장 이용 (2시간 무료)
                  </div>
                </div>
                <button className="w-full mt-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-xl transition-colors duration-300">
                  🗺️ 네이버 지도에서 보기
                </button>
              </motion.div>
            </motion.div>

            {/* 상담 신청 폼 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="feature-card">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-warm-800">
                    🎯 무료 상담 신청
                  </h3>
                  <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    ✨ 100% 무료
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* 기본 정보 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-warm-700 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="성함을 입력해주세요"
                        {...register('name', { required: '이름을 입력해주세요' })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-warm-700 mb-2">
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder="010-0000-0000"
                        {...register('phone', { 
                          required: '연락처를 입력해주세요',
                          pattern: {
                            value: /^010-\d{4}-\d{4}$/,
                            message: '올바른 휴대폰 번호 형식이 아닙니다'
                          }
                        })}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-warm-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="example@email.com"
                      {...register('email', {
                        required: '이메일을 입력해주세요',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: '올바른 이메일 형식이 아닙니다'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* 영어 수준 */}
                  <div>
                    <label className="block text-sm font-semibold text-warm-700 mb-4">
                      현재 영어 수준 *
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {levels.map((level) => (
                        <label key={level.value} className="relative cursor-pointer">
                          <input
                            type="radio"
                            value={level.value}
                            className="sr-only"
                            {...register('level', { required: '영어 수준을 선택해주세요' })}
                          />
                          <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            selectedLevel === level.value
                              ? 'border-primary bg-primary/10 shadow-lg'
                              : 'border-neutral-200 hover:border-primary/50 hover:bg-primary/5'
                          }`}>
                            <div className="font-semibold text-warm-800">{level.label}</div>
                            <div className="text-sm text-warm-600 mt-1">{level.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.level && (
                      <p className="mt-2 text-sm text-red-500">{errors.level.message}</p>
                    )}
                  </div>

                  {/* 관심 과정 */}
                  <div>
                    <label className="block text-sm font-semibold text-warm-700 mb-4">
                      관심 있는 과정 *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {courses.map((course) => (
                        <label key={course.value} className="relative cursor-pointer">
                          <input
                            type="radio"
                            value={course.value}
                            className="sr-only"
                            {...register('course', { required: '과정을 선택해주세요' })}
                          />
                          <div className={`p-3 rounded-xl border-2 text-center transition-all duration-300 ${
                            selectedCourse === course.value
                              ? 'border-primary bg-primary/10 shadow-lg'
                              : 'border-neutral-200 hover:border-primary/50 hover:bg-primary/5'
                          }`}>
                            <div className="text-2xl mb-1">{course.icon}</div>
                            <div className="text-sm font-semibold text-warm-800">{course.label}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.course && (
                      <p className="mt-2 text-sm text-red-500">{errors.course.message}</p>
                    )}
                  </div>

                  {/* 희망 시간대 */}
                  <div>
                    <label className="block text-sm font-semibold text-warm-700 mb-4">
                      희망 수업 시간대
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {timeSlots.map((slot) => (
                        <label key={slot.value} className="relative cursor-pointer">
                          <input
                            type="radio"
                            value={slot.value}
                            className="sr-only"
                            {...register('preferredTime')}
                          />
                          <div className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                            watch('preferredTime') === slot.value
                              ? 'border-primary bg-primary/10 shadow-lg'
                              : 'border-neutral-200 hover:border-primary/50 hover:bg-primary/5'
                          }`}>
                            <div className="flex items-center space-x-3">
                              <span className="text-xl">{slot.icon}</span>
                              <span className="font-semibold text-warm-800">{slot.label}</span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 추가 문의사항 */}
                  <div>
                    <label className="block text-sm font-semibold text-warm-700 mb-2">
                      추가 문의사항
                    </label>
                    <textarea
                      rows={4}
                      className="input-field resize-none"
                      placeholder="궁금한 점이나 특별한 요청사항이 있으시면 자유롭게 적어주세요."
                      {...register('message')}
                    />
                  </div>

                  {/* 제출 버튼 */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full text-lg py-4 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="loading-spinner"></div>
                        <span>상담 신청 중...</span>
                      </div>
                    ) : (
                      '🎉 무료 상담 신청하기'
                    )}
                  </motion.button>

                  {/* 성공 메시지 */}
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-6 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <div className="text-4xl mb-2">🎉</div>
                      <div className="text-green-800 font-semibold mb-1">
                        상담 신청이 완료되었습니다!
                      </div>
                      <div className="text-green-600 text-sm">
                        빠른 시일 내에 연락드리겠습니다. 감사합니다!
                      </div>
                    </motion.div>
                  )}

                  {/* 개인정보 동의 */}
                  <div className="text-xs text-warm-500 bg-warm-50 p-4 rounded-xl">
                    <p className="mb-2">
                      📋 <strong>개인정보 수집 및 이용 동의</strong>
                    </p>
                    <p>
                      수집항목: 이름, 연락처, 이메일 | 이용목적: 상담 및 교육과정 안내 | 
                      보유기간: 상담 완료 후 1년 | 동의 거부 시 상담 서비스 이용이 제한될 수 있습니다.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 하단 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent-coral/10 to-primary/10 rounded-3xl p-12 border border-primary-100/30">
            <h3 className="text-3xl font-bold text-warm-800 mb-4">
              지금 바로 시작하세요! 🚀
            </h3>
            <p className="text-lg text-warm-600 mb-8 max-w-2xl mx-auto">
              망설이지 마세요! 매일 수많은 학생들이 우리와 함께 <br />
              영어 실력을 향상시키고 있습니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                📞 지금 전화하기
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                💬 카카오톡 상담
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 