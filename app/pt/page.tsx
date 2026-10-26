import type { Metadata } from 'next'
import { CtaLink } from '@/components/cta-link'
import { HelpStrip } from '@/components/help-strip'
import { PageIntro } from '@/components/page-intro'
import { PtGallery } from '@/components/pt-gallery'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
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
          eyebrow="Personlig trening"
          title="Ta neste steg i treningen."
          text="Fortell oss hva du ønsker å få til. Ta kontakt om mulighetene for personlig trening hos BPC."
          image={{
            src: '/images/bpc-funksjonell.jpg',
            alt: 'Funksjonell sone hos BPC med kunstgress, romaskiner, airbikes og frivekter',
          }}
        >
          <CtaLink href={mailto('Personlig trening hos BPC')} arrow>
            Spør om personlig trening
          </CtaLink>
        </PageIntro>
        <PtGallery />
        <HelpStrip />
      </main>
      <SiteFooter />
    </>
  )
}
