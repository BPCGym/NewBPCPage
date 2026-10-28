import { ChevronDown, Clock, HeartPulse, Shirt, ShieldCheck, type LucideIcon } from 'lucide-react'

type Rule = { title: string; text: string }
type RuleGroup = { title: string; icon: LucideIcon; rules: Rule[] }

const keyFacts = [
  { value: '6 uker–12 år', label: 'Egne barn av medlemmer' },
  { value: '1 time', label: 'Maks per besøk' },
  { value: '10 timer', label: 'Maks per uke' },
  { value: 'I lokalet', label: 'Foresatte er på BPC hele tiden' },
]

const groups: RuleGroup[] = [
  {
    title: 'Hvem og når',
    icon: Clock,
    rules: [
      {
        title: 'Aldersgruppe og medlemskap',
        text: 'Barnepass tilbys BPC-medlemmers barn i alderen 6 uker til og med 12 år. Kun egne barn kan leveres, ikke venners eller andre medlemmers barn.',
      },
      { title: 'Åpningstider', text: 'Barnepass benyttes på eget ansvar utenom bemannede tider.' },
      { title: 'Besøkstid', text: 'Maksimal tid i barnepassen er 1 time per besøk og totalt 10 timer per uke.' },
      {
        title: 'Antall barn',
        text: 'BPC forbeholder seg retten til å begrense antall barn som kan være tilstede i barnepassen til enhver tid for å sikre sikkerheten.',
      },
      {
        title: 'Tilvenning',
        text: 'Barn kan trenge tid til tilvenning, og det forventes at foresatte setter av tid til dette.',
      },
    ],
  },
  {
    title: 'Foresattes ansvar',
    icon: ShieldCheck,
    rules: [
      { title: 'Inn- og utsjekk', text: 'Foresatte er ansvarlige for å sjekke inn og hente barna sine.' },
      {
        title: 'Opphold på BPC',
        text: 'Foresatte skal oppholde seg i BPCs lokaler hele tiden barnet er i barnepassen. Foresatte er hovedansvarlige for sine barn under oppholdet.',
      },
      {
        title: 'Sovende barn',
        text: 'Dersom et barn ankommer sovende i barnevogn, er foresatte ansvarlige for at vognen og barnet er sikret, innenfor et anvist område.',
      },
      {
        title: 'Opphold i barnepassen',
        text: 'Barna skal kun oppholde seg i barnepassen. Barna har ikke tilgang til treningsområdene eller garderobene med mindre det er avtalt.',
      },
      {
        title: 'Bleieskift',
        text: 'Ansatte i barnepassen skifter ikke bleier. Ved behov vil foresatte bli kontaktet. Bleieskift gjøres på toalett med fasiliteter for dette.',
      },
    ],
  },
  {
    title: 'Helse og hygiene',
    icon: HeartPulse,
    rules: [
      { title: 'Hygiene', text: 'Ved ankomst skal barn vaske hendene eller bruke tilgjengelig antibakteriell spray.' },
      {
        title: 'Syke barn',
        text: 'Kun friske barn uten smittsomme sykdommer kan besøke barnepassen. Barn skal ha vært symptomfrie i minst to dager før de besøker barnepassen.',
      },
      {
        title: 'Mat og drikke',
        text: 'Mat og drikke er ikke tillatt i barnepassen. Unntak gjelder for morsmelkerstatning, vann og velling.',
      },
      {
        title: 'Allergier og parfyme',
        text: 'Barna kan komme i kontakt med parfymerte produkter. Ansatte i barnepassen bruker ikke parfyme, men annet BPC-personale kan være midlertidig til stede og ikke underlagt samme restriksjoner.',
      },
    ],
  },
  {
    title: 'Klær og eiendeler',
    icon: Shirt,
    rules: [
      {
        title: 'Påkledning',
        text: 'Barn skal ikke bære smykker, klær med snører eller bruke utesko i barnepassen. Det anbefales at barna bruker sklisikre sokker eller innesko.',
      },
      {
        title: 'Personlige eiendeler',
        text: 'Leketøy, klær eller andre gjenstander er ikke tillatt, unntatt kosekluter eller kosedyr. BPC er ikke ansvarlig for gjenstander som tas med.',
      },
      { title: 'Barnevogner', text: 'BPC er ikke ansvarlig for verdisaker i barnevognen.' },
      { title: 'Film og underholdning', text: 'Det kan vises barnefilmer i barnepassen.' },
    ],
  },
]

export function KidsRules() {
  return (
    <section aria-labelledby="kids-regler" className="border-t border-border py-10 md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6">
        <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between" data-reveal>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Sikkerhet og trivsel</p>
            <h2 id="kids-regler" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Regler for barnepasset
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Det viktigste først. Trykk på en regel for å lese hele teksten.
          </p>
        </header>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary/40 bg-primary/30 lg:grid-cols-4">
          {keyFacts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 bg-card p-4">
              <dt className="order-2 text-xs leading-relaxed text-muted-foreground">{fact.label}</dt>
              <dd className="order-1 text-lg font-semibold text-primary md:text-xl">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => {
            const Icon = group.icon
            return (
              <section
                key={group.title}
                aria-label={group.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 transition-colors duration-300 hover:border-primary/50"
              >
                <h3 className="flex items-center gap-2 font-semibold">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {group.title}
                </h3>
                <ul className="flex flex-col">
                  {group.rules.map((rule) => (
                    <li key={rule.title} className="border-t border-border first:border-t-0">
                      <details className="group/rule">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md py-2.5 text-sm font-medium transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                          {rule.title}
                          <ChevronDown
                            className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open/rule:rotate-180 group-open/rule:text-primary"
                            aria-hidden="true"
                          />
                        </summary>
                        <p className="pb-3 text-sm leading-relaxed text-muted-foreground">{rule.text}</p>
                      </details>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
