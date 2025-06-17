'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { href: '#about', label: '소개', icon: '🏫' },
    { href: '#curriculum', label: '커리큘럼', icon: '📚' },
    { href: '#instructors', label: '강사진', icon: '👨‍🏫' },
    { href: '#gallery', label: '갤러리', icon: '🖼️' },
    { href: '#testimonials', label: '후기', icon: '💬' },
    { href: '#contact', label: '문의하기', icon: '📞' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-primary-200/30' 
        : 'bg-gradient-to-r from-white/80 via-primary-50/30 to-accent-warm/20 backdrop-blur-lg border-b border-primary-100/20'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-coral p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">E</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-coral bg-clip-text text-transparent">
                ENG Academy
              </h1>
              <p className="text-xs text-warm-500 -mt-1">영어 전문 교육원</p>
            </div>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 rounded-xl text-warm-700 hover:text-primary transition-all duration-300 hover:bg-white/50"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-sm">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent-coral group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#contact"
              className="btn-primary px-6 py-3 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="flex items-center space-x-2">
                <span>무료 상담</span>
                <span>✨</span>
              </span>
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 rounded-lg bg-white/80 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block w-full h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/90 backdrop-blur-lg rounded-2xl mt-4 border border-primary-100/30 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-6 py-3 text-warm-700 hover:text-primary hover:bg-primary-50/30 transition-all duration-300 rounded-xl mx-2"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            <div className="px-6 py-2">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center py-3 rounded-xl shadow-lg"
              >
                무료 상담 신청 ✨
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 