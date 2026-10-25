import type { Metadata } from 'next'
import { ChevronDown } from 'lucide-react'
import { CampaignTerms } from '@/components/campaign-terms'
import { CtaLink } from '@/components/cta-link'
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
    text: 'Gruppetimene er i BPC Boxen. Se timeplanen og hvordan det fungerer.',
    href: links.boxen,
    cta: 'Les om BPC Boxen',
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
      <main className="pt-28 md:pt-36">
        <section aria-labelledby="medlemskap-title" className="pb-16 md:pb-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col items-start gap-6">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Medlemskap</p>
              <h1
                id="medlemskap-title"
                className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
              >
                Finn din plass på BPC.
              </h1>
              <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                Se hva medlemskapet omfatter, og fullfør innmeldingen i medlemssystemet vårt.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {campaign.enabled ? (
                <CampaignTerms />
              ) : (
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <p className="text-lg leading-relaxed">
                    Se alternativene og velg hvordan du vil trene hos BPC.
                  </p>
                </div>
              )}
              <div className="flex flex-col items-start gap-2">
                <CtaLink href={links.signup} arrow className="w-full sm:w-auto">
                  Fortsett til innmelding
                </CtaLink>
                <p className="text-sm text-muted-foreground">Du går videre til BPCs medlemssystem.</p>
              </div>
            </div>
          </div>
        </section>

        {campaign.enabled && (
          <section aria-labelledby="garanti-title" className="border-y border-border bg-card py-16 md:py-20">
            <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col gap-4">
                <h2 id="garanti-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                  14-dagersgaranti
                </h2>
                <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
                  {`Ombestemmer du deg, kan du avslutte avtalen innen 14 dager etter innmelding. Du betaler da ${campaign.introPrice} kr for perioden.`}
                </p>
              </div>
              <details className="group rounded-2xl border border-border bg-background p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
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
                  <li>Oppsigelse i appen utløser ikke garantien.</li>
                </ul>
              </details>
            </div>
          </section>
        )}

        <section aria-labelledby="medlemskapene-title" className="pt-16 md:pt-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <h2 id="medlemskapene-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
              Våre medlemskap
            </h2>
            <MembershipCards />
          </div>
        </section>

        <section aria-labelledby="andre-valg-title" className="py-16 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <h2 id="andre-valg-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
              Andre valg
            </h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {otherOptions.map((option) => (
                <li key={option.title} className="flex flex-col gap-3 rounded-2xl border border-border p-6">
                  <h3 className="text-lg font-semibold">{option.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{option.text}</p>
                  <SmartLink
                    href={option.href}
                    className="mt-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
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
