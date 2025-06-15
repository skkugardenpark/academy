'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsEnvelope, BsGeoAlt, BsClock, BsTelephone } from 'react-icons/bs';

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    studentAge: '',
    program: '',
    contact: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 추가
    console.log('Form submitted:', formData);
    alert('상담 신청이 완료되었습니다. 곧 연락드리겠습니다.');
    setFormData({
      parentName: '',
      studentAge: '',
      program: '',
      contact: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                상담 문의
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                전문 상담사가 자세히 안내해드리겠습니다.<br />
                궁금하신 점을 문의해주세요.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <BsGeoAlt className="w-6 h-6" />,
                  title: "학원 위치",
                  details: [
                    "서울특별시 강남구 대치동",
                    "영어교육센터 8층"
                  ]
                },
                {
                  icon: <BsClock className="w-6 h-6" />,
                  title: "운영 시간",
                  details: [
                    "평일: 10:00 - 22:00",
                    "주말: 10:00 - 18:00"
                  ]
                },
                {
                  icon: <BsTelephone className="w-6 h-6" />,
                  title: "연락처",
                  details: [
                    "02-1234-5678",
                    "010-9876-5432"
                  ]
                },
                {
                  icon: <BsEnvelope className="w-6 h-6" />,
                  title: "이메일",
                  details: [
                    "info@englishacademy.com",
                    "support@englishacademy.com"
                  ]
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <div className="text-emerald-600 mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map or Additional Info */}
            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">찾아오시는 길</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 지하철 2호선 강남역 3번 출구에서 도보 5분</li>
                <li>• 버스 간선 146, 360, 740번 하차</li>
                <li>• 주차 가능 (2시간 무료)</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              무료 상담 신청
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    학생 이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                    학년
                  </label>
                  <select
                    id="grade"
                    name="studentAge"
                    value={formData.studentAge}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">선택해주세요</option>
                    <option value="4">초등학교 4학년</option>
                    <option value="5">초등학교 5학년</option>
                    <option value="6">초등학교 6학년</option>
                    <option value="7">중학교 1학년</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  연락처
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  희망 상담 시간
                </label>
                <select
                  id="time"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">선택해주세요</option>
                  <option value="morning">오전 (10:00 - 12:00)</option>
                  <option value="afternoon">오후 (14:00 - 17:00)</option>
                  <option value="evening">저녁 (18:00 - 20:00)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  문의사항
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-6 py-4 rounded-xl font-medium hover:bg-emerald-700 transition-colors duration-300"
                >
                  상담 신청하기
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 