import type { Metadata } from 'next'
import { CtaLink } from '@/components/cta-link'
import { HelpStrip } from '@/components/help-strip'
import { PageIntro } from '@/components/page-intro'
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
        <PageIntro
          id="barnepass-title"
          eyebrow="BPC Kids · Barnepass"
          title="Plass til både trening og familieliv."
          text="BPC Kids er barnepasset hos oss. Har du spørsmål om barnepass eller babypass? Kontakt oss om tilbudet, aktuelle tider og hvordan du bestiller plass."
          image={{
            src: '/images/bpc-kids.jpg',
            alt: 'BPC Kids, barnerommet hos BPC med klatrevegg, ribbevegg og myke matter',
          }}
        >
          <CtaLink href={mailto('BPC Kids – barnepass')} arrow>
            Spør om barnepass
          </CtaLink>
        </PageIntro>
        <HelpStrip />
      </main>
      <SiteFooter />
    </>
  )
}
