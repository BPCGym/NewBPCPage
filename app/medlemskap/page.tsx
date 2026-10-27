import type { Metadata } from 'next'
import { ChevronDown } from 'lucide-react'
import { CampaignTerms } from '@/components/campaign-terms'
import { CtaLink } from '@/components/cta-link'
import { FullBleedHero } from '@/components/full-bleed-hero'
import { MembershipCards } from '@/components/membership-cards'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SmartLink } from '@/components/smart-link'
import { campaign, company, links, mailto } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Medlemskap',
  description:
    'Se hva medlemskapet hos BPC Gym i Loddefjord omfatter, og fullfør innmeldingen i medlemssystemet.',
}

const otherOptions = [
  {
    title: 'Gruppetrening',
    text: 'Gruppetimene er i BPC Boxen. Velg medlemskap og meld deg inn direkte.',
    href: links.signup,
    cta: 'Bli medlem',
  },
  {
    title: 'Har du spørsmål?',
    text: 'Usikker på hva som passer deg? Send oss en e-post, så hjelper vi deg.',
    href: mailto('Medlemskap hos BPC'),
    cta: 'Spør oss om medlemskap',
  },
]

export default function MembershipPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <FullBleedHero
          id="medlemskap-title"
          eyebrow="Medlemskap"
          title="Finn din plass på BPC."
          text="Se hva medlemskapet omfatter, og fullfør innmeldingen i medlemssystemet vårt."
          image={{
            src: '/images/bpc-maskinrom.jpg',
            alt: 'Apparatsalen hos BPC med lilla og blått lys langs taket, Booty Builder og blått marmorgulv',
          }}
        >
          <div className="flex flex-col items-start gap-2">
            <CtaLink href={links.signup} arrow className="w-full sm:w-auto">
              Fortsett til innmelding
            </CtaLink>
            <p className="text-sm text-foreground/80">Du går videre til BPCs medlemssystem.</p>
          </div>
          <a
            href="#priser"
            className="inline-flex h-12 items-center rounded-full border border-foreground/30 bg-background/40 px-6 text-sm font-medium backdrop-blur transition-colors hover:bg-background/70"
          >
            Se priser
          </a>
        </FullBleedHero>

        {campaign.enabled && (
          <section aria-label="Kampanje" className="pt-10 md:pt-12">
            <div className="mx-auto max-w-7xl px-6">
              <CampaignTerms />
            </div>
          </section>
        )}

        {campaign.enabled && (
          <section aria-labelledby="garanti-title" className="border-y border-border bg-card py-8 md:py-10">
            <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2 md:items-start md:gap-12">
              <div className="flex flex-col gap-2">
                <h2 id="garanti-title" className="text-balance text-xl font-semibold tracking-tight md:text-2xl">
                  14-dagersgaranti
                </h2>
                <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
                  {`Ombestemmer du deg, kan du avslutte avtalen innen 14 dager etter innmelding. Du betaler da ${campaign.introPrice} kr for perioden.`}
                </p>
              </div>
              <details className="group rounded-xl border border-border bg-background px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
                  Vilkår for garantien
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                  />
                </summary>
                <ul className="mt-5 flex list-disc flex-col gap-3 pl-5 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    {'Skriftlig beskjed må være mottatt på '}
                    <a href={links.email} className="text-foreground underline underline-offset-4">
                      {company.emailDisplay}
                    </a>
                    {' innen 14 dager etter innmelding.'}
                  </li>
                  <li>Garantien gjelder én gang per person, og ikke ved senere innmeldinger.</li>
                  <li>{`Avtalen avsluttes fra beskjeden er mottatt. Prisen for perioden er ${campaign.introPrice} kr.`}</li>
                  <li>Oppsigelse i Appen utløser ikke garantien.</li>
                </ul>
              </details>
            </div>
          </section>
        )}

        <section id="priser" aria-labelledby="medlemskapene-title" className="scroll-mt-28 pt-10 md:pt-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6">
            <h2 id="medlemskapene-title" className="text-xl font-semibold tracking-tight md:text-2xl">
              Våre medlemskap og priser
            </h2>
            <MembershipCards />
          </div>
        </section>

        <section aria-labelledby="andre-valg-title" className="py-10 md:py-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6">
            <h2 id="andre-valg-title" className="text-xl font-semibold tracking-tight md:text-2xl">
              Andre valg
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {otherOptions.map((option) => (
                <li key={option.title} className="flex flex-col gap-1.5 rounded-xl border border-border bg-card px-5 py-4">
                  <h3 className="text-sm font-semibold">{option.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{option.text}</p>
                  <SmartLink
                    href={option.href}
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {option.cta}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
