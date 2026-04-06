'use client'

import { useState } from 'react'

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f4]/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-5 py-3 max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="font-headline text-2xl font-bold tracking-tighter text-black">
          Lulu's
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#"
            className="font-headline uppercase tracking-widest text-[0.75rem] text-black/60 hover:text-[#9d4300] transition-colors duration-300"
          >
            Hem
          </a>
          <a
            href="#"
            className="font-headline uppercase tracking-widest text-[0.75rem] text-black font-bold border-b-2 border-[#9d4300] pb-0.5 -translate-y-0.5"
          >
            Vagnar
          </a>
          <a
            href="#"
            className="font-headline uppercase tracking-widest text-[0.75rem] text-black/60 hover:text-[#9d4300] transition-colors duration-300"
          >
            Om oss
          </a>
          <a
            href="#"
            className="font-headline uppercase tracking-widest text-[0.75rem] text-black/60 hover:text-[#9d4300] transition-colors duration-300"
          >
            Kontakt
          </a>
          <button className="bg-black text-white px-8 py-3 font-headline uppercase tracking-widest text-[0.75rem] hover:-translate-y-1 transition-transform duration-200">
            Boka vagn
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Öppna meny"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#fcf9f4] border-t border-black/10 px-5 py-5 flex flex-col gap-4">
          <a href="#" className="font-headline uppercase tracking-widest text-sm text-black/60">
            Hem
          </a>
          <a href="#" className="font-headline uppercase tracking-widest text-sm text-black font-bold">
            Vagnar
          </a>
          <a href="#" className="font-headline uppercase tracking-widest text-sm text-black/60">
            Om oss
          </a>
          <a href="#" className="font-headline uppercase tracking-widest text-sm text-black/60">
            Kontakt
          </a>
          <button className="bg-black text-white px-6 py-3 font-headline uppercase tracking-widest text-sm w-full mt-2">
            Boka vagn
          </button>
        </div>
      )}
    </nav>
  )
}
