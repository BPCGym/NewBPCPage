'use client'

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Check, Eye } from 'lucide-react'

type TrackerValue = { seen: Set<string>; markSeen: (id: string) => void; total: number }

const TrackerContext = createContext<TrackerValue | null>(null)

export function WellnessRuleTracker({ total, children }: { total: number; children: ReactNode }) {
  const [seen, setSeen] = useState<Set<string>>(() => new Set())

  const markSeen = (id: string) =>
    setSeen((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })

  return <TrackerContext.Provider value={{ seen, markSeen, total }}>{children}</TrackerContext.Provider>
}

function useTracker() {
  const value = useContext(TrackerContext)
  if (!value) throw new Error('useTracker must be used inside WellnessRuleTracker')
  return value
}

export function RulesProgress() {
  const { seen, total } = useTracker()
  const count = seen.size
  const done = count >= total

  return (
    <div className="sticky top-28 z-20 flex justify-center">
      <div
        role="status"
        aria-live="polite"
        className={`flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur transition-colors duration-500 ${
          done ? 'border-sauna bg-sauna text-sauna-foreground' : 'border-sauna/40 bg-background/85 text-foreground'
        }`}
      >
        {done ? <Check className="size-4" aria-hidden="true" /> : <Eye className="size-4 text-sauna" aria-hidden="true" />}
        <span>{done ? 'Alle regler lest, takk!' : `${count} av ${total} regler lest`}</span>
        <span aria-hidden="true" className="relative h-1.5 w-20 overflow-hidden rounded-full bg-foreground/15">
          <span
            className={`absolute inset-y-0 left-0 rounded-full transition-[width] duration-700 ease-out ${
              done ? 'bg-sauna-foreground' : 'bg-sauna'
            }`}
            style={{ width: `${(count / total) * 100}%` }}
          />
        </span>
      </div>
    </div>
  )
}

export function SeenRule({
  id,
  as: Tag = 'li',
  className = '',
  children,
}: {
  id: string
  as?: 'li' | 'div'
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  const { seen, markSeen } = useTracker()
  const isSeen = seen.has(id)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markSeen(id)
          observer.disconnect()
        }
      },
      { threshold: 0.6, rootMargin: '0px 0px -15% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
    // markSeen is a stable state updater wrapper; re-observing on every render is unnecessary.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <Tag
      ref={ref as never}
      data-seen={isSeen}
      className={`group/rule relative ${className}`}
    >
      {children}
    </Tag>
  )
}

export function SeenStamp() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-4 flex scale-50 items-center gap-1 rounded-full bg-sauna px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-sauna-foreground opacity-0 transition-all duration-500 ease-[cubic-bezier(.2,1.6,.4,1)] group-data-[seen=true]/rule:scale-100 group-data-[seen=true]/rule:opacity-100 motion-reduce:transition-none"
    >
      <Check className="size-3.5" />
      Lest
    </span>
  )
}
