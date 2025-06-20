import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-primary-100/20">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ENG Academy</h3>
            <p className="text-warm-600">
              최고의 영어 교육을 제공하는 ENG Academy입니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">프로그램</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#programs" className="text-warm-600 hover:text-primary">
                  초급 과정
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-warm-600 hover:text-primary">
                  중급 과정
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-warm-600 hover:text-primary">
                  고급 과정
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">학원 소개</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-warm-600 hover:text-primary">
                  학원 소개
                </Link>
              </li>
              <li>
                <Link href="#instructors" className="text-warm-600 hover:text-primary">
                  강사진 소개
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-warm-600 hover:text-primary">
                  오시는 길
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">문의</h4>
            <ul className="space-y-2">
              <li className="text-warm-600">
                Tel: 02-1234-5678
              </li>
              <li className="text-warm-600">
                Email: info@engacademy.com
              </li>
              <li className="text-warm-600">
                서울시 강남구 역삼동 123-45
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-100/20 text-center text-warm-600">
          <p>&copy; 2024 ENG Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 