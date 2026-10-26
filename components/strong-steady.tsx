import Image from 'next/image'
import { CtaLink } from '@/components/cta-link'

const email = 'anne@svanevik.no'
const phone = '922 24 578'

const prices = [
  {
    title: 'Åtteukerskurs',
    lines: [
      { label: '1 gang per uke', value: '1 690 kr' },
      { label: '2 ganger per uke', value: '2 990 kr' },
    ],
    note: 'Fast gruppe gjennom hele kurset.',
  },
  {
    title: 'Medlemskap',
    lines: [{ label: 'Per måned', value: '749 kr' }],
    note: 'Ubegrenset egentrening og alle Sterk & stødig-timene. 12 måneders bindingstid.',
  },
]

const points = [
  'Ingen forkunnskaper nødvendig',
  'Treningen tilpasses ditt nivå',
  'Tett oppfølging av instruktør',
  'Begrensede plasser',
]

const photos = [
  {
    src: '/images/sterk-stodig-slede.jpg',
    alt: 'Deltaker skyver slede på sprintbanen mens instruktøren følger med',
  },
  {
    src: '/images/sterk-stodig-nedtrekk.jpg',
    alt: 'Deltaker trekker kabel ned mot brystet med instruktør tett ved siden av',
  },
  {
    src: '/images/sterk-stodig-beinpress.jpg',
    alt: 'Deltaker trener beinpress med veiledning fra instruktøren',
  },
]

export function StrongSteady() {
  return (
    <section
      id="sterk-og-stodig"
      aria-labelledby="sterk-stodig-title"
      className="scroll-mt-24 border-t border-border py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/sterk-stodig-kneboy.jpg"
              alt="Instruktør veileder en deltaker i knebøy ned mot benk foran BPC-veggen i Boxen"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[70%_center]"
            />
            <p className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
              Runde 3 · Oppstart 1. september
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">Gruppetime i BPC Boxen</p>
              <h2 id="sterk-stodig-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Sterk &amp; stødig 50+
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Styrke- og balansetrening for deg over 50. Vi jobber med bevegelser du trenger i hverdagen, som å
                reise deg, bære, løfte og stå stødig, i et trygt tempo og med instruktør som følger deg hele veien.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              <div className="flex flex-col gap-1 bg-card p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Dager</dt>
                <dd className="font-semibold">Tirsdag og torsdag</dd>
              </div>
              <div className="flex flex-col gap-1 bg-card p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Klokkeslett</dt>
                <dd className="font-semibold">Kl. 17:00</dd>
              </div>
            </dl>

            <ul className="grid gap-4 sm:grid-cols-2">
              {prices.map((price) => (
                <li key={price.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold">{price.title}</h3>
                  <dl className="flex flex-col gap-1">
                    {price.lines.map((line) => (
                      <div key={line.label} className="flex items-baseline justify-between gap-4">
                        <dt className="text-sm text-muted-foreground">{line.label}</dt>
                        <dd className="font-semibold tabular-nums">{line.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="text-sm leading-relaxed text-muted-foreground">{price.note}</p>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-2">
              {points.map((point) => (
                <li key={point} className="rounded-full border border-border px-3 py-1 text-sm">
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 rounded-2xl border border-primary/40 bg-primary/10 p-5">
              <p className="leading-relaxed">
                Last ned appen <strong>«Min Trening»</strong> og bruk kampanjekoden{' '}
                <strong className="font-mono text-primary">STERK50</strong>.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Påmelding og spørsmål: Anne på{' '}
                <a href={`mailto:${email}`} className="font-medium text-foreground underline underline-offset-4">
                  {email}
                </a>{' '}
                eller{' '}
                <a
                  href={`tel:+47${phone.replace(/\s/g, '')}`}
                  className="font-medium text-foreground underline underline-offset-4"
                >
                  {phone}
                </a>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <CtaLink href={`mailto:${email}?subject=${encodeURIComponent('Påmelding Sterk & stødig 50+')}`} arrow>
                Meld deg på
              </CtaLink>
              <CtaLink href={`tel:+47${phone.replace(/\s/g, '')}`} variant="outline">
                Ring {phone}
              </CtaLink>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo) => (
            <li key={photo.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 33vw, 33vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
