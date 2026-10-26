import { BoxenSection } from '@/components/boxen-section'
import { Contact } from '@/components/contact'
import { EverydaySection } from '@/components/everyday-section'
import { GymSection } from '@/components/gym-section'
import { Hero } from '@/components/hero'
import { MemberBenefits } from '@/components/member-benefits'
import { MembershipOffer } from '@/components/membership-offer'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TrySection } from '@/components/try-section'
import { VirtualTour } from '@/components/virtual-tour'
import { WellnessSection } from '@/components/wellness-section'
import { WelcomeStatement } from '@/components/welcome-statement'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WelcomeStatement />
        <div id="medlemskap-tilbud" className="scroll-mt-20">
          <MembershipOffer />
        </div>
        <VirtualTour />
        <GymSection />
        <WellnessSection />
        <BoxenSection />
        <EverydaySection />
        <MemberBenefits />
        <TrySection />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
