import Image from 'next/image'
import {
  Clock,
  ConciergeBell,
  Mail,
  MapPin,
  Moon,
  Navigation,
  Phone,
  Sunrise,
  type LucideIcon,
} from 'lucide-react'
import { CtaLink } from '@/components/cta-link'
import { SectionHeading } from '@/components/section-heading'
import { company, links, staffedHours, trainingHours } from '@/lib/site'

type ContactProps = {
  asPage?: boolean
}

export function Contact({ asPage = false }: ContactProps) {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-title"
      className={asPage ? 'pb-20 pt-28 md:pb-28 md:pt-36' : 'scroll-mt-28 py-14 md:py-20'}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-6">
          <SectionHeading
            id="kontakt-title"
            as={asPage ? 'h1' : 'h2'}
            eyebrow={asPage ? 'Kontakt' : 'Praktisk informasjon'}
            title={asPage ? 'Vi hjelper deg gjerne.' : 'Velkommen til BPC.'}
          />
          {asPage && (
            <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Lurer du på medlemskap, første besøk eller et av tilbudene våre? Ta kontakt, så finner vi ut av det
              sammen.
            </p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted md:col-span-4 md:row-span-2 md:aspect-auto">
            <Image
              src="/images/bpc-resepsjonister.jpg"
              alt="Tre smilende resepsjonister i BPC-klær bak disken, foran den opplyste BPC-logoen"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover object-top"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 pt-16 text-sm leading-relaxed text-foreground">
              Resepsjonen tar imot deg i bemannet tid.
            </figcaption>
          </figure>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted md:col-span-8">
            <Image
              src="/images/bpc-lounge.jpg"
              alt="Loungen ved resepsjonen med sofaer, marmorert blått gulv og BPC-logo i gulvet"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted md:col-span-8 md:aspect-[16/6]">
            <Image
              src="/images/bpc-resepsjon-disk.jpg"
              alt="Resepsjonsdisken på BPC med opplyst BPC-logo, blått LED-lys og marmorert epoxygulv"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover object-[50%_55%]"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard icon={MapPin} title="Her finner du oss" tagline="Stikk innom, vi gleder oss til å se deg.">
            <address className="flex flex-col text-lg not-italic leading-relaxed">
              <span className="font-medium">{company.street}</span>
              <span className="text-muted-foreground">{company.postal}</span>
            </address>
            <a
              href={links.map}
              className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Navigation className="size-4" aria-hidden="true" />
              Vis veien i kart
            </a>
          </InfoCard>

          <InfoCard icon={Clock} title="Åpent for trening" highlight>
            <p className="flex flex-col leading-relaxed">
              <span className="text-lg">{trainingHours.label}</span>
              <span className="text-4xl font-semibold tracking-tight md:text-5xl">{trainingHours.hours}</span>
            </p>
            <div className="mt-auto flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Sunrise className="size-4 text-primary" aria-hidden="true" />
                Morgenfugl
              </span>
              <span className="flex items-center gap-2">
                <Moon className="size-4 text-primary" aria-hidden="true" />
                Nattugle
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Uansett døgnrytme, gymmet er klart når du er det.
            </p>
          </InfoCard>

          <InfoCard icon={ConciergeBell} title="Bemannet resepsjon" tagline="Kom innom for en prat, vi hjelper deg gjerne.">
            <dl className="flex flex-col divide-y divide-border">
              {staffedHours.map((row) => (
                <div key={row.day} className="flex items-baseline justify-between gap-4 py-2 first:pt-0">
                  <dt className="text-sm text-muted-foreground">{row.day}</dt>
                  <dd className="text-right text-sm font-medium leading-relaxed">{row.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="text-xs leading-relaxed text-muted-foreground">Bemanningen kan avvike på helligdager.</p>
          </InfoCard>
        </div>

        <div className="relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-primary/30 bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/10 to-transparent"
          />
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-medium text-muted-foreground">Raskeste vei til oss</p>
            </div>
            <a
              href={links.email}
              className="text-pretty text-3xl font-semibold tracking-tight hover:text-primary md:text-4xl"
            >
              {company.emailDisplay}
            </a>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Fakturaspørsmål, medlemskap eller noe helt annet? Send oss en e-post, så svarer vi raskt.
            </p>
            <ul className="flex flex-wrap gap-2 text-sm">
              {['Faktura', 'Medlemskap', 'Frys og endringer', 'Andre henvendelser'].map((topic) => (
                <li key={topic} className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex flex-col gap-3 md:items-end">
            <CtaLink href={links.email} arrow>
              Send e-post
            </CtaLink>
            <a
              href={links.phone}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              {`Eller ring ${company.phoneDisplay}`}
            </a>
            <a
              href={links.map}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Navigation className="size-4" aria-hidden="true" />
              Finn veien
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

type InfoCardProps = {
  icon: LucideIcon
  title: string
  tagline?: string
  highlight?: boolean
  children: React.ReactNode
}

function InfoCard({ icon: Icon, title, tagline, highlight = false, children }: InfoCardProps) {
  return (
    <div
      className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl border bg-card p-6 transition-colors hover:border-primary/40 ${
        highlight ? 'border-primary/30' : 'border-border'
      }`}
    >
      {highlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 to-transparent"
        />
      )}
      <div className="relative flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-105">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h2 className="font-medium">{title}</h2>
      </div>
      {tagline && <p className="relative text-sm leading-relaxed text-muted-foreground">{tagline}</p>}
      <div className="relative flex flex-1 flex-col gap-4">{children}</div>
    </div>
  )
}

export function StaffedHoursList() {
  return (
    <dl className="flex flex-col gap-2">
      {staffedHours.map((row) => (
        <div key={row.day} className="flex flex-col">
          <dt className="text-sm text-muted-foreground">{row.day}</dt>
          <dd className="leading-relaxed">{row.hours}</dd>
        </div>
      ))}
    </dl>
  )
}
