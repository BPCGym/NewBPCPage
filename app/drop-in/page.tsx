import type { Metadata } from 'next'
import { CtaLink } from '@/components/cta-link'
import { DropInCards } from '@/components/drop-in-cards'
import { FullBleedHero } from '@/components/full-bleed-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Drop-in',
  description:
    'Tren hos BPC Gym i Loddefjord uten medlemskap. Kjøp drop-in i Appen Min Trening og skann deg inn selv i hele åpningstiden.',
}

const steps = [
  { title: 'Last ned Appen', text: 'Last ned «Min Trening» fra App Store eller Google Play.' },
  { title: 'Velg senteret', text: 'Velg «Bergen Performance Center».' },
  { title: 'Registrer deg', text: 'Trykk «Registrer deg» og opprett profilen din.' },
  { title: 'Kjøp drop-in', text: 'Velg «Kjøp drop-in» og ønsket type.' },
  { title: 'Fullfør', text: 'Fullfør registrering og aktivering.' },
  { title: 'Skann deg inn', text: 'Aktiver QR-koden i Appen – du finner den øverst i høyre hjørne.' },
]

const facts = [
  {
    title: 'Kjøp samme dag',
    text: 'Du trenger kun å kjøpe drop-in den dagen du skal trene – gjerne på vei hit, eller i gaten utenfor.',
  },
  {
    title: 'Hele åpningstiden',
    text: 'Drop-in kan kjøpes og brukes når som helst i åpningstiden vår.',
  },
  {
    title: 'Du slipper deg selv inn',
    text: 'Skann QR-koden ved inngangen. Vi trenger ikke være til stede for at du skal få tilgang til BPC.',
  },
]

export default function DropInPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <FullBleedHero
          id="dropin-title"
          eyebrow="Drop-in"
          title="Tren når det passer deg."
          text="Ingen medlemskap, ingen binding. Kjøp drop-in i Appen Min Trening og skann deg inn selv."
          image={{
            src: '/images/drop-in-hero.jpg',
            alt: 'Inngangen hos BPC med blått lys rundt veggpanelet, adgangsportal med QR-leser og skilt til garderober, gym og gruppetrening',
          }}
        >
          <CtaLink href="#slik-kjoper-du" arrow>
            Slik kjøper du drop-in
          </CtaLink>
        </FullBleedHero>

        <section id="slik-kjoper-du" aria-labelledby="dropin-steg-title" className="scroll-mt-24 py-14 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Slik får du adgang</p>
              <h2
                id="dropin-steg-title"
                className="text-balance text-2xl font-semibold tracking-tight md:text-4xl"
              >
                Slik kjøper du drop-in
              </h2>
              <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                Drop-in kjøpes kun i Appen Min Trening, ikke på nettsiden.
              </p>
            </div>

            <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4 bg-card p-5 md:p-6">
                  <span
                    aria-hidden="true"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                  >
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <ul className="grid gap-6 md:grid-cols-3">
              {facts.map((fact) => (
                <li key={fact.title} className="flex flex-col gap-2 border-t border-border pt-5">
                  <h3 className="font-semibold">{fact.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{fact.text}</p>
                </li>
              ))}
            </ul>
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
