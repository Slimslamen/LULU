'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ITEM_BASES = [
  { icon: 'ac_unit'   },
  { icon: 'kitchen'   },
  { icon: 'kitchen'   },
  { icon: 'air'       },
  { icon: 'window'    },
  { icon: 'cooking'   },
  { icon: 'oil_barrel'},
  { icon: 'water_drop'},
]

const LABELS = {
  sv: [
    { name: 'Frys',          desc: 'Högkapacitetsfrys med digital temperaturkontroll för optimal förvaring.' },
    { name: 'Displaykyl',    desc: 'Elegant exponering av dryck och kalla rätter bakom härdat glas.' },
    { name: 'Kylränna',      desc: 'Smidig åtkomst till färska ingredienser under tillagning.' },
    { name: 'Ventilation',   desc: 'Kraftfullt fläktsystem med labyrintfilter för rökfri arbetsmiljö.' },
    { name: 'Skjutfönster',  desc: 'Termoisolerade glaspartier för enkel servering och kundkontakt.' },
    { name: 'Stekhäll',      desc: 'Industriell gjutjärnshäll med jämna värmezoner för perfekt stekyta.' },
    { name: 'Fritös',        desc: 'Snabb återhämtning och hög kapacitet för krispigt resultat.' },
    { name: 'Diskho',        desc: 'Dubbla hoar med beröringsfri kran och varmvattensystem.' },
  ],
  en: [
    { name: 'Freezer',              desc: 'High-capacity freezer with digital temperature control for optimal storage.' },
    { name: 'Display fridge',       desc: 'Elegant display of beverages and cold dishes behind toughened glass.' },
    { name: 'Refrigerated counter', desc: 'Easy access to fresh ingredients during cooking.' },
    { name: 'Ventilation',          desc: 'Powerful fan system with labyrinth filter for a smoke-free working environment.' },
    { name: 'Sliding window',       desc: 'Thermally insulated glass panels for easy service and customer contact.' },
    { name: 'Griddle',              desc: 'Industrial cast iron griddle with even heat zones for perfect searing.' },
    { name: 'Fryer',                desc: 'Fast recovery and high capacity for crispy, consistent results.' },
    { name: 'Sink',                 desc: 'Double sinks with touchless tap and hot water system.' },
  ],
} as const

const UI = {
  sv: { heading: 'Utrustning i världsklass' },
  en: { heading: 'World-class equipment' },
} as const

export default function KitchenEquipment({ lang = 'sv' }: { lang?: 'sv' | 'en' }) {
  const items = ITEM_BASES.map((base, i) => ({ ...base, ...LABELS[lang][i] }))
  const ui = UI[lang]

  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )
      const cards = gsap.utils.toArray<HTMLElement>('.kitchen-card', gridRef.current!)
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)

    const id = setTimeout(() => ScrollTrigger.refresh(), 300)
    return () => { clearTimeout(id); ctx.revert() }
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#1c1b1b] py-36 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div ref={headingRef} className="mb-[89px]">
          <h2 className="font-headline text-4xl text-white mb-5">{ui.heading}</h2>
          <div className="h-px w-5 bg-[#fd761a]" />
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.name} className="kitchen-card group p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200">
              <span className="material-symbols-outlined text-[#fd761a] text-4xl mb-5 block">{item.icon}</span>
              <h3 className="font-headline text-white text-xl mb-3">{item.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
