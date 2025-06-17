'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const instructors = [
  {
    id: 1,
    name: 'Emma Wilson',
    role: '원어민 영어 강사',
    nationality: '🇺🇸 미국',
    experience: '12년',
    education: 'Harvard University 언어학 박사',
    description: '하버드 대학교에서 언어학 박사 학위를 취득한 Emma 강사는 12년간 한국에서 영어를 가르치며 한국 학습자들의 특성을 깊이 이해하고 있습니다.',
    image: '/images/teachers/emma.jpg',
    subjects: ['Advanced Conversation', 'Business English', 'TOEIC Speaking', 'Academic Writing'],
    certifications: ['TESOL', 'TEFL', 'Cambridge CELTA'],
    specialties: [
      '발음 교정 전문가',
      '비즈니스 영어 실무',
      '학술 영어 지도',
      '문화적 맥락 교육'
    ],
    achievements: [
      '한국 영어교육학회 우수강사상 수상',
      '삼성전자 임원진 영어 교육 담당',
      '서울대학교 객원교수 역임'
    ],
    philosophy: "언어는 단순한 도구가 아닌 문화와 사고를 연결하는 다리입니다. 학생들이 자신감을 가지고 영어로 소통할 수 있도록 돕는 것이 제 목표입니다.",
    rating: 4.9,
    students: 280
  },
  {
    id: 2,
    name: 'Dr. James Park',
    role: '언어학 박사 / 시험 대비 전문',
    nationality: '🇨🇦 캐나다',
    experience: '15년',
    education: 'University of Toronto 언어학 박사',
    description: '토론토 대학교 언어학 박사로, TOEFL/IELTS 만점자를 배출하는 시험 대비의 전설적인 강사입니다.',
    image: '/images/teachers/john.jpg',
    subjects: ['TOEFL iBT', 'IELTS', 'Academic English', 'Test Strategies'],
    certifications: ['Ph.D in Linguistics', 'IELTS Examiner', 'TOEFL Rater'],
    specialties: [
      'TOEFL 120점 만점 달성법',
      'IELTS 9.0 스피킹 전략',
      '학술 영어 완성',
      '시험 심리학 적용'
    ],
    achievements: [
      '학생 평균 점수 향상률 95%',
      'TOEFL 만점자 50명 배출',
      'ETS 공식 교재 집필 참여'
    ],
    philosophy: "시험은 목표가 아닌 수단입니다. 진정한 영어 실력을 키우면서 동시에 최고의 점수를 얻을 수 있도록 지도합니다.",
    rating: 4.95,
    students: 320
  },
  {
    id: 3,
    name: 'Sarah Kim',
    role: '비즈니스 영어 전문가',
    nationality: '🇬🇧 영국',
    experience: '10년',
    education: 'Oxford University MBA',
    description: '옥스포드 대학교 MBA 출신으로 글로벌 기업에서 10년간 근무한 실무 경험을 바탕으로 실전 비즈니스 영어를 가르칩니다.',
    image: '/images/teachers/sarah.jpg',
    subjects: ['Business Communication', 'Presentation Skills', 'Negotiation', 'Email Writing'],
    certifications: ['MBA Oxford', 'Business English Specialist', 'Corporate Training'],
    specialties: [
      '국제회의 진행 스킬',
      '글로벌 협상 전략',
      '비즈니스 프레젠테이션',
      '크로스컬처 커뮤니케이션'
    ],
    achievements: [
      'Fortune 500 기업 교육 담당',
      '대기업 임원진 영어 코칭',
      '국제 비즈니스 컨퍼런스 강연'
    ],
    philosophy: "비즈니스 영어는 단순한 언어가 아닌 글로벌 성공의 열쇠입니다. 실무에서 바로 활용할 수 있는 실전 스킬을 전수합니다.",
    rating: 4.92,
    students: 195
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: '회화 전문 강사',
    nationality: '🇦🇺 호주',
    experience: '8년',
    education: 'University of Sydney 교육학 석사',
    description: '시드니 대학교 교육학 석사로, 학습자 중심의 혁신적인 회화 교육법으로 유명한 젊은 강사입니다.',
    image: '/images/teachers/michael.jpg',
    subjects: ['Daily Conversation', 'Pronunciation', 'Listening Skills', 'Cultural English'],
    certifications: ['M.Ed TESOL', 'Pronunciation Specialist', 'Cultural Competency'],
    specialties: [
      '자연스러운 발음 교정',
      '실생활 회화 마스터',
      '문화적 뉘앙스 교육',
      '자신감 향상 프로그램'
    ],
    achievements: [
      '학생 만족도 98% 달성',
      '혁신적 교육법 개발',
      '영어 교육 앱 개발 참여'
    ],
    philosophy: "영어는 즐겁게 배워야 합니다. 학생들이 두려움 없이 자연스럽게 영어로 소통할 수 있는 환경을 만드는 것이 저의 사명입니다.",
    rating: 4.88,
    students: 240
  },
  {
    id: 5,
    name: 'Dr. Lisa Rodriguez',
    role: '학술 영어 전문가',
    nationality: '🇪🇸 스페인',
    experience: '11년',
    education: 'Cambridge University 언어교육학 박사',
    description: '케임브리지 대학교 언어교육학 박사로, 학술 영어와 논문 작성 지도의 최고 전문가입니다.',
    image: '/images/teachers/emma.jpg',
    subjects: ['Academic Writing', 'Research Methods', 'Critical Thinking', 'Essay Writing'],
    certifications: ['Ph.D Cambridge', 'Academic Writing Specialist', 'Research Supervisor'],
    specialties: [
      '학술 논문 작성법',
      '비판적 사고 개발',
      '연구 방법론 영어',
      '대학원 입학 준비'
    ],
    achievements: [
      '해외 대학원 합격률 92%',
      '국제 학술지 논문 지도',
      '유학 준비 프로그램 개발'
    ],
    philosophy: "학술 영어는 단순한 언어 능력을 넘어 학문적 사고력을 기르는 과정입니다. 학생들의 지적 성장을 돕는 것이 저의 보람입니다.",
    rating: 4.94,
    students: 165
  },
  {
    id: 6,
    name: 'David Thompson',
    role: '어린이 영어 전문가',
    nationality: '🇳🇿 뉴질랜드',
    experience: '9년',
    education: 'University of Auckland 아동교육학 석사',
    description: '오클랜드 대학교 아동교육학 석사로, 어린이들의 눈높이에 맞춘 창의적인 영어 교육을 제공합니다.',
    image: '/images/teachers/john.jpg',
    subjects: ['Kids English', 'Phonics', 'Storytelling', 'Creative Writing'],
    certifications: ['M.Ed Child Education', 'Phonics Specialist', 'Creative Learning'],
    specialties: [
      '파닉스 완성 프로그램',
      '스토리텔링 영어',
      '창의적 글쓰기',
      '놀이 중심 학습법'
    ],
    achievements: [
      '어린이 영어교육상 수상',
      '창의 교육법 특허 보유',
      '어린이 영어 교재 출간'
    ],
    philosophy: "아이들은 놀이를 통해 가장 잘 배웁니다. 영어를 재미있는 모험으로 만들어 자연스럽게 습득할 수 있도록 돕습니다.",
    rating: 4.91,
    students: 310
  }
]

