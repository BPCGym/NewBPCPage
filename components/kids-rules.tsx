const rules = [
  {
    title: 'Aldersgruppe og medlemskap',
    text: 'Barnepass tilbys BPC-medlemmers barn i alderen 6 uker til og med 12 år. Kun egne barn kan leveres, ikke venners eller andre medlemmers barn.',
  },
  { title: 'Åpningstider', text: 'Barnepass benyttes på eget ansvar utenom bemannede tider.' },
  {
    title: 'Hygiene',
    text: 'Ved ankomst skal barn vaske hendene eller bruke tilgjengelig antibakteriell spray.',
  },
  { title: 'Inn- og utsjekk', text: 'Foresatte er ansvarlige for å sjekke inn og hente barna sine.' },
  {
    title: 'Sovende barn',
    text: 'Dersom et barn ankommer sovende i barnevogn, er foresatte ansvarlige for at vognen og barnet er sikret, innenfor et anvist område.',
  },
  {
    title: 'Besøkstid',
    text: 'Maksimal tid i barnepassen er 1,5 timer per besøk og totalt 10 timer per uke.',
  },
  {
    title: 'Antall barn',
    text: 'BPC forbeholder seg retten til å begrense antall barn som kan være tilstede i barnepassen til enhver tid for å sikre sikkerheten.',
  },
  {
    title: 'Opphold i barnepassen',
    text: 'Barna skal kun oppholde seg i barnepassen. Barna har ikke tilgang til treningsområdene eller garderobene med mindre det er avtalt.',
  },
  {
    title: 'Tilvenning',
    text: 'Barn kan trenge tid til tilvenning, og det forventes at foresatte setter av tid til dette.',
  },
  {
    title: 'Opphold på BPC',
    text: 'Foresatte skal oppholde seg i BPCs lokaler hele tiden barnet er i barnepassen. Foresatte er hovedansvarlige for sine barn under oppholdet.',
  },
  {
    title: 'Syke barn',
    text: 'Kun friske barn uten smittsomme sykdommer kan besøke barnepassen. Barn skal ha vært symptomfrie i minst to dager før de besøker barnepassen.',
  },
  {
    title: 'Mat og drikke',
    text: 'Mat og drikke er ikke tillatt i barnepassen. Unntak gjelder for morsmelkerstatning, vann og velling.',
  },
  {
    title: 'Bleieskift',
    text: 'Ansatte i barnepassen skifter ikke bleier. Ved behov vil foresatte bli kontaktet. Bleieskift gjøres på toalett med fasiliteter for dette.',
  },
  {
    title: 'Personlige eiendeler',
    text: 'Leketøy, klær eller andre gjenstander er ikke tillatt, unntatt kosekluter eller kosedyr. BPC er ikke ansvarlig for gjenstander som tas med.',
  },
  { title: 'Barnevogner', text: 'BPC er ikke ansvarlig for verdisaker i barnevognen.' },
  {
    title: 'Påkledning',
    text: 'Barn skal ikke bære smykker, klær med snører eller bruke utesko i barnepassen. Det anbefales at barna bruker sklisikre sokker eller innesko.',
  },
  {
    title: 'Allergier og parfyme',
    text: 'Barna kan komme i kontakt med parfymerte produkter. Ansatte i barnepassen bruker ikke parfyme, men annet BPC-personale kan være midlertidig til stede og ikke underlagt samme restriksjoner.',
  },
  { title: 'Film og underholdning', text: 'Det kan vises barnefilmer i barnepassen.' },
]

export function KidsRules() {
  return (
    <section aria-labelledby="kids-regler" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        <header className="flex max-w-2xl flex-col gap-3" data-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Sikkerhet og trivsel</p>
          <h2 id="kids-regler" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Regler for barnepasset
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            For at besøket i barnepasset skal være trygt og hyggelig for alle, ber vi om at følgende regler
            overholdes.
          </p>
        </header>

        <ol className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule, index) => (
            <li key={rule.title} className="flex gap-4 border-t border-border pt-5">
              <span
                aria-hidden="true"
                className="font-mono text-sm font-semibold tabular-nums text-primary"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold">{rule.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{rule.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
