import type { CSSProperties } from 'react'
import { Dumbbell, Flame, Users, type LucideIcon } from 'lucide-react'
import { dropIns } from '@/lib/site'

const formatPrice = (price: number) => price.toLocaleString('nb-NO')

type Variant = { tag: string; accent: string; icons: LucideIcon[] }

const variants: Record<string, Variant> = {
  Egentrening: { tag: 'BPC Gym', accent: 'var(--culture-blue)', icons: [Dumbbell] },
  'Egentrening + Sauna': { tag: 'Gym + Velvære', accent: 'var(--culture-violet)', icons: [Dumbbell, Flame] },
  Gruppetrening: { tag: 'BPC Boxen', accent: 'oklch(0.72 0.17 155)', icons: [Users] },
  Sauna: { tag: 'BPC Velvære', accent: 'var(--sauna)', icons: [Flame] },
}

const fallback: Variant = { tag: 'Drop-in', accent: 'var(--culture-blue)', icons: [Dumbbell] }

export function DropInCards() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {dropIns.map((item) => {
        const { tag, accent, icons } = variants[item.name] ?? fallback
        return (
          <li
            key={item.name}
            data-reveal
            style={{ '--accent': accent } as CSSProperties}
            className="dropin-card group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-foreground/10 bg-card p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="dropin-tag rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
                {tag}
              </span>
              <span className="flex items-center gap-1" aria-hidden="true">
                {icons.map((Icon, index) => (
                  <span key={index} className="dropin-icon flex size-8 items-center justify-center rounded-full">
                    <Icon className="size-4" />
                  </span>
                ))}
              </span>
            </div>
            <h3 className="text-pretty text-lg font-semibold leading-snug">{item.name}</h3>
            <p className="flex items-baseline gap-2">
              <span className="dropin-price text-3xl font-semibold tracking-tight">{`kr ${formatPrice(item.price)}`}</span>
              <span className="text-sm text-muted-foreground">pr besøk</span>
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.note}</p>
          </li>
        )
      })}
    </ul>
  )
}
