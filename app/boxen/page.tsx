import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaLink } from '@/components/cta-link'
import { GroupSchedule } from '@/components/group-schedule'
import { HelpStrip } from '@/components/help-strip'
import { PageIntro } from '@/components/page-intro'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SmartLink } from '@/components/smart-link'
import { mailto } from '@/lib/site'

export const metadata: Metadata = {
  title: 'BPC Boxen',
  description:
    'BPC Boxen er funksjonell gruppetrening hos BPC i Loddefjord. Instruktørledede timer som kan tilpasses alle nivåer.',
}

const benefits = [
  {
    title: 'Funksjonell trening',
    text: 'Øktene bygger på kroppens naturlige bevegelser: løft, trekk, press, hopp og bæring. Du trener flere muskelgrupper samtidig og får styrke, utholdenhet og bevegelighet i samme økt.',
  },
  {
    title: 'For alle nivåer',
    text: 'Alle øvelser kan skaleres, byttes ut eller gjøres lettere. Du styrer tempoet selv, og instruktøren hjelper deg å finne riktig nivå.',
  },
  {
    title: 'Ferdig planlagt',
    text: 'Du slipper å tenke på program, øvelser og oppvarming. Møt opp, gjør innsatsen, og la instruktøren ta seg av resten.',
  },
  {
    title: 'Trening i fellesskap',
    text: 'Energien i en gruppe gjør det lettere å holde motivasjonen oppe. Mange syns det er enklere å møte opp når andre venter.',
  },
]

const steps = [
  {
    title: 'Oppvarming',
    text: 'Instruktøren leder en felles oppvarming som gjør kroppen klar for dagens økt.',
  },
  {
    title: 'Teknikk og gjennomgang',
    text: 'Dagens øvelser blir vist og forklart, med alternativer for ulike nivåer.',
  },
  {
    title: 'Dagens økt',
    text: 'Dere trener sammen. Instruktøren følger med, retter teknikk og tilpasser underveis.',
  },
]

const groups = [
  {
    title: 'Idrettslag',
    text: 'Vi kan sette opp gruppetrening tilpasset lagets idrett, med fokus på styrke, utholdenhet og skadeforebygging. Ta kontakt for et opplegg.',
    href: mailto('Gruppetrening for idrettslag'),
    cta: 'Spør om tilbud for lag',
  },
  {
    title: 'Bedrifter',
    text: 'Felles trening gir de ansatte noe å se frem til og styrker samholdet. Vi lager et opplegg som passer bedriften.',
    href: mailto('Gruppetrening for bedrift'),
    cta: 'Spør om tilbud for bedrift',
  },
]

export default function BoxenPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          id="boxen-title"
          eyebrow="BPC Boxen · Gruppetrening"
          title="Tren sammen. Bli sterkere."
          text="BPC Boxen er vår avdeling for funksjonell gruppetrening. Instruktøren legger opp økten, og alle øvelser kan tilpasses ditt nivå."
          image={{
            src: '/images/bpc-funksjonell.jpg',
            alt: 'Området for funksjonell trening hos BPC med rigg, kettlebells og treningsgulv',
          }}
        >
          <CtaLink href="/provetime" arrow>
            Book en prøvetime
          </CtaLink>
          <CtaLink href={mailto('Gruppetrening i BPC Boxen')} variant="outline">
            Spør oss om Boxen
          </CtaLink>
        </PageIntro>

        <section aria-labelledby="hva-title" className="border-t border-border bg-card py-16 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <div className="flex max-w-2xl flex-col gap-4">
              <h2 id="hva-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Hva er BPC Boxen?
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Funksjonell gruppetrening kombinerer styrke, kondisjon og bevegelighet på en måte som gjør kroppen
                bedre rustet for både trening og hverdag. Ingen økter er helt like, og det er alltid noe nytt å
                strekke seg etter.
              </p>
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              {benefits.map((item) => (
                <li key={item.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="time-title" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-5 md:gap-16">
            <div className="flex flex-col gap-6 md:col-span-3">
              <h2 id="time-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Slik foregår en time
              </h2>
              <ol className="flex flex-col border-t border-border">
                {steps.map((step) => (
                  <li key={step.title} className="flex flex-col gap-1 border-b border-border py-5">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{step.text}</p>
                  </li>
                ))}
              </ol>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Ny i gruppetrening? Si fra til instruktøren når du kommer, så får du en god start.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2 md:aspect-[4/5]">
              <Image
                src="/images/bpc-frivekter.jpg"
                alt="Frivektsområdet hos BPC med manualer og vektskiver"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="timeplan-title" className="border-t border-border bg-card py-16 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <div className="flex max-w-2xl flex-col gap-4">
              <h2 id="timeplan-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Timeplan
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Fast ukeplan ut 2026. Instruktørene rullerer, så du møter flere av trenerne våre gjennom uken.
              </p>
            </div>
            <GroupSchedule />
          </div>
        </section>

        <section aria-labelledby="tilgang-boxen-title" className="border-t border-border py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col items-start gap-5">
              <h2 id="tilgang-boxen-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Tilgang til gruppetimene
              </h2>
              <p className="max-w-lg leading-relaxed text-muted-foreground">
                Gruppetimene i BPC Boxen er ikke inkludert i egentreningsmedlemskapet. Kontakt oss for medlemskap
                og pris for gruppetrening.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <CtaLink href={mailto('Medlemskap i BPC Boxen')}>Spør om medlemskap</CtaLink>
                <CtaLink href="/medlemskap" variant="outline">
                  Se medlemskap
                </CtaLink>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 md:p-8">
              <h3 className="text-lg font-semibold">Vil du teste først?</h3>
              <p className="leading-relaxed text-muted-foreground">
                Book en prøvetime eller kom på drop-in, så får du kjenne på hvordan en time i Boxen er.
              </p>
              <SmartLink
                href="/provetime"
                className="mt-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Prøvetime og drop-in
              </SmartLink>
            </div>
          </div>
        </section>

        <section aria-labelledby="grupper-title" className="py-16 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <div className="flex max-w-2xl flex-col gap-4">
              <h2 id="grupper-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                For idrettslag og bedrifter
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Vi tilbyr gruppetrening med lav terskel, tilpasset gruppen. Målet er trygg progresjon, mestring og
                et sterkere fellesskap.
              </p>
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              {groups.map((group) => (
                <li key={group.title} className="flex flex-col gap-3 rounded-2xl border border-border p-6">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{group.text}</p>
                  <SmartLink
                    href={group.href}
                    className="mt-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {group.cta}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <HelpStrip title="Spørsmål om gruppetrening?" />
      </main>
      <SiteFooter />
    </>
  )
}
