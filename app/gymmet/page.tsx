import type { Metadata } from 'next'
import { CtaLink } from '@/components/cta-link'
import { GymRules } from '@/components/gym-rules'
import { EquipmentBrands, GymGallery } from '@/components/gym-section'
import { PageIntro } from '@/components/page-intro'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { mailto, trainingHours } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Gymmet',
  description:
    'Utforsk BPC Gym i Loddefjord: styrketrening, frivekter, apparatsal, kondisjon og funksjonell sone.',
}

export default function GymPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
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
            <GymGallery />
            <EquipmentBrands />
          </div>
        </section>

        <GymRules />
      </main>
      <SiteFooter />
    </>
  )
}
