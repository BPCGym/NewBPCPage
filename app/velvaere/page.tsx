import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaLink } from '@/components/cta-link'
import { PageIntro } from '@/components/page-intro'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { links, mailto, wellness } from '@/lib/site'

export const metadata: Metadata = {
  title: 'BPC Velvære',
  description:
    'BPC Velvære: badstue og isbad som tillegg til et aktivt medlemskap. Se tilgang og praktiske regler.',
}

const addOns = [
  {
    title: 'Velvære',
    price: `${wellness.monthlyPrice} kr`,
    text: 'Per måned, som tillegg til et aktivt medlemskap. Gir tilgang til badstue og isbad.',
  },
  {
    title: 'Håndkleavtale',
    price: `${wellness.towelMonthlyPrice} kr`,
    text: 'Per måned, valgfritt. Ett håndkle per besøk.',
  },
]

export default function WellnessPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          id="velvaere-title"
          eyebrow="BPC Velvære"
          title="En roligere del av BPC."
          text="Ta en pause fra tempoet. Her finner du informasjon om velværetilbudet, tilgang og praktiske regler."
          image={{
            src: '/images/bpc-badstue.jpg',
            alt: 'Badstuen hos BPC med glassvegg, trebenker og varmt lys',
          }}
        />

        <section aria-labelledby="tilgang-title" className="border-t border-border bg-card py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col items-start gap-5">
              <h2 id="tilgang-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Tilgang og pris
              </h2>
              <p className="max-w-lg leading-relaxed text-muted-foreground">
                BPC Velvære er et tillegg og er ikke inkludert i alle medlemskap. Tilleggene administreres i appen og
                fornyes månedlig.
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
            <ul className="flex flex-col gap-4">
              {addOns.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-6"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-2xl font-semibold tracking-tight">{item.price}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="regler-title" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-5 md:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2">
              <Image
                src="/images/bpc-garderobe.jpg"
                alt="Garderoben hos BPC med vasker, speil og døren inn til badstue og iskulp"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 md:col-span-3">
              <h2 id="regler-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Før du går inn
              </h2>
              <ul className="flex flex-col border-t border-border">
                {wellness.rules.map((rule) => (
                  <li key={rule} className="border-b border-border py-4 text-lg leading-relaxed">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
