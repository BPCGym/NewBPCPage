import { Camera, Dumbbell, HandHeart, Home, ShieldAlert, Shirt, SprayCan } from 'lucide-react'

const rules = [
  {
    icon: Home,
    title: 'Behandle BPC som ditt eget hjem',
    text: 'Rydd etter deg, hold orden der andre ikke har klart det, og hjelp til. Det er det eneste vi krever av hvert medlem.',
  },
  {
    icon: SprayCan,
    title: 'Rengjør apparater etter bruk',
    text: 'Bruk renholdsstasjonene våre. Det er et krav, og det koster deg ingenting.',
  },
  {
    icon: Camera,
    title: 'Ikke film andre uten at de vet det',
    text: 'Skal du filme til et prosjekt, ta kontakt, så finner vi et eget tidspunkt sent på kvelden – kun etter avtale.',
  },
  {
    icon: Dumbbell,
    title: 'Slipp vekter kun på løftestasjonene',
    text: 'Vi har 10 løftestasjoner spesiallaget for vektløfting.',
  },
  {
    icon: Shirt,
    title: 'Tren i klær som tar hensyn',
    text: 'Singlet er lov, men ta hensyn hvis den er veldig tynn og åpen.',
  },
  {
    icon: HandHeart,
    title: 'Vi bråker ikke av umodenhet',
    text: 'Hard trening kan høres. Unødvendig rop og tull hører ikke hjemme her.',
  },
] as const

export function GymRules() {
  return (
    <section
      id="gymregler"
      aria-labelledby="gymregler-title"
      className="scroll-mt-24 border-t border-border py-16 md:py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <header className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Gymregler</p>
          <h2 id="gymregler-title" className="flex flex-col gap-2 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            <span>Brudd fører til utestengelse.</span>
            <span className="flex items-center gap-2 text-xl font-medium text-muted-foreground md:text-2xl">
              <ShieldAlert className="size-6 shrink-0 text-primary" aria-hidden="true" />
              Det gjelder spesielt punkt 1.
            </span>
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            BPC er et voksent gym og et nøytralt sted der alle skal føle seg velkommen, uansett hvem du er og hvor du
            kommer fra. Vi respekterer utstyret, fasilitetene og menneskene som trener her.
          </p>
        </header>

        <ol className="grid gap-x-10 border-t border-border md:grid-cols-2">
          {rules.map(({ icon: Icon, title, text }, index) => {
            const isKeyRule = index === 0
            return (
              <li
                key={title}
                className={
                  isKeyRule
                    ? 'flex items-start gap-4 border-b border-border py-5 md:col-span-2'
                    : 'flex items-start gap-4 border-b border-border py-5'
                }
              >
                <span
                  className={
                    isKeyRule
                      ? 'flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground'
                      : 'flex size-9 shrink-0 items-center justify-center rounded-full border border-border font-mono text-sm text-muted-foreground'
                  }
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className={isKeyRule ? 'flex items-center gap-2 text-lg font-semibold' : 'flex items-center gap-2 font-semibold'}>
                    <span className="sr-only">{`Punkt ${index + 1}: `}</span>
                    {title}
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
