'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoneportalPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Payroll portal auth logic goes here
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-5">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#F97316] rounded flex items-center justify-center">
              <span
                className="material-symbols-outlined text-white text-[1.1rem]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lunch_dining
              </span>
            </div>
            <span className="font-headline text-xl font-bold text-black">Lulu's Streetfood</span>
          </div>
          <p className="font-body text-sm text-black/40 uppercase tracking-widest mt-2">
            Löneportal
          </p>
        </div>

        {/* Card */}
        <div className="bg-white shadow-sm border border-black/5 p-10">
          <h1 className="font-headline text-2xl text-black mb-2">
            Löneportal
          </h1>
          <p className="font-body text-sm text-black/40 mb-8">
            Logga in för att se löneinformation, lönespecifikationer och semestersaldo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-body text-[0.7rem] uppercase tracking-widest text-black/50 mb-2">
                E-postadress
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="din@lulusstreetfood.com"
                className="w-full border border-black/10 bg-[#FAF7F2] px-4 py-3 font-body text-sm text-black placeholder:text-black/25 focus:outline-none focus:border-[#F97316] transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block font-body text-[0.7rem] uppercase tracking-widest text-black/50">
                  Lösenord
                </label>
                <a href="#" className="font-body text-[0.7rem] text-[#F97316] hover:text-[#9d4300] transition-colors">
                  Glömt lösenord?
                </a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-black/10 bg-[#FAF7F2] px-4 py-3 font-body text-sm text-black placeholder:text-black/25 focus:outline-none focus:border-[#F97316] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 font-headline uppercase tracking-widest text-sm hover:bg-[#F97316] transition-colors duration-300 mt-2"
            >
              Logga in
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-black/5 text-center">
            <p className="font-body text-sm text-black/40">
              Problem med inloggning?{' '}
              <a href="mailto:contact@lulusstreetfood.com" className="text-[#F97316] hover:text-[#9d4300] transition-colors">
                Kontakta HR
              </a>
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="font-body text-[0.7rem] uppercase tracking-widest text-black/30 hover:text-black/60 transition-colors"
          >
            ← Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </div>
  )
}
