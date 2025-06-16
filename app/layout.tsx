import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '엔게이지 아카데미 - 미래를 선도하는 IT 교육의 중심',
  description: '체계적인 커리큘럼과 실무 중심의 교육으로 IT 인재를 양성하는 엔게이지 아카데미입니다.',
  keywords: '학원, 교육, 프로그래밍, 코딩',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-gradient-to-br from-slate-50 to-mint/30">{children}</body>
    </html>
  )
} 