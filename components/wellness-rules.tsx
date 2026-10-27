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

const lockerRooms = [
  {
    src: '/images/garderobe-jente.jpg',
    alt: 'Jentegarderoben hos BPC i rosa lys med betongvask, opplyst speil og føner',
    label: 'Jentegarderoben',
  },
  {
    src: '/images/garderobe-gutt.jpg',
    alt: 'Guttegarderoben hos BPC i blått lys med steinvask, opplyst speil og føner',
    label: 'Guttegarderoben',
  },
]

const hoverCard =
  'group transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out hover:border-sauna/70 hover:shadow-[0_18px_40px_-18px_var(--color-sauna)] motion-safe:hover:-translate-y-1.5 motion-safe:hover:scale-[1.015]'

const hoverIcon = 'transition-transform duration-300 ease-out motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-6'

const captionClass =
  'absolute bottom-2 left-2 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur md:bottom-3 md:left-3 md:text-sm'

export function WellnessRules() {
  const { rules, saunaTimer, consequence } = wellness

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

        <div className="grid gap-4 lg:grid-cols-12">
          <div
            role="note"
            aria-labelledby="krav-title"
            className="flex flex-col gap-6 rounded-2xl border border-sauna/40 bg-sauna/10 p-6 text-card-foreground md:p-8 lg:col-span-5"
          >
            <p id="krav-title" className="text-xs font-semibold uppercase tracking-[0.3em] text-sauna">
              To krav før du går inn
            </p>
            <ol className="flex flex-col gap-6">
              {mainRules.map((rule, index) => {
                const Icon = rule.icon
                return (
                  <li
                    key={rule.title}
                    className={`${hoverCard} -mx-3 flex gap-4 rounded-xl border border-transparent p-3 hover:bg-background/40`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${hoverIcon} grid size-11 shrink-0 place-items-center rounded-full bg-sauna text-sauna-foreground`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-balance text-lg font-semibold leading-snug md:text-xl">
                        <span className="sr-only">{`Krav ${index + 1}: `}</span>
                        {rule.title}
                      </p>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{rule.text}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>

          <div className="grid grid-cols-[3fr_4fr] gap-3 lg:col-span-7 md:gap-4">
            <figure className="relative aspect-[3975/5963] overflow-hidden rounded-2xl">
              <Image
                src="/images/velvaere-dusj.jpg"
                alt="Dusj hos BPC i blått lys med regndusj i taket og en varmt opplyst nisje til såpe"
                fill
                unoptimized
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-contain"
              />
              <figcaption className={captionClass}>Dusjen</figcaption>
            </figure>
            <div className="flex flex-col justify-between gap-3 md:gap-4">
              {lockerRooms.map((room) => (
                <figure key={room.src} className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src={room.src}
                    alt={room.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 55vw"
                    className="object-cover"
                  />
                  <figcaption className={captionClass}>{room.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {rules.map((rule, index) => {
            const Icon = ruleIcons[rule.title] ?? Sparkles
            return (
              <li
                key={rule.title}
                className={`${hoverCard} flex flex-col gap-2 rounded-xl border border-border bg-card p-4 text-card-foreground`}
              >
                <span
                  aria-hidden="true"
                  className={`${hoverIcon} grid size-9 place-items-center rounded-full border border-sauna/50 text-sauna group-hover:bg-sauna group-hover:text-sauna-foreground`}
                >
                  <Icon className="size-4" />
                </span>
                <p className="text-balance font-semibold leading-snug">
                  <span className="sr-only">{`Regel ${index + 3}: `}</span>
                  {rule.title}
                </p>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{rule.text}</p>
              </li>
            )
          })}
        </ol>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className={`${hoverCard} flex flex-col gap-4 rounded-2xl border border-sauna/40 bg-card p-6 text-card-foreground md:flex-row md:items-start md:gap-5`}>
            <span
              aria-hidden="true"
              className={`${hoverIcon} grid size-11 shrink-0 place-items-center rounded-full bg-sauna text-sauna-foreground`}
            >
              <TimerOff className="size-5" />
            </span>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sauna">Slås hardt ned på</p>
              <p className="text-balance text-lg font-semibold md:text-xl">{saunaTimer.title}</p>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{saunaTimer.text}</p>
            </div>
          </div>

          <div className={`${hoverCard} flex flex-col gap-4 rounded-2xl border border-sauna/40 bg-card p-6 text-card-foreground md:flex-row md:items-start md:gap-5`}>
            <span
              aria-hidden="true"
              className={`${hoverIcon} grid size-11 shrink-0 place-items-center rounded-full bg-sauna text-sauna-foreground`}
            >
              <Ban className="size-5" />
            </span>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sauna">Gebyr</p>
              <p className="text-balance text-lg font-semibold md:text-xl">Sniking koster 2 500 kr, hver gang.</p>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Å bruke velværeavdelingen uten velvære på medlemskapet regnes som sniking. Vi ilegger et gebyr på
                2 500 kr for hver gang noen blir tatt.
              </p>
            </div>
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
