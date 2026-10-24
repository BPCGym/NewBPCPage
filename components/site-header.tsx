import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#om', label: 'Om BPC' },
  { href: '#utstyr', label: 'Utstyr' },
  { href: '#apningstider', label: 'Åpningstider' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-baseline gap-2" aria-label="BPC – til forsiden">
          <span className="text-xl font-semibold tracking-tight">BPC</span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            Bergen Performance Center
          </span>
        </Link>
        <nav aria-label="Hovedmeny" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#kontakt" className={cn(buttonVariants({ size: 'sm' }), 'rounded-full px-5')}>
          Bli medlem
        </a>
      </div>
    </header>
  )
}
