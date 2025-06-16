import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ContactForm } from '../../types'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'

interface ContactFormData {
  name: string
  phone: string
  email: string
  level: string
  message: string
}

const levels = [
  { value: 'beginner', label: '초급 (Beginner)' },
  { value: 'intermediate', label: '중급 (Intermediate)' },
  { value: 'advanced', label: '고급 (Advanced)' },
  { value: 'unknown', label: '잘 모르겠음' }
]

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // API 호출 로직
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-mint/20" />
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      <motion.div
        className="absolute top-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="무료 상담 신청"
          subtitle="영어 실력 향상을 위한 첫걸음, 지금 바로 시작하세요"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection animation="slide-right" className="space-y-8">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  상담 안내
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">상담 시간</h4>
                      <p className="text-gray-600">평일 09:00 - 20:00<br />주말 10:00 - 17:00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">전화 상담</h4>
                      <p className="text-gray-600">02-1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">학원 위치</h4>
                      <p className="text-gray-600">서울특별시 강남구 테헤란로 123<br />퓨처빌딩 8층</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slide-left">
              <form onSubmit={handleSubmit(onSubmit)} className="glass-effect rounded-2xl p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2" htmlFor="name">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`
                      w-full px-4 py-2 rounded-lg bg-white/50
                      border border-gray-200 focus:border-primary
                      focus:ring-2 focus:ring-primary/20
                      transition-all duration-300
                      ${errors.name ? 'border-red-500' : ''}
                    `}
                    {...register('name', { required: '이름을 입력해주세요' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2" htmlFor="phone">
                    연락처
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={`
                      w-full px-4 py-2 rounded-lg bg-white/50
                      border border-gray-200 focus:border-primary
                      focus:ring-2 focus:ring-primary/20
                      transition-all duration-300
                      ${errors.phone ? 'border-red-500' : ''}
                    `}
                    {...register('phone', { required: '연락처를 입력해주세요' })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2" htmlFor="email">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`
                      w-full px-4 py-2 rounded-lg bg-white/50
                      border border-gray-200 focus:border-primary
                      focus:ring-2 focus:ring-primary/20
                      transition-all duration-300
                      ${errors.email ? 'border-red-500' : ''}
                    `}
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

                <div>
                  <label className="block text-sm font-medium text-primary mb-2" htmlFor="level">
                    현재 영어 수준
                  </label>
                  <select
                    id="level"
                    className={`
                      w-full px-4 py-2 rounded-lg bg-white/50
                      border border-gray-200 focus:border-primary
                      focus:ring-2 focus:ring-primary/20
                      transition-all duration-300
                      ${errors.level ? 'border-red-500' : ''}
                    `}
                    {...register('level', { required: '영어 수준을 선택해주세요' })}
                  >
                    <option value="">선택해주세요</option>
                    {levels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  {errors.level && (
                    <p className="mt-1 text-sm text-red-500">{errors.level.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2" htmlFor="message">
                    문의사항
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`
                      w-full px-4 py-2 rounded-lg bg-white/50
                      border border-gray-200 focus:border-primary
                      focus:ring-2 focus:ring-primary/20
                      transition-all duration-300
                      ${errors.message ? 'border-red-500' : ''}
                    `}
                    {...register('message')}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  loading={isSubmitting}
                  withGlow
                >
                  {isSubmitting ? '상담 신청 중...' : '무료 상담 신청하기'}
                </Button>

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-600"
                  >
                    상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.
                  </motion.div>
                )}
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
} 