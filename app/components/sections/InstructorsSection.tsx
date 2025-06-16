import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instructor } from '../../types'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'

const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Head Instructor',
    image: '/images/instructors/sarah.jpg',
    education: 'M.A. in TESOL, Oxford University',
    experience: '15+ years experience',
    description: '영국 Oxford 출신의 베테랑 강사로, 체계적인 커리큘럼 개발과 학생 맞춤형 교육을 전문으로 합니다.',
    expertise: ['Business English', 'IELTS Preparation', 'Academic Writing']
  },
  {
    id: 2,
    name: 'Michael Brown',
    role: 'Senior Instructor',
    image: '/images/instructors/michael.jpg',
    education: 'B.A. in English Literature, UCLA',
    experience: '10+ years experience',
    description: '미국 UCLA 출신으로 다년간의 회화 수업 경력을 보유하고 있으며, 학생들과의 상호작용을 중시합니다.',
    expertise: ['Conversation', 'Pronunciation', 'Public Speaking']
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Communication Specialist',
    image: '/images/instructors/emma.jpg',
    education: 'M.Ed. in Education, Cambridge',
    experience: '8+ years experience',
    description: '영국 Cambridge 출신의 커뮤니케이션 전문가로, 실용적인 비즈니스 영어 교육을 담당합니다.',
    expertise: ['Business Communication', 'Presentation Skills', 'Interview Prep']
  }
]

export default function InstructorsSection() {
  return (
    <section id="instructors" className="py-20 bg-gradient-to-b from-white to-mint/20 relative overflow-hidden">
      {/* Decorative Elements */}
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
          title="전문 원어민 강사진"
          subtitle="수준 높은 교육을 제공하는 검증된 전문가들을 소개합니다"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <AnimatedSection
              key={instructor.id}
              animation="scale"
              delay={index * 0.2}
              className="group"
            >
              <div className="glass-effect rounded-2xl overflow-hidden hover-card">
                <div className="relative h-72">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-gold font-medium mb-3">
                    {instructor.role}
                  </p>
                  
                  <div className="flex items-center text-sm text-primary/70 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {instructor.education}
                  </div>

                  <div className="flex items-center text-sm text-primary/70 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {instructor.experience}
                  </div>

                  <p className="text-gray-600 mb-6">
                    {instructor.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/5 text-primary/70 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
} 