import Image from 'next/image'
import { wellness } from '@/lib/site'

const rules = wellness.rules
const finalRule = rules[rules.length - 1]
const listedRules = rules.slice(0, -1)

export function WellnessRules() {
  return (
    <section
      id="velvaere-regler"
      aria-labelledby="regler-title"
      className="scroll-mt-24 border-y border-border bg-card py-16 text-foreground md:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:gap-14">
        <div className="grid items-end gap-8 md:grid-cols-5 md:gap-16">
          <div className="flex flex-col gap-4 md:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Les før du går inn</p>
            <h2 id="regler-title" className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Velværereglene
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Reglene gjelder alle i badstue og isbad, hver gang. De sørger for god hygiene, trygghet og ro for alle som
              bruker velværerommet.
            </p>
          </div>
          <div className="relative hidden aspect-[16/10] overflow-hidden rounded-2xl md:col-span-2 md:block">
            <Image
              src="/images/bpc-garderobe.jpg"
              alt="Garderoben hos BPC med vasker, speil og døren inn til badstue og iskulp"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
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
