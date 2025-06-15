'use client';

import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { SiNaver } from 'react-icons/si';

const navigation = {
  main: [
    { name: '학원소개', href: '#about' },
    { name: '커리큘럼', href: '#curriculum' },
    { name: '강사진', href: '#teacher' },
    { name: '상담신청', href: '#contact' },
    { name: '공지사항', href: '#notice' },
    { name: '온라인수업', href: '#online' },
  ],
  programs: [
    { name: 'Regular Course', href: '#' },
    { name: 'Special Course', href: '#' },
    { name: '1:1 Tutoring', href: '#' },
    { name: '레벨테스트', href: '#' },
  ],
  support: [
    { name: '입학상담', href: '#' },
    { name: '학습상담', href: '#' },
    { name: '자주 묻는 질문', href: '#' },
    { name: '이용약관', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: BsFacebook },
    { name: 'Instagram', href: '#', icon: BsInstagram },
    { name: 'YouTube', href: '#', icon: BsYoutube },
    { name: 'Blog', href: '#', icon: SiNaver },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h3 className="text-2xl font-bold text-white">Future English</h3>
            <p className="text-gray-400 text-sm leading-6">
              체계적인 커리큘럼과 전문 강사진이 함께하는<br />
              대한민국 대표 초등영어 전문 교육기관
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  사이트맵
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  프로그램
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.programs.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  고객지원
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  연락처
                </h3>
                <ul role="list" className="mt-4 space-y-4 text-gray-300">
                  <li className="text-sm">
                    서울특별시 강남구 대치동<br />
                    영어교육센터 8층
                  </li>
                  <li className="text-sm">
                    Tel: 02-1234-5678<br />
                    Fax: 02-1234-5679
                  </li>
                  <li className="text-sm">
                    평일: 10:00 - 22:00<br />
                    주말: 10:00 - 18:00
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 Future English Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 