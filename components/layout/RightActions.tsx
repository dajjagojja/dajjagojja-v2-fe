// components/header/RightActions.tsx
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/hooks/useAuth'

export function RightActions() {
    const { isLoggedIn, role } = useAuth()

    // 비로그인
    if (!isLoggedIn) {
        return (
            <div className="flex items-center gap-7 font-medium">
                <Link href="/login">로그인</Link>
                <Link href="/signup" className="inline-flex items-center justify-center bg-primary text-white px-4 py-2 rounded-2xl">
                    가입하기
                </Link>

            </div>
        )
    }

    // 관리자
    if (role === 'ADMIN') {
        return (
            <div className="flex items-center gap-2.5 px-2.5 py-1.5 bg-[#FFD4BA] rounded-2xl">
                <Link href="/admin" className="btn-outline px-2.5 py-1.5 font-medium text-white bg-[#FFB543] rounded-xl">
                    관리자 페이지
                </Link>
                <Link href="/plan/new" className="btn-primary px-2.5 py-1.5 font-medium text-white bg-primary rounded-xl">
                    계획 생성하기
                </Link>
                <Link href="/mypage">
                    <Image
                        src="/images/profile.png"
                        alt="프로필이미지"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
        )
    }

    // 일반 로그인
    return (
        <div className="flex items-center gap-2.5 px-2.5 py-1.5 bg-[#FFD4BA] rounded-2xl">
            <Link href="/plan/new" className="bg-primary px-2.5 py-1.5 font-medium rounded-xl text-white">
                계획 생성하기
            </Link>

            {/* 추후 서버 연결 후 프로필 이미지와 연동시키는 기능 연결 */}
            <Link href="/mypage">
                <Image
                    src="/images/profile.png"
                    alt="프로필이미지"
                    width={40}
                    height={40}
                />
            </Link>
        </div>
    )
}
