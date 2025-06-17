'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    src: '/images/gallery/classroom-1.jpg',
    alt: '현대적인 교실 환경',
    title: '스마트 클래스룸',
    description: '최신 디지털 기술이 적용된 현대적인 교실에서 효과적인 학습이 이루어집니다.',
    category: 'facilities',
    featured: true
  },
  {
    id: 2,
    src: '/images/gallery/study-group.jpg',
    alt: '그룹 스터디 모습',
    title: '협력 학습 공간',
    description: '학생들이 함께 토론하고 협력하며 영어 실력을 향상시키는 공간입니다.',
    category: 'classes',
    featured: false
  },
  {
    id: 3,
    src: '/images/gallery/library.jpg',
    alt: '영어 전용 도서관',
    title: '영어 리소스 센터',
    description: '다양한 영어 학습 자료와 원서들이 구비된 전용 학습 공간입니다.',
    category: 'facilities',
    featured: true
  },
  {
    id: 4,
    src: '/images/gallery/presentation.jpg',
    alt: '프레젠테이션 수업',
    title: '실전 프레젠테이션',
    description: '실제 비즈니스 환경에서 활용할 수 있는 프레젠테이션 스킬을 연습합니다.',
    category: 'classes',
    featured: false
  },
  {
    id: 5,
    src: '/images/gallery/counseling.jpg',
    alt: '개별 상담 세션',
    title: '1:1 맞춤 컨설팅',
    description: '개인의 학습 목표와 수준에 맞는 맞춤형 학습 계획을 수립합니다.',
    category: 'counseling',
    featured: false
  },
  {
    id: 6,
    src: '/images/gallery/activity.jpg',
    alt: '영어 액티비티',
    title: '문화 체험 활동',
    description: '영어권 문화를 직접 체험하며 자연스럽게 영어를 습득합니다.',
    category: 'activities',
    featured: true
  },
  {
    id: 7,
    src: '/images/hero-bg.jpg',
    alt: '온라인 수업',
    title: '하이브리드 러닝',
    description: '온라인과 오프라인을 결합한 효율적인 학습 시스템을 제공합니다.',
    category: 'classes',
    featured: false
  },
  {
    id: 8,
    src: '/images/about/classroom.jpg',
    alt: '토론 수업',
    title: '영어 토론 클래스',
    description: '다양한 주제로 진행되는 토론을 통해 논리적 사고력을 기릅니다.',
    category: 'classes',
    featured: true
  },
  {
    id: 9,
    src: '/images/hero-bg.jpg',
    alt: '휴게 공간',
    title: '학습자 라운지',
    description: '수업 전후 편안하게 쉬며 동료들과 교류할 수 있는 공간입니다.',
    category: 'facilities',
    featured: false
  },
  {
    id: 10,
    src: '/images/about/classroom.jpg',
    alt: '시험 대비반',
    title: 'TOEIC/IELTS 집중반',
    description: '목표 점수 달성을 위한 체계적이고 집중적인 시험 대비 프로그램입니다.',
    category: 'classes',
    featured: false
  },
  {
    id: 11,
    src: '/images/gallery/library.jpg',
    alt: '개별 학습실',
    title: '개인 스터디룸',
    description: '집중적인 개별 학습이 가능한 조용하고 쾌적한 개인 공간입니다.',
    category: 'facilities',
    featured: false
  },
  {
    id: 12,
    src: '/images/gallery/activity.jpg',
    alt: '문화 교류 행사',
    title: '글로벌 네트워킹',
    description: '다양한 국적의 사람들과 교류하며 실전 영어 커뮤니케이션을 연습합니다.',
    category: 'activities',
    featured: true
  }
]

const categories = [
  { id: 'all', label: '전체', icon: '🏫', count: galleryItems.length },
  { id: 'facilities', label: '시설', icon: '🏢', count: galleryItems.filter(item => item.category === 'facilities').length },
  { id: 'classes', label: '수업', icon: '📚', count: galleryItems.filter(item => item.category === 'classes').length },
  { id: 'activities', label: '활동', icon: '🎯', count: galleryItems.filter(item => item.category === 'activities').length },
  { id: 'counseling', label: '상담', icon: '💬', count: galleryItems.filter(item => item.category === 'counseling').length }
]

const stats = [
  { number: '12+', label: '학습 공간', icon: '🏢' },
  { number: '50+', label: '월간 활동', icon: '🎯' },
  { number: '24/7', label: '시설 이용', icon: '⏰' },
  { number: '100%', label: '만족도', icon: '⭐' }
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage)
      const nextIndex = (currentIndex + 1) % filteredItems.length
      setSelectedImage(filteredItems[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage)
      const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
      setSelectedImage(filteredItems[prevIndex].id)
    }
  }

  return (
    <section id="gallery" className="section-padding relative overflow-hidden section-gradient">
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-pattern opacity-5" />
      <motion.div
        className="absolute top-40 -left-20 w-60 h-60 bg-accent-coral/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="container relative z-10">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100/30 mb-6">
            <span className="text-primary font-semibold text-sm">🖼️ Gallery</span>
          </div>
          <h2 className="section-title">
            최고의 시설에서 <br />
            <span className="highlight-text">최상의 교육을</span>
          </h2>
          <p className="text-xl text-warm-600 max-w-3xl mx-auto leading-relaxed">
            현대적인 시설과 다양한 프로그램을 통해 <br />
            최적의 학습 환경을 제공합니다.
          </p>
        </motion.div>

        {/* 통계 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-100/30 shadow-lg"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-warm-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* 카테고리 필터 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white/80 text-warm-700 hover:bg-primary/10 border border-primary-100/30'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id ? 'bg-white/20' : 'bg-primary/10 text-primary'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* 갤러리 그리드 */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                item.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(item.id)}
            >
              <div className={`relative ${item.featured ? 'aspect-[2/1]' : 'aspect-square'} overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={item.featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* 오버레이 정보 */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-white">
                    <h3 className={`font-bold mb-2 ${item.featured ? 'text-2xl' : 'text-lg'}`}>
                      {item.title}
                    </h3>
                    <p className={`leading-relaxed ${item.featured ? 'text-base' : 'text-sm'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* 확대 아이콘 */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg">🔍</span>
                </div>

                {/* 카테고리 배지 */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-warm-700">
                    {categories.find(cat => cat.id === item.category)?.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 하단 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-primary-100/30 shadow-xl">
            <h3 className="text-3xl font-bold text-warm-800 mb-4">
              직접 방문해서 확인해보세요! 🏫
            </h3>
            <p className="text-lg text-warm-600 mb-8 max-w-2xl mx-auto">
              최첨단 시설과 쾌적한 환경에서 진행되는 수업을 <br />
              직접 체험해보시기 바랍니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                시설 견학 신청 🏢
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                체험 수업 예약 📚
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 라이트박스 모달 */}
      {isLightboxOpen && selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const currentItem = galleryItems.find(item => item.id === selectedImage)
              return currentItem ? (
                <>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={currentItem.src}
                      alt={currentItem.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                    <h3 className="text-2xl font-bold text-white mb-2">{currentItem.title}</h3>
                    <p className="text-white/90">{currentItem.description}</p>
                  </div>
                  
                  {/* 네비게이션 버튼 */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    →
                  </button>
                  
                  {/* 닫기 버튼 */}
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    ✕
                  </button>
                </>
              ) : null
            })()}
          </div>
        </motion.div>
      )}
    </section>
  )
} 