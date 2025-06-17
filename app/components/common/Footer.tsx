import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const footerLinks = [
  {
    title: '학원 소개',
    links: [
      { label: '학원 소개', href: '#about' },
      { label: '강사진', href: '#instructors' },
      { label: '시설 안내', href: '#gallery' },
      { label: '오시는 길', href: '#location' },
    ],
  },
  {
    title: '교육 과정',
    links: [
      { label: '커리큘럼', href: '#curriculum' },
      { label: '수강 후기', href: '#testimonials' },
      { label: '자주 묻는 질문', href: '#faq' },
      { label: '상담 신청', href: '#contact' },
    ],
  },
  {
    title: '연락처',
    links: [
      { label: 'Tel: 02-1234-5678', href: 'tel:02-1234-5678' },
      { label: 'Email: info@engacademy.com', href: 'mailto:info@engacademy.com' },
      { label: '카카오톡 상담', href: '#' },
      { label: '네이버 블로그', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="text-2xl font-bold text-primary-light">
              Engage Academy
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              최고의 강사진과 체계적인 커리큘럼으로 
              여러분의 영어 실력 향상을 돕습니다.
              글로벌 인재로 성장하는 첫걸음을 
              저희와 함께 시작하세요.
            </p>
            <div className="flex items-center space-x-4 text-sm text-neutral-400">
              <Link href="#" className="hover:text-primary-light transition-colors duration-300">
                Instagram
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-primary-light transition-colors duration-300">
                Facebook
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-primary-light transition-colors duration-300">
                Blog
              </Link>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-6 text-primary-light">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary-light transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © 2024 Engage Academy. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-neutral-400 hover:text-primary-light transition-colors duration-300"
              >
                개인정보처리방침
              </Link>
              <Link
                href="/terms"
                className="text-sm text-neutral-400 hover:text-primary-light transition-colors duration-300"
              >
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 