import { motion } from 'framer-motion'
import { Course } from '../../types'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'

const courses: Course[] = [
  {
    id: 1,
    level: '초등부',
    title: '코딩 기초 과정',
    description: '논리적 사고와 문제 해결 능력을 키우는 기초 프로그래밍 교육',
    features: [
      'Scratch를 활용한 코딩 기초',
      '파이썬 프로그래밍 입문',
      '알고리즘 기초',
      '주 2회 / 3개월 과정'
    ],
    icon: '🎮'
  },
  {
    id: 2,
    level: '중등부',
    title: '웹 개발 기초',
    description: '웹 개발의 기초를 배우고 나만의 웹사이트를 만드는 과정',
    features: [
      'HTML/CSS 기초',
      'JavaScript 프로그래밍',
      '반응형 웹 디자인',
      '주 3회 / 4개월 과정'
    ],
    icon: '💻'
  },
  {
    id: 3,
    level: '고등부',
    title: '실무 개발자 과정',
    description: '취업을 위한 실무 중심의 프로그래밍 심화 과정',
    features: [
      'React/Next.js 웹 개발',
      'Node.js 백엔드 개발',
      '프로젝트 포트폴리오',
      '주 5회 / 6개월 과정'
    ],
    icon: '🚀'
  },
  {
    id: 4,
    level: '성인부',
    title: '직장인 실무 과정',
    description: '현업 개발자를 위한 최신 기술 스택 교육',
    features: [
      'DevOps/클라우드',
      'AI/머신러닝',
      '블록체인/Web3',
      '주말반 / 3개월 과정'
    ],
    icon: '💼'
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
    <section id="curriculum" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      <motion.div
        className="absolute top-40 -left-20 w-80 h-80 bg-mint/30 rounded-full blur-3xl"
        animate={floatingAnimation.animate}
        transition={floatingAnimation.transition}
      />

      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="수준별 맞춤 커리큘럼"
          subtitle="학습자의 수준과 목표에 맞는 최적화된 교육과정을 제공합니다"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <AnimatedSection
              key={course.id}
              animation="scale"
              delay={index * 0.2}
              className="relative group"
            >
              <div className={`
                relative overflow-hidden rounded-2xl
                bg-gradient-to-br from-mint to-mint/50
                p-8 h-full
                transition-all duration-300
                hover:shadow-xl hover:scale-[1.02]
                glass-effect
              `}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16" />
                
                <div className="relative">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-primary mb-6">
                    {course.icon}
                  </div>

                  <div className="text-sm font-semibold text-primary/70 mb-2">
                    {course.level}
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {course.title}
                  </h3>

                  <p className="text-primary/80 mb-6">
                    {course.description}
                  </p>

                  <ul className="space-y-3">
                    {course.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center text-primary/70"
                      >
                        <svg className="w-5 h-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 추가 정보 */}
        <AnimatedSection animation="fade" className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            모든 과정은 수강생의 수준과 목표에 따라 맞춤 조정이 가능합니다.
            <br />
            자세한 내용은 무료 상담을 통해 안내해 드립니다.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            무료 상담 신청
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
} 