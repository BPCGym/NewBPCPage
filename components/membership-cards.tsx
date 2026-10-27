'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { AppBadges } from '@/components/app-badges'
import { SmartLink } from '@/components/smart-link'
import { dropIns, links, membershipCategories, membershipTip, type PlanColor, type PlanGroup } from '@/lib/site'
import { cn } from '@/lib/utils'

type TabColor = PlanColor | 'dropin'

function SpotlightBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="spotlight-badge relative inline-flex w-fit items-center gap-1.5 overflow-hidden rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
      <Sparkles aria-hidden="true" className="spotlight-star size-3.5" />
      {children}
    </span>
  )
}

const dotStyles: Record<TabColor, string> = {
  egen: 'bg-egen',
  gruppe: 'bg-gruppe',
  korttidEgen: 'bg-korttid-egen',
  korttidGruppe: 'bg-korttid-gruppe',
  velvaere: 'bg-muted-foreground',
  dropin: 'bg-foreground',
}

const barStyles: Record<TabColor, string> = {
  egen: 'before:bg-egen',
  gruppe: 'before:bg-gruppe',
  korttidEgen: 'before:bg-korttid-egen',
  korttidGruppe: 'before:bg-korttid-gruppe',
  velvaere: 'before:bg-muted-foreground',
  dropin: 'before:bg-foreground',
}

function useActiveCard(panelKey: string) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    setActiveIndex(null)
    const cards = panelRef.current?.querySelectorAll<HTMLElement>('[data-plan-card]')
    // Cards only stack vertically below md; side by side, a scroll position can't pick one.
    if (!cards?.length || window.matchMedia('(min-width: 768px)').matches) return
    const list = Array.from(cards)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveIndex(list.indexOf(entry.target as HTMLElement))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    list.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [panelKey])

  return { panelRef, activeIndex }
}

const tabs = [
  ...membershipCategories.map((c) => ({ id: c.id, label: c.label, color: c.color as TabColor })),
  { id: 'drop-in', label: 'Drop-in', color: 'dropin' as const },
]

const formatPrice = (price: number) => price.toLocaleString('nb-NO')

type Row = { name: string; note?: string; price: number; highlight?: string }

function PriceList({
  title,
  color,
  period,
  note,
  rows,
  href,
  active = false,
  tag,
}: {
  title: string
  color: TabColor
  period: string
  note?: string
  rows: readonly Row[]
  href?: string
  active?: boolean
  tag?: string
}) {
  const content = (
    <>
      {tag && (
        <p className="pb-3">
          <SpotlightBadge>{tag}</SpotlightBadge>
        </p>
      )}
      <header className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold">
          <span
            aria-hidden="true"
            className={cn(
              'size-2 rounded-full transition-transform duration-300 group-hover:scale-150 group-data-[active=true]:scale-150',
              dotStyles[color],
            )}
          />
          {title}
        </h3>
        <span className="text-xs text-muted-foreground">{period}</span>
      </header>
      <ul className="flex flex-col gap-2 pt-3">
        {rows.map((row) => (
          <li
            key={row.name}
            className={cn(
              'relative flex items-baseline justify-between gap-4 rounded-md px-3 py-2.5 transition-[background-color,box-shadow,transform] duration-200 hover:translate-x-1 motion-reduce:hover:translate-x-0',
              row.highlight
                ? 'plan-spotlight bg-primary/5 hover:bg-primary/10'
                : 'ring-1 ring-border hover:bg-muted/60 hover:ring-foreground/40',
            )}
          >
            <span className="flex flex-col">
              {row.highlight && (
                <span className="pb-2">
                  <SpotlightBadge>{row.highlight}</SpotlightBadge>
                </span>
              )}
              <span className="text-sm font-medium leading-snug">{row.name}</span>
              {row.note && <span className="text-xs text-muted-foreground">{row.note}</span>}
            </span>
            <span className="shrink-0 font-semibold tabular-nums">{`kr ${formatPrice(row.price)}`}</span>
          </li>
        ))}
      </ul>
      {note && <p className="pt-1 text-xs leading-relaxed text-muted-foreground">{note}</p>}
    </>
  )

  const cardClass = cn(
    'group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card px-5 py-4 transition-all duration-300 ease-out',
    'before:absolute before:inset-y-0 before:left-0 before:w-1 before:origin-top before:scale-y-0 before:transition-transform before:duration-300',
    'hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:before:scale-y-100',
    'data-[active=true]:border-primary/50 data-[active=true]:before:scale-y-100',
    'active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:translate-y-0',
    barStyles[color],
  )

  if (!href) {
    return (
      <article
        tabIndex={0}
        data-plan-card
        data-active={active}
        className={cn(cardClass, 'outline-none focus-visible:border-primary focus-visible:before:scale-y-100')}
      >
        {content}
      </article>
    )
  }

  return (
    <SmartLink
      href={href}
      data-plan-card
      data-active={active}
      className={cn(
        cardClass,
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      )}
    >
      {content}
      <span className="mt-auto flex items-center justify-end gap-1.5 border-t border-border pt-3 text-sm font-semibold text-foreground">
        Velg<span className="sr-only">{` ${title} og gå til innmelding`}</span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      </span>
    </SmartLink>
  )
}

function PlanList({ group, active }: { group: PlanGroup; active: boolean }) {
  return (
    <PriceList
      title={group.title}
      color={group.color}
      period={group.period}
      note={group.note}
      rows={group.plans}
      href={links.signup}
      active={active}
      tag={group.tag}
    />
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
  const { panelRef, activeIndex } = useActiveCard(active)

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
        ref={panelRef}
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
            {category.groups.map((group, index) => (
              <PlanList key={group.title} group={group} active={activeIndex === index} />
            ))}
          </div>
        ) : null}

        {category?.groups.some((g) => g.plans.some((p) => p.highlight)) && (
          <aside className="flex flex-col gap-1 rounded-xl border border-dashed border-primary/50 bg-primary/5 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-3">
            <p className="flex shrink-0 items-center gap-1.5 text-base font-semibold text-foreground">
              <Sparkles aria-hidden="true" className="spotlight-star size-4 text-primary" />
              {membershipTip.lead}
            </p>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{membershipTip.text}</p>
          </aside>
        )}

        {category ? null : (
          <div className="grid gap-3 md:grid-cols-2">
            <PriceList title="Drop-in" color="dropin" period="Pr besøk" rows={dropIns} active={activeIndex === 0} />
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
