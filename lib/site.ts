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
  'Woodway',
  'Atlantis Strength',
  'Arsenal Strength',
  'Prime Fitness',
  'Rogue Fitness',
  'Eleiko',
  'Concept2',
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
  role: string
  bio: string
  image?: string
}

// Add approved staff profiles here. Put portraits in /public/images/team/. The page shows a contact card while empty.
export const team: TeamMember[] = []

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
