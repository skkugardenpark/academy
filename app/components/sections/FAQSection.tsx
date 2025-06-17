import { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "수업은 어떻게 진행되나요?",
      answer: "수업은 소그룹(4-6명) 또는 1:1로 진행되며, 학생의 레벨과 목표에 맞춰 맞춤형 커리큘럼을 제공합니다."
    },
    {
      question: "수강료는 얼마인가요?",
      answer: "수강료는 프로그램과 수업 시간에 따라 다르며, 상담을 통해 자세히 안내해 드립니다."
    },
    {
      question: "레벨 테스트는 어떻게 진행되나요?",
      answer: "레벨 테스트는 무료로 진행되며, 말하기/듣기/읽기/쓰기 영역을 종합적으로 평가합니다."
    },
    {
      question: "교재는 어떤 것을 사용하나요?",
      answer: "국내외 유명 출판사의 검증된 교재와 자체 개발한 교재를 학생의 레벨에 맞게 사용합니다."
    }
  ]

  return (
    <AnimatedSection id="faq" className="section-padding bg-warm-50">
      <div className="container">
        <SectionTitle
          title="자주 묻는 질문"
          subtitle="궁금하신 점을 확인해보세요"
        />
        
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-primary-100/20"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-warm-800">{faq.question}</span>
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-warm-600">
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