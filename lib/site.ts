// Single source of truth for facts, prices and links. Change values here only.
// Sources and approval status are tracked in LANSERINGSSJEKK.md.

export const links = {
  signup: 'https://bergenperformancecenter.sics.no/Registration/Location',
  myPage: 'https://bergenperformancecenter.sics.no/Auth/Login',
  boxen: '/boxen',
  phone: 'tel:+4755125555',
  email: 'mailto:post@bpcgym.no',
  map: 'https://maps.app.goo.gl/NXt2auQbw4nomN3k9',
} as const

export function mailto(subject: string) {
  return `${links.email}?subject=${encodeURIComponent(subject)}`
}

export const company = {
  brand: 'BPC Gym',
  legalName: 'Bergen Performance Center AS',
  orgNumber: '912 202 305',
  street: 'Lyderhornsveien 287',
  postal: '5171 Loddefjord',
  phoneDisplay: '55 12 55 55',
  emailDisplay: 'post@bpcgym.no',
} as const

export const trainingHours = {
  label: 'Alle dager',
  hours: '04:00–23:00',
} as const

export const staffedHours = [
  { day: 'Mandag–fredag', hours: '09:00–14:00 og 16:00–21:00' },
  { day: 'Lørdag', hours: '10:00–14:00' },
  { day: 'Søndag', hours: '12:00–16:00' },
] as const

// Fixed weekly group timetable for BPC Boxen (autumn 2026). Instructors rotate and are not published.
export const groupSchedule = [
  {
    day: 'Mandag',
    classes: [
      { time: '10:00–11:00', name: 'CrossFit / WOD' },
      { time: '17:00–18:00', name: 'HYROX' },
      { time: '18:00–19:00', name: 'CrossFit / WOD' },
    ],
  },
  {
    day: 'Tirsdag',
    classes: [
      { time: '10:00–11:00', name: 'Interval WOD' },
      { time: '18:00–19:00', name: 'Interval WOD' },
      { time: '19:00–20:00', name: 'Hybrid WOD' },
    ],
  },
  {
    day: 'Onsdag',
    classes: [
      { time: '10:00–11:00', name: 'CrossFit / WOD' },
      { time: '17:00–18:00', name: 'HYROX' },
      { time: '18:00–19:00', name: 'CrossFit / WOD' },
    ],
  },
  {
    day: 'Torsdag',
    classes: [
      { time: '06:30–07:30', name: 'HYROX' },
      { time: '10:00–11:00', name: 'HYROX' },
      { time: '18:00–19:00', name: 'CrossFit / WOD' },
    ],
  },
  {
    day: 'Fredag',
    classes: [
      { time: '10:00–11:00', name: 'CrossFit / WOD' },
      { time: '17:00–18:00', name: 'CrossFit / WOD' },
    ],
  },
  {
    day: 'Lørdag',
    classes: [
      { time: '09:00–10:00', name: 'CrossFit / WOD' },
      { time: '10:00–11:00', name: 'CrossFit / WOD' },
    ],
  },
  { day: 'Søndag', classes: [] },
] as const

// Set `enabled` to false to hide the campaign everywhere on the site.
export const campaign = {
  enabled: false,
  product: 'Egentrening',
  introPrice: 99,
  monthlyPrice: 749,
  bindingMonths: 12,
  signupFee: 0,
} as const

// Prices shown on /medlemskap. Each tab holds one or more boxes (groups) of plans.
// color: egen = blue, gruppe = green, korttidEgen = yellow, korttidGruppe = red, velvaere = neutral.
export type PlanColor = 'egen' | 'gruppe' | 'korttidEgen' | 'korttidGruppe' | 'velvaere'

export type PlanGroup = {
  title: string
  note: string
  color: PlanColor
  period: string
  featured?: boolean
  plans: readonly { name: string; price: number; note?: string }[]
}

