const staffedHours = [
  { day: 'Mandag – fredag', hours: '09:00–14:00 og 16:00–21:00' },
  { day: 'Lørdag', hours: '09:00–14:00' },
  { day: 'Søndag', hours: '12:00–15:00' },
]

export function OpeningHours() {
  return (
    <section id="apningstider" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Åpningstider
        </p>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Tren når det passer deg.
            </h2>
            <p
              className="mt-10 text-7xl font-semibold tracking-tighter text-primary md:text-8xl"
              aria-label="Åpent fra klokken 04 til 23"
            >
              04–23
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Alle dager, hele året. Tilgang med personlig QR-kode i appen.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <h3 className="text-lg font-semibold">Bemanningstider</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Vi er tilgjengelige for hjelp og spørsmål hele uken.
            </p>
            <dl className="mt-8 divide-y divide-border">
              {staffedHours.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <dt className="font-medium">{item.day}</dt>
                  <dd className="font-mono text-sm text-muted-foreground">{item.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
