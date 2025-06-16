import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQ } from '../../types'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'

const faqs: FAQ[] = [
  {
    id: 1,
    question: '수강 신청은 어떻게 하나요?',
    answer: '홈페이지 상단의 "무료 상담 신청" 버튼을 통해 신청하실 수 있습니다. 전문 상담원이 24시간 이내에 연락드려 상세한 상담을 진행해 드립니다.'
  },
  {
    id: 2,
    question: '수업은 어떤 방식으로 진행되나요?',
    answer: '수업은 소그룹(4-6명) 또는 1:1 맞춤형으로 진행됩니다. 학습자의 수준과 목표에 맞춰 최적화된 커리큘럼을 제공하며, 실전 회화 중심의 interactive한 수업을 진행합니다.'
  },
  {
    id: 3,
    question: '수강료는 어떻게 되나요?',
    answer: '수강료는 수업 형태(그룹/개인)와 수강 기간에 따라 차등 적용됩니다. 정확한 수강료는 무료 레벨테스트 및 상담을 통해 안내해 드립니다.'
  },
  {
    id: 4,
    question: '선수 지식이 없어도 수강할 수 있나요?',
    answer: '기초 과정의 경우 선수 지식 없이도 수강 가능합니다. 중급/고급 과정은 상담을 통해 수강생의 수준을 파악한 후 적합한 과정을 추천해 드립니다.'
  },
  {
    id: 5,
    question: '취업 지원도 해주시나요?',
    answer: '네, 수료생을 대상으로 취업 특강, 이력서 클리닉, 모의면접 등 다양한 취업 지원 프로그램을 제공하고 있습니다. 또한 파트너사와 연계하여 채용 정보도 제공해 드립니다.'
  },
  {
    id: 6,
    question: '레벨테스트는 어떻게 진행되나요?',
    answer: '레벨테스트는 온라인 필기테스트와 원어민 강사와의 1:1 speaking 테스트로 구성됩니다. 테스트 결과를 바탕으로 최적의 학습 플랜을 제안해 드립니다.'
  },
  {
    id: 7,
    question: '교재는 어떤 것을 사용하나요?',
    answer: '국제적으로 검증된 Oxford, Cambridge 교재를 기본으로 사용하며, 학습자의 니즈에 맞는 맞춤형 보조 자료를 함께 제공합니다.'
  },
  {
    id: 8,
    question: '수업 시간은 어떻게 되나요?',
    answer: '평일 오전 9시부터 오후 10시까지, 주말 오전 9시부터 오후 6시까지 운영됩니다. 학습자의 스케줄에 맞춰 유연하게 수업 시간을 조정할 수 있습니다.'
  },
  {
    id: 9,
    question: '중도 환불이 가능한가요?',
    answer: '학원법에 의거하여 수강 기간에 따른 환불 규정을 준수합니다. 자세한 환불 규정은 상담 시 안내해 드립니다.'
  }
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-mint/10 to-white/5" />
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      <motion.div
        className="absolute top-40 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
          title="자주 묻는 질문"
          subtitle="궁금하신 점을 확인해보세요"
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection
              key={faq.id}
              animation="slide-up"
              delay={index * 0.1}
              className="mb-4"
            >
              <div
                className={`
                  glass-effect rounded-xl overflow-hidden
                  transition-all duration-300
                  ${activeIndex === index ? 'shadow-lg' : 'hover:shadow-md'}
                `}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-primary">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary/70"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Contact CTA */}
        <AnimatedSection animation="fade" delay={0.6} className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            더 궁금하신 점이 있으신가요?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
            className="inline-flex items-center text-primary hover:text-gold transition-colors duration-300"
          >
            <span className="mr-2">상담 문의하기</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
} 