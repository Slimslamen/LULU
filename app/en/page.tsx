import Image from 'next/image'
import ContactFormEn from './ContactFormEn'
import TruckExplorerSection from '@/app/components/truck-explorer/TruckExplorerSection'
import KitchenEquipment from '@/app/components/truck-explorer/KitchenEquipment'
import TruckConfigurator from '@/app/components/truck-explorer/TruckConfigurator'

const STEPS = [
  {
    number: '01',
    icon: 'chat',
    title: 'Get in touch',
    desc: 'Call us or fill in the contact form. We respond quickly and listen carefully to your needs.',
  },
  {
    number: '02',
    icon: 'draw',
    title: 'We create a proposal',
    desc: 'We assess your requirements and send a tailored proposal with drawings and a transparent price — no hidden fees.',
  },
  {
    number: '03',
    icon: 'construction',
    title: 'Your truck is built',
    desc: 'Our craftsmen begin production. You can follow every step of the project in our customer portal.',
  },
  {
    number: '04',
    icon: 'verified',
    title: 'Handover with warranty',
    desc: 'You approve the truck at delivery and receive a full construction warranty. We stay with you after delivery too.',
  },
]

export default function EnglishPage() {
  return (
    <main lang="en">

      {/* Hero */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lulus-truck.png"
            alt="Lulu's Streetfood custom food truck"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-5 max-w-[890px]">
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-8 leading-tight">
            Custom{' '}
            <span className="text-[#fd761a]">Food Trucks</span>
            {' '}Built for Passion
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-14 max-w-[550px] mx-auto font-body leading-relaxed">
            Premium street food vehicles crafted from the ground up. Designed for performance, built with care.
          </p>
          <a
            href="#kontakt"
            className="bg-[#fd761a] text-white px-14 py-5 font-headline uppercase tracking-widest text-sm hover:bg-[#9d4300] transition-colors duration-300 inline-block"
          >
            Get a Free Quote
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2">
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll down</span>
          <span className="material-symbols-outlined animate-bounce">expand_more</span>
        </div>
      </header>

      {/* About */}
      <section id="omvagnen" className="bg-[#fcf9f4] py-36 px-8 md:px-[89px]">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-[89px] items-center">
          <div>
            <div className="inline-block bg-[#fd761a]/10 text-[#9d4300] font-body text-[0.7rem] px-3 py-2 mb-5 tracking-widest uppercase">
              Quality in every detail
            </div>
            <h2 className="font-headline text-4xl text-[#1c1c19] mb-8 leading-tight">
              Engineered for the modern kitchen on wheels.
            </h2>
            <div className="space-y-5 text-[#1c1c19]/70 leading-[1.618] text-lg font-body">
              <p>
                Every Lulu's food truck is the result of careful engineering and a deep understanding of street food demands. We combine durable materials with ergonomic design to create a workspace that not only looks great, but optimises your workflow.
              </p>
              <p>
                From the robust steel frame to the advanced ventilation system — we leave nothing to chance. Based in Vänersborg, Sweden, we deliver across the entire country.
              </p>
            </div>
          </div>
          <div className="aspect-[1/1.618] relative overflow-hidden bg-[#f0ede9]">
            <Image
              src="/images/HeroLulu.png"
              alt="Lulu's Streetfood kitchen interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Truck explorer — shared component with English labels */}
      <TruckExplorerSection lang="en" />

      {/* Kitchen equipment */}
      <KitchenEquipment lang="en" />

      {/* Price calculator */}
      <TruckConfigurator lang="en" />

      {/* How it works */}
      <section className="bg-[#FAF7F2] py-36 px-8 md:px-[89px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-[89px]">
            <p className="font-headline uppercase tracking-[0.3em] text-[0.7rem] text-[#F97316] mb-4">Simple & safe</p>
            <h2 className="font-headline text-4xl md:text-5xl text-[#1A1A1A] mb-5">How it works</h2>
            <p className="font-body text-black/50 text-lg max-w-xl mx-auto leading-relaxed">
              From first contact to finished truck — we make the process as smooth as possible.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-black/10 z-0">
              <div className="absolute inset-0 bg-[#F97316]" style={{ transformOrigin: 'left center' }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {STEPS.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-[104px] h-[104px] rounded-full border-2 border-black/10 bg-[#FAF7F2] flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-black/30">{step.icon}</span>
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#F97316] flex items-center justify-center font-headline text-white text-[0.65rem] tracking-wider">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl text-[#1A1A1A] mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-black/50 leading-relaxed max-w-[220px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="kontakt" className="bg-[#fd761a] py-36 px-8 md:px-[89px] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4 scale-150 pointer-events-none" aria-hidden="true">
          <span className="material-symbols-outlined text-[30rem]" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-[89px] items-start">
            <div>
              <h2 className="font-headline text-5xl md:text-6xl text-white mb-6 leading-tight">
                Build your food truck
              </h2>
              <p className="text-[#341100] text-lg mb-10 leading-relaxed font-body">
                Have a unique idea? Fill in the form and we'll get back to you within 24 hours with a tailored proposal — completely free of charge.
              </p>
              <ul className="space-y-4 mb-10">
                {['Free quote within 24h', 'No hidden fees', 'Personal advisor throughout the project'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white font-body text-sm">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {t}
                  </li>
                ))}
              </ul>
              <a href="tel:+46739534472" className="inline-flex items-center gap-3 bg-white/15 hover:bg-white/25 text-white px-6 py-4 transition-colors duration-200">
                <span className="material-symbols-outlined text-xl" aria-hidden="true">phone</span>
                <span className="font-headline uppercase tracking-widest text-sm">Call us directly</span>
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10">
              <ContactFormEn />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
