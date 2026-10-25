import { CtaLink } from '@/components/cta-link'
import { links } from '@/lib/site'

export function BoxenSection() {
  return (
    <section aria-labelledby="boxen-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 rounded-3xl border border-primary/40 bg-primary/10 p-8 md:flex-row md:items-end md:justify-between md:p-14">
          <div className="flex max-w-2xl flex-col gap-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">BPC Boxen · Gruppetrening</p>
            <h2 id="boxen-title" className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Liker du å trene sammen med andre?
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-foreground/80">
              BPC Boxen er delen av BPC for gruppetrening. Utforsk gruppetimene og finn tilbudet som passer
              deg.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2">
            <CtaLink href={links.boxen} arrow>
              Se gruppetimene i BPC Boxen
            </CtaLink>
            <p className="text-xs text-muted-foreground">Du går videre til bpcboxen.no</p>
          </div>
        </div>
      </div>
    </section>
  )
}
