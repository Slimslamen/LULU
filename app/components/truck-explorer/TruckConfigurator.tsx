'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── Equipment base (id, price, icon never change) ─────────────── */

const EQUIPMENT_BASE = [
  { id: 'kyla',       price: 12_000, icon: 'ac_unit' },
  { id: 'ventilation',price:  8_500, icon: 'air' },
  { id: 'fonster',    price:  6_000, icon: 'window' },
  { id: 'matlagning', price: 25_000, icon: 'cooking' },
  { id: 'vatten',     price:  7_500, icon: 'water_drop' },
  { id: 'el',         price: 15_000, icon: 'bolt' },
  { id: 'gas',        price:  9_000, icon: 'local_fire_department' },
  { id: 'inredning',  price: 20_000, icon: 'countertops' },
  { id: 'foliering',  price: 18_000, icon: 'format_paint' },
]

const EQUIPMENT_NAMES = {
  sv: ['KYLA','VENTILATION','FÖNSTER','MATLAGNING','VATTEN','EL','GAS','INREDNING','FOLIERING'],
  en: ['COOLING','VENTILATION','WINDOWS','COOKING','WATER','ELECTRICAL','GAS','INTERIOR','WRAP'],
} as const

const UI = {
  sv: {
    heading:        'Priskalkylator',
    step1:          'Välj storlek',
    labelLength:    'Längd',
    labelWidth:     'Bredd',
    baseNote:       'Grundpris för vagn',
    basePrice:      '80 000 kr exkl. moms',
    step2:          'Välj utrustning',
    summaryTitle:   'Sammanfattning',
    rowSize:        'Vagnstorlek',
    rowBase:        'Grundpris',
    rowSizePremium: 'Storlekspremie',
    rowEquipment:   'Utrustning',
    rowUnit:        'st',
    totalLabel:     'Totalt pris exkl. moms',
    totalPrefix:    'Ca',
    disclaimer:     'Priserna är preliminära uppskattningar.',
    specsHeading:   'Tekniska Specifikationer',
    dimTitle:       'Dimensioner',
    dimRows:        [['Längd',''], ['Bredd',''], ['Höjd','2600 mm'], ['Vikt (tom)','1450 kg']],
    elTitle:        'El & Gas',
    elRowPower:     'El-intag',
    elPowerBasic:   '32A normal',
    elPowerAdv:     '32A omfattande',
    elRowLight:     'Belysning',
    elRowGas:       'Gasol',
    elGasBasic:     'Enkel P11',
    elGasAdv:       'Dubbla P11 (System)',
    elRowOutlets:   'Uttag',
    conTitle:       'Konstruktion',
    conRows:        [['Chassi','Galvaniserat stål'],['Isolering','40mm PIR'],['Golv','Industri-vinyl'],['Bänkar','Rostfritt 304']],
    listTitle:      'Utrustningslista',
    listEmpty:      'Ingen tillvalsutrustning vald.',
    listEmptySub:   'Använd kalkylatorn ovan.',
    listLive:       'Uppdateras i realtid',
    mobileCta:      'Få en exakt offert',
  },
  en: {
    heading:        'Price Calculator',
    step1:          'Choose size',
    labelLength:    'Length',
    labelWidth:     'Width',
    baseNote:       'Base price for truck',
    basePrice:      '80,000 kr excl. VAT',
    step2:          'Choose equipment',
    summaryTitle:   'Summary',
    rowSize:        'Truck size',
    rowBase:        'Base price',
    rowSizePremium: 'Size premium',
    rowEquipment:   'Equipment',
    rowUnit:        'pcs',
    totalLabel:     'Total price excl. VAT',
    totalPrefix:    'Est.',
    disclaimer:     'Prices are preliminary estimates.',
    specsHeading:   'Technical Specifications',
    dimTitle:       'Dimensions',
    dimRows:        [['Length',''], ['Width',''], ['Height','2600 mm'], ['Weight (empty)','1450 kg']],
    elTitle:        'Electrical & Gas',
    elRowPower:     'Power inlet',
    elPowerBasic:   '32A standard',
    elPowerAdv:     '32A comprehensive',
    elRowLight:     'Lighting',
    elRowGas:       'LPG',
    elGasBasic:     'Single P11',
    elGasAdv:       'Dual P11 (System)',
    elRowOutlets:   'Outlets',
    conTitle:       'Construction',
    conRows:        [['Chassis','Galvanised steel'],['Insulation','40mm PIR'],['Floor','Industrial vinyl'],['Benches','Stainless 304']],
    listTitle:      'Equipment list',
    listEmpty:      'No optional equipment selected.',
    listEmptySub:   'Use the calculator above.',
    listLive:       'Updated in real time',
    mobileCta:      'Get an exact quote',
  },
} as const

