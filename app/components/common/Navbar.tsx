import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const menuItems = [
  { href: 'about', label: '학원소개' },
  { href: 'curriculum', label: '커리큘럼' },
  { href: 'instructors', label: '강사진' },
  { href: 'gallery', label: '갤러리' },
  { href: 'testimonials', label: '수강후기' },
  { href: 'faq', label: 'FAQ' },
  { href: 'location', label: '오시는 길' },
  { href: 'contact', label: '상담신청' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // 네비게이션 바 높이
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-secondary/60 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">English Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-dark hover:text-primary transition-colors">
              학원소개
            </Link>
            <Link href="#curriculum" className="text-dark hover:text-primary transition-colors">
              커리큘럼
            </Link>
            <Link href="#instructors" className="text-dark hover:text-primary transition-colors">
              강사진
            </Link>
            <Link href="#gallery" className="text-dark hover:text-primary transition-colors">
              갤러리
            </Link>
            <Link href="#contact" className="text-dark hover:text-primary transition-colors">
              수강신청
            </Link>
            <Link href="#faq" className="text-dark hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="#location" className="text-dark hover:text-primary transition-colors">
              오시는길
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`
            md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="flex flex-col p-8">
              <button
                className="self-end text-dark hover:text-primary transition-colors mb-8"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col space-y-6">
                <Link
                  href="#about"
                  className="text-dark hover:text-primary transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  학원소개
                </Link>
                <Link
                  href="#curriculum"
                  className="text-dark hover:text-primary transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  커리큘럼
                </Link>
                <Link
                  href="#instructors"
                  className="text-dark hover:text-primary transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  강사진
                </Link>
                <Link
                  href="#gallery"
                  className="text-dark hover:text-primary transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  갤러리
                </Link>
                <Link
                  href="#contact"
                  className="text-dark hover:text-primary transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  수강신청
                </Link>
                <Link
                  href="#faq"
                  className="text-dark hover:text-primary transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="#location"
                  className="text-dark hover:text-primary transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  오시는길
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 