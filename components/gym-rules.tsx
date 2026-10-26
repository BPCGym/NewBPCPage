import { Camera, Dumbbell, HandHeart, Home, Shirt, SprayCan } from 'lucide-react'

const rules = [
  {
    icon: Home,
    title: 'Behandle BPC som ditt eget hjem',
    text: 'Rydd etter deg, hold orden der andre ikke har klart det, og hjelp til. Det er det eneste vi krever av hvert eneste medlem.',
  },
  {
    icon: SprayCan,
    title: 'Rengjør apparater etter bruk',
    text: 'Vi har egne renholdsstasjoner rundt i senteret. Det er et krav, og det koster deg ingenting – vi tar regningen og holder stasjonene påfylt til enhver tid.',
  },
  {
    icon: Camera,
    title: 'Ikke film andre uten at de vet det',
    text: 'Ta hensyn til at andre som trener kanskje ikke vil være med på film eller video. Skal du filme i forbindelse med et prosjekt, ta kontakt med oss, så finner vi et eget tidspunkt sent på kvelden – kun etter avtale.',
  },
  {
    icon: Dumbbell,
    title: 'Slipp vekter der det er laget for det',
    text: 'Bruk en av våre 10 løftestasjoner, spesiallaget for vektløfting, når du skal slippe vekter.',
  },
  {
    icon: Shirt,
    title: 'Tren i klær som tar hensyn',
    text: 'Singlet er selvfølgelig tillatt, men ikke alle vil se brystvortene dine. Ta hensyn hvis singleten er veldig tynn og åpen.',
  },
  {
    icon: HandHeart,
    title: 'Vi bråker ikke av umodenhet',
    text: 'Hard trening kan høres, og det er greit. Unødvendig bråk, rop og tull hører ikke hjemme her.',
  },
] as const

export function GymRules() {
  return (
    <section
      id="gymregler"
      aria-labelledby="gymregler-title"
      className="scroll-mt-24 border-t border-border py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5 lg:gap-16">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Gymregler</p>
          <h2 id="gymregler-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Et voksent gym, med respekt i bunn.
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Hos oss respekterer vi først og fremst utstyret, fasilitetene og menneskene som trener her.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            BPC er et nøytralt sted der alle skal føle seg velkommen – uansett hvem du er og hvor du kommer fra.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {rules.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
