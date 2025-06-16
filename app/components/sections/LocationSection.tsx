import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import AnimatedSection from '../common/AnimatedSection'
import Script from 'next/script'

interface KakaoLatLng {
  getLat(): number;
  getLng(): number;
}

interface KakaoMap {
  setCenter(position: KakaoLatLng): void;
  getCenter(): KakaoLatLng;
  setLevel(level: number): void;
  getLevel(): number;
}

interface KakaoMarker {
  setMap(map: KakaoMap | null): void;
  getMap(): KakaoMap | null;
  getPosition(): KakaoLatLng;
}

interface KakaoCustomOverlay {
  setMap(map: KakaoMap | null): void;
  getMap(): KakaoMap | null;
}

interface KakaoInfoWindow {
  open(map: KakaoMap, marker: KakaoMarker): void;
  close(): void;
}

interface KakaoMaps {
  maps: {
    load(callback: () => void): void;
    Map: new (container: HTMLElement, options: { center: KakaoLatLng; level: number }) => KakaoMap;
    LatLng: new (lat: number, lng: number) => KakaoLatLng;
    Marker: new (options: { position: KakaoLatLng }) => KakaoMarker;
    CustomOverlay: new (options: { position: KakaoLatLng; content: string; yAnchor: number }) => KakaoCustomOverlay;
    InfoWindow: new (options: { content: string }) => KakaoInfoWindow;
  }
}

declare global {
  interface Window {
    kakao: KakaoMaps
  }
}

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

export default function LocationSection() {
  useEffect(() => {
    const mapScript = document.createElement('script')
    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`
    document.head.appendChild(mapScript)

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map')
        if (!container) return

        const options = {
          center: new window.kakao.maps.LatLng(37.5012, 127.0396),
          level: 3
        }
        const map = new window.kakao.maps.Map(container, options)

        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(37.5012, 127.0396)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        })
        marker.setMap(map)

        // 인포윈도우 추가
        const iwContent = '<div style="padding:5px;">엔게이지 아카데미</div>'
        const infowindow = new window.kakao.maps.InfoWindow({
          content: iwContent
        })
        infowindow.open(map, marker)
      })
    }

    mapScript.addEventListener('load', onLoadKakaoMap)

    return () => mapScript.removeEventListener('load', onLoadKakaoMap)
  }, [])

  return (
    <section id="location" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-mint/20" />
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      <motion.div
        className="absolute top-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={floatingAnimation.animate}
        transition={floatingAnimation.transition}
      />

      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="오시는 길"
          subtitle="최적의 교육 환경을 갖춘 강남 캠퍼스로 오세요"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <AnimatedSection animation="slide-right">
            <div className="glass-effect rounded-2xl overflow-hidden shadow-lg">
              <div id="map" className="w-full h-[400px]" />
            </div>
          </AnimatedSection>

          {/* Location Info */}
          <AnimatedSection animation="slide-left" className="space-y-8">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                강남 캠퍼스
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">주소</h4>
                    <p className="text-gray-600">
                      서울특별시 강남구 테헤란로 123<br />
                      퓨처빌딩 8층
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">지하철</h4>
                    <p className="text-gray-600">
                      2호선 강남역 3번 출구 도보 5분<br />
                      신분당선 강남역 4번 출구 도보 3분
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">운영시간</h4>
                    <p className="text-gray-600">
                      평일: 09:00 - 22:00<br />
                      주말: 10:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">연락처</h4>
                    <p className="text-gray-600">
                      전화: 02-1234-5678<br />
                      이메일: info@engage.academy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
} 