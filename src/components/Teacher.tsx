'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';

const teachers = [
  {
    name: "Sarah Johnson",
    role: "Head Teacher",
    image: "/images/teacher1.jpg",
    education: "Harvard University",
    experience: "15+ years",
    description: "영어교육 전문가로서 체계적인 커리큘럼 개발과 학생 맞춤형 교육을 제공합니다.",
    expertise: ["Reading", "Writing", "Speaking"]
  },
  {
    name: "Michael Brown",
    role: "Senior Teacher",
    image: "/images/teacher2.jpg",
    education: "Oxford University",
    experience: "12+ years",
    description: "원어민 수준의 발음과 회화 교육으로 실전 영어 실력 향상을 도와드립니다.",
    expertise: ["Pronunciation", "Grammar", "TOEFL"]
  },
  {
    name: "Emma Davis",
    role: "Grammar Specialist",
    image: "/images/teacher3.jpg",
    education: "Cambridge University",
    experience: "10+ years",
    description: "문법과 어휘 교육 전문가로서 체계적인 기초 실력 향상을 지원합니다.",
    expertise: ["Grammar", "Vocabulary", "Writing"]
  }
];

const testimonials = [
  {
    content: "1년간 수업을 들었는데 아이의 영어 실력이 눈에 띄게 향상되었습니다. 특히 회화 실력이 많이 늘었어요.",
    author: "김지영",
    role: "학부모",
    rating: 5
  },
  {
    content: "선생님들이 너무 친절하시고 수업도 재미있게 진행해주셔서 아이가 영어 공부를 즐겁게 하고 있어요.",
    author: "이미경",
    role: "학부모",
    rating: 5
  },
  {
    content: "체계적인 커리큘럼과 꾸준한 관리 덕분에 영어 성적이 많이 올랐습니다. 정말 감사드립니다.",
    author: "박서연",
    role: "학부모",
    rating: 5
  }
];

export default function Teacher() {
  return (
    <section id="teacher" className="py-24 bg-white">
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
            전문 강사진 소개
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            풍부한 경험과 전문성을 갖춘 강사진이 최고의 교육을 제공합니다
          </motion.p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 rounded-t-2xl overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{teacher.role}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-4">{teacher.education}</span>
                  <span>{teacher.experience}</span>
                </div>
                <p className="text-gray-600 mb-4">{teacher.description}</p>
                <div className="flex flex-wrap gap-2">
                  {teacher.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-emerald-50 rounded-3xl p-8 md:p-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            학부모 후기
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex text-emerald-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <BsStarFill key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 