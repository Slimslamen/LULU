'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    number: '01',
    icon: 'chat',
    title: 'Kontakta oss',
    desc: 'Ring eller skicka ett meddelande via formuläret nedan. Vi svarar snabbt och lyssnar på vad du behöver.',
  },
  {
    number: '02',
    icon: 'draw',
    title: 'Vi tar fram ett förslag',
    desc: 'Vi bedömer dina önskemål och skickar ett skräddarsytt förslag med ritningar och tydlig prisbild – utan dolda avgifter.',
  },
  {
    number: '03',
    icon: 'construction',
    title: 'Vagnen byggs',
    desc: 'Våra hantverkare börjar tillverkningen. Du följer projektet i vår kundportal och kan följa varje steg i realtid.',
  },
  {
    number: '04',
    icon: 'verified',
    title: 'Överlämning med garanti',
    desc: 'Du godkänner vagnen vid leverans och får full garanti på konstruktionen. Vi är med dig även efter leverans.',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const stepsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const cards = gsap.utils.toArray<HTMLElement>('.process-step', stepsRef.current!)
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Animate the connecting line
      const line = sectionRef.current?.querySelector<HTMLElement>('.process-line')
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#FAF7F2] py-36 px-8 md:px-[89px]">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-[89px]">
          <p className="font-headline uppercase tracking-[0.3em] text-[0.7rem] text-[#F97316] mb-4">
            Enkelt och tryggt
          </p>
          <h2 className="font-headline text-4xl md:text-5xl text-[#1A1A1A] mb-5">
            Hur det fungerar
          </h2>
          <p className="font-body text-black/50 text-lg max-w-xl mx-auto leading-relaxed">
            Från första kontakt till färdig vagn – vi gör processen så smidig som möjligt.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-black/10 z-0">
            <div
              className="process-line absolute inset-0 bg-[#F97316] origin-left"
              style={{ transformOrigin: 'left center' }}
            />
          </div>

          <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {STEPS.map((step) => (
              <div key={step.number} className="process-step flex flex-col items-center text-center">
                {/* Circle */}
                <div className="relative mb-8">
                  <div className="w-[104px] h-[104px] rounded-full border-2 border-black/10 bg-[#FAF7F2] flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-4xl text-black/30"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      {step.icon}
                    </span>
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#F97316] flex items-center justify-center font-headline text-white text-[0.65rem] tracking-wider">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-headline text-xl text-[#1A1A1A] mb-3">{step.title}</h3>
                <p className="font-body text-sm text-black/50 leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
