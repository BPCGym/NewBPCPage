import { ArrowUpRight } from 'lucide-react'
import { SmartLink } from '@/components/smart-link'
import { links, memberships } from '@/lib/site'

const categoryStyles = {
  egen: {
    label: 'Egentrening',
    card: 'border-egen/40 bg-egen/10 hover:border-egen',
    dot: 'bg-egen',
    text: 'text-egen',
    button: 'bg-egen text-egen-foreground',
  },
  gruppe: {
    label: 'Gruppetrening',
    card: 'border-gruppe/40 bg-gruppe/10 hover:border-gruppe',
    dot: 'bg-gruppe',
    text: 'text-gruppe',
    button: 'bg-gruppe text-gruppe-foreground',
  },
} as const

const formatPrice = (price: number) => price.toLocaleString('nb-NO')

export function MembershipCards() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {memberships.map((item) => {
        const style = categoryStyles[item.category]
        return (
          <li
            key={item.name}
            data-reveal
            className={`flex flex-col gap-5 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${style.card}`}
          >
            <p className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${style.text}`}>
              <span aria-hidden="true" className={`size-2 rounded-full ${style.dot}`} />
              {style.label}
            </p>
            <h3 className="text-pretty text-lg font-semibold leading-snug">{item.name}</h3>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">Pr måned</span>
              <span className="text-4xl font-semibold tracking-tight">{`kr ${formatPrice(item.monthlyPrice)}`}</span>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              {`${item.bindingMonths} måneders avtaletid. ${item.note}`}
            </p>
            <SmartLink
              href={links.signup}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${style.button}`}
            >
              Velg medlemskap
            </SmartLink>
          </li>
        )
      })}
      <li data-reveal className="md:col-span-2 lg:col-span-4">
        <SmartLink
          href={links.signup}
          className="group flex flex-col gap-4 rounded-2xl border border-dashed border-border bg-card p-6 transition-colors hover:border-foreground/40 sm:flex-row sm:items-center sm:justify-between md:p-8"
        >
          <span className="flex flex-col gap-1">
            <span className="text-lg font-semibold">Se våre andre medlemskap</span>
            <span className="text-sm leading-relaxed text-muted-foreground">
              Hele oversikten finner du i medlemssystemet. Velg først senter, deretter medlemskap.
            </span>
          </span>
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-border transition-transform group-hover:rotate-45 motion-reduce:transition-none">
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </span>
        </SmartLink>
      </li>
    </ul>
  )
}
