export default function Footer() {
  return (
    <footer className="bg-[#1c1b1b] py-8">
      <div className="flex flex-col md:flex-row justify-between items-start px-8 max-w-[1440px] mx-auto">
        <div className="mb-14 md:mb-0">
          <div className="font-headline text-3xl font-bold text-[#fcf9f4] mb-3">
            Lulu's
          </div>
          <p className="font-body leading-relaxed text-base text-[#fcf9f4]/70 max-w-[300px]">
            Modern Epicureanism. Premium matvagnar för passionerade
            entreprenörer.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <nav className="flex flex-wrap gap-8 mb-5">
            <a
              href="#"
              className="text-[#fcf9f4]/70 hover:text-[#fd761a] transition-colors font-body text-base"
            >
              Integritetspolicy
            </a>
            <a
              href="#"
              className="text-[#fcf9f4]/70 hover:text-[#fd761a] transition-colors font-body text-base"
            >
              Press
            </a>
            <a
              href="#"
              className="text-[#fcf9f4]/70 hover:text-[#fd761a] transition-colors font-body text-base"
            >
              Karriär
            </a>
          </nav>
          <div className="text-[#fcf9f4]/50 font-body text-sm">
            © 2024 Lulu's Streetfood. Modern Epicureanism.
          </div>
        </div>
      </div>
    </footer>
  )
}
