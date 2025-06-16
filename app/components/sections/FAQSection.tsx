import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQ } from '../../types'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'

const faqs: FAQ[] = [
  {
    id: 1,
    question: '수강 신청은 어떻게 하나요?',
    answer: '홈페이지 상단의 "무료 레벨 테스트" 버튼을 클릭하시거나 전화로 상담 신청을 하실 수 있습니다. 상담 후 레벨 테스트를 통해 적합한 클래스에 배정해 드립니다.'
  },
  {
    id: 2,
    question: '수업은 어떤 방식으로 진행되나요?',
    answer: '소수정예(4-6명)로 진행되는 대면 수업으로, 학생들의 적극적인 참여를 유도하는 토론식 수업을 지향합니다. 매주 주제별 토론과 발표를 통해 실전 영어 능력을 향상시킵니다.'
  },
  {
    id: 3,
    question: '수강료는 어떻게 되나요?',
    answer: '수강료는 레벨과 수업 시간에 따라 차등 적용됩니다. 정확한 수강료는 상담 시 안내해 드리며, 장기 수강 시 할인 혜택을 제공해 드립니다.'
  },
  {
    id: 4,
    question: '선수 지식이 없어도 수강할 수 있나요?',
    answer: '네, 가능합니다. 초급반부터 고급반까지 다양한 레벨별 클래스가 준비되어 있어 영어 기초가 없으신 분들도 수강하실 수 있습니다.'
  },
  {
    id: 5,
    question: '취업 지원도 해주시나요?',
    answer: '비즈니스 영어 과정 수강생을 대상으로 이력서 작성, 영어 면접 준비 등 취업 관련 특강을 제공하며, 우수 수강생은 취업 추천도 해드립니다.'
  },
  {
    id: 6,
    question: '레벨테스트는 어떻게 진행되나요?',
    answer: '레벨테스트는 온라인 필기시험과 원어민 강사와의 1:1 스피킹 테스트로 구성됩니다. 정확한 레벨 파악을 위해 약 40분 정도 소요됩니다.'
  },
  {
    id: 7,
    question: '교재는 어떤 것을 사용하나요?',
    answer: 'Oxford, Cambridge 등 검증된 출판사의 교재를 기본으로 사용하며, 강사진이 직접 제작한 부교재와 실전 자료를 함께 활용합니다.'
  },
  {
    id: 8,
    question: '수업 시간은 어떻게 되나요?',
    answer: '평일 오전 9시부터 오후 9시까지, 주말 오전 9시부터 오후 6시까지 다양한 시간대의 클래스가 운영됩니다. 수강생의 일정에 맞춰 선택하실 수 있습니다.'
  },
  {
    id: 9,
    question: '중도 환불이 가능한가요?',
    answer: '네, 수강 기간에 따라 환불 규정에 의거하여 환불해 드립니다. 자세한 환불 규정은 상담 시 안내해 드립니다.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-rose-50/50 via-white to-orange-50/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-6">자주 묻는 질문</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            영어 교육에 대한 궁금증을 해결해드립니다
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="modern-card hover:bg-rose-50/5 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-medium text-slate-800">
                  {faq.question}
                </h3>
                <button
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-rose-200 text-rose-500"
                >
                  {openIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-slate-600 border-t border-rose-100/30 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 