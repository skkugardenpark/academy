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
    answer: '수업은 소그룹(4-6명) 또는 1:1 맞춤형으로 진행됩니다. 학생의 수준과 목표에 맞춰 커리큘럼을 구성하며, 실전 회화 중심의 interactive한 수업으로 진행됩니다.'
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
    question: '수강 기간은 어떻게 되나요?',
    answer: '기본 수강 기간은 3개월이며, 학습 목표와 개인의 상황에 따라 1개월 단위로 연장이 가능합니다. 체계적인 학습을 위해 3개월 과정을 추천드립니다.'
  },
  {
    id: 7,
    question: '수업 시간은 어떻게 되나요?',
    answer: '평일 오전 9시부터 오후 9시까지, 주말 오전 9시부터 오후 6시까지 운영됩니다. 학생의 스케줄에 맞춰 유연하게 수업 시간을 조정할 수 있습니다.'
  },
  {
    id: 8,
    question: '중도 환불이 가능한가요?',
    answer: '네, 수강 기간에 따라 환불 규정에 의거하여 환불해 드립니다. 자세한 환불 규정은 상담 시 안내해 드립니다.'
  },
  {
    id: 9,
    question: '레벨 테스트는 어떻게 진행되나요?',
    answer: '무료 레벨 테스트는 온라인 테스트와 1:1 인터뷰로 구성됩니다. 정확한 수준 파악을 통해 최적화된 학습 플랜을 제공해 드립니다.'
  },
  {
    id: 10,
    question: '교재는 어떤 것을 사용하나요?',
    answer: '국제적으로 검증된 교재와 자체 개발한 교재를 병행하여 사용합니다. 학생의 수준과 목표에 가장 적합한 교재를 선별하여 제공합니다.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <AnimatedSection id="faq" className="section-padding bg-neutral-50">
      <div className="container">
        <SectionTitle
          title="자주 묻는 질문"
          subtitle="궁금하신 점을 확인해보세요"
        />
        
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-sm border border-primary-100/20"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-neutral-800">{faq.question}</span>
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-neutral-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
} 