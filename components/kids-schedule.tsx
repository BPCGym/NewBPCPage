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
    sessions: [{ label: 'Barnepass', times: ['09:00–10:00', '10:00–11:00', '11:00–12:00'], staff: 'Rullering' }],
  },
  { name: 'Søndag', sessions: [] },
]

const saturdayRotation = [
  { week: 40, date: '03.10', staff: 'Emma Sofie + Emilie' },
  { week: 41, date: '10.10', staff: 'Isabella + Emma Davik' },
  { week: 42, date: '17.10', staff: 'Emma Sofie + Emilie' },
  { week: 43, date: '24.10', staff: 'Emilie + Isabella' },
  { week: 44, date: '31.10', staff: 'Emma Sofie + Emilie' },
  { week: 45, date: '07.11', staff: 'Isabella + Emma Davik' },
  { week: 46, date: '14.11', staff: 'Emma Sofie + Emilie' },
  { week: 47, date: '21.11', staff: 'Emilie + Isabella' },
  { week: 48, date: '28.11', staff: 'Emma Sofie + Emilie' },
  { week: 49, date: '05.12', staff: 'Isabella + Emma Davik' },
  { week: 50, date: '12.12', staff: 'Emma Sofie + Emilie' },
  { week: 51, date: '19.12', staff: 'Emilie + Isabella' },
  { week: 52, date: '26.12', staff: 'Emma Sofie + Emilie' },
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
    <section aria-labelledby="kids-timeplan" className="border-t border-border py-14 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        <header className="flex max-w-2xl flex-col gap-3" data-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Timeplan · ut 2026</p>
          <h2 id="kids-timeplan" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Når er barnepasset åpent?
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Fast ukeplan for barnepass og babypass, og hvem som er på vakt på lørdager resten av året.
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
                    ? 'flex flex-col gap-4 rounded-2xl border border-primary/40 bg-card p-4 text-card-foreground'
                    : 'flex flex-col gap-4 rounded-2xl border border-border p-4 text-muted-foreground'
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
                  <p className="text-sm leading-relaxed">Ingen barnepass eller babypass</p>
                )}
              </li>
            )
          })}
        </ol>

        <div className="flex flex-col gap-4" data-reveal>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold tracking-tight">Lørdagsrullering</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              2 personer på vakt hele lørdagen (09:00–12:00).
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <caption className="sr-only">Barnepassere på lørdager, uke 40 til 52</caption>
              <thead className="bg-muted text-xs uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium">Uke</th>
                  <th scope="col" className="px-4 py-3 font-medium">Dato</th>
                  <th scope="col" className="px-4 py-3 font-medium">Barnepassere</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {saturdayRotation.map((row) => (
                  <tr key={row.week}>
                    <td className="px-4 py-2.5 font-mono font-semibold tabular-nums text-primary">{row.week}</td>
                    <td className="px-4 py-2.5 font-mono tabular-nums">{row.date}</td>
                    <td className="px-4 py-2.5">{row.staff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
