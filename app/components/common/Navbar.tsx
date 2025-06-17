import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary-100/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">ENG Academy</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-neutral-600 hover:text-primary">소개</Link>
            <Link href="#programs" className="text-neutral-600 hover:text-primary">프로그램</Link>
            <Link href="#curriculum" className="text-neutral-600 hover:text-primary">커리큘럼</Link>
            <Link href="#contact" className="text-neutral-600 hover:text-primary">문의하기</Link>
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2"
          >
            <span className={`block w-6 h-0.5 bg-neutral-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-neutral-600 mt-1 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-neutral-600 mt-1 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#about" className="block px-3 py-2 text-neutral-600 hover:text-primary">소개</Link>
              <Link href="#programs" className="block px-3 py-2 text-neutral-600 hover:text-primary">프로그램</Link>
              <Link href="#curriculum" className="block px-3 py-2 text-neutral-600 hover:text-primary">커리큘럼</Link>
              <Link href="#contact" className="block px-3 py-2 text-neutral-600 hover:text-primary">문의하기</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 