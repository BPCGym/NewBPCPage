import Image from 'next/image'
import {
  ShowerHead,
  Armchair,
  TimerOff,
  Ban,
  Shirt,
  VolumeX,
  Droplets,
  ShieldAlert,
  HeartPulse,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { wellness } from '@/lib/site'

const ruleIcons: Record<string, LucideIcon> = {
  'Eget badetøy': Shirt,
  'Ro og respekt': VolumeX,
  'Ingen saltskrubb eller olje på kroppen': Droplets,
  'Ta vare på rommet': ShieldAlert,
  'Kjenn dine grenser': HeartPulse,
}

const mainRules = [
  {
    icon: ShowerHead,
    title: 'Dusj naken med såpe i garderoben først.',
    text: 'Vask hele kroppen før du går inn. Brukt treningstøy og boxer er ikke lov i velværerommet. Bruk badetøy.',
  },
  {
    icon: Armchair,
    title: 'Sitt alltid på håndkle i badstuen.',
    text: 'Håndkleet skal ligge under rumpa og spesielt under beina, slik at ingen hud eller svette treffer benken.',
  },
]

const allRules = [
  ...mainRules,
  ...wellness.rules.map((rule) => ({ ...rule, icon: ruleIcons[rule.title] ?? Sparkles })),
]

const photos = [
  {
    src: '/images/garderobe-jente.jpg',
    alt: 'Jentegarderoben hos BPC i rosa lys med betongvask, opplyst speil og føner',
    label: 'Jenter',
    width: 3974,
    height: 5961,
  },
  {
    src: '/images/velvaere-dusj.jpg',
    alt: 'Dusj hos BPC i blått lys med regndusj i taket og en varmt opplyst nisje til såpe',
    label: 'Dusjen',
    width: 3975,
    height: 5963,
  },
  {
    src: '/images/garderobe-gutt.jpg',
    alt: 'Guttegarderoben hos BPC i blått lys med steinvask, opplyst speil og føner',
    label: 'Gutter',
    width: 3905,
    height: 5858,
  },
]

const hoverCard =
  'group transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out hover:border-sauna/70 hover:shadow-[0_18px_40px_-18px_var(--color-sauna)] motion-safe:hover:-translate-y-1.5 motion-safe:hover:scale-[1.015]'

const hoverIcon = 'transition-transform duration-300 ease-out motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-6'

const captionClass =
  'absolute bottom-2 left-2 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur md:bottom-3 md:left-3 md:text-sm'

export function WellnessRules() {
  const { saunaTimer, consequence } = wellness

  return (
    <section
      id="velvaere-regler"
      aria-labelledby="regler-title"
      className="relative scroll-mt-24 overflow-hidden border-y border-border bg-background py-16 text-foreground md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sauna/60 to-transparent"
      />
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:gap-12">
        <div role="note" aria-label="Viktige advarsler" className="grid gap-3 md:grid-cols-2">
          {[
            { icon: TimerOff, eyebrow: 'Slås hardt ned på', title: saunaTimer.title, text: saunaTimer.text },
            {
              icon: Ban,
              eyebrow: 'Gebyr',
              title: 'Sniking koster 2 500 kr, hver gang.',
              text: 'Å bruke velværeavdelingen uten velvære på medlemskapet regnes som sniking. Vi ilegger et gebyr på 2 500 kr for hver gang noen blir tatt.',
            },
          ].map(({ icon: Icon, eyebrow, title, text }) => (
            <div
              key={eyebrow}
              className={`${hoverCard} flex items-start gap-3 rounded-xl border border-sauna/50 bg-sauna/10 p-4 text-card-foreground`}
            >
              <span
                aria-hidden="true"
                className={`${hoverIcon} grid size-8 shrink-0 place-items-center rounded-full bg-sauna text-sauna-foreground`}
              >
                <Icon className="size-4" />
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sauna">{eyebrow}</p>
                <p className="text-balance text-base font-semibold leading-snug">{title}</p>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sauna">Les før du går inn</p>
            <h2 id="regler-title" className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Velværereglene
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Få regler, men de gjelder alle, hver gang. Det er det som gjør rommet rent, trygt og rolig.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12 lg:items-stretch lg:gap-6">
          <ol
            aria-label="Velværereglene"
            className="flex flex-col gap-1.5 rounded-2xl border border-sauna/40 bg-sauna/10 p-2 text-card-foreground md:p-2.5 lg:col-span-7"
          >
            {allRules.map((rule, index) => {
              const Icon = rule.icon
              return (
                <li
                  key={rule.title}
                  className={`${hoverCard} flex items-start gap-3 rounded-lg border border-border/60 bg-card px-3 py-2.5`}
                >
                  <span
                    aria-hidden="true"
                    className={`${hoverIcon} mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-sauna text-sauna-foreground`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="text-balance text-sm font-semibold leading-snug md:text-base">
                      <span className="mr-1.5 font-mono text-xs text-sauna">{String(index + 1).padStart(2, '0')}</span>
                      {rule.title}
                    </p>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{rule.text}</p>
                  </div>
                </li>
              )
            })}
          </ol>

          <div className="grid grid-cols-3 gap-2 md:gap-3 lg:col-span-5 lg:grid-cols-2 lg:grid-rows-2">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className={`relative aspect-[2/3] overflow-hidden rounded-2xl lg:aspect-auto ${
                  photo.label === 'Dusjen' ? 'lg:col-start-1 lg:row-span-2 lg:row-start-1' : 'lg:col-start-2'
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 20vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out motion-safe:hover:scale-105"
                />
                <figcaption className={captionClass}>{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-pretty font-semibold">{consequence}</p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+4755125555"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Ring BPC: 55 12 55 55
            </a>
            <a
              href="tel:113"
              className="inline-flex items-center rounded-full border border-foreground/25 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/10"
            >
              Nødsituasjon: ring 113
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
