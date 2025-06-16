import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionTitle from '../common/SectionTitle'

const teachers = [
  {
    name: 'Emma Wilson',
    role: '원어민 영어 강사',
    description: '10년 이상의 교육 경력을 가진 전문가로, 학생들의 실력 향상을 위한 맞춤형 교육을 제공합니다.',
    image: '/images/teachers/emma.jpg',
    subjects: ['회화', '비즈니스 영어', 'TOEIC Speaking']
  },
  {
    name: 'John Smith',
    role: '회화 전문 강사',
    description: '영국 케임브리지 대학 졸업, TESOL 자격증 보유. 자연스러운 영어 회화를 가르칩니다.',
    image: '/images/teachers/john.jpg',
    subjects: ['일상 회화', '발음 교정', '프레젠테이션']
  },
  {
    name: 'Sarah Johnson',
    role: '시험 대비 전문 강사',
    description: '미국 컬럼비아 대학원 TESOL 석사. TOEIC, IELTS 등 각종 시험 대비를 전문적으로 지도합니다.',
    image: '/images/teachers/sarah.jpg',
    subjects: ['TOEIC', 'IELTS', '문법']
  },
  {
    name: 'Michael Brown',
    role: '비즈니스 영어 전문',
    description: '글로벌 기업 실무 경험을 바탕으로 실용적인 비즈니스 영어를 가르칩니다.',
    image: '/images/teachers/michael.jpg',
    subjects: ['비즈니스 영어', '이메일 작성', '협상 스킬']
  }
]

export default function InstructorsSection() {
  return (
    <section id="instructors" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-mint/5 to-white/5" />
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
          title="전문 강사진 소개"
          subtitle="글로벌 수준의 교육을 제공하는 전문가들을 만나보세요"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{teacher.name}</h3>
                  <p className="text-mint">{teacher.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{teacher.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">전문 분야:</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="bg-mint/10 text-mint px-3 py-1 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 