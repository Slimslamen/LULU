import Link from 'next/link'
import LanguageToggle from './LanguageToggle'

const PHONE_DISPLAY = '+46 73 953 44 72'
const PHONE_E164    = '+46739534472'
const EMAIL         = 'contact@lulusstreetfood.com'

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2e] pt-14 pb-0">

      {/* Main grid */}
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#F97316] rounded flex items-center justify-center flex-shrink-0">
              <span
                className="material-symbols-outlined text-white text-[1.1rem]"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                lunch_dining
              </span>
            </div>
            <span className="font-headline text-lg font-bold text-white">Lulu's Streetfood</span>
          </div>
          <p className="font-body text-sm text-[#fcf9f4]/55 leading-relaxed max-w-[260px]">
            Skräddarsydda matvagnar till låga priser. Vi förverkligar din dröm
            på hjul med fokus på kvalitet, säkerhet och stil.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-headline text-sm font-bold text-white mb-5">
            Snabblänkar
          </p>
          <nav className="flex flex-col gap-3">
            <a
              href="#omvagnen"
              className="text-[#fcf9f4]/60 hover:text-[#fd761a] transition-colors font-body text-sm"
            >
              Om oss
            </a>
            <a
              href="#kalkyl"
              className="text-[#fcf9f4]/60 hover:text-[#fd761a] transition-colors font-body text-sm"
            >
              Prisberäknare
            </a>
            <a
              href="#kontakt"
              className="text-[#fcf9f4]/60 hover:text-[#fd761a] transition-colors font-body text-sm"
            >
              Kontakt
            </a>
          </nav>
        </div>

        {/* Contact / NAP */}
        <address className="not-italic">
          <p className="font-headline text-sm font-bold text-white mb-5">
            Kontakt
          </p>
          <ul className="space-y-3 font-body text-sm text-[#fcf9f4]/60">
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-[#fd761a] transition-colors">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_E164}`} className="hover:text-[#fd761a] transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="pt-1 leading-relaxed text-[#fcf9f4]/40">
              Nygatan 71<br />
              462 31 Vänersborg
            </li>
          </ul>
        </address>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-[#fcf9f4]/30">
          © 2026 Lulu's Streetfood. Alla rättigheter förbehållna.
        </p>

        <nav className="flex flex-wrap items-center gap-5 justify-center">
          <Link
            href="/policy"
            className="font-body text-xs text-[#fcf9f4]/40 hover:text-[#fd761a] transition-colors"
          >
            Integritetspolicy
          </Link>
          <Link
            href="/villkor"
            className="font-body text-xs text-[#fcf9f4]/40 hover:text-[#fd761a] transition-colors"
          >
            Villkor
          </Link>
          <Link
            href="/admin"
            className="font-body text-xs text-[#fcf9f4]/40 hover:text-[#fd761a] transition-colors"
          >
            Admin
          </Link>
          <Link
            href="/loneportal"
            className="font-body text-xs text-[#fcf9f4]/40 hover:text-[#fd761a] transition-colors"
          >
            Löneportal
          </Link>
          <LanguageToggle />
        </nav>
      </div>
    </footer>
  )
}
