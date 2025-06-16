import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '엔게이지 아카데미 - 최고의 교육 프로그램',
  description: '미래를 선도하는 교육, 엔게이지 아카데미와 함께하세요.',
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
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
} 