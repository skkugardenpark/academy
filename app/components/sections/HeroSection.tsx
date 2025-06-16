import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 패턴 */}
      <div className="hero-pattern" />
      <div className="hero-gradient" />
      
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* 텍스트 영역 */}
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="gradient-text">
            영어의 새로운 시작,<br />
            잉글리시 가든과 함께
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
            체계적인 커리큘럼과 전문 강사진이 함께하는 프리미엄 영어 교육 아카데미.
            당신의 영어 실력 향상을 위한 최고의 선택입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="#curriculum" className="btn-primary">
              커리큘럼 살펴보기
            </Link>
            <Link href="#contact" className="btn-secondary">
              무료 레벨 테스트
            </Link>
          </div>
          
          {/* 통계 */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-slate-600">수강생 만족도</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">12년</div>
              <div className="text-sm text-slate-600">교육 노하우</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5,000+</div>
              <div className="text-sm text-slate-600">누적 수강생</div>
            </div>
          </div>
        </div>
        
        {/* 이미지 영역 */}
        <div className="relative lg:h-[600px]">
          <div className="hero-image">
            <Image
              src="/images/hero-image.jpg"
              alt="English Garden Academy"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* 플로팅 카드 */}
          <div className="glass-effect absolute -bottom-6 -left-6 p-4 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-slate-900">IELTS 7.0+</div>
                <div className="text-sm text-slate-600">평균 성적 달성</div>
              </div>
            </div>
          </div>
          
          {/* 플로팅 배지 */}
          <div className="glass-effect absolute -top-4 -right-4 p-3">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="font-semibold text-slate-900">최우수 어학원 선정</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 