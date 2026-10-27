import { ArrowRight, Mail } from 'lucide-react'
import { SmartLink } from '@/components/smart-link'
import { company, links } from '@/lib/site'

export function HelpStrip({ title = 'Send oss en e-post' }: { title?: string }) {
  return (
    <section aria-labelledby="hjelp-title" className="border-t border-border bg-card py-10 md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Vi svarer raskt
          </p>
          <h2 id="hjelp-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            E-post er den beste veien til oss. Skriv kort hva du lurer på, så får du svar raskt. I bemannet tid kan
            du også spørre i resepsjonen.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href={links.email}
            className="group flex items-center gap-4 rounded-2xl border border-primary/50 bg-primary/10 p-3 pr-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/15 hover:shadow-[0_10px_40px_-10px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Skriv til oss</span>
              <span className="text-lg font-semibold md:text-xl">{company.emailDisplay}</span>
            </span>
            <ArrowRight
              className="ml-2 size-5 text-primary transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <SmartLink href="/kontakt" className="text-sm text-primary underline-offset-4 hover:underline">
            Se åpnings- og bemanningstider
          </SmartLink>
        </div>
      </div>
    </section>
  )
}
