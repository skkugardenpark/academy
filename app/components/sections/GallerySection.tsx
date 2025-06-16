import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'

const images = [
  {
    src: '/images/gallery/class-1.jpg',
    alt: '수업 진행 모습',
    title: '실전 회화 수업',
    description: '원어민 강사와 함께하는 interactive한 수업'
  },
  {
    src: '/images/gallery/class-2.jpg',
    alt: '그룹 스터디',
    title: '그룹 스터디',
    description: '학생들과 함께하는 협동 학습'
  },
  {
    src: '/images/gallery/presentation.jpg',
    alt: '프레젠테이션',
    title: '프레젠테이션 실습',
    description: '영어로 진행하는 비즈니스 프레젠테이션'
  },
  {
    src: '/images/gallery/event-1.jpg',
    alt: '문화 교류 행사',
    title: '문화 교류 행사',
    description: '다양한 문화를 체험하는 특별 프로그램'
  },
  {
    src: '/images/gallery/facility-1.jpg',
    alt: '학습 시설',
    title: '최신식 학습 시설',
    description: '쾌적한 환경에서 진행되는 수업'
  },
  {
    src: '/images/gallery/event-2.jpg',
    alt: '졸업식',
    title: '수료식',
    description: '새로운 시작을 축하하는 수료식'
  }
]

const floatingAnimation = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "reverse" as const,
  }
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-mint/10 to-white/5" />
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      <motion.div
        className="absolute top-40 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={floatingAnimation.animate}
        transition={floatingAnimation.transition}
      />

      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="학원 갤러리"
          subtitle="엔게이지 아카데미의 다양한 모습을 소개합니다"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <AnimatedSection
                animation="scale"
                delay={index * 0.1}
              >
                <div className="glass-effect rounded-2xl overflow-hidden hover-card">
                  <div className="relative h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-white/80">{image.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video bg-white rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {images[selectedImage].title}
                </h3>
                <p className="text-white/80">
                  {images[selectedImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 