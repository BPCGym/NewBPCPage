import type { Metadata } from 'next'
import { CtaLink } from '@/components/cta-link'
import { DropInCards } from '@/components/drop-in-cards'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Drop-in',
  description:
    'Tren hos BPC Gym i Loddefjord uten medlemskap. Drop-in for Egentrening, Gruppetrening og badstue.',
}

export default function DropInPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-28 md:pt-36">
        <section aria-labelledby="dropin-title" className="pb-16 md:pb-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Drop-in</p>
            <h1
              id="dropin-title"
              className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
            >
              Tren når det passer deg.
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Ingen medlemskap, ingen binding. Drop-in kjøpes kun i Appen Min Trening, ikke på nettsiden.
            </p>
          </div>
        </section>

        <section aria-labelledby="dropin-priser-title" className="pb-16 md:pb-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <h2 id="dropin-priser-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
              Priser
            </h2>
            <DropInCards />
          </div>
        </section>

        <section aria-labelledby="dropin-medlem-title" className="border-t border-border bg-card py-14 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <h2 id="dropin-medlem-title" className="text-balance text-2xl font-semibold tracking-tight">
                Trener du ofte?
              </h2>
              <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
                Da lønner det seg fort med et medlemskap.
              </p>
            </div>
            <CtaLink href="/medlemskap" arrow>
              Se medlemskap
            </CtaLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