export const membershipTip = {
  lead: 'Usikker?',
  text: 'Start med et løpende medlemskap. Trives du, bytter du til 12 måneder og får lavere pris. Det gjør mange.',
}

export const membershipCategories: readonly {
  id: string
  label: string
  color: PlanColor
  intro: string
  groups: readonly PlanGroup[]
}[] = [
  {
    id: 'egentrening',
    label: 'Egentrening',
    color: 'egen',
    intro: 'Tren i BPC Gym når det passer deg, alle dager 04–23.',
    groups: [
      {
        title: '12 måneder',
        note: '12 måneders bindingstid. Lavest pris per måned.',
        color: 'egen',
        period: 'Pr måned',
        featured: true,
        plans: [
          { name: 'Egentrening 12 mnd', price: 749 },
          { name: 'Egentrening 12 mnd Student/Offshore', price: 649, note: 'Krever gyldig dokumentasjon.' },
        ],
      },
      {
        title: 'Løpende',
        note: 'Ingen bindingstid. 1 måneds oppsigelsestid.',
        color: 'egen',
        period: 'Pr måned',
        plans: [
          { name: 'Egentrening 1 mnd Løpende', price: 849 },
          { name: 'Egentrening 1 mnd Løpende Student', price: 749, note: 'Krever gyldig dokumentasjon.' },
        ],
      },
      {
        title: 'Korttid',
        note: 'Engangsbetaling for perioden. Ingen binding.',
        color: 'korttidEgen',
        period: 'Pr periode',
        plans: [
          { name: 'Egentrening 3 dager', price: 449 },
          { name: 'Egentrening 7 dager', price: 549 },
          { name: 'Egentrening 30 dager', price: 899 },
        ],
      },
    ],
  },
  {
    id: 'gruppetrening',
    label: 'Gruppetrening',
    color: 'gruppe',
    intro: 'Gruppetimene i BPC Boxen, med fast ukentlig timeplan.',
    groups: [
      {
        title: '12 måneder',
        note: '12 måneders bindingstid. Lavest pris per måned.',
        color: 'gruppe',
        period: 'Pr måned',
        featured: true,
        plans: [
          { name: 'Gruppetrening 12 mnd', price: 1249 },
          { name: 'Gruppetrening 12 mnd Student/Offshore', price: 1049, note: 'Krever gyldig dokumentasjon.' },
        ],
      },
      {
        title: 'Løpende',
        note: 'Ingen bindingstid. 1 måneds oppsigelsestid.',
        color: 'gruppe',
        period: 'Pr måned',
        plans: [
          { name: 'Gruppetrening 1 mnd Løpende', price: 1349 },
          { name: 'Gruppetrening 1 mnd Løpende Student', price: 1149, note: 'Krever gyldig dokumentasjon.' },
        ],
      },
      {
        title: 'Korttid',
        note: 'Engangsbetaling for perioden. Ingen binding.',
        color: 'korttidGruppe',
        period: 'Pr periode',
        plans: [
          { name: 'Gruppetrening 3 dager', price: 599 },
          { name: 'Gruppetrening 7 dager', price: 799 },
          { name: 'Gruppetrening 30 dager', price: 1349 },
        ],
      },
    ],
  },
  {
    id: 'velvaere',
    label: 'Velvære',
    color: 'velvaere',
    intro: 'Badstue og velværerom som tillegg til medlemskapet ditt.',
    groups: [
      {
        title: 'Tillegg',
        note: 'Legges til et aktivt medlemskap. Ingen bindingstid.',
        color: 'velvaere',
        period: 'Pr måned',
        plans: [
          { name: 'BPC Velvære', price: 299, note: 'Fri tilgang til badstue og velværerom.' },
          { name: 'Håndkleservice', price: 149, note: 'Rent håndkle hver gang du trener.' },
        ],
      },
    ],
  },
]

