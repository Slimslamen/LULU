'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LanguageToggle() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  return (
    <Link
      href={isEnglish ? '/' : '/en'}
      className="inline-flex items-center gap-2 text-[#fcf9f4]/50 hover:text-[#fd761a] transition-colors font-body text-xs"
    >
      <span aria-hidden="true">🌐</span>
      {isEnglish ? 'Svenska' : 'English'}
    </Link>
  )
}
