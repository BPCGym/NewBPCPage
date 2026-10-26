import Image from 'next/image'
import { ArrowRight, ShowerHead } from 'lucide-react'
import { wellness } from '@/lib/site'

const rules = wellness.rules
const finalRule = rules[rules.length - 1]
const listedRules = rules.slice(0, -1)

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

const showerSteps = ['Garderoben', 'Dusj med såpe', 'Velværerommet']

export function WellnessRules() {
  return (
    <section
      id="velvaere-regler"
      aria-labelledby="regler-title"
      className="scroll-mt-24 border-y border-border bg-card py-16 text-foreground md:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:gap-14">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Les før du går inn</p>
          <h2 id="regler-title" className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Velværereglene
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Reglene gjelder alle i badstue og isbad, hver gang. De sørger for god hygiene, trygghet og ro for alle som
            bruker velværerommet.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {lockerRooms.map((room) => (
            <figure key={room.src} className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image src={room.src} alt={room.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/85 px-3 py-1 text-sm font-semibold text-foreground backdrop-blur">
                {room.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          role="note"
          aria-labelledby="dusj-title"
          className="flex flex-col gap-6 rounded-2xl border-2 border-primary bg-background p-6 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div className="flex gap-5">
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
            >
              <ShowerHead className="size-6" />
            </span>
            <div className="flex flex-col gap-1">
              <p id="dusj-title" className="text-balance text-xl font-semibold md:text-2xl">
                Dusj i garderoben før du går inn i velværerommet.
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Dusj uten badetøy og vask hele kroppen med såpe. Det gjelder alle, hver gang.
              </p>
            </div>
          </div>
          <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold" aria-label="Rekkefølge">
            {showerSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span
                  className={
                    index === 1
                      ? 'rounded-full bg-primary px-3 py-1.5 text-primary-foreground'
                      : 'rounded-full border border-border px-3 py-1.5'
                  }
                >
                  {step}
                </span>
                {index < showerSteps.length - 1 && <ArrowRight aria-hidden="true" className="size-4 text-muted-foreground" />}
              </li>
            ))}
          </ol>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {listedRules.map((rule, index) => (
            <li key={rule} className="flex gap-5 bg-background p-6 md:p-8">
              <span
                aria-hidden="true"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-base font-semibold text-primary-foreground"
              >
                {index + 1}
              </span>
              <p className="text-pretty pt-1.5 text-lg leading-relaxed">{rule}</p>
            </li>
          ))}
          <li className="flex gap-5 bg-primary p-6 text-primary-foreground md:col-span-2 md:p-8">
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-foreground text-base font-semibold text-primary"
            >
              {rules.length}
            </span>
            <p className="text-pretty pt-1.5 text-lg font-semibold leading-relaxed">{finalRule}</p>
          </li>
        </ol>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="tel:+4755125555"
            className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ring BPC: 55 12 55 55
          </a>
          <a
            href="tel:113"
            className="inline-flex items-center rounded-full border border-foreground/25 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10"
          >
            Nødsituasjon: ring 113
          </a>
        </div>
      </div>
    </section>
  )
}
