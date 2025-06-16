import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: '학원소개', href: '#about' },
  { name: '커리큘럼', href: '#curriculum' },
  { name: '강사진', href: '#instructors' },
  { name: '수강후기', href: '#reviews' },
  { name: '갤러리', href: '#gallery' },
  { name: 'FAQ', href: '#faq' },
  { name: '오시는 길', href: '#location' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative flex items-center justify-between h-16">
              {/* 로고 */}
              <motion.a
                href="/"
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative h-8 w-auto">
                  <Image
                    src="/logo.png"
                    alt="엔게이지 아카데미"
                    fill
                    className="object-contain"
                    sizes="160px"
                    priority
                  />
                </div>
              </motion.a>

              {/* 데스크탑 메뉴 */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isScrolled
                          ? 'text-gray-700 hover:text-primary'
                          : 'text-white hover:text-mint'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* 모바일 메뉴 버튼 */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary focus:outline-none">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* 모바일 메뉴 패널 */}
          <AnimatePresence>
            <Disclosure.Panel className="md:hidden">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg"
              >
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-mint"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </motion.div>
            </Disclosure.Panel>
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  )
} 