const BASE_PRICE = 80_000

function fmt(n: number) {
  return new Intl.NumberFormat('sv-SE').format(n) + ' kr'
}

/* ─── Component ─────────────────────────────────────────────────── */

export default function TruckConfigurator({ lang = 'sv' }: { lang?: 'sv' | 'en' }) {
  const ui = UI[lang]
  const equipment = EQUIPMENT_BASE.map((b, i) => ({ ...b, name: EQUIPMENT_NAMES[lang][i] }))

  const sectionRef = useRef<HTMLElement>(null)

  const [length, setLength] = useState(4.5)
  const [width, setWidth]   = useState(2.2)
  const [selections, setSelections] = useState<Record<string, string | null>>({
    kyla: null, ventilation: null, fonster: null, matlagning: null,
    vatten: null, el: null, gas: null, inredning: null, foliering: null,
  })
  const [displayTotal, setDisplayTotal] = useState(BASE_PRICE)

  const selectedIds = Object.values(selections).filter((v): v is string => v !== null)
  const equipmentTotal = selectedIds.reduce((sum, id) => {
    return sum + (EQUIPMENT_BASE.find((e) => e.id === id)?.price ?? 0)
  }, 0)
  const sizePremium = Math.round((length - 3) * 5_000 + (width - 2) * 8_000)
  const finalTotal  = BASE_PRICE + equipmentTotal + sizePremium

  const animObj = useRef({ val: BASE_PRICE })
  useEffect(() => {
    const tween = gsap.to(animObj.current, {
      val: finalTotal, duration: 0.5, ease: 'power2.out',
      onUpdate() { setDisplayTotal(Math.round(animObj.current.val)) },
    })
    return () => { tween.kill() }
  }, [finalTotal])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  function toggle(id: string) {
    setSelections((prev) => ({ ...prev, [id]: prev[id] === id ? null : id }))
  }

  /* ── dimension rows with live values ── */
  const dimRows = [
    [ui.dimRows[0][0], `${(length * 1000).toFixed(0)} mm`],
    [ui.dimRows[1][0], `${(width  * 1000).toFixed(0)} mm`],
    [ui.dimRows[2][0], ui.dimRows[2][1]],
    [ui.dimRows[3][0], ui.dimRows[3][1]],
  ]

  const elRows = [
    [ui.elRowPower,   selections.el  !== null ? ui.elPowerAdv : ui.elPowerBasic],
    [ui.elRowLight,   'LED 4000K'],
    [ui.elRowGas,     selections.gas !== null ? ui.elGasAdv   : ui.elGasBasic],
    [ui.elRowOutlets, '12× 230V'],
  ]

  return (
    <section id="kalkyl" ref={sectionRef} className="bg-[#FAF7F2] py-36 px-8 md:px-[89px] pb-[120px] md:pb-36">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="mb-[89px] text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-black mb-5">{ui.heading}</h2>
          <div className="h-px w-8 bg-[#fd761a] mx-auto" />
        </div>

        {/* Calculator + Summary */}
        <div className="flex flex-col md:flex-row gap-[89px] relative">

          {/* Left */}
          <div className="w-full md:w-[65%] space-y-[89px]">

            {/* Step 1: Size */}
            <div>
              <div className="flex items-center gap-5 mb-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-headline text-sm">1</span>
                <h3 className="font-headline text-2xl uppercase tracking-widest">{ui.step1}</h3>
              </div>
              <div className="space-y-14 bg-white p-8 shadow-sm border border-[#c4c7c7]/20">
                {/* Length */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <label className="font-body text-sm uppercase tracking-wider text-black/60">{ui.labelLength}</label>
                    <span className="font-headline text-2xl text-[#F97316]">{length.toFixed(1)}m</span>
                  </div>
                  <input type="range" min="3.0" max="5.2" step="0.1" value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value))}
                    style={{ touchAction: 'none' }} />
                  <div className="flex justify-between mt-2 font-body text-[0.6rem] text-black/30 uppercase tracking-widest">
                    <span>3.0m</span><span>5.2m</span>
                  </div>
                </div>
                {/* Width */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <label className="font-body text-sm uppercase tracking-wider text-black/60">{ui.labelWidth}</label>
                    <span className="font-headline text-2xl text-[#F97316]">{width.toFixed(1)}m</span>
                  </div>
                  <input type="range" min="2.0" max="2.4" step="0.1" value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                    style={{ touchAction: 'none' }} />
                  <div className="flex justify-between mt-2 font-body text-[0.6rem] text-black/30 uppercase tracking-widest">
                    <span>2.0m</span><span>2.4m</span>
                  </div>
                </div>
                <div className="pt-5 border-t border-[#c4c7c7]/20">
                  <p className="text-black/60 text-sm font-body">
                    {ui.baseNote} —{' '}
                    <span className="font-bold text-black">{ui.basePrice}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Equipment */}
            <div>
              <div className="flex items-center gap-5 mb-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-headline text-sm">2</span>
                <h3 className="font-headline text-2xl uppercase tracking-widest">{ui.step2}</h3>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {equipment.map((cat) => {
                  const active = selections[cat.id] === cat.id
                  return (
                    <button key={cat.id} onClick={() => toggle(cat.id)}
                      className={`flex flex-col items-start p-5 text-left transition-all border-2 cursor-pointer min-h-[44px] ${
                        active ? 'bg-white border-[#F97316] shadow-lg' : 'bg-white/50 border-transparent hover:bg-white'
                      }`}
                      style={{ WebkitTapHighlightColor: 'transparent' } as React.CSSProperties}
                    >
                      <span className={`material-symbols-outlined mb-3 ${active ? 'text-[#F97316]' : 'text-black/40'}`}>
                        {cat.icon}
                      </span>
                      <span className="font-headline text-xs tracking-widest mb-1">{cat.name}</span>
                      <span className="font-body text-[0.7rem] text-black/40">+{fmt(cat.price)}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: sticky summary — desktop only */}
          <div className="hidden md:block w-full md:w-[35%]">
            <div className="md:sticky md:top-8">
              <div className="bg-[#1A1A1A] p-8 text-white shadow-2xl">
                <h4 className="font-headline text-xl mb-8 border-b border-white/10 pb-5">{ui.summaryTitle}</h4>
                <div className="space-y-5 mb-14">
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-white/40">{ui.rowSize}</span>
                    <span>{length.toFixed(1)} × {width.toFixed(1)} m</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-white/40">{ui.rowBase}</span>
                    <span>{fmt(BASE_PRICE)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-white/40">{ui.rowSizePremium}</span>
                    <span>+{fmt(sizePremium)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-white/40">{ui.rowEquipment} ({selectedIds.length} {ui.rowUnit})</span>
                    <span>+{fmt(equipmentTotal)}</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-8 mb-8">
                  <label className="block font-body text-[0.6rem] uppercase tracking-widest text-white/40 mb-2">
                    {ui.totalLabel}
                  </label>
                  <div className="font-headline text-4xl text-[#F97316]">
                    {ui.totalPrefix} {fmt(displayTotal)}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-center text-[0.6rem] uppercase tracking-widest text-black/30 font-body">
                {ui.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-36 pt-[89px] border-t border-[#c4c7c7]/10">
          <h2 className="font-headline text-4xl text-center mb-[89px]">{ui.specsHeading}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Dimensions */}
            <div className="bg-white p-8 border-b-4 border-[#F97316] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]">
              <div className="mb-8"><span className="material-symbols-outlined text-black text-5xl">straighten</span></div>
              <h3 className="font-headline text-2xl mb-5">{ui.dimTitle}</h3>
              <ul className="space-y-3 text-[#1c1c19]/70 font-body flex-1">
                {dimRows.map(([label, value]) => (
                  <li key={label} className="flex justify-between border-b border-[#FAF7F2] pb-2">
                    <span>{label}</span><span className="font-bold text-black">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Electrical & Gas */}
            <div className="bg-white p-8 border-b-4 border-[#F97316] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]">
              <div className="mb-8"><span className="material-symbols-outlined text-black text-5xl">bolt</span></div>
              <h3 className="font-headline text-2xl mb-5">{ui.elTitle}</h3>
              <ul className="space-y-3 text-[#1c1c19]/70 font-body flex-1">
                {elRows.map(([label, value]) => (
                  <li key={label} className="flex justify-between border-b border-[#FAF7F2] pb-2">
                    <span>{label}</span><span className="font-bold text-black text-right">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Construction */}
            <div className="bg-white p-8 border-b-4 border-[#F97316] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]">
              <div className="mb-8"><span className="material-symbols-outlined text-black text-5xl">construction</span></div>
              <h3 className="font-headline text-2xl mb-5">{ui.conTitle}</h3>
              <ul className="space-y-3 text-[#1c1c19]/70 font-body flex-1">
                {ui.conRows.map(([label, value]) => (
                  <li key={label} className="flex justify-between border-b border-[#FAF7F2] pb-2">
                    <span>{label}</span><span className="font-bold text-black text-right">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment list */}
            <div className="bg-white p-8 border-b-4 border-[#F97316] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]">
              <div className="mb-8"><span className="material-symbols-outlined text-[#F97316] text-5xl">inventory_2</span></div>
              <h3 className="font-headline text-2xl mb-5">{ui.listTitle}</h3>
              <div className="flex-1">
                {selectedIds.length > 0 ? (
                  <ul className="space-y-2 font-body">
                    {selectedIds.map((id) => {
                      const item = equipment.find((e) => e.id === id)!
                      return (
                        <li key={id} className="flex items-center gap-2 text-sm text-[#1c1c19]/70">
                          <span className="material-symbols-outlined text-base text-[#F97316]">check_circle</span>
                          <span className="font-medium text-black uppercase tracking-tight">{item.name}</span>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <div className="h-full flex items-center justify-center text-[#1c1c19]/30 text-center italic text-sm font-body">
                    {ui.listEmpty}<br />{ui.listEmptySub}
                  </div>
                )}
              </div>
              <div className="mt-5 pt-5 border-t border-[#FAF7F2] text-[0.6rem] uppercase tracking-widest text-[#1c1c19]/40 font-body">
                {ui.listLive}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fixed bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] px-4 py-4">
        <div className="flex justify-between items-center mb-3">
          <span className="font-body text-[0.6rem] uppercase tracking-widest text-white/40">{ui.totalLabel}</span>
          <span className="font-headline text-xl text-[#F97316]">{fmt(displayTotal)}</span>
        </div>
        <button className="w-full bg-[#F97316] text-white py-3 font-headline uppercase tracking-widest text-sm">
          {ui.mobileCta}
        </button>
      </div>
    </section>
  )
}