// Drop-in is sold only in the app Min Trening, never on the website.
export const dropIns = [
  { name: 'Egentrening', price: 200, note: 'Én økt i BPC Gym.' },
  { name: 'Egentrening + Sauna', price: 350, note: 'Én økt i BPC Gym, med badstue etterpå.' },
  { name: 'Gruppetrening', price: 250, note: 'Én gruppetime i BPC Boxen.' },
  { name: 'Sauna', price: 200, note: 'Ett besøk i badstuen.' },
] as const

export const equipmentBrands = [
  { name: 'Woodway', logo: '/images/brands/woodway.png' },
  { name: 'Atlantis Strength', logo: '/images/brands/atlantis.png' },
  { name: 'Arsenal Strength', logo: '/images/brands/arsenal-strength.png' },
  { name: 'Rogue Fitness', logo: '/images/brands/rogue.png' },
  { name: 'Eleiko', logo: '/images/brands/eleiko.png' },
  { name: 'Concept2', logo: '/images/brands/concept2.png' },
  { name: 'Nautilus', logo: '/images/brands/nautilus.png' },
  { name: 'American Barbell', logo: '/images/brands/american-barbell.png' },
  { name: 'Legend Fitness', logo: '/images/brands/legend-fitness.png' },
  { name: 'Booty Builder', logo: '/images/brands/booty-builder.png' },
  { name: 'Raiko Sport', logo: '/images/brands/raiko-sport.png' },
] as const

// Published add-on prices from bpcgym.no/velvære. Must be approved before launch.
export const wellness = {
  monthlyPrice: 299,
  towelMonthlyPrice: 149,
  rules: [
    { title: 'Eget badetøy', text: 'Ikke treningstøy eller boxer. Badeshorts kan kjøpes i resepsjonen i bemannet tid.' },
  { title: 'Ro og respekt', text: 'Snakk lavt. Andre er her for å koble av.' },
  { title: 'Ingen saltskrubb eller olje', text: 'Ikke tillatt av hygieniske årsaker.' },
  { title: 'Ta vare på rommet', text: 'Bråk og misbruk gir permanent utestengelse.' },
  { title: 'Kjenn dine grenser', text: 'Bruk på eget ansvar. Føler du deg uvel, gå ut og ring 55 12 55 55.' },
  ],
  saunaTimer: {
    title: 'Aldri tidsinnstill badstuen',
    text: 'Badstuen slår seg av etter 30 minutter. Vil du fortsette, går du ut og slår den på igjen. Ikke still inn timeren så den står på lenger. En badstue som står på i timevis uten folk koster oss mye, og dette slår vi hardt ned på.',
  },
  consequence: 'Brudd på reglene gir umiddelbar og permanent utestengelse.',
} as const

// Draft house rules adapted for BPC. Must be approved before launch.
export const gymRules = {
  items: [
    {
      title: 'Respekter andre',
      text: 'Ikke film eller fotografer andre uten samtykke, og gi folk rundt deg god plass.',
    },
    {
      title: 'Rydd etter deg',
      text: 'Sett vekter, manualer og skiver tilbake der du fant dem. Ikke slipp eller kast utstyret.',
    },
    {
      title: 'Del utstyret',
      text: 'Ikke legg beslag på apparater mens du hviler lenge. Spør gjerne om å bytte på sett.',
    },
    {
      title: 'Hold det hygienisk',
      text: 'Ta med håndkle, legg det på benker og apparater, og tørk av svetten når du er ferdig.',
    },
    {
      title: 'Tren med overdel',
      text: 'Bar overkropp er ikke tillatt på apparater og benker. Bruk treningstøy og innesko.',
    },
    {
      title: 'La egoet ligge i garderoben',
      text: 'Alle er velkomne her, uansett nivå. Vær hjelpsom og ta hensyn.',
    },
    {
      title: 'Innhold og filming',
      text: 'Filming er lov, men unngå stativ og innspilling i travle perioder. Kommersiell filming avtales på forhånd.',
    },
    {
      title: 'Eksterne trenere',
      text: 'Det er bare BPCs egne PT-er som kan drive personlig trening i lokalene.',
    },
    {
      title: 'Ingen røyk, vape eller dyr',
      text: 'Det gjelder hele senteret, også garderobene.',
    },
  ],
  footnote:
    'Reglene skal gi en trygg og hyggelig treningshverdag for alle. Brudd kan føre til at medlemskapet avsluttes.',
} as const

