import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-16 bg-mint">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 영역 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[600px] mx-auto lg:mx-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              최고의 교육 환경과<br />
              전문적인 커리큘럼
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              엔게이지 아카데미는 10년 이상의 교육 노하우를 바탕으로, 
              학생 개개인의 잠재력을 최대한 끌어올리는 맞춤형 교육을 제공합니다.
              최신 트렌드를 반영한 커리큘럼과 실무 중심의 교육으로 
              미래 인재 양성에 앞장서고 있습니다.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                체계적인 커리큘럼 운영
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                경험이 풍부한 전문 강사진
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                최신 교육 시설 및 기자재
              </li>
            </ul>
          </motion.div>

          {/* 이미지 영역 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-image.jpg"
                alt="학원 전경"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold text-primary">10년+</p>
              <p className="text-gray-600">교육 노하우</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 