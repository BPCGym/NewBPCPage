import Image from 'next/image'
import { CampaignTerms } from '@/components/campaign-terms'
import { CtaLink } from '@/components/cta-link'
import { campaign } from '@/lib/site'

function PeoplePhoto() {
  return (
    <figure className="relative mx-auto w-full max-w-sm md:ml-auto md:mr-0">
      <div className="relative aspect-[5/6] overflow-hidden rounded-2xl border border-border shadow-2xl">
        <Image
          src="/images/bpc-team-trio.jpg"
          alt="Tre smilende medlemmer og trenere i BPC-klær står sammen i treningssalen"
          fill
          loading="lazy"
          sizes="(min-width: 768px) 28rem, 100vw"
          className="object-cover object-[center_35%]"
        />
      </div>
      <figcaption className="absolute -bottom-5 left-6 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground shadow-lg">
        Et sted å høre til – i alle aldre
      </figcaption>
    </figure>
  )
}

export function MembershipOffer() {
  if (!campaign.enabled) {
    return (
      <section aria-labelledby="tilbud-title" className="border-b border-border pb-14 pt-8 md:pb-16 md:pt-10">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col items-start gap-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Medlemskap</p>
            <h2 id="tilbud-title" className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Finn medlemskapet som passer deg.
            </h2>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Velg mellom Egentrening og Gruppetrening.
            </p>
            <CtaLink href="/medlemskap" arrow>
              Se medlemskap
            </CtaLink>
          </div>
          <PeoplePhoto />
        </div>
      </section>
    )
  }

  return (
    <section aria-labelledby="tilbud-title" className="border-b border-border py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Medlemskap</p>
          <h2 id="tilbud-title" className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            {`Kom i gang for ${campaign.introPrice} kr den første måneden.`}
          </h2>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            {`Egentrening hos BPC Gym. Deretter ${campaign.monthlyPrice} kr per måned med ${campaign.bindingMonths} måneders avtale.`}
          </p>
          <CtaLink href="/medlemskap" arrow>
            Se medlemskapet
          </CtaLink>
        </div>
        <CampaignTerms />
      </div>
    </section>
  )
}
