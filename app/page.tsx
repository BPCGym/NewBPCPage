import { About } from '@/components/about'
import { Community } from '@/components/community'
import { Contact } from '@/components/contact'
import { Equipment } from '@/components/equipment'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { OpeningHours } from '@/components/opening-hours'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Equipment />
        <Gallery />
        <OpeningHours />
        <Community />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
