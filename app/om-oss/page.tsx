import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaLink } from '@/components/cta-link'
import { HelpStrip } from '@/components/help-strip'
import { FullBleedHero } from '@/components/full-bleed-hero'
import { GymRules } from '@/components/gym-rules'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TeamGrid } from '@/components/team-grid'
import { VisionSection } from '@/components/vision-section'
import { company } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Om oss',
  description: 'Bli kjent med BPC Gym i Loddefjord – treningssenteret til Bergen Performance Center AS siden 2014.',
}

const areas = [
  { href: '/gymmet', name: 'BPC Gym', text: 'Egentrening med styrke, kondisjon og funksjonell sone.' },
  { href: '/velvaere', name: 'BPC Velvære', text: 'Badstue og rolige stunder etter treningen.' },
  { href: '/boxen', name: 'BPC Boxen', text: 'Gruppetrening med CrossFit, HYROX og WOD.' },
  { href: '/barnepass', name: 'BPC Kids', text: 'Et eget rom for barna mens du trener.' },
] as const

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <FullBleedHero
          id="om-oss-title"
          eyebrow="Om oss"
          title="Et treningssenter i Loddefjord siden 2014."
          text={`${company.brand} er et familieeiet kvalitetsgym, etablert, drevet og utviklet siden 2014. Vi har samlet Egentrening, Velvære, Gruppetrening og Barnepass under samme tak i ${company.street}.`}
          image={{
            src: '/images/om-oss-hero.jpg',
            alt: 'Inngangen hos BPC med blålyst vegg, vindu inn til badstuen, skilt til garderober, gym, gruppetrening, yoga og BPC Kids',
          }}
        >
          <CtaLink href="/medlemskap" arrow>
            Se medlemskap
          </CtaLink>
          <CtaLink href="/kontakt" variant="outline">
            Kontakt oss
          </CtaLink>
        </FullBleedHero>

        <GymRules />

        <section aria-labelledby="omrader-title" className="border-t border-border py-16 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
            <h2 id="omrader-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Fire områder under samme tak.
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {areas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
                  >
                    <span className="text-lg font-semibold">{area.name}</span>
                    <span className="text-pretty leading-relaxed text-muted-foreground">{area.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <VisionSection />
        <TeamGrid />
        <HelpStrip />
      </main>
      <SiteFooter />
    </>
  )
}
