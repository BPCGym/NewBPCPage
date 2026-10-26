import { SmartLink } from '@/components/smart-link'
import { company, links } from '@/lib/site'

export function HelpStrip({ title = 'Vil du heller ringe?' }: { title?: string }) {
  return (
    <section aria-labelledby="hjelp-title" className="border-t border-border bg-card py-14 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <h2 id="hjelp-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
          <p className="max-w-lg leading-relaxed text-muted-foreground">
            Ring oss eller send en e-post. I bemannet tid kan du også spørre i resepsjonen.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-lg md:items-end">
          <a href={links.phone} className="font-medium underline-offset-4 hover:underline">
            {company.phoneDisplay}
          </a>
          <a href={links.email} className="font-medium underline-offset-4 hover:underline">
            {company.emailDisplay}
          </a>
          <SmartLink href="/kontakt" className="text-sm text-primary underline-offset-4 hover:underline">
            Se åpnings- og bemanningstider
          </SmartLink>
        </div>
      </div>
    </section>
  )
}
