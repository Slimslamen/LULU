'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(overlayRef.current, { opacity: 0, duration: 1.4 })
        .from(headingRef.current, { y: 80, opacity: 0, duration: 1.1 }, '-=0.8')
        .from(subRef.current, { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
        .from(scrollRef.current, { opacity: 0, y: 10, duration: 0.6 }, '-=0.2')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lulus-truck.png"
          alt="Matvagn i urban miljö vid skymning"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"
        />
      </div>

      {/* Content */}
      <section id="hem" className="relative z-10 text-center px-5 max-w-[890px]">
        <h1
          ref={headingRef}
          className="font-headline text-5xl md:text-7xl text-white mb-8 leading-tight"
        >
          Utforska framtidens{' '}
          <span className="text-[#fd761a]">Gatumat</span>
        </h1>
        <p
          ref={subRef}
          className="text-white/80 text-lg md:text-xl mb-14 max-w-[550px] mx-auto font-body leading-relaxed"
        >
          Upplev hantverket bakom våra skräddarsydda matvagnar. Designade för
          prestanda, byggda för passion.
        </p>
        <button
          ref={ctaRef}
          className="bg-[#fd761a] text-white px-14 py-5 font-headline uppercase tracking-widest text-sm hover:bg-[#9d4300] transition-colors duration-300"
        >
          Starta Utforskaren
        </button>
      </section>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">
          Scrolla ner
        </span>
        <span className="material-symbols-outlined animate-bounce">
          expand_more
        </span>
      </div>
    </header>
  )
}
