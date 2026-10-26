import type { Metadata } from 'next'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TermsDocument } from '@/components/terms-document'
import { withdrawalFormHref } from '@/components/terms-strip'
import { membershipTerms, privacyPolicy } from '@/lib/terms'
import { company, links } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Vilkår og personvern',
  description: `Medlemsvilkår, personvernerklæring og angrerettskjema for ${company.brand}.`,
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-32 md:pt-40">
        <div className="mx-auto flex max-w-3xl flex-col gap-16 px-6">
          <header className="flex flex-col gap-4">
            <p className="text-sm font-medium text-primary">Vilkår og dokumenter</p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">Det med liten skrift.</h1>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Her finner du medlemsvilkårene og personvernerklæringen vår, og angrerettskjemaet kan du laste ned. Lurer du på noe?
              Send oss en e-post på{' '}
              <a href={links.email} className="text-foreground underline underline-offset-4 hover:text-primary">
                {company.emailDisplay}
              </a>
              .
            </p>
            <nav aria-label="Innhold" className="flex flex-wrap gap-3 pt-2 text-sm">
              <Link href="#medlemsvilkar" className="rounded-full border border-border px-4 py-2 transition-colors hover:border-primary">
                Medlemsvilkår
              </Link>
              <Link href="#personvern" className="rounded-full border border-border px-4 py-2 transition-colors hover:border-primary">
                Personvern
              </Link>
              <Link href="#angrerett-skjema" className="rounded-full border border-border px-4 py-2 transition-colors hover:border-primary">
                Angrerettskjema
              </Link>
            </nav>
          </header>

          <TermsDocument doc={membershipTerms} />

          <section
            id="angrerett-skjema"
            aria-labelledby="angrerett-skjema-title"
            className="flex scroll-mt-28 flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8"
          >
            <div className="flex flex-col gap-2">
              <h2 id="angrerett-skjema-title" className="text-xl font-semibold tracking-tight">
                Angrerettskjema
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Vil du gå fra avtalen innen 14 dager? Last ned skjemaet, fyll det ut og send det til {company.emailDisplay}.
              </p>
            </div>
            <a
              href={withdrawalFormHref}
              download
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download aria-hidden="true" className="size-4" />
              Last ned PDF
            </a>
          </section>

          <TermsDocument doc={privacyPolicy} />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
