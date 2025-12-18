import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/layout/Header'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
