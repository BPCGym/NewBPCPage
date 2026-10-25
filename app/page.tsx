import { BoxenSection } from '@/components/boxen-section'
import { Contact } from '@/components/contact'
import { EverydaySection } from '@/components/everyday-section'
import { GymSection } from '@/components/gym-section'
import { Hero } from '@/components/hero'
import { MembershipOffer } from '@/components/membership-offer'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TrySection } from '@/components/try-section'
import { WellnessSection } from '@/components/wellness-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
          <MembershipOffer />
        <GymSection />
        <WellnessSection />
        <BoxenSection />
        <EverydaySection />
        <TrySection />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
