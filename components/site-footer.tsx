import Link from 'next/link'
import { BpcLogo } from '@/components/bpc-logo'
import { SmartLink } from '@/components/smart-link'
import { withdrawalFormHref } from '@/components/terms-strip'
import { company, links, mainNav, secondaryNav } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:gap-20">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <BpcLogo className="size-12" />
            <p className="text-lg font-bold tracking-tight">{company.brand}</p>
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
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{`© ${new Date().getFullYear()} ${company.legalName}`}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/vilkar#medlemsvilkar" className="hover:text-foreground">
                Medlemsvilkår
              </Link>
            </li>
            <li>
              <Link href="/vilkar#personvern" className="hover:text-foreground">
                Personvern
              </Link>
            </li>
            <li>
              <a href={withdrawalFormHref} download className="hover:text-foreground">
                Angrerettskjema
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
