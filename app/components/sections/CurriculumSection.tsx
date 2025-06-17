'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '../common/Button'
import Image from 'next/image'

const curriculumLevels = [
  {
    level: 'Beginner',
    title: '기초 다지기',
    subtitle: '영어의 첫걸음',
    duration: '3개월',
    price: '월 120,000원',
    color: 'from-green-400 to-green-600',
    image: '/images/hero-bg.jpg',
    features: [
      '기본 알파벳과 발음 마스터',
      '일상생활 필수 어휘 500개',
      '간단한 인사와 자기소개',
      '기초 문법 (현재시제, be동사)',
      '기본 듣기와 말하기 연습'
    ],
    goals: ['기본 회화 가능', '간단한 문장 구성', '발음 교정'],
    icon: '🌱'
  },
  {
    level: 'Elementary',
    title: '기초 확립',
    subtitle: '실용 영어의 시작',
    duration: '4개월',
    price: '월 140,000원',
    color: 'from-blue-400 to-blue-600',
    image: '/images/hero-bg.jpg',
    features: [
      '일상 어휘 1,000개 확장',
      '과거시제와 미래시제 학습',
      '질문과 대답 패턴 익히기',
      '쇼핑, 식당에서의 회화',
      '간단한 독해와 작문'
    ],
    goals: ['일상 대화 가능', '기본 문법 이해', '간단한 글 읽기'],
    icon: '📚'
  },
  {
    level: 'Intermediate',
    title: '실력 향상',
    subtitle: '중급 영어 마스터',
    duration: '5개월',
    price: '월 160,000원',
    color: 'from-purple-400 to-purple-600',
    image: '/images/hero-bg.jpg',
    features: [
      '비즈니스 영어 기초',
      '복잡한 문법 구조 학습',
      '토론과 의견 표현',
      '프레젠테이션 기초',
      '영어 뉴스와 기사 읽기'
    ],
    goals: ['업무 회화 가능', '복잡한 문장 구성', '의견 표현'],
    icon: '🚀'
  },
  {
    level: 'Upper-Intermediate',
    title: '고급 준비',
    subtitle: '전문 영어로의 도약',
    duration: '5개월',
    price: '월 180,000원',
    color: 'from-orange-400 to-orange-600',
    image: '/images/hero-bg.jpg',
    features: [
      '고급 비즈니스 영어',
      '학술적 글쓰기',
      '복잡한 토론 참여',
      '문화적 뉘앙스 이해',
      '전문 분야별 어휘'
    ],
    goals: ['전문적 의사소통', '학술 논문 읽기', '고급 문법 활용'],
    icon: '💼'
  },
  {
    level: 'Advanced',
    title: '마스터 레벨',
    subtitle: '원어민 수준 달성',
    duration: '6개월',
    price: '월 200,000원',
    color: 'from-red-400 to-red-600',
    image: '/images/hero-bg.jpg',
    features: [
      '원어민 수준 회화',
      '전문 분야 심화 학습',
      '국제 시험 대비 (TOEFL, IELTS)',
      '논문 작성과 발표',
      '문학 작품 감상'
    ],
    goals: ['원어민 수준 소통', '국제 시험 고득점', '전문 영역 활용'],
    icon: '🏆'
  }
]

const learningPaths = [
  {
    title: '일반 영어 과정',
    description: '체계적인 단계별 학습으로 영어 실력을 완성합니다.',
    duration: '12-18개월',
    icon: '📖',
    color: 'from-blue-500 to-blue-700'
  },
  {
    title: '비즈니스 영어 과정',
    description: '업무에 필요한 실무 영어를 집중적으로 학습합니다.',
    duration: '8-12개월',
    icon: '💼',
    color: 'from-green-500 to-green-700'
  },
  {
    title: '시험 대비 과정',
    description: 'TOEIC, TOEFL, IELTS 등 국제 시험 고득점을 목표로 합니다.',
    duration: '6-9개월',
    icon: '🎯',
    color: 'from-purple-500 to-purple-700'
  },
  {
    title: '회화 집중 과정',
    description: '말하기와 듣기 능력 향상에 특화된 프로그램입니다.',
    duration: '6-12개월',
    icon: '🗣️',
    color: 'from-orange-500 to-orange-700'
  }
]

