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

const passTypes = [
  {
    label: 'Babypass',
    age: '6 uker – 1 år',
    time: '09:00–12:00',
    days: 'Formiddag · mandag og onsdag',
    badgeClass: 'w-fit rounded-full border border-primary px-3 py-1 text-xs font-semibold text-primary',
  },
  {
    label: 'Barnepass',
    age: '1 år og oppover',
    time: '16:00–18:00',
    days: 'Ettermiddag · mandag og onsdag, lørdag 09:00–12:00',
    badgeClass: 'w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground',
  },
]

const passRules = ['Maks 1 time per barn', 'Begrenset antall plasser', 'Husk å booke på forhånd']

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
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10" data-reveal>
          <div className="flex flex-col gap-3 lg:max-w-md">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Timeplan · ut 2026</p>
            <h2 id="kids-timeplan" className="scroll-mt-28 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Når er barnepasset åpent?
            </h2>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Fast ukeplan for barnepass og babypass.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:w-[38rem]">
            {passTypes.map((pass) => (
              <li
                key={pass.label}
                className="group flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 text-card-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={pass.badgeClass}>{pass.label}</span>
                  <span className="text-xs font-semibold text-primary">{pass.age}</span>
                </div>
                <p className="font-mono text-lg font-semibold tabular-nums transition-colors group-hover:text-primary">
                  {pass.time}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">{pass.days}</p>
                <ul className="mt-1 flex flex-col gap-1.5 border-t border-border pt-3">
                  {passRules.map((rule) => (
                    <li key={rule} className="flex items-center gap-2 text-xs leading-relaxed text-foreground">
                      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-primary" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
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
