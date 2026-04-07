'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Auth logic goes here
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-5">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-12">
          <Link href="/" className="font-headline text-3xl font-bold tracking-tighter text-black">
            Lulu's
          </Link>
          <p className="mt-3 font-body text-sm text-black/40 uppercase tracking-widest">
            Kundportal
          </p>
        </div>

        {/* Card */}
        <div className="bg-white shadow-sm border border-black/5 p-10">
          <h1 className="font-headline text-2xl text-black mb-2">
            Logga in
          </h1>
          <p className="font-body text-sm text-black/40 mb-8">
            Hantera ditt projekt och följ din vagns tillverkning.
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
                placeholder="din@email.se"
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
              Inget konto?{' '}
              <a href="#kontakt" className="text-[#F97316] hover:text-[#9d4300] transition-colors">
                Kontakta oss
              </a>{' '}
              för att komma igång.
            </p>
          </div>
        </div>

        {/* Back link */}
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
