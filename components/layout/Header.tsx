'use client'

import Link from 'next/link'
import Image from 'next/image'
import { RightActions } from './RightActions'

export default function Header() {
  return (
    <header className="bg-header-bg border-b border-header-stroke">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-6 font-medium">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="다짜고짜"
              width={165}
              height={46}
            />
          </Link>

          <Link href="/spots">관광지 둘러보기</Link>
          <Link href="/courses">공유코스 둘러보기</Link>
        </div>

        <RightActions />
      </nav>
    </header>
  )
}
