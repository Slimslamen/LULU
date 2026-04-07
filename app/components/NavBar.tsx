'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS_SV = [
  { label: 'Hem',            href: '/' },
  { label: 'Om vagnen',      href: '#omvagnen' },
  { label: 'Prisberäknaren', href: '#kalkyl' },
]

const LINKS_EN = [
  { label: 'Home',    href: '/en' },
  { label: 'About',   href: '#omvagnen' },
  { label: 'Calculator', href: '#kalkyl' },
]

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isHome    = pathname === '/'
  const isEnglish = pathname.startsWith('/en')
  const showLinks = isHome || isEnglish

  const navLinks  = isEnglish ? LINKS_EN : LINKS_SV
  const loginLabel = isEnglish ? 'Log in'    : 'Logga in'
  const ctaLabel   = isEnglish ? 'Book a truck' : 'Boka vagn'

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f4]/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-5 py-3 max-w-[1440px] mx-auto">

        {/* Logo */}
        <Link href={isEnglish ? '/en' : '/'} className="font-headline text-2xl font-bold tracking-tighter text-black">
          Lulu's
        </Link>

        {/* Desktop links — only on home + english pages */}
        {showLinks && (
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-headline uppercase tracking-widest text-[0.75rem] text-black/60 hover:text-[#9d4300] transition-colors duration-300"
              >
                {label}
              </a>
            ))}
            <Link
              href="/login"
              className="font-headline uppercase tracking-widest text-[0.75rem] text-black/60 hover:text-[#9d4300] transition-colors duration-300"
            >
              {loginLabel}
            </Link>
            <a
              href="#kontakt"
              className="bg-black text-white px-8 py-3 font-headline uppercase tracking-widest text-[0.75rem] hover:-translate-y-1 transition-transform duration-200"
            >
              {ctaLabel}
            </a>
          </div>
        )}

        {/* Mobile hamburger — only when links are shown */}
        {showLinks && (
          <button
            className="md:hidden text-black"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Öppna meny"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {showLinks && mobileOpen && (
        <div className="md:hidden bg-[#fcf9f4] border-t border-black/10 px-5 py-5 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="font-headline uppercase tracking-widest text-sm text-black/60"
            >
              {label}
            </a>
          ))}
          <Link
            href="/login"
            className="font-headline uppercase tracking-widest text-sm text-black/60"
          >
            {loginLabel}
          </Link>
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="bg-black text-white px-6 py-3 font-headline uppercase tracking-widest text-sm w-full mt-2 text-center"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </nav>
  )
}
