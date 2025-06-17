import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'
import Image from 'next/image'

export default function CurriculumSection() {
  return (
    <AnimatedSection id="curriculum" className="section-padding">
      <div className="container">
        <SectionTitle
          title="체계적인 커리큘럼"
          subtitle="단계별 학습으로 영어 실력 향상"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="modern-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
              <Image
                src="/images/curriculum/level1.jpg"
                alt="Level 1"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Level 1: 기초 다지기</h3>
            <ul className="space-y-3 text-neutral-600">
              <li>• 기본 문법과 어휘 학습</li>
              <li>• 일상 회화 표현 익히기</li>
              <li>• 발음과 억양 교정</li>
            </ul>
          </motion.div>

          <motion.div 
            className="modern-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
              <Image
                src="/images/curriculum/level2.jpg"
                alt="Level 2"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Level 2: 실력 향상</h3>
            <ul className="space-y-3 text-neutral-600">
              <li>• 중급 문법과 어휘 확장</li>
              <li>• 비즈니스 영어 입문</li>
              <li>• 토론과 프레젠테이션 기초</li>
            </ul>
          </motion.div>

          <motion.div 
            className="modern-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
              <Image
                src="/images/curriculum/level3.jpg"
                alt="Level 3"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Level 3: 마스터</h3>
            <ul className="space-y-3 text-neutral-600">
              <li>• 고급 비즈니스 영어</li>
              <li>• 학술 영어와 논문 작성</li>
              <li>• 국제 시험 대비 (TOEFL, IELTS)</li>
            </ul>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button href="#contact" variant="primary">
            무료 레벨 테스트 신청
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
} 