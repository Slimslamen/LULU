'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── Data ─────────────────────────────────────────────────────── */

const EQUIPMENT = [
  { id: 'kyla',      name: 'KYLA',      price: 12_000, icon: 'ac_unit' },
  { id: 'ventilation', name: 'VENTILATION', price: 8_500, icon: 'air' },
  { id: 'fonster',   name: 'FÖNSTER',   price: 6_000,  icon: 'window' },
  { id: 'matlagning', name: 'MATLAGNING', price: 25_000, icon: 'cooking' },
  { id: 'vatten',    name: 'VATTEN',    price: 7_500,  icon: 'water_drop' },
  { id: 'el',        name: 'EL',        price: 15_000, icon: 'bolt' },
  { id: 'gas',       name: 'GAS',       price: 9_000,  icon: 'local_fire_department' },
  { id: 'inredning', name: 'INREDNING', price: 20_000, icon: 'countertops' },
  { id: 'foliering', name: 'FOLIERING', price: 18_000, icon: 'format_paint' },
]

const BASE_PRICE = 80_000

function fmt(n: number) {
  return new Intl.NumberFormat('sv-SE').format(n) + ' kr'
}

/* ─── Component ─────────────────────────────────────────────────── */

export default function TruckConfigurator() {
  const sectionRef = useRef<HTMLElement>(null)

  const [length, setLength] = useState(4.5)
  const [width, setWidth]   = useState(2.2)
  const [selections, setSelections] = useState<Record<string, string | null>>({
    kyla: null,
    ventilation: null,
    fonster: null,
    matlagning: null,
    vatten: null,
    el: null,
    gas: null,
    inredning: null,
    foliering: null,
  })
  const [displayTotal, setDisplayTotal] = useState(BASE_PRICE)

  const selectedIds = Object.values(selections).filter((v): v is string => v !== null)

  const equipmentTotal = selectedIds.reduce((sum, id) => {
    const item = EQUIPMENT.find((e) => e.id === id)
    return sum + (item?.price ?? 0)
  }, 0)

  const sizePremium = Math.round((length - 3) * 5_000 + (width - 2) * 8_000)
  const finalTotal  = BASE_PRICE + equipmentTotal + sizePremium

  // Animated price counter
  const animObj = useRef({ val: BASE_PRICE })

  useEffect(() => {
    const tween = gsap.to(animObj.current, {
      val: finalTotal,
      duration: 0.5,
      ease: 'power2.out',
      onUpdate() {
        setDisplayTotal(Math.round(animObj.current.val))
      },
    })
    return () => { tween.kill() }
  }, [finalTotal])

  // Section entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  function toggle(id: string) {
    setSelections((prev) => ({
      ...prev,
      [id]: prev[id] === id ? null : id,
    }))
  }

  return (
    <section ref={sectionRef} className="bg-[#FAF7F2] py-36 px-8 md:px-[89px]">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="mb-[89px] text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-black mb-5">
            Priskalkylator
          </h2>
          <div className="h-px w-8 bg-[#fd761a] mx-auto" />
        </div>

        {/* Calculator + Summary */}
        <div className="flex flex-col md:flex-row gap-[89px] relative">

          {/* ── Left: configuration ── */}
          <div className="w-full md:w-[65%] space-y-[89px]">

            {/* Step 1: Size sliders */}
            <div>
              <div className="flex items-center gap-5 mb-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-headline text-sm">
                  1
                </span>
                <h3 className="font-headline text-2xl uppercase tracking-widest">
                  Välj storlek
                </h3>
              </div>

              <div className="space-y-14 bg-white p-8 shadow-sm border border-[#c4c7c7]/20">
                {/* Length slider */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <label className="font-body text-sm uppercase tracking-wider text-black/60">
                      Längd
                    </label>
                    <span className="font-headline text-2xl text-[#F97316]">
                      {length.toFixed(1)}m
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="5.2"
                    step="0.1"
                    value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value))}
                  />
                  <div className="flex justify-between mt-2 font-body text-[0.6rem] text-black/30 uppercase tracking-widest">
                    <span>3.0m</span>
                    <span>5.2m</span>
                  </div>
                </div>

                {/* Width slider */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <label className="font-body text-sm uppercase tracking-wider text-black/60">
                      Bredd
                    </label>
                    <span className="font-headline text-2xl text-[#F97316]">
                      {width.toFixed(1)}m
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2.0"
                    max="2.4"
                    step="0.1"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                  />
                  <div className="flex justify-between mt-2 font-body text-[0.6rem] text-black/30 uppercase tracking-widest">
                    <span>2.0m</span>
                    <span>2.4m</span>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#c4c7c7]/20">
                  <p className="text-black/60 text-sm font-body">
                    Grundpris för vagn —{' '}
                    <span className="font-bold text-black">80 000 kr exkl. moms</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Equipment toggles */}
            <div>
              <div className="flex items-center gap-5 mb-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-headline text-sm">
                  2
                </span>
                <h3 className="font-headline text-2xl uppercase tracking-widest">
                  Välj utrustning
                </h3>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {EQUIPMENT.map((cat) => {
                  const active = selections[cat.id] === cat.id
                  return (
                    <button
                      key={cat.id}
                      onClick={() => toggle(cat.id)}
                      className={`flex flex-col items-start p-5 text-left transition-all border-2 ${
                        active
                          ? 'bg-white border-[#F97316] shadow-lg'
                          : 'bg-white/50 border-transparent hover:bg-white'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined mb-3 ${
                          active ? 'text-[#F97316]' : 'text-black/40'
                        }`}
                      >
                        {cat.icon}
                      </span>
                      <span className="font-headline text-xs tracking-widest mb-1">
                        {cat.name}
                      </span>
                      <span className="font-body text-[0.7rem] text-black/40">
                        +{fmt(cat.price)}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* ── Right: sticky summary ── */}
          <div className="w-full md:w-[35%]">
            <div className="md:sticky md:top-8">
              <div className="bg-[#1A1A1A] rounded-none p-8 text-white shadow-2xl">
                <h4 className="font-headline text-xl mb-8 border-b border-white/10 pb-5">
                  Sammanfattning
                </h4>

                <div className="space-y-5 mb-14">
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-white/40">Vagnstorlek</span>
                    <span>
                      {length.toFixed(1)} × {width.toFixed(1)} m
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-white/40">Grundpris</span>
                    <span>{fmt(BASE_PRICE)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-white/40">Storlekspremie</span>
                    <span>+{fmt(sizePremium)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-white/40">
                      Utrustning ({selectedIds.length} st)
                    </span>
                    <span>+{fmt(equipmentTotal)}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8 mb-8">
                  <label className="block font-body text-[0.6rem] uppercase tracking-widest text-white/40 mb-2">
                    Totalt pris exkl. moms
                  </label>
                  <div className="font-headline text-4xl text-[#F97316]">
                    {fmt(displayTotal)}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-[0.6rem] uppercase tracking-widest text-black/30 font-body">
                Priserna är preliminära uppskattningar.
              </p>
            </div>
          </div>
        </div>

        {/* ── Technical Specifications ── */}
        <div className="mt-36 pt-[89px] border-t border-[#c4c7c7]/10">
          <h2 className="font-headline text-4xl text-center mb-[89px]">
            Tekniska Specifikationer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dimensioner — dynamic */}
            <div className="bg-white p-8 border-b-4 border-[#F97316] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]">
              <div className="mb-8">
                <span className="material-symbols-outlined text-black text-5xl">
                  straighten
                </span>
              </div>
              <h3 className="font-headline text-2xl mb-5">Dimensioner</h3>
              <ul className="space-y-3 text-[#1c1c19]/70 font-body flex-1">
                {[
                  ['Längd', `${(length * 1000).toFixed(0)} mm`],
                  ['Bredd', `${(width * 1000).toFixed(0)} mm`],
                  ['Höjd', '2600 mm'],
                  ['Vikt (tom)', '1450 kg'],
                ].map(([label, value]) => (
                  <li
                    key={label}
                    className="flex justify-between border-b border-[#FAF7F2] pb-2"
                  >
                    <span>{label}</span>
                    <span className="font-bold text-black">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* El & Gas — dynamic */}
            <div className="bg-white p-8 border-b-4 border-[#F97316] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]">
              <div className="mb-8">
                <span className="material-symbols-outlined text-black text-5xl">
                  bolt
                </span>
              </div>
              <h3 className="font-headline text-2xl mb-5">El &amp; Gas</h3>
              <ul className="space-y-3 text-[#1c1c19]/70 font-body flex-1">
                {[
                  [
                    'El-intag',
                    selections.el !== null ? '32A omfattande' : '32A normal',
                  ],
                  ['Belysning', 'LED 4000K'],
                  [
                    'Gasol',
                    selections.gas !== null ? 'Dubbla P11 (System)' : 'Enkel P11',
                  ],
                  ['Uttag', '12× 230V'],
                ].map(([label, value]) => (
                  <li
                    key={label}
                    className="flex justify-between border-b border-[#FAF7F2] pb-2"
                  >
                    <span>{label}</span>
                    <span className="font-bold text-black text-right">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Konstruktion — static */}
            <div className="bg-white p-8 border-b-4 border-[#F97316] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]">
              <div className="mb-8">
                <span className="material-symbols-outlined text-black text-5xl">
                  construction
                </span>
              </div>
              <h3 className="font-headline text-2xl mb-5">Konstruktion</h3>
              <ul className="space-y-3 text-[#1c1c19]/70 font-body flex-1">
                {[
                  ['Chassi', 'Galvaniserat stål'],
                  ['Isolering', '40mm PIR'],
                  ['Golv', 'Industri-vinyl'],
                  ['Bänkar', 'Rostfritt 304'],
                ].map(([label, value]) => (
                  <li
                    key={label}
                    className="flex justify-between border-b border-[#FAF7F2] pb-2"
                  >
                    <span>{label}</span>
                    <span className="font-bold text-black text-right">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utrustningslista — dynamic */}
            <div className="bg-white p-8 border-b-4 border-[#F97316] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]">
              <div className="mb-8">
                <span className="material-symbols-outlined text-[#F97316] text-5xl">
                  inventory_2
                </span>
              </div>
              <h3 className="font-headline text-2xl mb-5">Utrustningslista</h3>
              <div className="flex-1">
                {selectedIds.length > 0 ? (
                  <ul className="space-y-2 font-body">
                    {selectedIds.map((id) => {
                      const item = EQUIPMENT.find((e) => e.id === id)!
                      return (
                        <li
                          key={id}
                          className="flex items-center gap-2 text-sm text-[#1c1c19]/70"
                        >
                          <span className="material-symbols-outlined text-base text-[#F97316]">
                            check_circle
                          </span>
                          <span className="font-medium text-black uppercase tracking-tight">
                            {item.name}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <div className="h-full flex items-center justify-center text-[#1c1c19]/30 text-center italic text-sm font-body">
                    Ingen tillvalsutrustning vald.
                    <br />
                    Använd kalkylatorn ovan.
                  </div>
                )}
              </div>
              <div className="mt-5 pt-5 border-t border-[#FAF7F2] text-[0.6rem] uppercase tracking-widest text-[#1c1c19]/40 font-body">
                Uppdateras i realtid
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
