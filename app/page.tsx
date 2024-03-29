import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Plans from '@/components/Plans'
import Prev from '@/components/PrevWork'
import Services from '@/components/Services'
import Image from 'next/image'
import Clients from '@/components/clients/clients'
import Testimonials from '@/components/Testimonials'
import LogoCarousel from '@/components/LogoCarousel'
import Work from '@/components/Work'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      <Prev />
      <LogoCarousel />
      <Services />
      {/* <Clients /> */}
      <Banner />
      <Work />
      <Plans />
      <Testimonials />
      <Footer />
    </main>
  )
}
