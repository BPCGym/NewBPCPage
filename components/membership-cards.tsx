'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Smartphone } from 'lucide-react'
import { SmartLink } from '@/components/smart-link'
import { dropIns, links, membershipCategories, type PlanColor, type PlanGroup } from '@/lib/site'
import { cn } from '@/lib/utils'

const colorStyles: Record<PlanColor | 'dropin', { dot: string; bar: string; text: string; button: string; tab: string }> = {
  egen: {
    dot: 'bg-egen',
    bar: 'bg-egen',
    text: 'text-egen',
    button: 'bg-egen text-egen-foreground',
    tab: 'bg-egen text-egen-foreground',
  },
  gruppe: {
    dot: 'bg-gruppe',
    bar: 'bg-gruppe',
    text: 'text-gruppe',
    button: 'bg-gruppe text-gruppe-foreground',
    tab: 'bg-gruppe text-gruppe-foreground',
  },
  korttidEgen: {
    dot: 'bg-korttid-egen',
    bar: 'bg-korttid-egen',
    text: 'text-korttid-egen',
    button: 'bg-korttid-egen text-korttid-egen-foreground',
    tab: 'bg-korttid-egen text-korttid-egen-foreground',
  },
  korttidGruppe: {
    dot: 'bg-korttid-gruppe',
    bar: 'bg-korttid-gruppe',
    text: 'text-korttid-gruppe',
    button: 'bg-korttid-gruppe text-korttid-gruppe-foreground',
    tab: 'bg-korttid-gruppe text-korttid-gruppe-foreground',
  },
  dropin: {
    dot: 'bg-foreground',
    bar: 'bg-foreground',
    text: 'text-foreground',
    button: 'bg-foreground text-background',
    tab: 'bg-foreground text-background',
  },
}

const tabs = [
  ...membershipCategories.map((c) => ({ id: c.id, label: c.label, color: c.color as PlanColor | 'dropin' })),
  { id: 'drop-in', label: 'Drop-in', color: 'dropin' as const },
]

const formatPrice = (price: number) => price.toLocaleString('nb-NO')

function PlanBox({ group }: { group: PlanGroup }) {
  const style = colorStyles[group.color]
  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <span aria-hidden="true" className={cn('h-1.5', style.bar)} />
      <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
        <header className="flex flex-col gap-2">
          <p className={cn('flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]', style.text)}>
            <span aria-hidden="true" className={cn('size-2 rounded-full', style.dot)} />
            {group.title}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{group.note}</p>
        </header>

        <ul className="flex flex-1 flex-col divide-y divide-border">
          {group.plans.map((plan) => (
            <li key={plan.name} className="flex items-end justify-between gap-4 py-4 first:pt-0 last:pb-0">
              <span className="flex flex-col gap-1">
                <span className="font-semibold leading-snug">{plan.name}</span>
                {plan.note && <span className="text-xs text-muted-foreground">{plan.note}</span>}
              </span>
              <span className="flex shrink-0 flex-col items-end">
                <span className="text-xs text-muted-foreground">{group.period}</span>
                <span className="text-2xl font-semibold tracking-tight md:text-3xl">{`kr ${formatPrice(plan.price)}`}</span>
              </span>
            </li>
          ))}
        </ul>

        <SmartLink
          href={links.signup}
          className={cn(
            'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90',
            style.button,
          )}
        >
          Velg i medlemssystemet
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:rotate-45 motion-reduce:transition-none" />
        </SmartLink>
      </div>
    </article>
  )
}

function DropInPanel() {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <span aria-hidden="true" className="h-1.5 bg-foreground" />
      <div className="flex flex-col gap-6 p-6 md:p-8">
        <header className="flex flex-col gap-2">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-foreground" />
            Kjøpes kun i Appen
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Drop-in selges ikke på nettsiden. Kjøp i Appen Min Trening, så får du QR-koden rett på telefonen.
          </p>
        </header>

        <ul className="grid gap-x-10 sm:grid-cols-2">
          {dropIns.map((item) => (
            <li key={item.name} className="flex items-end justify-between gap-4 border-b border-border py-4">
              <span className="flex flex-col gap-1">
                <span className="font-semibold leading-snug">{item.name}</span>
                <span className="text-xs text-muted-foreground">{item.note}</span>
              </span>
              <span className="flex shrink-0 flex-col items-end">
                <span className="text-xs text-muted-foreground">Pr besøk</span>
                <span className="text-2xl font-semibold tracking-tight md:text-3xl">{`kr ${formatPrice(item.price)}`}</span>
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="/provetime"
          className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          <Smartphone aria-hidden="true" className="size-4" />
          Slik laster du ned Appen
        </Link>
      </div>
    </article>
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
    <div className="flex flex-col gap-8">
      <div
        role="tablist"
        aria-label="Velg type medlemskap"
        onKeyDown={onKeyDown}
        className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 md:mx-0 md:flex-wrap md:px-0"
      >
        {tabs.map((tab) => {
          const selected = tab.id === active
          const style = colorStyles[tab.color]
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
                'flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors',
                selected ? cn('border-transparent', style.tab) : 'border-border text-foreground hover:bg-foreground/5',
              )}
            >
              {tab.id === 'korttid' ? (
                <span aria-hidden="true" className="flex gap-1">
                  <span className={cn('size-2 rounded-full', selected ? 'bg-current' : 'bg-korttid-egen')} />
                  <span className={cn('size-2 rounded-full', selected ? 'bg-current opacity-60' : 'bg-korttid-gruppe')} />
                </span>
              ) : (
                <span aria-hidden="true" className={cn('size-2 rounded-full', selected ? 'bg-current' : style.dot)} />
              )}
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        id="medlemskap-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        key={active}
        className="animate-in fade-in slide-in-from-bottom-2 flex flex-col gap-6 duration-300 motion-reduce:animate-none"
      >
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {category ? category.intro : 'Én økt, ingen medlemskap og ingen binding.'}
        </p>
        {category ? (
          <div className="grid gap-4 md:grid-cols-2">
            {category.groups.map((group) => (
              <PlanBox key={group.title} group={group} />
            ))}
          </div>
        ) : (
          <DropInPanel />
        )}
        <p className="text-sm text-muted-foreground">
          {category
            ? 'Du fullfører kjøpet i BPCs medlemssystem. Velg senter, og deretter medlemskapet over.'
            : 'Drop-in kjøpes i Appen Min Trening.'}
        </p>
      </div>
    </div>
  )
}
