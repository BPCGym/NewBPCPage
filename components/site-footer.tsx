import Image from 'next/image'
import { SmartLink } from '@/components/smart-link'
import { company, links, mainNav, secondaryNav } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="flex flex-col gap-3 md:col-span-2">
          <div className="flex items-center gap-4">
            <Image src="/images/bpc-logo.png" alt="" width={64} height={64} className="size-16" />
            <p className="text-xl font-bold tracking-tight">{company.brand}</p>
          </div>
          <address className="flex flex-col gap-1 text-sm not-italic leading-relaxed text-muted-foreground">
            <span>{company.legalName}</span>
            <span>{`${company.street}, ${company.postal}`}</span>
            <a href={links.phone} className="hover:text-foreground">
              {`Telefon ${company.phoneDisplay}`}
            </a>
            <a href={links.email} className="hover:text-foreground">
              {company.emailDisplay}
            </a>
            <span>{`Org.nr. ${company.orgNumber}`}</span>
          </address>
        </div>
        <nav aria-label="Bunntekst – hovedsider">
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            {mainNav.map((item) => (
              <li key={item.label}>
                <SmartLink href={item.href} className="hover:text-foreground">
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Bunntekst – snarveier">
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            {secondaryNav.map((item) => (
              <li key={item.label}>
                <SmartLink href={item.href} className="hover:text-foreground">
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} ${company.legalName}`}
        </p>
      </div>
    </footer>
  )
}
