'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Comp {
  id: string
  name: string
  desc: string
  start: number
  end: number
  box: { x: number; y: number; w: number; h: number }
  dot: { x: number; y: number }
}

type CompBase = Omit<Comp, 'name' | 'desc'>

const COMP_BASES: CompBase[] = [
  { id: 'ventilation',      start: 0.15, end: 0.25, box: { x: 35, y: 20, w: 30, h: 16 }, dot: { x: 50, y: 16 } },
  { id: 'displaykyl',       start: 0.25, end: 0.35, box: { x: 23, y: 22, w: 14, h: 44 }, dot: { x: 28, y: 44 } },
  { id: 'stekhall',         start: 0.35, end: 0.45, box: { x: 35, y: 42, w: 21, h: 18 }, dot: { x: 43, y: 61 } },
  { id: 'fritos',           start: 0.45, end: 0.55, box: { x: 51, y: 40, w: 16, h: 16 }, dot: { x: 54, y: 59 } },
  { id: 'diskho',           start: 0.55, end: 0.65, box: { x: 72, y: 34, w: 14, h: 20 }, dot: { x: 75, y: 54 } },
  { id: 'gaslada',          start: 0.65, end: 0.75, box: { x: 34, y: 58, w: 16, h: 15 }, dot: { x: 25, y: 76 } },
  { id: 'forvaringsskap',   start: 0.75, end: 0.85, box: { x: 48, y: 56, w: 16, h: 15 }, dot: { x: 47, y: 73 } },
  { id: 'ventilationskapa', start: 0.85, end: 0.95, box: { x: 34, y: 18, w: 34, h: 20 }, dot: { x: 49, y: 31 } },
]

const LABELS = {
  sv: [
    { name: 'Ventilation',      desc: 'Kraftfull frånluft för en behaglig arbetsmiljö i vagnen' },
    { name: 'Displaykyl',       desc: 'Visa upp dina ingredienser och produkter på ett professionellt sätt' },
    { name: 'Stekhäll',         desc: 'Jämn och kraftfull värme för perfekt tillagning varje gång' },
    { name: 'Fritös',           desc: 'Krispigt och jämnt resultat med exakt temperaturkontroll' },
    { name: 'Diskho',           desc: 'Godkänd för professionell livsmedelshantering' },
    { name: 'Gaslåda',          desc: 'Säker och tillgänglig gasförvaring enligt gällande standard' },
    { name: 'Förvaringsskåp',   desc: 'Organiserad förvaring för all utrustning och råvaror' },
    { name: 'Ventilationskåpa', desc: 'Effektiv uppsamling av ånga och matos' },
  ],
  en: [
    { name: 'Ventilation',       desc: 'Powerful extraction fan for a comfortable working environment' },
    { name: 'Display fridge',    desc: 'Showcase your ingredients and products professionally' },
    { name: 'Griddle',           desc: 'Even, powerful heat for perfect cooking every time' },
    { name: 'Fryer',             desc: 'Crispy, consistent results with precise temperature control' },
    { name: 'Sink',              desc: 'Approved for professional food handling' },
    { name: 'Gas storage',       desc: 'Safe and accessible gas storage to current safety standards' },
    { name: 'Storage cabinet',   desc: 'Organised storage for all equipment and ingredients' },
    { name: 'Extractor hood',    desc: 'Efficient capture of steam and cooking odours' },
  ],
} as const

const UI = {
  sv: {
    eyebrow:  'UTFORSKA VAGNEN',
    heading:  'Allt du behöver.',
    heading2: 'Ingenting du inte behöver.',
    sub:      'Scrolla för att utforska varje del av din framtida matvagn.',
    altMain:  'Matvagn — samlad vy',
    altCut:   'Matvagn — genomskärning',
  },
  en: {
    eyebrow:  'EXPLORE THE TRUCK',
    heading:  'Everything you need.',
    heading2: 'Nothing you don\'t.',
    sub:      'Scroll to explore every part of your future food truck.',
    altMain:  'Food truck — assembled view',
    altCut:   'Food truck — cutaway view',
  },
} as const

function buildComps(lang: 'sv' | 'en'): Comp[] {
  return COMP_BASES.map((base, i) => ({ ...base, ...LABELS[lang][i] }))
}

const FI = 3
const FO = 2

