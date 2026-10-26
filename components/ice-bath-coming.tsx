import Image from 'next/image'

const highlights = [
  { value: 'Ned mot 4 °C', text: 'Skikkelig kaldt vann for deg som vil ha det ekte.' },
  { value: 'Plass til flere', text: 'God plass, så du kan ta isbadet sammen med andre.' },
  { value: 'Gjennomtenkt', text: 'En løsning designet for alle som liker skikkelig isbad.' },
]

export function IceBathComing() {
  return (
    <section aria-labelledby="isbad-2027-title" className="border-t border-border bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        <div className="relative overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/isbad-2027.png"
            alt="Illustrasjon av det nye premium isbadet med opplyste trappetrinn, neonskiltet «Let's do this» og solstoler på hver side"
            width={1694}
            height={928}
            className="h-auto w-full object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
            Kommer 2027
          </span>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Bestilt · Kommer i 2027</p>
          <h2 id="isbad-2027-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Premium isbad – nytt i Bergen.
          </h2>
          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Vi har bestilt et premium isbad av en standard som aldri før er sett på et gym i Bergen. Det kommer på
            plass i 2027.
          </p>
          <ul className="grid w-full gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {highlights.map((item) => (
              <li key={item.value} className="flex flex-col gap-2 bg-card p-5">
                <p className="text-lg font-semibold tracking-tight text-foreground">{item.value}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
