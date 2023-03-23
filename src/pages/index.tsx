import { Dealerships } from '@/components/Dealership'
import HeroSection from '@/components/HomePageComponents/HeroSection'
import Buyers from '@/components/HomePageComponents/Buyers'
import Sellers from '@/components/HomePageComponents/Sellers'
import Security from '@/components/HomePageComponents/Security'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Buyers />
      <Sellers />
      <Dealerships isForHome={true} />
      <Security />
    </main>
  )
}