export default function TruckExplorerSection({ lang = 'sv' }: { lang?: 'sv' | 'en' }) {
  const COMPS = buildComps(lang)
  const ui    = UI[lang]

  const sectionRef   = useRef<HTMLElement>(null)
  const assembledRef = useRef<HTMLImageElement>(null)
  const cutawayRef   = useRef<HTMLImageElement>(null)
  const progressRef  = useRef<HTMLDivElement>(null)
  const overlayRefs  = useRef<(SVGRectElement | null)[]>([])
  const dotWrapRefs  = useRef<(HTMLDivElement | null)[]>([])
  const textRefs     = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section   = sectionRef.current
    const assembled = assembledRef.current
    const cutaway   = cutawayRef.current
    if (!section || !assembled || !cutaway) return

    gsap.set(cutaway, { opacity: 0 })

    const preload = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image()
        img.onload  = () => resolve()
        img.onerror = () => resolve()
        img.src = src
      })

    function buildTL() {
      const tl = gsap.timeline({ defaults: { ease: 'none' } })

      const bar = progressRef.current
      if (bar) tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 100 }, 0)

      // Phase 1 — crossfade 0 → 15
      tl.fromTo(assembled, { opacity: 1 }, { opacity: 0, duration: 15 }, 0)
      tl.fromTo(cutaway,   { opacity: 0 }, { opacity: 1, duration: 15 }, 0)

      // Phase 2 — component highlights 15 → 95
      COMPS.forEach((comp, i) => {
        const s       = comp.start * 100
        const foStart = comp.end * 100 - FO

        const els = [overlayRefs.current[i], dotWrapRefs.current[i], textRefs.current[i]]
        els.forEach((el) => {
          if (!el) return
          tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: FI }, s)
          tl.fromTo(el, { opacity: 1 }, { opacity: 0, duration: FO }, foStart)
        })
      })

      // Phase 3 — exit 90 → 100
      tl.fromTo(cutaway,   { opacity: 1 }, { opacity: 0, duration: 10 }, 90)
      tl.fromTo(assembled, { opacity: 0 }, { opacity: 1, duration: 10 }, 90)

      return tl
    }

    let cancelled = false
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1025px)', () => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=900vh',
        pin: true,
        scrub: 1,
        animation: buildTL(),
      })
    })

    mm.add('(min-width: 768px) and (max-width: 1024px)', () => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=700vh',
        pin: true,
        scrub: 1,
        animation: buildTL(),
      })
    })

    mm.add('(max-width: 767px)', () => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=490vh',
        pin: true,
        scrub: 0.5,
        animation: buildTL(),
      })
    })

    Promise.all([
      preload('/images/truck-assembled.png'),
      preload('/images/truck-cutaway.png'),
    ]).then(() => {
      if (!cancelled) ScrollTrigger.refresh()
    })

    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad, { once: true })

    return () => {
      cancelled = true
      window.removeEventListener('load', onLoad)
      mm.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-white flex flex-col"
    >
      <div className="flex-none pt-16 md:pt-20 text-center px-4 pointer-events-none">
        <p
          className="font-body uppercase text-[11px] md:text-[12px] text-[#F97316] mb-[8px] md:mb-[13px]"
          style={{ letterSpacing: '3px' }}
        >
          {ui.eyebrow}
        </p>
        <h2 className="font-headline font-bold text-[28px] md:text-[48px] text-[#1A1A1A] leading-tight mb-[8px] md:mb-[13px]">
          {ui.heading}{' '}
          <br className="hidden md:inline" />
          {ui.heading2}
        </h2>
        <p className="font-body text-[15px] md:text-[18px] text-[#6B7280] max-w-[600px] mx-auto">
          {ui.sub}
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center min-h-0 px-4 md:px-0 py-3 md:py-5">
        <div className="relative w-full md:max-w-[700px] lg:max-w-[900px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={assembledRef}
            src="/images/truck-assembled.png"
            alt={ui.altMain}
            className="block w-full h-auto"
            style={{ willChange: 'opacity' }}
            draggable={false}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={cutawayRef}
            src="/images/truck-cutaway.png"
            alt={ui.altCut}
            className="absolute top-0 left-0 block w-full h-auto"
            style={{ willChange: 'opacity', opacity: 0 }}
            draggable={false}
          />

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {COMPS.map((comp, i) => (
              <rect
                key={comp.id}
                ref={(el) => { overlayRefs.current[i] = el }}
                x={comp.box.x}
                y={comp.box.y}
                width={comp.box.w}
                height={comp.box.h}
                rx={0.4}
                ry={0.8}
                fill="rgba(249,115,22,0.25)"
                stroke="#F97316"
                strokeWidth={2}
                vectorEffect="non-scaling-stroke"
                style={{ opacity: 0 }}
              />
            ))}
          </svg>

          {COMPS.map((comp, i) => (
            <div
              key={comp.id + '-dot'}
              ref={(el) => { dotWrapRefs.current[i] = el }}
              className="absolute md:hidden w-3 h-3"
              style={{
                left: `${comp.dot.x}%`,
                top: `${comp.dot.y}%`,
                transform: 'translate(-50%, -50%)',
                opacity: 0,
              }}
              aria-hidden="true"
            >
              <span className="absolute inset-0 rounded-full bg-[#F97316] opacity-75 animate-ping" />
              <span className="relative block w-3 h-3 rounded-full bg-[#F97316]" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-none relative h-[72px] md:h-[88px] mb-4 md:mb-6">
        {COMPS.map((comp, i) => (
          <div
            key={comp.id + '-text'}
            ref={(el) => { textRefs.current[i] = el }}
            className="absolute inset-x-0 top-0 flex flex-col items-center justify-start pointer-events-none px-4 md:px-0"
            style={{ opacity: 0 }}
          >
            <p className="font-headline font-bold text-[18px] md:text-[24px] text-[#1A1A1A] leading-tight">
              {comp.name}
            </p>
            <p className="font-body text-[14px] md:text-[16px] text-[#6B7280] mt-1 max-w-[500px] text-center">
              {comp.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        ref={progressRef}
        className="flex-none h-[2px] md:h-[3px] w-full bg-[#F97316] origin-left"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />
    </section>
  )
}
