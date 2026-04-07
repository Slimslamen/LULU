import Link from 'next/link'
import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lulusstreetfood.se'

export const metadata: Metadata = {
  title: 'Allmänna Villkor',
  description:
    "Läs Lulu's Streetfood AB:s allmänna villkor för köp och tillverkning av skräddarsydda matvagnar.",
  alternates: { canonical: `${SITE_URL}/villkor` },
}

const SECTIONS = [
  {
    title: '1. Allmänt',
    body: `Dessa allmänna villkor ("Villkoren") gäller för alla avtal om tillverkning, köp och leverans av matvagnar och tillbehör som ingås mellan Lulu's Streetfood AB ("Lulu's", "vi", "oss") och kund ("Kunden").

Genom att beställa en produkt eller tjänst från oss accepterar Kunden dessa Villkor i sin helhet. Villkoren kan komma att uppdateras och den senaste versionen är alltid tillgänglig på vår webbplats.`,
  },
  {
    title: '2. Beställning och avtal',
    body: `En beställning är bindande när Kunden har mottagit en skriftlig orderbekräftelse från Lulu's. Offert är giltig i 30 dagar från utfärdandedatum om inget annat anges.

Vi förbehåller oss rätten att neka en beställning om vi inte kan uppfylla Kundens krav inom rimliga ramar, eller om leverans av de begärda materialen inte är möjlig.`,
  },
  {
    title: '3. Priser och betalning',
    body: `Alla priser anges i svenska kronor (SEK) exklusive moms om inte annat anges. Moms tillkommer enligt gällande lag.

Betalningsvillkor är 30 dagar netto från fakturadatum om inte annat överenskommits skriftligt. Vid försenad betalning debiteras dröjsmålsränta enligt räntelagen. Vi förbehåller oss rätten att kräva förskottsbetalning eller delbetalningar för specialbeställda produkter.`,
  },
  {
    title: '4. Tillverkningstid och leverans',
    body: `Uppskattad leveranstid anges i orderbekräftelsen och är 8–14 veckor beroende på beställningens komplexitet. Leveranstider är ungefärliga och garanteras inte om inte annat avtalats skriftligt.

Lulu's ansvarar inte för förseningar som beror på omständigheter utanför vår kontroll (force majeure), inklusive men inte begränsat till materialbrist, transportproblem, strejk eller myndighetsbeslut.

Risken för varan övergår till Kunden vid leverans. Kunden ansvarar för att ta emot leveransen på avtalad tid och plats.`,
  },
  {
    title: '5. Garanti och reklamation',
    body: `Lulu's lämnar 12 månaders garanti på konstruktion och tillverkning från leveransdatum. Garantin täcker material- och tillverkningsfel som uppstår vid normal användning.

Garantin täcker inte skador som uppstått till följd av:
• Felaktig användning eller hantering
• Normalt slitage
• Obehörig reparation eller modifiering
• Yttre påverkan (olycka, väderskador, skadegörelse)

Reklamation ska göras skriftligt inom 30 dagar från det att felet upptäcktes. Kunden ska ge oss skälig möjlighet att undersöka och åtgärda felet.`,
  },
  {
    title: '6. Immateriella rättigheter',
    body: `Alla ritningar, konstruktionshandlingar, designskisser och teknisk dokumentation som tagits fram av Lulu's är vår egendom och får inte kopieras, spridas eller användas för annat ändamål utan vårt skriftliga medgivande.

Kunden äger den fysiska produkten men inte de immateriella rättigheterna till konstruktionsunderlag och design.`,
  },
  {
    title: '7. Ansvarsbegränsning',
    body: `Lulu's ansvar gentemot Kunden är begränsat till det avtalade ordervärdet. Vi ansvarar inte för indirekta skador, utebliven vinst, driftsavbrott eller liknande följdskador.

Lulu's ansvarar inte för att produkten uppfyller Kundens specifika affärsmässiga förväntningar om inte detta uttryckligen avtalats skriftligt.`,
  },
  {
    title: '8. Force majeure',
    body: `Vardera part är befriad från ansvar för underlåtenhet att fullgöra sina förpliktelser om underlåtenheten beror på omständigheter utanför den berörda partens rimliga kontroll och som parten inte skäligen kunde förväntas ha räknat med vid avtalets ingående.`,
  },
  {
    title: '9. Tillämplig lag och tvistelösning',
    body: `Dessa villkor ska tolkas och tillämpas i enlighet med svensk rätt. Tvister som uppstår med anledning av dessa villkor ska i första hand lösas genom förhandling mellan parterna. Om enighet inte kan nås ska tvisten avgöras av allmän domstol med Vänersborgs tingsrätt som första instans.`,
  },
  {
    title: '10. Kontakt',
    body: `Lulu's Streetfood AB\nNygatan 71, 462 31 Vänersborg\nE-post: contact@lulusstreetfood.com\nTelefon: +46 73 953 44 72`,
  },
]

export default function VillkorPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-28 pb-36 px-8 md:px-[89px]">
      <div className="max-w-[760px] mx-auto">

        <div className="mb-16">
          <p className="font-headline uppercase tracking-[0.3em] text-[0.7rem] text-[#F97316] mb-4">
            Lulu's Streetfood AB
          </p>
          <h1 className="font-headline text-4xl md:text-5xl text-[#1A1A1A] mb-5">
            Allmänna Villkor
          </h1>
          <p className="font-body text-black/50 text-sm">
            Senast uppdaterad: april 2026
          </p>
          <div className="h-px w-8 bg-[#F97316] mt-6" />
        </div>

        <p className="font-body text-black/70 text-base leading-relaxed mb-14">
          Dessa villkor reglerar alla affärsrelationer mellan Lulu's Streetfood AB och dess kunder. Läs igenom dem noggrant innan du lägger en beställning.
        </p>

        <div className="space-y-12">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-headline text-xl text-[#1A1A1A] mb-4">{s.title}</h2>
              <div className="font-body text-black/60 text-sm leading-relaxed whitespace-pre-line">
                {s.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-black/10">
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
