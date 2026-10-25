import type { Metadata } from 'next'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakt BPC Gym i Lyderhornsveien 287, Loddefjord. Se adresse, treningstider og bemannet resepsjon.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Contact asPage />
      </main>
      <SiteFooter />
    </>
  )
}
