import type { Metadata } from 'next'
import { CtaLink } from '@/components/cta-link'
import { HelpStrip } from '@/components/help-strip'
import { KidsFeature } from '@/components/kids-feature'
import { KidsGallery } from '@/components/kids-gallery'
import { KidsPeople } from '@/components/kids-people'
import { KidsSchedule } from '@/components/kids-schedule'
import { KidsRules } from '@/components/kids-rules'
import { FullBleedHero } from '@/components/full-bleed-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { mailto } from '@/lib/site'

export const metadata: Metadata = {
  title: 'BPC Kids – barnepass',
  description:
    'BPC Kids er barnepasset hos BPC Gym i Loddefjord. Spør oss om barnepass og babypass, aktuelle tider og hvordan du bestiller plass.',
}

export default function ChildcarePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <FullBleedHero
          id="barnepass-title"
          eyebrow="BPC Kids · Barnepass"
          title="Plass til både trening og familieliv."
          text="BPC Kids er barnepasset hos oss. Har du spørsmål om barnepass eller babypass? Kontakt oss om tilbudet, aktuelle tider og hvordan du bestiller plass."
          image={{
            src: '/images/barnepass-hero.jpg',
            alt: 'BPC Kids, barnerommet hos BPC med fargerik klatrevegg, ribbevegg, myke matter og kosedyr',
          }}
          logo={{ src: '/images/bpc-kids-logo.png', alt: 'BPC Kids logo' }}
        >
          <CtaLink href={mailto('BPC Kids – barnepass')} arrow className="glow">
            Spør om barnepass
          </CtaLink>
        </FullBleedHero>
        <KidsFeature />
        <KidsPeople />
        <KidsSchedule />
        <KidsRules />
        <KidsGallery />
        <HelpStrip />
      </main>
      <SiteFooter />
    </>
  )
}
