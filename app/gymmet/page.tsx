import type { Metadata } from 'next'
import { CtaLink } from '@/components/cta-link'
import { FullBleedHero } from '@/components/full-bleed-hero'
import { GymRules } from '@/components/gym-rules'
import { EquipmentBrands } from '@/components/gym-section'
import { LockerRooms } from '@/components/locker-rooms'
import { PageIntro } from '@/components/page-intro'
import { ParentsSection } from '@/components/parents-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TrainingAreas } from '@/components/training-areas'
import { mailto, trainingHours } from '@/lib/site'

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
          logo={{ src: '/images/bpc-logo.png', alt: 'BPC Gym logo' }}
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
          <CtaLink href="/medlemskap" arrow>
            Bli medlem
          </CtaLink>
          <CtaLink href={mailto('Prøvetime hos BPC')} variant="outline">
            Spør om prøvetime
          </CtaLink>
        </PageIntro>

        <section aria-labelledby="omrader-title" className="border-t border-border py-16 md:py-24">
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

        <LockerRooms />

        <ParentsSection />

        <GymRules />
      </main>
      <SiteFooter />
    </>
  )
}
