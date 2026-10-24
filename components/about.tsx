import { Building2, Clock, Dumbbell, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    icon: Building2,
    title: 'Helt nye lokaler',
    text: 'Moderne og romslige lokaler med høy takhøyde og ventilasjon som gir frisk luft og stabil temperatur hele dagen.',
  },
  {
    icon: Dumbbell,
    title: 'Utstyr i verdensklasse',
    text: 'Løpemøller fra Woodway og håndplukket styrkeutstyr fra noen av verdens beste produsenter.',
  },
  {
    icon: ShieldCheck,
    title: 'Kvalitet i alle ledd',
    text: 'Frittstående treningssenter uten kjedebegrensninger. Det gir oss friheten til å sette høye krav.',
  },
  {
    icon: Clock,
    title: 'Gode åpningstider',
    text: 'Åpent 04:00–23:00 alle dager, hele året. Enkel tilgang med personlig QR-kode i appen.',
  },
]

export function About() {
  return (
    <section id="om" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">Om BPC</p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Kun det beste er godt nok.
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            BPC er et selvstendig og familieeid treningssenter, bygget på lidenskap for trening,
            mennesker og kvalitet.
          </p>
        </div>
        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-4 bg-background p-8">
              <Icon aria-hidden="true" className="size-6 text-primary" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
