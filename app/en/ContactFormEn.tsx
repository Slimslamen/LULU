'use client'

import { useState } from 'react'

export default function ContactFormEn() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
        <span className="material-symbols-outlined text-6xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
          check_circle
        </span>
        <h3 className="font-headline text-2xl text-white">Thank you!</h3>
        <p className="font-body text-white/70 text-sm">We'll be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-[0.65rem] uppercase tracking-widest text-white mb-2">Name</label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name"
            className="w-full bg-white/10 border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors" />
        </div>
        <div>
          <label className="block font-body text-[0.65rem] uppercase tracking-widest text-white mb-2">Phone</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+46 XX XXX XX XX"
            className="w-full bg-white/10 border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors" />
        </div>
      </div>
      <div>
        <label className="block font-body text-[0.65rem] uppercase tracking-widest text-white mb-2">Email</label>
        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com"
          className="w-full bg-white/10 border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors" />
      </div>
      <div>
        <label className="block font-body text-[0.65rem] uppercase tracking-widest text-white mb-2">Tell us about your project</label>
        <textarea name="message" required value={form.message} onChange={handleChange} rows={4}
          placeholder="What would you like to sell? How big a truck? Any special requirements?"
          className="w-full bg-white/10 border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors resize-none" />
      </div>
      <button type="submit" className="w-full bg-black text-white py-4 font-headline uppercase tracking-widest text-sm hover:bg-[#1A1A1A] hover:-translate-y-1 transition-all duration-200">
        Send enquiry
      </button>
      <p className="text-[0.65rem] text-white/40 font-body text-center">By submitting you accept our privacy policy.</p>
    </form>
  )
}
