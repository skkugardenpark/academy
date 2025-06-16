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

const socialLinks = [
  { name: 'Instagram', href: '#', icon: '/icons/instagram.svg' },
  { name: 'Facebook', href: '#', icon: '/icons/facebook.svg' },
  { name: 'YouTube', href: '#', icon: '/icons/youtube.svg' },
  { name: 'Blog', href: '#', icon: '/icons/blog.svg' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-light text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Image
              src="/images/logo.png"
              alt="Engage Academy"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              최고의 강사진과 체계적인 커리큘럼으로 
              여러분의 영어 실력 향상을 돕습니다.
              글로벌 인재로 성장하는 첫걸음을 
              저희와 함께 시작하세요.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-6 text-primary">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
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
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Engage Academy. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
              >
                개인정보처리방침
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
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