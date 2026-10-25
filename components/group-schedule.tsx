import { groupSchedule } from '@/lib/site'

export function GroupSchedule() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
      {groupSchedule.map((day) => (
        <li key={day.day} className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide">{day.day}</h3>
          {day.classes.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {day.classes.map((item) => (
                <li key={item.time} className="flex flex-col gap-0.5 rounded-xl bg-card px-3 py-2">
                  <span className="font-mono text-sm tabular-nums text-muted-foreground">{item.time}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground">Ingen gruppetimer</p>
          )}
        </li>
      ))}
    </ul>
  )
}
