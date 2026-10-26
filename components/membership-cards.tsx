import Image from 'next/image'
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
              {item.note}
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
          className="group relative isolate flex min-h-64 flex-col justify-end overflow-hidden rounded-2xl bg-background text-foreground md:min-h-72"
        >
          <Image
            src="/images/bpc-styrkesal.jpg"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <span aria-hidden="true" className="absolute inset-0 -z-10 bg-background/55" />
          <span aria-hidden="true" className="absolute inset-x-0 top-0 flex h-1.5">
            <span className="flex-1 bg-egen" />
            <span className="flex-1 bg-gruppe" />
          </span>

          <span className="flex flex-col gap-6 p-6 md:flex-row md:items-end md:justify-between md:p-10">
            <span className="flex max-w-xl flex-col gap-3">
              <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
                <span aria-hidden="true" className="flex gap-1">
                  <span className="size-2 rounded-full bg-egen" />
                  <span className="size-2 rounded-full bg-gruppe" />
                </span>
                Finn det som passer deg
              </span>
              <span className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Se våre andre medlemskap
              </span>
              <span className="text-pretty text-sm leading-relaxed text-foreground/80 md:text-base">
                Flere varianter og avtaletider finner du i medlemssystemet. Velg senter, og deretter medlemskapet som passer deg.
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-semibold text-background md:self-auto">
              Se alle medlemskap
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45 motion-reduce:transition-none">
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </span>
            </span>
          </span>
        </SmartLink>
      </li>
    </ul>
  )
}
