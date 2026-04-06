'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function OmVagnen() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
      })

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#fcf9f4] py-36 px-8 md:px-[89px]">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-[89px] items-center">

        {/* Text — second on mobile, first on desktop */}
        <div ref={textRef} className="order-2 md:order-1">
          <div className="inline-block bg-[#fd761a]/10 text-[#9d4300] font-body text-[0.7rem] px-3 py-2 mb-5 tracking-widest uppercase">
            Kvalitet i varje detalj
          </div>
          <h2 className="font-headline text-4xl text-[#1c1c19] mb-8 leading-tight">
            Designad för det moderna
            <br />
            köket på hjul.
          </h2>
          <div className="space-y-5 text-[#1c1c19]/70 leading-[1.618] text-lg font-body">
            <p>
              Varje Lulu's matvagn är ett resultat av noggrann ingenjörskonst
              och en djup förståelse för gatumatens krav. Vi kombinerar hållbara
              material med ergonomisk design för att skapa en arbetsplats som
              inte bara ser fantastisk ut, utan också optimerar ditt
              arbetsflöde.
            </p>
            <p>
              Från den robusta stålramen till den avancerade ventilationen – vi
              lämnar inget åt slumpen. Upptäck hur vi har revolutionerat
              konceptet matvagn.
            </p>
          </div>
        </div>

        {/* Image — first on mobile, second on desktop */}
        <div ref={imageRef} className="order-1 md:order-2">
          <div className="aspect-[1/1.618] relative overflow-hidden bg-[#f0ede9]">
            <Image
              src="/images/HeroLulu.png"
              alt="Professionell köksinteriör i matvagnen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
