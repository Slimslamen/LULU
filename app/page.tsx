import type { Metadata } from 'next'
import Hero from '@/app/components/truck-explorer/Hero'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lulusstreetfood.se'

export const metadata: Metadata = {
  title: 'Skräddarsydda Matvagnar & Food Trucks',
  description:
    'Bygg din drömmatvagn med Lulus Streetfood. Skräddarsydda food trucks med premiumkvalitet, fackmannamässig el- och gasinstallation och full garanti. Begär kostnadsfri offert idag.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Lulu's Streetfood | Skräddarsydda Matvagnar & Food Trucks i Sverige",
    description:
      'Bygg din drömmatvagn med Lulus Streetfood. Skräddarsydda food trucks för gatumat – från skiss till färdig vagn med full garanti.',
    url: SITE_URL,
  },
}
import OmVagnen from '@/app/components/truck-explorer/OmVagnen'
import TruckExplorerSection from '@/app/components/truck-explorer/TruckExplorerSection'
import KitchenEquipment from '@/app/components/truck-explorer/KitchenEquipment'
import TruckConfigurator from '@/app/components/truck-explorer/TruckConfigurator'
import ProcessSection from '@/app/components/truck-explorer/ProcessSection'
import BottomCTA from '@/app/components/truck-explorer/BottomCTA'

export default function TruckExplorerPage() {
  return (
    <main>
      <Hero />
      <ProcessSection />
      <OmVagnen />
      <TruckExplorerSection />
      <KitchenEquipment />
      <TruckConfigurator />
      <BottomCTA />
    </main>
  )
}
