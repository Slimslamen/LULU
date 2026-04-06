'use client'

import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const specs = [
  { label: 'Total längd', value: '6,0 m', sub: 'Kompakt format för alla platser' },
  { label: 'Bredd', value: '2,4 m', sub: 'Standard vägbredd' },
  { label: 'Höjd', value: '3,2 m', sub: 'Friståendetak med ventilation' },
  { label: 'Köksyta', value: '18 m²', sub: 'Ergonomisk arbetsyta' },
  { label: 'Strömförsörjning', value: '380V', sub: 'Trefasigt nätanslutning' },
  { label: 'Vattenkapacitet', value: '200 L', sub: 'Färskvatten + avlopp' },
  { label: 'Gastank', value: '2 × 47 kg', sub: 'Propangas, certifierat' },
  { label: 'Max lastvikt', value: '3 500 kg', sub: 'Totalvikt med last' },
  { label: 'Isolering', value: '100 mm', sub: 'Polyuretanskikt i väggar' },
  { label: 'Kvalité', value: '100 mm', sub: 'Byggt med kvalité' },
]

export default function Specifikationer() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -6,
      boxShadow: '0 20px 48px rgba(249,115,22,0.12)',
      borderColor: 'rgba(249,115,22,0.3)',
      duration: 0.3,
      ease: 'power2.out',
    })
  }, [])

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      borderColor: 'rgba(26,26,26,0.08)',
      duration: 0.35,
      ease: 'power2.out',
    })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      const cards = gsap.utils.toArray<HTMLElement>('.spec-card', gridRef.current!)
      gsap.from(cards, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: 'power3.out',
      })

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#FAF7F2] py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-14">
          <span className="inline-block text-[#F97316] text-sm font-bold tracking-[0.18em] uppercase mb-4">
            Tekniska data
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
            Specifikationer
          </h2>
          <p className="mt-4 text-[#1A1A1A]/50 text-base max-w-xl">
            Alla mått och tekniska uppgifter är framtagna för att ge dig full
            insyn i vad vår vagn erbjuder.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="spec-card bg-white rounded-2xl p-7 border border-[#1A1A1A]/8 shadow-sm cursor-default"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className="text-[#F97316] text-sm font-bold tracking-wide uppercase mb-2">
                {spec.label}
              </p>
              <p className="text-[#1A1A1A] text-3xl font-extrabold tracking-tight mb-1.5">
                {spec.value}
              </p>
              <p className="text-[#1A1A1A]/45 text-sm font-medium">{spec.sub}</p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-[#1A1A1A]/30 text-xs">
          * Alla specifikationer är ungefärliga och kan variera beroende på konfiguration. Kontakta oss för exakta mått.
        </p>
      </div>
    </section>
  )
}
