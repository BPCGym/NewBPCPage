import type { Metadata } from 'next'
import { CtaLink } from '@/components/cta-link'
import { FullBleedHero } from '@/components/full-bleed-hero'
import { IceBathComing } from '@/components/ice-bath-coming'
import { PageIntro } from '@/components/page-intro'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WellnessRules } from '@/components/wellness-rules'
import { links, mailto, wellness } from '@/lib/site'

export const metadata: Metadata = {
  title: 'BPC Velvære',
  description:
    'BPC Velvære: badstue som tillegg til et aktivt medlemskap. Premium isbad kommer i 2027. Se tilgang og praktiske regler.',
}

const formatPrice = (price: number) => `${price.toLocaleString('nb-NO')} kr`

export default function WellnessPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <FullBleedHero
          id="velvaere-hero-title"
          eyebrow="BPC Velvære"
          title="En roligere del av BPC."
          text="Badstue rett etter økta. Ta en pause fra tempoet og la kroppen hente seg inn."
          image={{
            src: '/images/velvaere-hero.jpg',
            alt: 'Badstuen hos BPC med varmt lys i trebenkene og glassdør',
          }}
        />

        <PageIntro
          belowHero
          id="velvaere-title"
          eyebrow="Badstuefellesskapet"
          title="Varme, latter og gode samtaler."
          text="Badstuen er der treningen roer seg ned og praten kommer i gang. Her møtes medlemmer på tvers av alder og treningsnivå – noen for stillheten, andre for selskapet. Vi tar vare på hverandre, prater lavt og respekterer tiden, så alle får den samme gode opplevelsen."
          image={{
            src: '/images/bpc-badstue-community.jpg',
            alt: 'Fire medlemmer ler og slapper av sammen i badstuen hos BPC under varmt, gyllent lys',
          }}
        />

        <WellnessRules />

        <IceBathComing />

        <section aria-labelledby="tilgang-title" className="border-t border-border bg-card py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col items-start gap-5">
              <h2 id="tilgang-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Tilgang og pris
              </h2>
              <p className="max-w-lg leading-relaxed text-muted-foreground">
                BPC Velvære kan kjøpes som eget medlemskap med tilgang til badstue og velværerom.
              </p>
              <div className="flex flex-col items-start gap-2 pt-2">
                <div className="flex flex-wrap gap-3">
                  <CtaLink href={links.myPage}>Åpne Min side</CtaLink>
                  <CtaLink href={mailto('Velvære hos BPC')} variant="outline">
                    Spør oss om velvære
                  </CtaLink>
                </div>
                <p className="text-sm text-muted-foreground">
                  Min side er innlogging til medlemssystemet, ikke en kjøpslenke.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <article className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold">Velvære 12 mnd</h3>
                  <p className="text-2xl font-semibold tracking-tight">{formatPrice(wellness.membershipPrice)}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {`Per måned, eget medlemskap med 12 måneders binding. Student: ${formatPrice(wellness.membershipStudentPrice)}.`}
                </p>
              </article>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {'Har du allerede egentrening eller gruppetrening? Velvære og håndkleavtale finner du under '}
                <a href="/medlemskap#tillegg" className="font-medium text-primary underline-offset-4 hover:underline">
                  Tilleggsprodukter
                </a>
                .
              </p>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
