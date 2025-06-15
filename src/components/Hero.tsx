'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-sm font-semibold text-emerald-600 tracking-wider uppercase mb-4">
              Future English Academy
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              초등학생을 위한<br />
              <span className="text-emerald-600">전문 영어교육</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              체계적인 커리큘럼과 전문 강사진이 함께하는<br />
              맞춤형 영어 교육으로 글로벌 인재를 양성합니다
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                무료 상담 신청
              </motion.a>
              <motion.a
                href="#curriculum"
                className="inline-flex items-center justify-center px-8 py-4 border border-emerald-600 text-base font-medium rounded-xl text-emerald-600 bg-white hover:bg-emerald-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                커리큘럼 살펴보기
              </motion.a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { title: '체계적인 레벨', desc: '수준별 맞춤 교육' },
                { title: '전문 강사진', desc: '원어민 수준의 강의' },
                { title: '1:1 관리', desc: '개인별 성장 관리' },
                { title: '입시 대비', desc: '체계적 입시 준비' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[600px] w-full">
              <Image
                src="/images/hero-student.jpg"
                alt="영어 교육"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">누적 학생수</p>
                    <p className="text-2xl font-bold text-gray-900">1,000+</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </section>
  );
} 