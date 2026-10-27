import { ArrowUpRight, Flame, PlusCircle, Snowflake, Sparkles, Thermometer, Ticket, type LucideIcon } from 'lucide-react'
import { dropIns, wellness } from '@/lib/site'

const formatPrice = (price: number) => `${price.toLocaleString('nb-NO')} kr`

const saunaDropIn = dropIns.find((d) => d.name === 'Sauna')

type Option = {
  icon: LucideIcon
  label: string
  price: number
  unit: string
  text: string
  extra?: string
  href: string
  featured?: boolean
}

const options: Option[] = [
  {
    icon: Flame,
    label: 'Eget medlemskap',
    price: wellness.membershipPrice,
    unit: '/mnd',
    text: 'For deg som kun ønsker velvære. 12 måneders binding.',
    extra: `Student ${formatPrice(wellness.membershipStudentPrice)}/mnd`,
    href: '/medlemskap#velvaere',
    featured: true,
  },
  {
    icon: PlusCircle,
    label: 'Tillegg til trening',
    price: wellness.monthlyPrice,
    unit: '/mnd',
    text: 'Legg velvære til Egentrening eller Gruppetrening.',
    href: '/medlemskap#tillegg',
  },
  ...(saunaDropIn
    ? [
        {
          icon: Ticket,
          label: 'Drop-in',
          price: saunaDropIn.price,
          unit: '/besøk',
          text: 'Ett besøk i badstuen, uten medlemskap.',
          href: '/medlemskap#drop-in',
        },
      ]
    : []),
]

const included = [
  { icon: Thermometer, label: 'Badstue' },
  { icon: Sparkles, label: 'Velværerom' },
  { icon: Snowflake, label: 'Isbad fra 2027' },
]

export function WellnessPricing() {
  return (
    <div className="flex flex-col gap-5">
      <ul className="grid gap-4 sm:grid-cols-3">
        {options.map(({ icon: Icon, label, price, unit, text, extra, href, featured }) => (
          <li key={label}>
            <a
              href={href}
              className={`group flex h-full flex-col gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sauna motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                featured
                  ? 'border-sauna/50 bg-sauna/10 hover:border-sauna'
                  : 'border-border bg-background hover:border-sauna/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl border border-sauna/30 bg-sauna/10 text-sauna transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sauna"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{label}</h3>
                <p className="flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight text-foreground">{formatPrice(price)}</span>
                  <span className="text-sm text-muted-foreground">{unit}</span>
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              {extra ? (
                <p className="mt-auto w-fit rounded-full border border-sauna/30 px-3 py-1 text-xs font-medium text-sauna">
                  {extra}
                </p>
              ) : null}
            </a>
          </li>
        ))}
      </ul>

      <ul aria-label="Inkludert i velvære" className="flex flex-wrap gap-2">
        {included.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground"
          >
            <Icon className="size-4 text-sauna" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  )
}
