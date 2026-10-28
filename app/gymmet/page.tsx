import type { Metadata } from 'next'
import { CtaLink } from '@/components/cta-link'
import { FullBleedHero } from '@/components/full-bleed-hero'
import { GymRules } from '@/components/gym-rules'
import { EquipmentBrands } from '@/components/gym-section'
import { LockerRooms } from '@/components/locker-rooms'
import { NewtechSection } from '@/components/newtech-section'
import { PageIntro } from '@/components/page-intro'
import { ParentsSection } from '@/components/parents-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TrainingAreas } from '@/components/training-areas'
import { WoodwaySection } from '@/components/woodway-section'
import { links, mailto, trainingHours } from '@/lib/site'

// Traced from gymmet-hero.jpg (16:9): the three long ceiling LED lines and the short one far back.
const ceilingLeds = [
  { x1: 10.4, y1: 0, x2: 65.5, y2: 39.6, s: '4.6s', delay: '0s' },
  { x1: 0, y1: 16.8, x2: 49, y2: 36, s: '4.2s', delay: '-1.6s' },
  { x1: 64.8, y1: 0, x2: 73.2, y2: 38.6, s: '3.8s', delay: '-2.8s' },
  { x1: 53.2, y1: 37.6, x2: 59.6, y2: 40.2, s: '3s', delay: '-0.8s' },
]

export const metadata: Metadata = {
  title: 'Gymmet',
  description:
    'Utforsk BPC Gym i Loddefjord: Langt treningsrom, Stort treningsrom, Hjertet av BPC og funksjonelle BPC Boxen.',
}

export default function GymPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <FullBleedHero
          id="gymmet-hero-title"
          eyebrow="BPC Gym"
          title="Utstyr i verdensklasse, midt i Loddefjord."
          text="Kondisjon, apparater og frivekter i en sal bygget for alle som vil bli sterkere."
          image={{
            src: '/images/gymmet-hero.jpg',
            alt: 'Treningssalen hos BPC med tredemøller, blå styrkeapparater og opplyst BPC-logo på veggen',
          }}
          logo={{ variant: 'gym', alt: 'BPC Gym logo' }}
          ceiling={ceilingLeds}
        />

        <PageIntro
          belowHero
          id="gymmet-title"
          eyebrow="Gymmet"
          title="Finn din egen treningsrytme."
          text="Utforsk gymmet i ditt tempo. Her får du en nærmere titt på treningsområdene, utstyret og stemningen før du kommer innom."
          image={{
            src: '/images/bpc-gym-vektskiver.jpg',
            alt: 'To smilende medlemmer bærer vektskiver i styrkesalen hos BPC under blått lys',
          }}
        >
          <CtaLink
            href={links.signup}
            arrow
            className="cta-sweep cta-culture glow relative overflow-hidden font-semibold"
          >
            <span className="relative">Bli medlem</span>
          </CtaLink>
          <CtaLink href={mailto('Prøvetime hos BPC')} variant="outline">
            Spør om prøvetime
          </CtaLink>
        </PageIntro>

        <section aria-labelledby="omrader-title" className="border-t border-border py-14 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 id="omrader-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
                Treningsområdene
              </h2>
              <p className="text-sm text-muted-foreground">{`Åpent for trening ${trainingHours.hours} alle dager`}</p>
            </div>
            <TrainingAreas />
            <EquipmentBrands />
          </div>
        </section>

        <NewtechSection />

        <WoodwaySection />

        <LockerRooms />

        <ParentsSection />

        <GymRules />
      </main>
      <SiteFooter />
    </>
  )
}
