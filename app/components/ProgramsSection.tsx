import { motion } from 'framer-motion'

const programs = [
  {
    title: '코딩 기초',
    description: '프로그래밍의 기본 개념부터 실습까지, 처음 시작하는 분들을 위한 과정',
    icon: '💻',
    features: ['Python 기초', '알고리즘 입문', '웹 개발 기초'],
  },
  {
    title: '웹 개발',
    description: '실무에서 사용되는 최신 웹 기술을 배우는 전문가 과정',
    icon: '🌐',
    features: ['React/Next.js', 'Node.js', '데이터베이스'],
  },
  {
    title: '앱 개발',
    description: 'iOS/Android 앱 개발을 위한 종합 교육 과정',
    icon: '📱',
    features: ['Swift/SwiftUI', 'Kotlin', '앱 배포'],
  },
  {
    title: 'AI/데이터 사이언스',
    description: '인공지능과 데이터 분석의 핵심을 배우는 심화 과정',
    icon: '🤖',
    features: ['머신러닝', '딥러닝', '데이터 분석'],
  },
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            교육 프로그램
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            각 분야별 전문가들이 설계한 체계적인 커리큘럼으로
            여러분의 성장을 도와드립니다
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <ul className="space-y-2 mb-6">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-mint text-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                자세히 보기
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 