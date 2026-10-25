import { CtaLink } from '@/components/cta-link'
import { SectionHeading } from '@/components/section-heading'
import { company, links, staffedHours, trainingHours } from '@/lib/site'

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="scroll-mt-28 py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        <SectionHeading id="kontakt-title" eyebrow="Praktisk informasjon" title="Velkommen til BPC." />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Adresse</h3>
            <address className="flex flex-col text-lg not-italic leading-relaxed">
              <span>{company.street}</span>
              <span>{company.postal}</span>
            </address>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Åpent for trening</h3>
            <p className="flex flex-col text-lg leading-relaxed">
              <span>{trainingHours.label}</span>
              <span className="text-3xl font-semibold tracking-tight">{trainingHours.hours}</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Bemannet resepsjon</h3>
            <dl className="flex flex-col gap-2">
              {staffedHours.map((row) => (
                <div key={row.day} className="flex flex-col">
                  <dt className="text-sm text-muted-foreground">{row.day}</dt>
                  <dd className="leading-relaxed">{row.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Bemanningen kan avvike på helligdager.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <CtaLink href={links.phone}>Ring oss</CtaLink>
          <CtaLink href={links.email} variant="outline">
            Send e-post
          </CtaLink>
          <CtaLink href={links.map} variant="outline">
            Finn veien
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