export type TeamMember = {
  name: string
  role?: string
  bio?: string
  image?: string
  }
  
export type TeamGroup = {
  id: string
  title: string
  members: TeamMember[]
}

// Roles and bios are left empty until approved by BPC. Portraits live in /public/images/team/.
export const teamGroups: TeamGroup[] = [
  {
    id: 'founders',
    title: 'Founders',
    members: [
      { name: 'Tommy Svanevik', image: '/images/team/tommy-svanevik.jpg' },
      { name: 'André Svanevik', image: '/images/team/andre-svanevik.jpg' },
      { name: 'Morten Svanevik', image: '/images/team/morten-svanevik.jpg' },
      { name: 'Suzanne Svanevik', image: '/images/team/suzanne-svanevik.jpg' },
    ],
  },
  {
    id: 'resepsjonister',
    title: 'Resepsjonister',
    members: [
      { name: 'Marius Fløtre', image: '/images/team/marius-flotre.jpg' },
      { name: 'Gustav Fløtre', image: '/images/team/gustav-flotre.jpg' },
      { name: 'Oliver B. Svanevik', image: '/images/team/oliver-svanevik.jpg' },
      { name: 'Anne Svanevik', image: '/images/team/anne-svanevik.jpg' },
      { name: 'Evelyn Birkeland', image: '/images/team/evelyn-birkeland.jpg' },
    ],
  },
  {
    id: 'trenere',
    title: 'Trenere',
    members: [
      { name: 'Malin Vågenes', image: '/images/team/malin-vagenes.jpg' },
      { name: 'Vilde Hartviksen', image: '/images/team/vilde-hartviksen.jpg' },
      { name: 'Helene Mikkelsen', image: '/images/team/helene-mikkelsen.jpg' },
      { name: 'Sabina Sæthre', image: '/images/team/sabina-saethre.jpg' },
      { name: 'Jørgen Ruus', image: '/images/team/jorgen-ruus.jpg' },
      { name: 'Camilla Carlsen', image: '/images/team/camilla-carlsen.jpg' },
      { name: 'Veronica Essajee', image: '/images/team/veronica-essajee.jpg' },
      { name: 'Kaja Stapnes', image: '/images/team/kaja-stapnes.jpg' },
    ],
  },
  {
    id: 'barnepassere',
    title: 'Barnepassere',
    members: [
      { name: 'Berith Davik', image: '/images/team/berith-davik.jpg' },
      { name: 'Emilie Totland', image: '/images/team/emilie-totland.jpg' },
      { name: 'Isabelle Andersen', image: '/images/team/isabelle-andersen.jpg' },
    ],
  },
]

export const team: TeamMember[] = teamGroups.flatMap((group) => group.members)

export const mainNav = [
  { href: '/gymmet', label: 'BPC Gym' },
  { href: '/velvaere', label: 'BPC Velvære' },
  { href: links.boxen, label: 'BPC Boxen' },
  { href: '/barnepass', label: 'BPC Kids' },
  { href: '/medlemskap', label: 'Medlemskap' },
  { href: '/medlemskap?kategori=drop-in', label: 'Drop-in' },
] as const

export const secondaryNav = [
  { href: '/om-oss', label: 'Om oss' },
  { href: '/pt', label: 'PT' },
  { href: '/provetime', label: 'Prøvetime' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: links.myPage, label: 'Min side' },
] as const
