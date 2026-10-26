import type { Metadata } from 'next'
import { StaffedHoursList } from '@/components/contact'
import { CtaLink } from '@/components/cta-link'
import { FullBleedHero } from '@/components/full-bleed-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { mailto } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Prøvetime og drop-in',
  description:
    'Bli kjent med BPC Gym i Loddefjord. Spør om prøvetime, eller velg drop-in for én økt med Egentrening uten medlemskap.',
}

const appSteps = [
  'Last ned appen Min Trening.',
  'Velg Bergen Performance Center.',
  'Fullfør registrering og aktivering.',
  'Tilgangen din vises som en QR-kode i appen.',
]

export default function TrialPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <FullBleedHero
          id="provetime-title"
          eyebrow="Prøvetime / Drop-in"
          title="Prøv BPC. Kjenn på stemningen."
          text="Bli kjent med senteret, utstyret og miljøet. Kontakt oss om prøvetime, eller velg drop-in for én økt med Egentrening uten medlemskap."
          image={{
            src: '/images/provetime-hero.jpg',
            alt: 'Resepsjonen hos BPC med opplyst BPC-logo, blått lys under disken og marmorert blått gulv',
          }}
        >
          <CtaLink href={mailto('Prøvetime hos BPC')} arrow>
            Spør om prøvetime
          </CtaLink>
          <CtaLink href="/kontakt" variant="outline">
            Kontakt resepsjonen
          </CtaLink>
        </FullBleedHero>

        <section aria-labelledby="valg-title" className="border-t border-border bg-card py-16 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <h2 id="valg-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
              To måter å prøve på
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 md:p-8">
                <h3 className="text-xl font-semibold">Prøvetime</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Prøvetilbudet kan benyttes én gang per person. Kontakt oss, så avtaler vi hvordan du kommer i
                  gang.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 md:p-8">
                <h3 className="text-xl font-semibold">Drop-in</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Én økt med Egentrening uten medlemskap. Senere besøk er drop-in. Du kjøper drop-in i appen eller i
                  resepsjonen i bemannet tid.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="app-title" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-6">
              <h2 id="app-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Slik får du tilgang i appen
              </h2>
              <ol className="flex flex-col border-t border-border">
                {appSteps.map((step, i) => (
                  <li key={step} className="flex gap-5 border-b border-border py-4 text-lg leading-relaxed">
                    <span aria-hidden="true" className="w-6 shrink-0 font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-sm font-medium text-muted-foreground">Bemannet resepsjon</h2>
              <StaffedHoursList />
              <p className="text-xs leading-relaxed text-muted-foreground">Bemanningen kan avvike på helligdager.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
