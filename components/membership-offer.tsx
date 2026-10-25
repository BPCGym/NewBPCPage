import { CampaignTerms } from '@/components/campaign-terms'
import { CtaLink } from '@/components/cta-link'
import { campaign } from '@/lib/site'

export function MembershipOffer() {
  if (!campaign.enabled) {
    return (
      <section aria-labelledby="tilbud-title" className="border-b border-border py-20 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6">
          <h2 id="tilbud-title" className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Finn medlemskapet som passer deg.
          </h2>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Se alternativene og velg hvordan du vil trene hos BPC.
          </p>
          <CtaLink href="/medlemskap" arrow>
            Se medlemskap
          </CtaLink>
        </div>
      </section>
    )
  }

  return (
    <section aria-labelledby="tilbud-title" className="border-b border-border py-20 md:py-28">
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
