import { CtaLink } from '@/components/cta-link'
import { SectionHeading } from '@/components/section-heading'
import { company, links, staffedHours, trainingHours } from '@/lib/site'

type ContactProps = {
  asPage?: boolean
}

export function Contact({ asPage = false }: ContactProps) {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-title"
      className={asPage ? 'pb-20 pt-28 md:pb-28 md:pt-36' : 'scroll-mt-28 py-20 md:py-28'}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-6">
          <SectionHeading
            id="kontakt-title"
            as={asPage ? 'h1' : 'h2'}
            eyebrow={asPage ? 'Kontakt' : 'Praktisk informasjon'}
            title={asPage ? 'Vi hjelper deg gjerne.' : 'Velkommen til BPC.'}
          />
          {asPage && (
            <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Lurer du på medlemskap, første besøk eller et av tilbudene våre? Ta kontakt, så finner vi ut av det
              sammen.
            </p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-medium text-muted-foreground">Adresse</h2>
            <address className="flex flex-col text-lg not-italic leading-relaxed">
              <span>{company.street}</span>
              <span>{company.postal}</span>
            </address>
            {asPage && (
              <p className="flex flex-col text-sm leading-relaxed text-muted-foreground">
                <a href={links.phone} className="hover:text-foreground">{`Telefon ${company.phoneDisplay}`}</a>
                <a href={links.email} className="hover:text-foreground">
                  {company.emailDisplay}
                </a>
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-medium text-muted-foreground">Åpent for trening</h2>
            <p className="flex flex-col text-lg leading-relaxed">
              <span>{trainingHours.label}</span>
              <span className="text-3xl font-semibold tracking-tight">{trainingHours.hours}</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-medium text-muted-foreground">Bemannet resepsjon</h2>
            <StaffedHoursList />
            <p className="text-xs leading-relaxed text-muted-foreground">Bemanningen kan avvike på helligdager.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <CtaLink href={links.phone}>{asPage ? 'Ring BPC' : 'Ring oss'}</CtaLink>
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

export function StaffedHoursList() {
  return (
    <dl className="flex flex-col gap-2">
      {staffedHours.map((row) => (
        <div key={row.day} className="flex flex-col">
          <dt className="text-sm text-muted-foreground">{row.day}</dt>
          <dd className="leading-relaxed">{row.hours}</dd>
        </div>
      ))}
    </dl>
  )
}
