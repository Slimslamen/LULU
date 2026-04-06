'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BottomCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#fd761a] py-36 px-8 text-center overflow-hidden relative"
    >
      {/* Decorative background icon */}
      <div
        className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4 scale-150 pointer-events-none"
        aria-hidden="true"
      >
        <span
          className="material-symbols-outlined text-[30rem]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          restaurant
        </span>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-[800px] mx-auto">
        <h2 className="font-headline text-5xl md:text-7xl text-white mb-8 leading-tight">
          Bygg din matvagn
        </h2>
        <p className="text-[#341100] text-xl mb-14 leading-relaxed font-body">
          Har du en unik idé? Låt oss förverkliga den tillsammans. Våra experter
          hjälper dig från skiss till färdig vagn.
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <button className="bg-black text-white px-14 py-5 font-headline uppercase tracking-widest text-sm hover:-translate-y-1 transition-transform duration-200">
            Få kostnadsfri offert
          </button>
          <button className="border-2 border-white text-white px-14 py-5 font-headline uppercase tracking-widest text-sm hover:bg-white hover:text-[#fd761a] transition-all duration-200">
            Se finansiering
          </button>
        </div>
      </div>
    </section>
  )
}
