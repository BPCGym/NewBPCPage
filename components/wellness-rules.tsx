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
import { RulesProgress, SeenRule, SeenStamp, WellnessRuleTracker } from '@/components/wellness-rule-tracker'

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
    src: '/images/bpc-garderobe.jpg',
    label: 'Jentegarderoben',
    alt: 'Jentegarderoben hos BPC i rosa lys med vasker, speil og døren inn til badstue og iskulp',
  },
  {
    src: '/images/garderobe-gutt.jpg',
    label: 'Guttegarderoben',
    alt: 'Guttegarderoben hos BPC i blått lys med dusjområde, betongvask, stort speil og sittepuff',
  },
]

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
      <WellnessRuleTracker total={mainRules.length + rules.length + 2}>
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

        <div className="grid gap-4 lg:grid-cols-5">
          <div className="order-last grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {lockerRooms.map((room) => (
              <figure key={room.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-72">
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 text-sm font-semibold backdrop-blur">
                  {room.label}
                </figcaption>
              </figure>
            ))}
          </div>

          <div
            role="note"
            aria-labelledby="dusj-title"
            className="group relative isolate flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-sauna/25 bg-card p-6 text-card-foreground transition-colors duration-500 hover:border-sauna/50 md:p-8 lg:col-span-2"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-sauna/15 blur-3xl transition-colors duration-700 group-hover:bg-sauna/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sauna/70 to-transparent"
            />

            <p id="dusj-title" className="text-xs font-semibold uppercase tracking-[0.3em] text-sauna">
              To krav før du går inn
            </p>

            <ol className="flex flex-col gap-3">
              {mainRules.map((rule, index) => {
                const Icon = rule.icon
                return (
                  <SeenRule
                    key={rule.title}
                    id={`main-${index}`}
                    className="flex gap-4 rounded-xl border border-transparent p-3 pr-16 transition-all duration-700 data-[seen=true]:border-sauna/40 data-[seen=true]:bg-sauna/10 motion-reduce:transition-none md:p-4 md:pr-20"
                  >
                    <SeenStamp />
                    <span
                      aria-hidden="true"
                      className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-sauna/50 text-sauna transition-all duration-700 group-data-[seen=true]/rule:scale-110 group-data-[seen=true]/rule:border-sauna group-data-[seen=true]/rule:bg-sauna group-data-[seen=true]/rule:text-sauna-foreground group-data-[seen=true]/rule:shadow-[0_0_24px_var(--sauna)]"
                    >
                      <Icon className="size-6" />
                    </span>
                    <div className="flex flex-col gap-2">
                      <p className="text-balance text-xl font-semibold leading-tight tracking-tight md:text-2xl">
                        <span className="sr-only">{`Krav ${index + 1}: `}</span>
                        {rule.title}
                      </p>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{rule.text}</p>
                    </div>
                  </SeenRule>
                )
              })}
            </ol>
          </div>
        </div>

        <RulesProgress />

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule, index) => {
            const Icon = ruleIcons[rule.title] ?? Sparkles
            return (
              <SeenRule
                key={rule.title}
                id={`rule-${index}`}
                className="flex translate-y-6 flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card p-6 pr-20 text-card-foreground opacity-40 transition-all duration-700 ease-out data-[seen=true]:translate-y-0 data-[seen=true]:border-sauna/50 data-[seen=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none"
              >
                <SeenStamp />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-6 -right-2 text-8xl font-black leading-none tracking-tighter text-sauna/10 transition-colors duration-700 group-data-[seen=true]/rule:text-sauna/20"
                >
                  {index + 3}
                </span>
                <span
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-full border-2 border-sauna/50 text-sauna transition-all duration-700 group-data-[seen=true]/rule:border-sauna group-data-[seen=true]/rule:bg-sauna group-data-[seen=true]/rule:text-sauna-foreground"
                >
                  <Icon className="size-5" />
                </span>
                <p className="text-balance text-lg font-semibold leading-tight md:text-xl">
                  <span className="sr-only">{`Regel ${index + 3}: `}</span>
                  {rule.title}
                </p>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{rule.text}</p>
              </SeenRule>
            )
          })}
        </ol>

        <div className="grid gap-4 lg:grid-cols-2">
          <SeenRule
            as="div"
            id="timer"
            className="flex flex-col gap-5 rounded-2xl border border-sauna/50 bg-sauna/10 p-6 pr-20 transition-shadow duration-700 data-[seen=true]:shadow-[0_0_40px_-12px_var(--sauna)] md:flex-row md:items-start md:gap-6 md:p-8 md:pr-24"
          >
            <SeenStamp />
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-full bg-sauna text-sauna-foreground"
            >
              <TimerOff className="size-6" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sauna">Slås hardt ned på</p>
              <p id="timer-title" className="text-balance text-xl font-semibold md:text-2xl">
                {saunaTimer.title}
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">{saunaTimer.text}</p>
            </div>
          </SeenRule>

          <SeenRule
            as="div"
            id="sniking"
            className="flex flex-col gap-5 rounded-2xl border border-sauna/50 bg-sauna/10 p-6 pr-20 transition-shadow duration-700 data-[seen=true]:shadow-[0_0_40px_-12px_var(--sauna)] md:flex-row md:items-start md:gap-6 md:p-8 md:pr-24"
          >
            <SeenStamp />
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-full bg-sauna text-sauna-foreground"
            >
              <Ban className="size-6" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sauna">Gebyr</p>
              <p id="sniking-title" className="text-balance text-xl font-semibold md:text-2xl">
                Sniking koster 2 500 kr, hver gang.
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Å bruke velværeavdelingen uten velvære på medlemskapet regnes som sniking. Vi ilegger et gebyr på
                2 500 kr for hver gang noen blir tatt.
              </p>
            </div>
          </SeenRule>
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
      </WellnessRuleTracker>
    </section>
  )
}
