// Single source of truth for facts, prices and links. Change values here only.
// Sources and approval status are tracked in LANSERINGSSJEKK.md.

export const links = {
  signup: 'https://bergenperformancecenter.sics.no/Registration/Subscription',
  myPage: 'https://bergenperformancecenter.sics.no/Auth/Login',
  boxen: '/boxen',
  phone: 'tel:+4793882777',
  email: 'mailto:post@bpcgym.no',
  map: 'https://www.google.com/maps/search/?api=1&query=Lyderhornsveien+287%2C+5171+Loddefjord',
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
  phoneDisplay: '93 88 27 77',
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
  enabled: true,
  product: 'Egentrening',
  introPrice: 99,
  monthlyPrice: 749,
  bindingMonths: 12,
  signupFee: 0,
} as const

export const memberships = [
  {
    name: 'Egentrening 12 mnd',
    monthlyPrice: 749,
    bindingMonths: 12,
    note: 'Full tilgang til egentrening i BPC Gym.',
  },
  {
    name: 'Egentrening 12 mnd Student/Offshore',
    monthlyPrice: 649,
    bindingMonths: 12,
    note: 'For studenter og offshoreansatte. Gyldig dokumentasjon må alltid vises. Studentmedlemskap kontrolleres løpende, slik at studentrabatten bare gjelder studenter.',
  },
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
    'Bruk badetøy.',
    'Dusj før du går inn.',
    'Legg et håndkle på benken.',
    'Ta hensyn til andre som vil ha en rolig stund.',
  ],
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
] as const

export const secondaryNav = [
  { href: '/om-oss', label: 'Om oss' },
  { href: '/pt', label: 'PT' },
  { href: '/provetime', label: 'Prøvetime / Drop-in' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: links.myPage, label: 'Min side' },
] as const
