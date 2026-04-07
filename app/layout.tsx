import type { Metadata } from 'next'
import { Epilogue, Manrope } from 'next/font/google'
import './globals.css'
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lulusstreetfood.se'

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-epilogue',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Lulu's Streetfood",
    default: "Lulu's Streetfood | Skräddarsydda Matvagnar & Food Trucks i Sverige",
  },
  description:
    'Bygg din drömmatvagn med Lulu\'s Streetfood. Skräddarsydda food trucks med premiumkvalitet, fackmannamässig installation och full garanti. Begär kostnadsfri offert idag.',
  keywords: [
    'matvagn', 'food truck', 'matvagn bygga', 'skräddarsydd matvagn',
    'food truck Sverige', 'matvagn köpa', 'gatumat vagn', 'food truck tillverkning',
    'custom matvagn', 'street food truck',
  ],
  authors: [{ name: "Lulu's Streetfood AB" }],
  creator: "Lulu's Streetfood AB",
  publisher: "Lulu's Streetfood AB",
  alternates: {
    canonical: SITE_URL,
    languages: { 'sv-SE': SITE_URL },
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: SITE_URL,
    siteName: "Lulu's Streetfood",
    title: "Lulu's Streetfood | Skräddarsydda Matvagnar i Sverige",
    description:
      'Skräddarsydda food trucks och matvagnar för gastronomiska entreprenörer. Premiumkvalitet, full garanti, kostnadsfri offert.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Lulu's Streetfood – Skräddarsydda matvagnar i Sverige",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lulu's Streetfood | Skräddarsydda Matvagnar",
    description:
      'Food trucks byggda med passion. Skräddarsydda lösningar för gatumat, fackmannamässig installation och full garanti.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

/* ── JSON-LD schemas ──────────────────────────────────────────── */

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: "Lulu's Streetfood",
  url: SITE_URL,
  inLanguage: 'sv-SE',
  description:
    'Skräddarsydda food trucks och matvagnar för gastronomiska entreprenörer.',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: "Lulu's Streetfood AB",
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/lulus-truck.png`,
  },
  description:
    'Premium matvagnsbyggare i Sverige. Vi konstruerar skräddarsydda food trucks och matvagnar med hög kvalitet.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: { '@type': 'Language', name: 'Swedish' },
    email: 'contact@lulusstreetfood.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Sweden',
  },
  sameAs: [],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: "Lulu's Streetfood AB",
  url: SITE_URL,
  telephone: '+46739534472',
  email: 'contact@lulusstreetfood.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nygatan 71',
    postalCode: '462 31',
    addressLocality: 'Vänersborg',
    addressCountry: 'SE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 58.37820,
    longitude: 12.32345,
  },
  description:
    'Skräddarsydda matvagnar och food trucks. Vi bygger din drömvagn från grunden med premiumkvalitet och full garanti.',
  priceRange: '80 000 kr – 200 000 kr',
  currenciesAccepted: 'SEK',
  paymentAccepted: 'Faktura, finansiering',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    { '@type': 'Country', 'name': 'Sweden' },
    { '@type': 'City', 'name': 'Stockholm' },
    { '@type': 'City', 'name': 'Göteborg' },
    { '@type': 'City', 'name': 'Malmö' },
    { '@type': 'City', 'name': 'Uppsala' },
    { '@type': 'City', 'name': 'Västerås' },
    { '@type': 'City', 'name': 'Örebro' },
    { '@type': 'City', 'name': 'Linköping' },
    { '@type': 'City', 'name': 'Helsingborg' },
    { '@type': 'City', 'name': 'Jönköping' },
    { '@type': 'City', 'name': 'Norrköping' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Matvagnstjänster',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Skräddarsydd matvagn',
          description:
            'Komplett matvagn byggd efter kundens specifikation, inklusive kyla, ventilation, matlagningsutrustning, elinstallation, vattenanslutning och foliering.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Matvagnstillbehör & installation',
          description:
            'Professionell installation av köksutrustning, gasol, el och vattensystem i matvagnar. Godkänd för vägtrafik.',
        },
      },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad kostar en matvagn från Lulus Streetfood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grundpriset för en matvagn från Lulus Streetfood startar från 80 000 kr exklusive moms. Slutpriset beror på vagnstorleken (3,0–5,2 m) och vald utrustning såsom kyla, ventilation, matlagningsutrustning, vattenanslutning och foliering. Begär en kostnadsfri offert via vår webbplats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur lång tid tar det att bygga en matvagn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Byggtiden för en skräddarsydd matvagn varierar beroende på komplexitet och utrustningsnivå. I genomsnitt tar det 8–14 veckor från godkänd order till leverans. Du kan följa projektets status i vår kundportal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan jag anpassa min matvagn helt efter mina behov?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, alla Lulus Streetfood-matvagnar är helt skräddarsydda. Du väljer storlek (längd och bredd), inredning, köksutrustning, kyla, ventilation, el- och gassystem samt foliering och exteriör finish.',
      },
    },
    {
      '@type': 'Question',
      name: 'Uppfyller matvagnarna svenska hygienregler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, alla matvagnar från Lulus Streetfood uppfyller svenska hygienregler och livsmedelsstandarder. Vi säkerställer att vagnen är godkänd för livsmedelshantering och vägtrafik vid leverans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Erbjuder ni garanti på matvagnarna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, varje matvagn levereras med garanti på konstruktionen. Vi erbjuder även service och support efter leveransen samt hjälp med underhåll och reparationer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Var i Sverige levererar Lulus Streetfood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi levererar matvagnar och food trucks i hela Sverige. Kontakta oss för information om leveranstider och eventuella kostnader för leverans till din region.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="sv"
      className={`${epilogue.variable} ${manrope.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-[#FAF7F2] text-[#1A1A1A] font-body antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
