'use client';

import { motion } from 'framer-motion';
import { BsBook, BsLightbulb, BsPeople } from 'react-icons/bs';

const programs = [
  {
    icon: <BsBook className="w-8 h-8" />,
    title: "Regular Course",
    description: "체계적인 레벨별 정규과정",
    features: [
      "Reading & Writing",
      "Speaking & Listening",
      "Grammar & Vocabulary",
      "Weekly Test & Review"
    ],
    level: "Pre-Master / Paean / Gaia"
  },
  {
    icon: <BsLightbulb className="w-8 h-8" />,
    title: "Special Course",
    description: "방학 특별 집중 프로그램",
    features: [
      "문법 특강 (ReGrammar)",
      "인텐시브 (문법+어휘)",
      "구문 특강",
      "외고전공어 준비"
    ],
    level: "Veritas / Metis / Master"
  },
  {
    icon: <BsPeople className="w-8 h-8" />,
    title: "1:1 Tutoring",
    description: "맞춤형 개인 교습 과정",
    features: [
      "개인별 맞춤 커리큘럼",
      "취약점 집중 보완",
      "실시간 피드백",
      "정기적 성과 분석"
    ],
    level: "All Levels Available"
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            체계적인 커리큘럼
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            수준별 맞춤 교육으로 최적의 학습 효과를 제공합니다
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 bg-gradient-to-r from-emerald-500 to-emerald-600">
                <div className="text-white mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-emerald-100">{program.description}</p>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <ul className="space-y-4 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">레벨: {program.level}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            무료 레벨테스트 신청
          </a>
        </motion.div>
      </div>
    </section>
  );
} 