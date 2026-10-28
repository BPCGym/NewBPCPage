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

// Per-photo framing (translate in % of frame, then scale from top-left) so the
// neon logo lands at the same position and size in every portrait.
const receptionists = [
  {
    src: '/images/resepsjon/ansatt-48.jpg',
    alt: 'Smilende resepsjonist med tatoveringer i svart BPC-vest, lener seg på disken foran den opplyste BPC-logoen',
    frame: 'translate(-6.5%, -5.3%) scale(1.127)',
  },
  {
    src: '/images/resepsjon/ansatt-24.jpg',
    alt: 'Smilende resepsjonist med brunt hår i svart BPC-vest bak resepsjonsdisken',
    frame: 'translate(-4.8%, -3.7%) scale(1.088)',
  },
  {
    src: '/images/resepsjon/ansatt-15.jpg',
    alt: 'Blid resepsjonist med hvitt hår og briller i hvit BPC Girls-t-skjorte bak disken',
    frame: 'translate(-7.4%, 0%) scale(1.148)',
  },
  {
    src: '/images/resepsjon/ansatt-07.jpg',
    alt: 'Smilende resepsjonist i svart BPC-vest og hvit t-skjorte bak disken, med blått lys i bakgrunnen',
    frame: 'translate(-2.1%, -10.6%) scale(1.192)',
  },
]

const emailTopics = ['Faktura', 'Medlemskap', 'Frys og endringer', 'Andre henvendelser']

export function Contact({ asPage = false }: ContactProps) {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-title"
      className={asPage ? 'pb-16 pt-24 md:pb-20 md:pt-32' : 'scroll-mt-28 py-12 md:py-16'}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:gap-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <SectionHeading
              id="kontakt-title"
              as={asPage ? 'h1' : 'h2'}
              eyebrow={asPage ? 'Kontakt' : 'Praktisk informasjon'}
              title={asPage ? 'Vi hjelper deg gjerne.' : 'Velkommen til BPC.'}
            />
            <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Lurer du på medlemskap, første besøk eller et av tilbudene våre? Stikk innom resepsjonen, eller send
              oss en e-post.
            </p>

            <div className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-primary/30 bg-card p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-primary/10 to-transparent"
              />
              <div className="relative flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium text-muted-foreground">Raskeste vei til oss</p>
              </div>
              <a
                href={links.email}
                className="relative break-all text-2xl font-semibold tracking-tight hover:text-primary md:text-3xl"
              >
                {company.emailDisplay}
              </a>
              <ul className="relative flex flex-wrap gap-2 text-xs">
                {emailTopics.map((topic) => (
                  <li key={topic} className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="relative flex flex-wrap items-center gap-x-5 gap-y-3">
                <CtaLink href={links.email} arrow>
                  Send e-post
                </CtaLink>
                <a
                  href={links.phone}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {company.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-4 gap-2 sm:gap-3 lg:col-span-7">
            {receptionists.map((person) => (
              <li key={person.src} className="group relative aspect-[2/3] overflow-hidden rounded-xl bg-muted sm:rounded-2xl">
                <Image
                  src={person.src}
                  alt={person.alt}
                  fill
                  sizes="(min-width: 1024px) 18vw, 25vw"
                  style={{ transform: person.frame, transformOrigin: '0 0' }}
                    className="object-cover transition-[filter] duration-500 group-hover:brightness-110"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-3 pt-4 md:grid-cols-3 md:gap-4">
          <InfoCard icon={MapPin} title="Her finner du oss">
            <address className="flex flex-col not-italic leading-relaxed">
              <span className="text-lg font-medium">{company.street}</span>
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
              <span className="text-muted-foreground">{trainingHours.label}</span>
              <span className="text-3xl font-semibold tracking-tight md:text-4xl">{trainingHours.hours}</span>
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
          </InfoCard>

          <InfoCard icon={ConciergeBell} title="Bemannet resepsjon">
            <dl className="flex flex-col divide-y divide-border">
              {staffedHours.map((row) => (
                <div key={row.day} className="flex items-baseline justify-between gap-4 py-1.5 first:pt-0">
                  <dt className="text-sm text-muted-foreground">{row.day}</dt>
                  <dd className="text-right text-sm font-medium leading-relaxed">{row.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="text-xs leading-relaxed text-muted-foreground">Bemanningen kan avvike på helligdager.</p>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}

type InfoCardProps = {
  icon: LucideIcon
  title: string
  highlight?: boolean
  children: React.ReactNode
}

function InfoCard({ icon: Icon, title, highlight = false, children }: InfoCardProps) {
  return (
    <div
      className={`group relative flex flex-col gap-3 overflow-hidden rounded-2xl border bg-card p-5 transition-colors hover:border-primary/40 ${
        highlight ? 'border-primary/30' : 'border-border'
      }`}
    >
      {highlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent"
        />
      )}
      <div className="relative flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-105">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <h2 className="font-medium">{title}</h2>
      </div>
      <div className="relative flex flex-1 flex-col gap-3">{children}</div>
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
