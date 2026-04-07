'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Admin auth logic goes here
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-5">
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
            <span className="font-headline text-xl font-bold text-white">Lulu's Streetfood</span>
          </div>
          <p className="font-body text-sm text-white/30 uppercase tracking-widest mt-2">
            Adminportal
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 p-10">
          <h1 className="font-headline text-2xl text-white mb-2">
            Admin
          </h1>
          <p className="font-body text-sm text-white/40 mb-8">
            Begränsad åtkomst. Obehöriga försök loggas.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-body text-[0.7rem] uppercase tracking-widest text-white/40 mb-2">
                E-postadress
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@lulusstreetfood.com"
                className="w-full border border-white/10 bg-white/5 px-4 py-3 font-body text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#F97316] transition-colors"
              />
            </div>

            <div>
              <label className="block font-body text-[0.7rem] uppercase tracking-widest text-white/40 mb-2">
                Lösenord
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-white/10 bg-white/5 px-4 py-3 font-body text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#F97316] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F97316] text-white py-4 font-headline uppercase tracking-widest text-sm hover:bg-[#9d4300] transition-colors duration-300 mt-2"
            >
              Logga in
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="font-body text-[0.7rem] uppercase tracking-widest text-white/20 hover:text-white/50 transition-colors"
          >
            ← Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </div>
  )
}
