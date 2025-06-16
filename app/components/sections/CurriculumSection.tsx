import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'
import { ReactNode } from 'react'
import Image from 'next/image'

interface Course {
  id: number
  title: string
  description: string
  icon: ReactNode
  features: string[]
  level: string
}

const courses: Course[] = [
  {
    id: 1,
    title: '초급 회화 과정',
    description: '기초부터 시작하는 실용 영어 회화',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    features: [
      '기초 문법과 발음',
      '일상 생활 회화',
      '기본 어휘 학습',
      '1:1 발음 교정'
    ],
    level: '초급 (1-3개월)'
  },
  {
    id: 2,
    title: '중급 회화 과정',
    description: '자신감 있는 영어 표현력 향상',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    features: [
      '심화 문법',
      '비즈니스 회화',
      '프레젠테이션 스킬',
      '토론 및 디베이트'
    ],
    level: '중급 (3-6개월)'
  },
  {
    id: 3,
    title: '고급 회화 과정',
    description: '원어민 수준의 유창성 달성',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: [
      '고급 비즈니스 영어',
      '학술 영어',
      '문화적 이해',
      '국제 시험 대비'
    ],
    level: '고급 (6개월+)'
  },
  {
    id: 4,
    title: '시험 대비 과정',
    description: '토익/토플/아이엘츠 완벽 대비',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      '실전 모의고사',
      '문제 풀이 전략',
      '시험별 맞춤 학습',
      '취약점 분석'
    ],
    level: '전 레벨'
  }
]

const floatingAnimation = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.2, 0.4, 0.2],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "reverse" as const,
  }
}

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="section-padding bg-gradient-to-b from-orange-50/30 via-white to-rose-50/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-6">커리큘럼 소개</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            체계적이고 효과적인 학습을 위한 다양한 프로그램을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="modern-card group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  {course.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-600">
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">
            상세 커리큘럼 다운로드
          </button>
        </div>
      </div>
    </section>
  )
} 