import Image from 'next/image'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'

const images = [
  {
    src: '/images/gallery/classroom-1.jpg',
    alt: '현대적인 교실',
    title: '최신 시설의 교실',
    description: '쾌적한 학습 환경을 제공합니다.'
  },
  {
    src: '/images/gallery/study-group.jpg',
    alt: '스터디 그룹',
    title: '그룹 스터디',
    description: '함께 학습하며 성장합니다.'
  },
  {
    src: '/images/gallery/library.jpg',
    alt: '도서관',
    title: '영어 도서관',
    description: '다양한 영어 학습 자료를 제공합니다.'
  },
  {
    src: '/images/gallery/presentation.jpg',
    alt: '프레젠테이션',
    title: '실전 영어',
    description: '실제 상황에서의 영어 사용을 연습합니다.'
  },
  {
    src: '/images/gallery/counseling.jpg',
    alt: '상담',
    title: '1:1 맞춤 상담',
    description: '개인별 학습 계획을 수립합니다.'
  },
  {
    src: '/images/gallery/activity.jpg',
    alt: '액티비티',
    title: '다양한 액티비티',
    description: '재미있게 영어를 배웁니다.'
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
  return (
    <AnimatedSection className="section-padding bg-neutral-50">
      <div className="container">
        <SectionTitle
          title="시설 둘러보기"
          subtitle="최고의 시설에서 최상의 교육을 제공합니다"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-neutral-800">
                  {image.title}
                </h3>
                <p className="mt-1 text-neutral-600">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
} 