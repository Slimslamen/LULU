'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BottomCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Send logic goes here (e.g. API call or mailto)
    setSubmitted(true)
  }

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="bg-[#fd761a] py-36 px-8 md:px-[89px] overflow-hidden relative"
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

      <div ref={contentRef} className="relative z-10 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-[89px] items-start">

          {/* Left: heading + intro */}
          <div>
            <h2 className="font-headline text-5xl md:text-6xl text-white mb-6 leading-tight">
              Bygg din matvagn
            </h2>
            <p className="text-[#341100] text-lg mb-10 leading-relaxed font-body">
              Har du en unik idé? Fyll i formuläret så hör vi av oss inom 24 timmar med ett skräddarsytt förslag – helt kostnadsfritt.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { icon: 'check_circle', text: 'Kostnadsfri offert inom 24h' },
                { icon: 'check_circle', text: 'Inga dolda avgifter' },
                { icon: 'check_circle', text: 'Personlig rådgivare genom hela projektet' },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-white font-body text-sm">
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {icon}
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            {/* Click-to-call — primary mobile conversion path */}
            <a
              href="tel:+46739534472"
              className="inline-flex items-center gap-3 bg-white/15 hover:bg-white/25 text-white px-6 py-4 transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                phone
              </span>
              <span className="font-headline uppercase tracking-widest text-sm">
                Ring oss direkt
              </span>
            </a>
          </div>

          {/* Right: form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <span
                  className="material-symbols-outlined text-6xl text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <h3 className="font-headline text-2xl text-white">Tack för ditt meddelande!</h3>
                <p className="font-body text-white/70 text-sm">
                  Vi återkommer inom 24 timmar.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-[0.65rem] uppercase tracking-widest text-white mb-2">
                      Namn
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ditt namn"
                      className="w-full bg-white/10 border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-[0.65rem] uppercase tracking-widest text-white mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07X – XXX XX XX"
                      className="w-full bg-white/10 border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-[0.65rem] uppercase tracking-widest text-white mb-2">
                    E-postadress
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="din@email.se"
                    className="w-full bg-white/10 border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-body text-[0.65rem] uppercase tracking-widest text-white mb-2">
                    Berätta om ditt projekt
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Vad vill du sälja? Hur stor vagn? Några speciella önskemål?"
                    className="w-full bg-white/10 border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 font-headline uppercase tracking-widest text-sm hover:bg-[#1A1A1A] hover:-translate-y-1 transition-all duration-200"
                >
                  Skicka förfrågan
                </button>

                <p className="text-[0.65rem] text-white/40 font-body text-center">
                  Genom att skicka accepterar du vår integritetspolicy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
