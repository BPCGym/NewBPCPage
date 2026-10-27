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
    note: 'Ubegrenset Egentrening og alle Sterk & stødig-timene.',
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
    alt: 'Evelyn skyver slede på sprintbanen mens instruktøren følger med',
  },
  {
    src: '/images/sterk-stodig-nedtrekk.jpg',
    alt: 'Evelyn trekker kabel ned mot brystet med instruktør tett ved siden av',
  },
  {
    src: '/images/sterk-stodig-beinpress.jpg',
    alt: 'Evelyn trener beinpress med veiledning fra instruktøren',
  },
]

export function StrongSteady() {
  return (
    <section
      id="sterk-og-stodig"
      aria-labelledby="sterk-stodig-title"
      className="scroll-mt-24 border-t border-border py-10 md:py-14"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-auto">
            <Image
              src="/images/sterk-stodig-kneboy.jpg"
              alt="Instruktør veileder en deltaker i knebøy ned mot benk foran BPC-veggen i Boxen"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[70%_center]"
            />
            <p className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
              Neste oppstart 3. november kl. 17
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Gruppetime i BPC Boxen</p>
              <h2 id="sterk-stodig-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Sterk &amp; stødig 50+
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Styrke- og balansetrening for deg over 50. Vi jobber med bevegelser du trenger i hverdagen, som å
                reise deg, bære, løfte og stå stødig, i et trygt tempo og med instruktør som følger deg hele veien.
              </p>
            </div>

            <dl className="flex flex-wrap gap-2 text-sm">
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                <dt className="text-muted-foreground">Dager</dt>
                <dd className="font-semibold">Tirsdag og torsdag</dd>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                <dt className="text-muted-foreground">Klokkeslett</dt>
                <dd className="font-semibold">Kl. 17:00</dd>
              </div>
            </dl>

            <ul className="grid gap-3 sm:grid-cols-2">
              {prices.map((price) => (
                <li key={price.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4">
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

            <div className="flex flex-col gap-1 rounded-2xl border border-primary/40 bg-primary/10 p-4">
              <p className="leading-relaxed">
                Last ned Appen <strong>Min Trening</strong> og bruk kampanjekoden{' '}
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

        <figure className="grid gap-3 overflow-hidden rounded-3xl border border-primary/30 bg-card p-3 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-4">
          <figcaption className="flex flex-col justify-center gap-3 p-3 md:p-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Vi tar vare på deg</p>
            <p className="text-balance text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
              Gjør som Evelyn.
            </p>
            <p className="flex items-baseline gap-2">
              <span className="text-5xl font-semibold tracking-tight text-primary tabular-nums">88</span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                år, og styrketrener to ganger i uka. Bare for moro skyld.
              </span>
            </p>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Vi tar vare på deg, så du kan ta vare på helsen din. Med en instruktør ved siden av hele veien blir
              styrketrening trygt, sosialt og faktisk ganske gøy, uansett alder.
            </p>
          </figcaption>
          <ul className="grid grid-cols-3 gap-2 md:gap-3">
            {photos.map((photo) => (
              <li key={photo.src} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 22vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </figure>
      </div>
    </section>
  )
}