const teachingMethods = [
  {
    title: '개인별 맞춤 교육',
    description: '학습자의 수준과 목표에 맞는 완전 개인화된 커리큘럼',
    icon: '🎯'
  },
  {
    title: '실전 중심 수업',
    description: '실제 상황에서 바로 활용할 수 있는 실용적인 영어 교육',
    icon: '💼'
  },
  {
    title: '문화적 맥락 교육',
    description: '언어와 함께 문화적 배경까지 이해할 수 있는 통합 교육',
    icon: '🌍'
  },
  {
    title: '지속적인 피드백',
    description: '실시간 교정과 개선점 제시로 빠른 실력 향상 보장',
    icon: '📈'
  }
]

export default function InstructorsSection() {
  const [selectedInstructor, setSelectedInstructor] = useState(0)
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <section id="instructors" className="section-padding relative overflow-hidden bg-white">
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      <motion.div
        className="absolute top-20 -right-20 w-60 h-60 bg-accent-coral/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1], rotate: [0, 90, 180] }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], rotate: [180, 270, 360] }}
        transition={{ duration: 30, repeat: Infinity }}
      />

      <div className="container relative z-10">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100/30 mb-6">
            <span className="text-primary font-semibold text-sm">👨‍🏫 Our Instructors</span>
          </div>
          <h2 className="section-title">
            세계 최고 수준의 <br />
            <span className="highlight-text">전문 강사진</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            글로벌 명문대학 출신의 검증된 전문가들이 <br />
            개인별 맞춤 교육으로 여러분의 성공을 책임집니다.
          </p>
        </motion.div>

        {/* 교육 방법론 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {teachingMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary-100/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-lg font-bold text-neutral-800 mb-2">{method.title}</h3>
              <p className="text-sm text-neutral-600">{method.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 강사 선택 네비게이션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {instructors.map((instructor, index) => (
            <button
              key={instructor.id}
              onClick={() => setSelectedInstructor(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedInstructor === index
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white/80 text-neutral-700 hover:bg-primary/10 border border-primary-100/30'
              }`}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </div>
              <span>{instructor.name}</span>
            </button>
          ))}
        </motion.div>

        {/* 선택된 강사 상세 정보 */}
        <motion.div
          key={selectedInstructor}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20"
        >
          {/* 왼쪽: 강사 프로필 */}
          <div className="lg:col-span-1">
            <div className="feature-card text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={instructors[selectedInstructor].image}
                  alt={instructors[selectedInstructor].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                {instructors[selectedInstructor].name}
              </h3>
              <p className="text-lg text-primary font-semibold mb-2">
                {instructors[selectedInstructor].role}
              </p>
              <p className="text-neutral-600 mb-4">
                {instructors[selectedInstructor].nationality} • {instructors[selectedInstructor].experience} 경력
              </p>
              
              {/* 평점과 학생 수 */}
              <div className="flex items-center justify-center space-x-6 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-bold text-lg">{instructors[selectedInstructor].rating}</span>
                  </div>
                  <span className="text-sm text-neutral-600">평점</span>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-primary mb-1">
                    {instructors[selectedInstructor].students}+
                  </div>
                  <span className="text-sm text-neutral-600">수강생</span>
                </div>
              </div>

              {/* 학력 */}
              <div className="bg-primary/10 rounded-2xl p-4 mb-6">
                <h4 className="font-semibold text-neutral-800 mb-2">🎓 학력</h4>
                <p className="text-sm text-neutral-700">{instructors[selectedInstructor].education}</p>
              </div>

              {/* 자격증 */}
              <div>
                <h4 className="font-semibold text-neutral-800 mb-3">📜 자격증</h4>
                <div className="flex flex-wrap gap-2">
                  {instructors[selectedInstructor].certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent-coral/10 text-accent-coral rounded-full text-xs font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 상세 정보 */}
          <div className="lg:col-span-2">
            {/* 탭 네비게이션 */}
            <div className="flex space-x-2 mb-8">
              {[
                { id: 'profile', label: '프로필', icon: '👤' },
                { id: 'specialties', label: '전문분야', icon: '🎯' },
                { id: 'achievements', label: '성과', icon: '🏆' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'bg-white/80 text-neutral-600 hover:bg-primary/10'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* 탭 컨텐츠 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-primary-100/30">
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="text-xl font-bold text-neutral-800 mb-4">소개</h4>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {instructors[selectedInstructor].description}
                  </p>
                  
                  <h4 className="text-xl font-bold text-neutral-800 mb-4">교육 철학</h4>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-neutral-700 leading-relaxed mb-6">
                    "{instructors[selectedInstructor].philosophy}"
                  </blockquote>

                  <h4 className="text-xl font-bold text-neutral-800 mb-4">담당 과목</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {instructors[selectedInstructor].subjects.map((subject, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 bg-primary/5 rounded-xl"
                      >
                        <span className="text-primary">📚</span>
                        <span className="text-neutral-700 font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'specialties' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="text-xl font-bold text-neutral-800 mb-6">전문 분야</h4>
                  <div className="space-y-4">
                    {instructors[selectedInstructor].specialties.map((specialty, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gradient-to-r from-primary/5 to-accent-coral/5 rounded-2xl"
                      >
                        <span className="text-primary text-xl">✨</span>
                        <div>
                          <h5 className="font-semibold text-neutral-800">{specialty}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'achievements' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="text-xl font-bold text-neutral-800 mb-6">주요 성과</h4>
                  <div className="space-y-4">
                    {instructors[selectedInstructor].achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gradient-to-r from-accent-coral/5 to-primary/5 rounded-2xl"
                      >
                        <span className="text-accent-coral text-xl">🏆</span>
                        <div>
                          <p className="text-neutral-700 font-medium">{achievement}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* 하단 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent-coral/10 to-primary/10 rounded-3xl p-12 border border-primary-100/30">
            <h3 className="text-3xl font-bold text-neutral-800 mb-4">
              최고의 강사진과 함께 시작하세요! 🌟
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              세계 최고 수준의 전문가들이 여러분의 영어 실력 향상을 위해 <br />
              개인별 맞춤 교육을 제공합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                강사 상담 신청 ✨
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                수업 체험하기 👨‍🏫
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 