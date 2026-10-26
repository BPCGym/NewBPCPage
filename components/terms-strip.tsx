import Link from 'next/link'
import { Download, FileText, ShieldCheck } from 'lucide-react'

export const withdrawalFormHref = '/dokumenter/angrerettskjema-bpc.pdf'

export function TermsStrip() {
  return (
    <aside aria-label="Vilkår og dokumenter" className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-muted-foreground">Vilkår og dokumenter</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          <li>
            <Link href="/vilkar#medlemsvilkar" className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <FileText aria-hidden="true" className="size-4" />
              Medlemsvilkår
            </Link>
          </li>
          <li>
            <Link href="/vilkar#personvern" className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <ShieldCheck aria-hidden="true" className="size-4" />
              Personvern
            </Link>
          </li>
          <li>
            <a
              href={withdrawalFormHref}
              download
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download aria-hidden="true" className="size-4" />
              Angrerettskjema (PDF)
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
