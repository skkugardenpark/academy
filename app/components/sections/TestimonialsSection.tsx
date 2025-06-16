import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionTitle from '../common/SectionTitle'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: '김민지',
    role: '직장인',
    image: '/images/testimonials/review1.jpg',
    content: '업무에 필요한 영어 실력을 키우고 싶어서 등록했는데, 실전 비즈니스 영어 수업이 정말 도움이 많이 되었어요. 특히 이메일 작성과 회의 진행 스킬이 많이 향상되었습니다.',
    rating: 5,
    course: '비즈니스 영어 과정'
  },
  {
    id: 2,
    name: '이준호',
    role: '대학생',
    image: '/images/testimonials/review2.jpg',
    content: 'IELTS 시험 준비를 위해 다녔는데, 목표 점수를 달성할 수 있었습니다. 체계적인 커리큘럼과 선생님들의 꼼꼼한 피드백 덕분에 효율적으로 공부할 수 있었어요.',
    rating: 5,
    course: 'IELTS 준비 과정'
  },
  {
    id: 3,
    name: '박서연',
    role: '고등학생',
    image: '/images/testimonials/review3.jpg',
    content: '원어민 선생님과의 회화 수업이 가장 좋았어요. 처음에는 말하기가 많이 부끄러웠는데, 이제는 자신감 있게 영어로 대화할 수 있게 되었습니다.',
    rating: 5,
    course: '실용 영어 회화 과정'
  },
  {
    id: 4,
    name: '최현우',
    role: '취업준비생',
    image: '/images/testimonials/review4.jpg',
    content: '취업을 위한 영어 면접 준비에 큰 도움이 되었습니다. 모의 면접 연습과 발음 교정을 통해 자신감을 얻을 수 있었고, 실제 면접에서도 좋은 결과를 얻었어요.',
    rating: 5,
    course: '취업 영어 과정'
  }
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-mint/5 to-white/5" />
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
          title="수강생 후기"
          subtitle="실제 수강생들의 생생한 후기를 확인하세요"
        />

        <div className="mt-12">
          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-mint">{testimonial.role}</p>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden">
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-mint">{testimonials[activeIndex].role}</p>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].course}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">{testimonials[activeIndex].content}</p>
              <div className="flex justify-center gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? 'bg-mint' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 