import Link from 'next/link'
import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lulusstreetfood.se'

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description:
    "Läs om hur Lulu's Streetfood AB hanterar dina personuppgifter i enlighet med GDPR. Information om insamling, lagring, dina rättigheter och hur du kontaktar oss.",
  alternates: {
    canonical: `${SITE_URL}/policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Hem',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Integritetspolicy',
      item: `${SITE_URL}/policy`,
    },
  ],
}

const SECTIONS = [
  {
    title: '1. Personuppgiftsansvarig',
    body: `Lulu's Streetfood AB är personuppgiftsansvarig för behandlingen av dina personuppgifter. Om du har frågor om hur vi hanterar dina uppgifter är du välkommen att kontakta oss på info@lulusstreetfood.se.`,
  },
  {
    title: '2. Vilka uppgifter samlar vi in?',
    body: `Vi samlar in de uppgifter du lämnar till oss via kontaktformuläret och i kundportalen: namn, e-postadress, telefonnummer samt eventuella projektbeskrivningar. Vi samlar inte in känsliga personuppgifter.`,
  },
  {
    title: '3. Varför behandlar vi dina uppgifter?',
    body: `Dina uppgifter används för att:\n• Besvara din förfrågan och ta fram en offert\n• Administrera ditt projekt och vagnbeställning\n• Skicka relevant information om din order\n• Uppfylla rättsliga skyldigheter (t.ex. bokföring)`,
  },
  {
    title: '4. Rättslig grund',
    body: `Vi behandlar dina uppgifter med stöd av:\n• Avtal – för att fullgöra eller ingå avtal med dig\n• Rättslig förpliktelse – när vi är skyldiga att behandla uppgifter enligt lag\n• Berättigat intresse – för kundservice och kommunikation kring ditt projekt`,
  },
  {
    title: '5. Hur länge sparar vi uppgifterna?',
    body: `Kontaktuppgifter och projektinformation sparas i 36 månader efter avslutat projekt, om inte längre tid krävs av bokföringsskäl (7 år enligt bokföringslagen). Marknadsföringsrelaterade uppgifter raderas när du avsäger dig kommunikation.`,
  },
  {
    title: '6. Delas dina uppgifter med tredje part?',
    body: `Vi delar aldrig dina uppgifter med obehöriga parter. Vi kan dela uppgifter med:\n• Leverantörer och underleverantörer som deltar i din vagnstillverkning\n• Tekniska tjänsteleverantörer (t.ex. e-postleverantör, hosting)\nAlla tredje parter är bundna av sekretessavtal och behandlar uppgifter enligt GDPR.`,
  },
  {
    title: '7. Dina rättigheter',
    body: `Du har rätt att:\n• Begära ett registerutdrag över dina uppgifter\n• Rätta felaktiga uppgifter\n• Begära radering ("rätten att bli glömd")\n• Invända mot behandling baserad på berättigat intresse\n• Begära begränsning av behandling\n• Inge klagomål till Integritetsskyddsmyndigheten (IMY) på imy.se`,
  },
  {
    title: '8. Cookies',
    body: `Vår webbplats använder tekniska cookies som är nödvändiga för att sidan ska fungera korrekt. Vi använder inga spårnings- eller marknadsföringscookies utan ditt samtycke.`,
  },
  {
    title: '9. Kontakt',
    body: `För frågor om denna policy eller för att utöva dina rättigheter, kontakta oss:\n\nLulu's Streetfood AB\nE-post: info@lulusstreetfood.se\nTelefon: 070 – XXX XX XX`,
  },
]

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-28 pb-36 px-8 md:px-[89px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-[760px] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-headline uppercase tracking-[0.3em] text-[0.7rem] text-[#F97316] mb-4">
            Lulu's Streetfood AB
          </p>
          <h1 className="font-headline text-4xl md:text-5xl text-[#1A1A1A] mb-5">
            Integritetspolicy
          </h1>
          <p className="font-body text-black/50 text-sm">
            Senast uppdaterad: april 2026
          </p>
          <div className="h-px w-8 bg-[#F97316] mt-6" />
        </div>

        {/* Intro */}
        <p className="font-body text-black/70 text-base leading-relaxed mb-14">
          Vi på Lulu's Streetfood värnar om din integritet. Den här policyn förklarar hur vi samlar in, använder och skyddar dina personuppgifter i enlighet med EU:s dataskyddsförordning (GDPR, 2016/679).
        </p>

        {/* Sections */}
        <div className="space-y-12">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="font-headline text-xl text-[#1A1A1A] mb-4">
                {section.title}
              </h2>
              <div className="font-body text-black/60 text-sm leading-relaxed whitespace-pre-line">
                {section.body}
              </div>
            </div>
          ))}
        </div>

        {/* Back link */}
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