export default function CurriculumSection() {
  const [selectedLevel, setSelectedLevel] = useState(0)
  const [activeTab, setActiveTab] = useState('levels')

  return (
    <section id="curriculum" className="section-padding relative overflow-hidden bg-white">
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-pattern opacity-10" />
      <motion.div
        className="absolute top-40 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 -right-20 w-80 h-80 bg-accent-coral/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
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
            <span className="text-primary font-semibold text-sm">📚 Curriculum</span>
          </div>
          <h2 className="section-title">
            체계적인 <span className="highlight-text">단계별 커리큘럼</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            초보자부터 고급자까지, 개인의 수준에 맞는 맞춤형 학습 프로그램으로 <br />
            확실한 영어 실력 향상을 보장합니다.
          </p>
        </motion.div>

        {/* 탭 네비게이션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-primary-100/30">
            <button
              onClick={() => setActiveTab('levels')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'levels'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-neutral-600 hover:text-primary'
              }`}
            >
              레벨별 과정
            </button>
            <button
              onClick={() => setActiveTab('paths')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'paths'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-neutral-600 hover:text-primary'
              }`}
            >
              학습 경로
            </button>
          </div>
        </motion.div>

        {/* 레벨별 과정 */}
        {activeTab === 'levels' && (
          <div className="space-y-12">
            {/* 레벨 선택 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {curriculumLevels.map((level, index) => (
                <button
                  key={level.level}
                  onClick={() => setSelectedLevel(index)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedLevel === index
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white/80 text-neutral-700 hover:bg-primary/10 border border-primary-100/30'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{level.icon}</span>
                    <span>{level.level}</span>
                  </span>
                </button>
              ))}
            </motion.div>

            {/* 선택된 레벨 상세 정보 */}
            <motion.div
              key={selectedLevel}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* 왼쪽: 이미지 */}
              <div className="relative">
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                  <Image
                    src={curriculumLevels[selectedLevel].image}
                    alt={curriculumLevels[selectedLevel].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* 레벨 배지 */}
                  <div className="absolute top-6 left-6">
                    <div className={`bg-gradient-to-r ${curriculumLevels[selectedLevel].color} text-white px-4 py-2 rounded-full font-bold shadow-lg`}>
                      {curriculumLevels[selectedLevel].level}
                    </div>
                  </div>

                  {/* 가격 정보 */}
                  <div className="absolute bottom-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <div className="text-2xl font-bold text-primary">{curriculumLevels[selectedLevel].price}</div>
                      <div className="text-sm text-neutral-600">{curriculumLevels[selectedLevel].duration}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 오른쪽: 내용 */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-bold text-neutral-800 mb-2">
                    {curriculumLevels[selectedLevel].title}
                  </h3>
                  <p className="text-xl text-neutral-600 mb-4">
                    {curriculumLevels[selectedLevel].subtitle}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-neutral-500">
                    <span>⏱️ {curriculumLevels[selectedLevel].duration}</span>
                    <span>💰 {curriculumLevels[selectedLevel].price}</span>
                  </div>
                </div>

                {/* 주요 특징 */}
                <div>
                  <h4 className="text-lg font-semibold text-neutral-800 mb-4">📋 주요 학습 내용</h4>
                  <ul className="space-y-3">
                    {curriculumLevels[selectedLevel].features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 학습 목표 */}
                <div>
                  <h4 className="text-lg font-semibold text-neutral-800 mb-4">🎯 학습 목표</h4>
                  <div className="flex flex-wrap gap-2">
                    {curriculumLevels[selectedLevel].goals.map((goal, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA 버튼 */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button href="#contact" variant="primary">
                    무료 레벨 테스트 신청
                  </Button>
                  <Button href="#contact" variant="secondary">
                    상담 받기
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* 학습 경로 */}
        {activeTab === 'paths' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="feature-card group"
              >
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${path.color} flex items-center justify-center text-4xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {path.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">{path.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">{path.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-neutral-500 mb-6">
                    <span>⏱️</span>
                    <span>{path.duration}</span>
                  </div>
                  <Button href="#contact" variant="outline" className="w-full">
                    자세히 보기
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 하단 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent-coral/10 to-primary/10 rounded-3xl p-12 border border-primary-100/30">
            <h3 className="text-3xl font-bold text-neutral-800 mb-4">
              지금 바로 시작하세요! 🚀
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              무료 레벨 테스트를 통해 현재 실력을 정확히 파악하고, <br />
              개인에게 최적화된 학습 계획을 받아보세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#contact" variant="primary" className="text-lg px-8 py-4">
                무료 레벨 테스트 신청 ✨
              </Button>
              <Button href="#instructors" variant="secondary" className="text-lg px-8 py-4">
                강사진 보기 👨‍🏫
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 