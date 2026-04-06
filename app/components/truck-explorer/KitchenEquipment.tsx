'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const kitchenItems = [
  {
    name: 'Frys',
    icon: 'ac_unit',
    desc: 'Högkapacitetsfrys med digital temperaturkontroll för optimal förvaring.',
  },
  {
    name: 'Displaykyl',
    icon: 'kitchen',
    desc: 'Elegant exponering av dryck och kalla rätter bakom härdat glas.',
  },
  {
    name: 'Kylränna',
    icon: 'kitchen',
    desc: 'Smidig åtkomst till färska ingredienser under tillagning.',
  },
  {
    name: 'Ventilation',
    icon: 'air',
    desc: 'Kraftfullt fläktsystem med labyrintfilter för rökfri arbetsmiljö.',
  },
  {
    name: 'Skjutfönster',
    icon: 'window',
    desc: 'Termoisolerade glaspartier för enkel servering och kundkontakt.',
  },
  {
    name: 'Stekhäll',
    icon: 'cooking',
    desc: 'Industriell gjutjärnshäll med jämna värmezoner för perfekt stekyta.',
  },
  {
    name: 'Fritös',
    icon: 'oil_barrel',
    desc: 'Snabb återhämtning och hög kapacitet för krispigt resultat.',
  },
  {
    name: 'Diskho',
    icon: 'water_drop',
    desc: 'Dubbla hoar med beröringsfri kran och varmvattensystem.',
  },
]

export default function KitchenEquipment() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use gsap.fromTo so the final (visible) state is explicit —
      // gsap.from() leaves items at opacity:0 if the trigger never fires.
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      const items = gsap.utils.toArray<HTMLElement>('.kitchen-card', gridRef.current!)
      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    // Refresh after the pinned TruckExplorer section may have shifted positions
    const id = setTimeout(() => ScrollTrigger.refresh(), 300)

    return () => {
      clearTimeout(id)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#1c1b1b] py-36 px-8">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div ref={headingRef} className="mb-[89px]">
          <h2 className="font-headline text-4xl text-white mb-5">
            Utrustning i världsklass
          </h2>
          <div className="h-px w-5 bg-[#fd761a]" />
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {kitchenItems.map((item) => (
            <div
              key={item.name}
              className="kitchen-card group p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[#fd761a] text-4xl mb-5 block">
                {item.icon}
              </span>
              <h3 className="font-headline text-white text-xl mb-3">{item.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-body">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
