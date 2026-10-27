'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { AppBadges } from '@/components/app-badges'
import { SmartLink } from '@/components/smart-link'
import { dropIns, links, membershipCategories, type PlanColor, type PlanGroup } from '@/lib/site'
import { cn } from '@/lib/utils'

type TabColor = PlanColor | 'dropin'

const dotStyles: Record<TabColor, string> = {
  egen: 'bg-egen',
  gruppe: 'bg-gruppe',
  korttidEgen: 'bg-korttid-egen',
  korttidGruppe: 'bg-korttid-gruppe',
  velvaere: 'bg-muted-foreground',
  dropin: 'bg-foreground',
}

const tabs = [
  ...membershipCategories.map((c) => ({ id: c.id, label: c.label, color: c.color as TabColor })),
  { id: 'drop-in', label: 'Drop-in', color: 'dropin' as const },
]

const formatPrice = (price: number) => price.toLocaleString('nb-NO')

type Row = { name: string; note?: string; price: number }

function PriceList({
  title,
  color,
  period,
  note,
  rows,
}: {
  title: string
  color: TabColor
  period: string
  note?: string
  rows: Row[]
}) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card px-5 py-4">
      <header className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold">
          <span aria-hidden="true" className={cn('size-2 rounded-full', dotStyles[color])} />
          {title}
        </h3>
        <span className="text-xs text-muted-foreground">{period}</span>
      </header>
      <ul className="flex flex-col">
        {rows.map((row) => (
          <li key={row.name} className="flex items-baseline justify-between gap-4 py-2.5">
            <span className="flex flex-col">
              <span className="text-sm font-medium leading-snug">{row.name}</span>
              {row.note && <span className="text-xs text-muted-foreground">{row.note}</span>}
            </span>
            <span className="shrink-0 font-semibold tabular-nums">{`kr ${formatPrice(row.price)}`}</span>
          </li>
        ))}
      </ul>
      {note && <p className="pt-1 text-xs leading-relaxed text-muted-foreground">{note}</p>}
    </article>
  )
}

function PlanList({ group }: { group: PlanGroup }) {
  return (
    <PriceList title={group.title} color={group.color} period={group.period} note={group.note} rows={group.plans} />
  )
}

export function MembershipCards() {
  const [active, setActive] = useState(tabs[0].id)

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1)
      if (tabs.some((t) => t.id === id)) setActive(id)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [])

  const select = (id: string) => {
    setActive(id)
    window.history.replaceState(null, '', `#${id}`)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    const index = tabs.findIndex((t) => t.id === active)
    const next = tabs[(index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length]
    select(next.id)
    document.getElementById(`tab-${next.id}`)?.focus()
  }

  const category = membershipCategories.find((c) => c.id === active)

  return (
    <div className="flex flex-col gap-5">
      <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
        <div
          role="tablist"
          aria-label="Velg type medlemskap"
          onKeyDown={onKeyDown}
          className="inline-flex gap-1 rounded-full border border-border bg-card p-1"
        >
          {tabs.map((tab) => {
            const selected = tab.id === active
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="medlemskap-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(tab.id)}
                className={cn(
                  'flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  selected ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <span aria-hidden="true" className={cn('size-1.5 rounded-full', dotStyles[tab.color])} />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <div
        id="medlemskap-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        key={active}
        className="animate-in fade-in duration-300 flex flex-col gap-4 motion-reduce:animate-none"
      >
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          {category ? category.intro : 'Én økt, uten medlemskap og uten binding.'}
        </p>

        {category ? (
          <div
            className={cn(
              'grid gap-3',
              category.groups.length >= 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2',
            )}
          >
            {category.groups.map((group) => (
              <PlanList key={group.title} group={group} />
            ))}
          </div>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            <PriceList title="Drop-in" color="dropin" period="Pr besøk" rows={dropIns} />
          </div>
        )}

        {category ? (
          <div className="flex flex-wrap items-end gap-3 pt-2">
            <SmartLink
              href={links.signup}
              className="cta-sweep glow group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full bg-primary pl-7 pr-6 text-base font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="relative">Bli medlem</span>
              <ArrowRight
                aria-hidden="true"
                className="relative size-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </SmartLink>
            <AppBadges />
            <p className="w-full text-sm text-muted-foreground">Du fullfører kjøpet i BPCs medlemssystem.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 pt-2">
            <AppBadges />
            <p className="text-sm text-muted-foreground">
              Drop-in kjøpes kun i Appen Min Trening, ikke på nettsiden.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
