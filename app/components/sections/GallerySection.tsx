import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/classroom-1.jpg',
    alt: '현대적인 강의실',
    description: '최신 시설을 갖춘 쾌적한 강의실'
  },
  {
    id: 2,
    src: '/images/gallery/study-group.jpg',
    alt: '그룹 스터디',
    description: '활발한 토론과 그룹 학습'
  },
  {
    id: 3,
    src: '/images/gallery/presentation.jpg',
    alt: '학생 프레젠테이션',
    description: '자신감 있는 발표 실습'
  },
  {
    id: 4,
    src: '/images/gallery/library.jpg',
    alt: '학습 자료실',
    description: '다양한 학습 자료 구비'
  },
  {
    id: 5,
    src: '/images/gallery/counseling.jpg',
    alt: '1:1 상담',
    description: '맞춤형 학습 상담'
  },
  {
    id: 6,
    src: '/images/gallery/activity.jpg',
    alt: '특별 활동',
    description: '즐거운 문화 체험 활동'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: image.id * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-semibold mb-2">{image.alt}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute -top-10 right-0 text-white hover:text-mint"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-[80vh]">
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 