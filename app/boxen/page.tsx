import type { Metadata } from 'next'
import Image from 'next/image'
import { CalendarDays, ClipboardCheck, Dumbbell, HeartHandshake, SlidersHorizontal, Users, type LucideIcon } from 'lucide-react'
import { CtaLink } from '@/components/cta-link'
import { GroupSchedule } from '@/components/group-schedule'
import { HelpStrip } from '@/components/help-strip'
import { FullBleedHero } from '@/components/full-bleed-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SmartLink } from '@/components/smart-link'
import { StrongSteady } from '@/components/strong-steady'
import { mailto } from '@/lib/site'

export const metadata: Metadata = {
  title: 'BPC Boxen',
  description:
    'BPC Boxen er funksjonell Gruppetrening hos BPC i Loddefjord. Instruktørledede timer som kan tilpasses alle nivåer.',
}

const benefits: { title: string; text: string; icon: LucideIcon }[] = [
  {
    icon: Dumbbell,
    title: 'Funksjonell trening',
    text: 'Løft, trekk, press, hopp og bæring. Styrke, utholdenhet og bevegelighet i samme økt.',
  },
  {
    icon: SlidersHorizontal,
    title: 'For alle nivåer',
    text: 'Alle øvelser kan skaleres. Instruktøren hjelper deg å finne riktig nivå.',
  },
  {
    icon: ClipboardCheck,
    title: 'Ferdig planlagt',
    text: 'Møt opp og gjør innsatsen. Instruktøren tar seg av program og oppvarming.',
  },
  {
    icon: Users,
    title: 'Trening i fellesskap',
    text: 'Energien i gruppen holder motivasjonen oppe, og det er lettere å møte opp.',
  },
]

const steps = [
  {
    title: 'Gjennomgang og oppvarming',
    text: 'Instruktøren går gjennom dagens økt på tavla og leder en felles oppvarming.',
    image: '/images/boxen-brief.jpg',
    alt: 'Instruktør forklarer dagens økt foran tavla i BPC Boxen',
    position: 'object-[center_38%]',
  },
  {
    title: 'Teknikk og dagens økt',
    text: 'Øvelsene blir vist og forklart, før dere trener sammen med tett oppfølging.',
    image: '/images/boxen-coaching.jpg',
    alt: 'Instruktør viser riktig teknikk på knebøy med medisinball',
    position: 'object-[center_40%]',
  },
]

const gallery = [
  { src: '/images/boxen-liv-lop.jpg', alt: 'Medlem løper på kurvet tredemølle i BPC Boxen', position: 'object-center' },
  { src: '/images/boxen-liv-airbike.jpg', alt: 'Medlem gir alt på airbike i BPC Boxen', position: 'object-[center_35%]' },
  { src: '/images/boxen-liv-wallball.jpg', alt: 'Medlem kaster wallball i BPC Boxen', position: 'object-[center_35%]' },
  { src: '/images/boxen-liv-slede.jpg', alt: 'Medlem skyver slede på sprintbanen i BPC Boxen', position: 'object-center' },
  { src: '/images/boxen-liv-planke.jpg', alt: 'Medlem og trener gir hverandre high five i planke', position: 'object-[center_35%]' },
  { src: '/images/boxen-liv-tau.jpg', alt: 'Medlem trener med kampsnor i BPC Boxen', position: 'object-center' },
  { src: '/images/boxen-liv-pushup.jpg', alt: 'Medlem tar push-ups på kunstgresset i BPC Boxen', position: 'object-center' },
  { src: '/images/boxen-liv-trenere.jpg', alt: 'To smilende trenere i BPC Boxen', position: 'object-[center_30%]' },
]

