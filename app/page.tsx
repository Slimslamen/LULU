import Hero from '@/app/components/truck-explorer/Hero'
import OmVagnen from '@/app/components/truck-explorer/OmVagnen'
import TruckExplorerSection from '@/app/components/truck-explorer/TruckExplorerSection'
import KitchenEquipment from '@/app/components/truck-explorer/KitchenEquipment'
import TruckConfigurator from '@/app/components/truck-explorer/TruckConfigurator'
import BottomCTA from '@/app/components/truck-explorer/BottomCTA'

export default function TruckExplorerPage() {
  return (
    <main>
      <Hero />
      <OmVagnen />
      <TruckExplorerSection />
      <KitchenEquipment />
      <TruckConfigurator />
      <BottomCTA />
    </main>
  )
}
