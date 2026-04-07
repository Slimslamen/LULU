import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lulusstreetfood.se'

export const metadata: Metadata = {
  title: "Custom Food Trucks Built in Sweden | Lulu's Streetfood",
  description:
    "Build your dream food truck with Lulu's Streetfood. Custom-built street food vehicles with premium quality, certified electrical installation, and full warranty. Request a free quote today.",
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: { 'sv-SE': SITE_URL },
  },
  openGraph: {
    locale: 'en_US',
    alternateLocale: ['sv_SE'],
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
