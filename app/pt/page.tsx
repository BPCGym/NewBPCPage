import type { Metadata } from 'next'
import { CtaLink } from '@/components/cta-link'
import { HelpStrip } from '@/components/help-strip'
import { PageIntro } from '@/components/page-intro'
import { PtGallery } from '@/components/pt-gallery'
import { PtStories } from '@/components/pt-stories'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TermsStrip } from '@/components/terms-strip'
import { mailto } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Personlig trening',
  description: 'Ta kontakt med BPC Gym i Loddefjord om mulighetene for personlig trening.',
}

export default function PersonalTrainingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          id="pt-title"
          compact
          eyebrow="Personlig trening"
          title="Ta neste steg i treningen."
          text="Fortell oss hva du ønsker å få til. Ta kontakt om mulighetene for personlig trening hos BPC."
          image={{
            src: '/images/pt-markloft.jpg',
            alt: 'PT følger nøye med og sikrer et medlem som løfter markløft i blått lys hos BPC',
          }}
        >
          <CtaLink href={mailto('Personlig trening hos BPC')} arrow>
            Spør om personlig trening
          </CtaLink>
        </PageIntro>
        <PtStories />
        <PtGallery />
        <HelpStrip />
        <TermsStrip />
      </main>
      <SiteFooter />
    </>
  )
}
