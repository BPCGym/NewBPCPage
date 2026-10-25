import { campaign } from '@/lib/site'
import { cn } from '@/lib/utils'

export function CampaignTerms({ className }: { className?: string }) {
  const rows = [
    { term: 'Første måned', value: `${campaign.introPrice} kr` },
    { term: 'Deretter', value: `${campaign.monthlyPrice} kr per måned` },
    { term: 'Avtaletid', value: `${campaign.bindingMonths} måneder, løper videre etterpå` },
    { term: 'Innmeldingsgebyr', value: `${campaign.signupFee} kr` },
  ]

  return (
    <div className={cn('flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 md:p-8', className)}>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-primary">{campaign.product}</p>
        <p className="flex items-baseline gap-2">
          <span className="text-6xl font-semibold tracking-tight">{campaign.introPrice}</span>
          <span className="text-lg text-muted-foreground">kr første måned</span>
        </p>
      </div>
      <dl className="flex flex-col divide-y divide-border border-y border-border">
        {rows.map((row) => (
          <div key={row.term} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-6">
            <dt className="text-sm text-muted-foreground">{row.term}</dt>
            <dd className="text-sm font-medium sm:text-right">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Tilbudet gjelder egentrening. Velvære og gruppetimer i BPC Boxen er ikke inkludert.
      </p>
    </div>
  )
}
