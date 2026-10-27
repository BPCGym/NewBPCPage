'use client'

import { useRef, type CSSProperties, type PointerEvent } from 'react'
import { groupSchedule } from '@/lib/site'

const classKinds = [
  { key: 'crossfit', label: 'CrossFit / WOD', match: /crossfit/i, color: 'var(--culture-blue)' },
  { key: 'hyrox', label: 'HYROX', match: /hyrox/i, color: 'var(--korttid-egen)' },
  { key: 'interval', label: 'Interval WOD', match: /interval/i, color: 'var(--culture-violet)' },
  { key: 'hybrid', label: 'Hybrid WOD', match: /hybrid/i, color: 'var(--gruppe)' },
] as const

function kindFor(name: string) {
  return classKinds.find((kind) => kind.match.test(name)) ?? classKinds[0]
}

export function GroupSchedule() {
  const gridRef = useRef<HTMLDivElement>(null)

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const grid = gridRef.current
    if (!grid) return
    const gridRect = grid.getBoundingClientRect()
    grid.style.setProperty('--gx', `${event.clientX - gridRect.left}px`)
    grid.style.setProperty('--gy', `${event.clientY - gridRect.top}px`)
    grid.querySelectorAll<HTMLElement>('[data-glow]').forEach((tile) => {
      const rect = tile.getBoundingClientRect()
      tile.style.setProperty('--x', `${event.clientX - rect.left}px`)
      tile.style.setProperty('--y', `${event.clientY - rect.top}px`)
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-wrap gap-2" aria-label="Timetyper">
        {classKinds.map((kind) => (
          <li
            key={kind.key}
            className="schedule-chip flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold"
            style={{ '--c': kind.color } as CSSProperties}
          >
            <span className="size-2 rounded-full" style={{ backgroundColor: kind.color }} aria-hidden="true" />
            {kind.label}
          </li>
        ))}
      </ul>

      <div
        ref={gridRef}
        onPointerMove={handlePointerMove}
        className="schedule-grid relative grid gap-3 sm:grid-cols-2 lg:grid-cols-7"
      >
        {groupSchedule.map((day) => (
          <section
            key={day.day}
            data-glow
            className="schedule-day relative flex flex-col gap-3 rounded-2xl p-4"
            aria-label={day.day}
          >
            <h3 className="flex items-center justify-between text-sm font-bold uppercase tracking-wide">
              {day.day}
              <span className="text-xs font-medium normal-case tracking-normal text-muted-foreground">
                {day.classes.length > 0 ? `${day.classes.length} timer` : 'Fri'}
              </span>
            </h3>
            {day.classes.length > 0 ? (
              <ul className="flex flex-col gap-2">
                {day.classes.map((item) => {
                  const kind = kindFor(item.name)
                  return (
                    <li
                      key={item.time}
                      data-glow
                      className="schedule-class relative flex flex-col gap-0.5 overflow-hidden rounded-xl px-3 py-2.5"
                      style={{ '--c': kind.color } as CSSProperties}
                    >
                      <span className="font-mono text-xs tabular-nums text-muted-foreground">{item.time}</span>
                      <span className="text-sm font-bold">{item.name}</span>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="text-sm leading-relaxed text-muted-foreground">Ingen gruppetimer. Hvil, eller tren på egen hånd.</p>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