const groups = [
  {
    title: 'Idrettslag',
    text: 'Vi kan sette opp Gruppetrening tilpasset lagets idrett, med fokus på styrke, utholdenhet og skadeforebygging. Ta kontakt for et opplegg.',
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
        <FullBleedHero
          id="boxen-title"
          eyebrow="BPC Boxen · Gruppetrening"
          title="Tren sammen. Bli sterkere."
          text="BPC Boxen er vår avdeling for funksjonell Gruppetrening. Instruktøren legger opp økten, og alle øvelser kan tilpasses ditt nivå."
          image={{
            src: '/images/boxen-hero.jpg',
            alt: 'BPC Boxen med sprintbane i kunstgress og BPC-logo, rigg med ringer og blått lys langs trappen',
          }}
          logo={{ src: '/images/bpc-boxen-logo.png', alt: 'BPC Boxen logo' }}
        >
          <CtaLink href="/provetime" arrow className="glow">
            Book en prøvetime
          </CtaLink>
          <CtaLink href="#timeplan-title" variant="outline">
            <CalendarDays className="size-4" aria-hidden="true" />
            Se vår timeplan
          </CtaLink>
          <CtaLink href={mailto('Gruppetrening i BPC Boxen')} variant="outline">
            Spør oss om Boxen
          </CtaLink>
        </FullBleedHero>

        <section aria-labelledby="hva-title" className="border-t border-border bg-card py-14 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Om Boxen</p>
                  <h2 id="hva-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                    Hva er BPC Boxen?
                  </h2>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    Funksjonell Gruppetrening som kombinerer styrke, kondisjon og bevegelighet. Kroppen blir bedre
                    rustet for både trening og hverdag, og ingen økter er helt like.
                  </p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {benefits.map(({ title, text, icon: Icon }) => (
                    <li
                      key={title}
                      className="group flex gap-3 rounded-xl border border-border bg-background p-4 transition-colors duration-300 hover:border-primary/40"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-semibold">{title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 id="time-title" className="text-lg font-semibold tracking-tight">
                  Slik foregår en time
                </h3>
                <ol className="grid grid-cols-2 gap-3 md:gap-4">
                  {steps.map((step, i) => (
                    <li
                      key={step.title}
                      className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border"
                    >
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className={`object-cover transition-transform duration-700 hover:scale-105 ${step.position}`}
                      />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-linear-to-t from-background via-background/85 to-transparent p-4 pt-16">
                        <div className="flex items-center gap-2">
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                            {i + 1}
                          </span>
                          <h4 className="text-sm font-semibold">{step.title}</h4>
                        </div>
                        <p className="text-pretty text-xs leading-relaxed text-muted-foreground md:text-sm">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-primary/30 bg-primary/5 p-4 transition-colors hover:border-primary/50 md:p-5 lg:mt-6">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 animate-[shine_4s_ease-in-out_infinite] bg-linear-to-r from-transparent via-primary/15 to-transparent bg-[length:40%_100%] bg-no-repeat motion-reduce:hidden"
              />
              <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 animate-ping rounded-full bg-primary/40 motion-reduce:hidden"
                />
                <HeartHandshake className="relative size-5" aria-hidden="true" />
              </span>
              <div className="relative flex flex-col gap-0.5">
                <p className="text-sm font-semibold md:text-base">Ny til Gruppetrening hos oss?</p>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  Si det til instruktøren når du kommer. Da tas det ekstra hensyn, og instruktøren passer ekstra godt
                  på deg gjennom hele timen.
                </p>
              </div>
            </aside>

            <figure className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-primary/25 bg-primary/5 p-6 md:flex-row md:items-center md:gap-12 md:p-10">
              <div className="flex flex-col gap-3 md:flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Samholdet i Boxen</p>
                <blockquote className="text-balance text-xl font-semibold leading-snug tracking-tight md:text-2xl">
                  Her spiller det ingen rolle hvem du er, hvor du kommer fra eller hvor godt trent du er.
                </blockquote>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Du trenger bare å møte opp. Du får en god treningsøkt, kanskje en ny venn, og viktigst av alt: du har
                  det gøy og går hjem med en god opplevelse.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 md:w-72 md:flex-col" aria-label="Alle er velkomne">
                {['Uansett nivå', 'Uansett bakgrunn', 'Uansett hvem du er'].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
                  >
                    <HeartHandshake className="size-4 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </figure>
          </div>
        </section>

  <section aria-labelledby="galleri-title" className="py-10 md:py-12">
  <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6">
  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
  <h2 id="galleri-title" className="text-balance text-xl font-semibold tracking-tight md:text-2xl">
  Livet i Boxen
  </h2>
  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
  Sprintbane, rigger, romaskiner, airbikes og god stemning.
  </p>
  </div>
  <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
  {gallery.map((img) => (
  <li key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
  <Image
  src={img.src}
  alt={img.alt}
  fill
  loading="lazy"
  sizes="(min-width: 768px) 25vw, 50vw"
                    className={`object-cover transition-transform duration-700 hover:scale-105 ${img.position}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="timeplan-title" className="border-t border-border bg-card py-14 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <div className="flex max-w-2xl flex-col gap-4">
              <h2 id="timeplan-title" className="scroll-mt-28 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Timeplan BPC Boxen
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Fast ukeplan ut 2026. Instruktørene rullerer, så du møter flere av trenerne våre gjennom uken.
              </p>
            </div>
            <GroupSchedule />
          </div>
        </section>

        <StrongSteady />

        <section aria-labelledby="tilgang-boxen-title" className="border-t border-border py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col items-start gap-5">
              <h2 id="tilgang-boxen-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Tilgang til gruppetimene
              </h2>
              <p className="max-w-lg leading-relaxed text-muted-foreground">
                Gruppetimene i BPC Boxen er ikke inkludert i medlemskapet for Egentrening. Kontakt oss for medlemskap
                og pris for Gruppetrening.
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

        <section aria-labelledby="grupper-title" className="py-14 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <div className="flex max-w-2xl flex-col gap-4">
              <h2 id="grupper-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                For idrettslag og bedrifter
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Vi tilbyr Gruppetrening med lav terskel, tilpasset gruppen. Målet er trygg progresjon, mestring og
                et sterkere fellesskap.
              </p>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl md:aspect-[21/8]">
              <Image
                src="/images/boxen-highfive.jpg"
                alt="Et medlem og en trener gir hverandre high five i planke på kunstgresset i BPC Boxen"
                fill
                loading="lazy"
                sizes="(min-width: 1280px) 1232px, 100vw"
                className="object-cover"
              />
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

        <HelpStrip title="Spørsmål om Gruppetrening?" />
      </main>
      <SiteFooter />
    </>
  )
}
