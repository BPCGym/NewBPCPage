type Session = {
  label: 'Babypass' | 'Barnepass'
  times: string[]
  staff: string
}

type Day = {
  name: string
  sessions: Session[]
}

const weekPlan: Day[] = [
  {
    name: 'Mandag',
    sessions: [
      { label: 'Babypass', times: ['09:00–10:00', '10:00–11:00', '11:00–12:00'], staff: 'Berith' },
      { label: 'Barnepass', times: ['16:00–17:00', '17:00–18:00'], staff: 'Isabella' },
    ],
  },
  { name: 'Tirsdag', sessions: [] },
  {
    name: 'Onsdag',
    sessions: [
      { label: 'Babypass', times: ['09:00–10:00', '10:00–11:00', '11:00–12:00'], staff: 'Berith' },
      { label: 'Barnepass', times: ['16:00–17:00', '17:00–18:00'], staff: 'Emilie' },
    ],
  },
  { name: 'Torsdag', sessions: [] },
  { name: 'Fredag', sessions: [] },
  {
    name: 'Lørdag',
    sessions: [{ label: 'Barnepass', times: ['09:00–10:00', '10:00–11:00', '11:00–12:00'], staff: '2 på vakt' }],
  },
  { name: 'Søndag', sessions: [] },
]

function SessionBlock({ session }: { session: Session }) {
  const isBaby = session.label === 'Babypass'
  return (
    <div className="flex flex-col gap-2">
      <span
        className={
          isBaby
            ? 'w-fit rounded-full border border-primary px-3 py-1 text-xs font-semibold text-primary'
            : 'w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground'
        }
      >
        {session.label}
      </span>
      <ul className="flex flex-col font-mono text-sm tabular-nums">
        {session.times.map((time) => (
          <li key={time}>{time}</li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground">
        Barnepasser: <span className="font-semibold text-foreground">{session.staff}</span>
      </p>
    </div>
  )
}

export function KidsSchedule() {
  return (
    <section aria-labelledby="kids-timeplan" className="border-t border-border py-10 md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6">
        <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between" data-reveal>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Timeplan · ut 2026</p>
            <h2 id="kids-timeplan" className="scroll-mt-28 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Når er barnepasset åpent?
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Fast ukeplan for barnepass og babypass.
          </p>
        </header>

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7" data-reveal>
          {weekPlan.map((day) => {
            const isOpen = day.sessions.length > 0
            return (
              <li
                key={day.name}
                className={
                  isOpen
                    ? 'flex flex-col gap-3 rounded-2xl border border-primary/40 bg-card p-4 text-card-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary'
                    : 'flex flex-col gap-2 rounded-2xl border border-dashed border-border p-4 text-muted-foreground'
                }
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest">{day.name}</h3>
                {isOpen ? (
                  <div className="flex flex-col gap-5">
                    {day.sessions.map((session) => (
                      <SessionBlock key={session.label} session={session} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed">Stengt</p>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
