import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'

const features = [
  {
    title: '체계적인 커리큘럼',
    description: '레벨별 맞춤형 학습과 단계별 성장을 위한 최적화된 교육과정',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: '원어민 강사진',
    description: '풍부한 교육 경험을 보유한 전문 원어민 교사들의 수준 높은 강의',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: '최신 학습 시설',
    description: '쾌적한 환경과 첨단 교육 장비를 갖춘 현대적인 학습 공간',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: '글로벌 네트워크',
    description: '해외 교육기관과의 협력을 통한 다양한 문화 교류 기회 제공',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

const floatingAnimation = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "reverse" as const,
  }
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-mint/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-mint/10 to-transparent" />
      <motion.div
        className="absolute top-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={floatingAnimation.animate}
        transition={floatingAnimation.transition}
      />

      <div className="container mx-auto px-4">
        <SectionTitle
          title="미래를 향한 교육의 혁신"
          subtitle="체계적인 커리큘럼과 전문 강사진이 함께하는 차별화된 영어 교육을 경험하세요"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection animation="slide-right" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/classroom.jpg"
                alt="Modern Classroom"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
          </AnimatedSection>

          <AnimatedSection animation="slide-left" className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">
              글로벌 인재 양성을 위한<br />
              <span className="text-gold">최고의 교육 환경</span>
            </h3>
            <p className="text-gray-600 text-lg">
              우리는 단순한 영어 교육을 넘어, 글로벌 시대에 필요한 실질적인 의사소통 능력과
              문화적 이해를 키우는 것을 목표로 합니다. 체계적인 커리큘럼과 전문 강사진의
              지도로 학생들의 잠재력을 최대한 끌어올립니다.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              animation="scale"
              delay={index * 0.1}
              className="glass-effect rounded-xl p-6 hover-card"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
} 