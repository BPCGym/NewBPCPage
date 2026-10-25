// Single source of truth for facts, prices and links. Change values here only.
// Sources and approval status are tracked in LANSERINGSSJEKK.md.

export const links = {
  signup: 'https://bergenperformancecenter.sics.no/Registration/Subscription',
  myPage: 'https://bergenperformancecenter.sics.no/Auth/Login',
  boxen: 'https://www.bpcboxen.no',
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
  { day: 'Lørdag', hours: '09:00–14:00' },
  { day: 'Søndag', hours: '12:00–15:00' },
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

export const equipmentBrands = [
  'Woodway',
  'Atlantis Strength',
  'Arsenal Strength',
  'Prime Fitness',
  'Rogue Fitness',
  'Eleiko',
  'Concept2',
] as const

export const mainNav = [
  { href: '/#gymmet', label: 'Gymmet' },
  { href: '/#velvaere', label: 'Velvære' },
  { href: '/medlemskap', label: 'Medlemskap' },
  { href: links.boxen, label: 'Gruppetimer / BPC Boxen' },
] as const

export const secondaryNav = [
  { href: '/#hverdagen', label: 'Barnepass' },
  { href: '/#hverdagen', label: 'PT' },
  { href: '/#prov-bpc', label: 'Prøvetime / Drop-in' },
  { href: '/#kontakt', label: 'Kontakt' },
  { href: links.myPage, label: 'Min side' },
] as const
