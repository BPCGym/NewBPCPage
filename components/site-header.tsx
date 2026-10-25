'use client'

import { ArrowUpRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SmartLink } from '@/components/smart-link'
import { buttonVariants } from '@/components/ui/button'
import { links, mainNav, secondaryNav, trainingHours } from '@/lib/site'
import { cn } from '@/lib/utils'

function Logo() {
  return (
    <SmartLink href="/" className="flex items-center gap-3" aria-label="BPC Gym – til forsiden">
      <Image src="/images/bpc-logo.png" alt="" width={44} height={44} priority className="size-11" />
      <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Gym</span>
    </SmartLink>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="hidden border-b border-border md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs text-muted-foreground">
          <p>{`Åpent for trening ${trainingHours.hours.replace(/:00/g, '')} alle dager`}</p>
          <nav aria-label="Snarveier">
            <ul className="flex items-center gap-6">
              {secondaryNav.map((item) => (
                <li key={item.label}>
                  <SmartLink href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        <Logo />
        <nav aria-label="Hovedmeny" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.label}>
                <SmartLink
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <SmartLink
            href="/medlemskap"
            className={cn(buttonVariants({ size: 'sm' }), 'h-9 rounded-full px-5')}
          >
            Bli medlem
          </SmartLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilmeny"
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground hover:bg-foreground/10 lg:hidden"
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            <span className="sr-only">{open ? 'Lukk meny' : 'Åpne meny'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobilmeny"
          aria-label="Mobilmeny"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8">
            <ul className="flex flex-col gap-1">
              {mainNav
                .filter((item) => item.href !== links.boxen)
                .map((item) => (
                  <li key={item.label}>
                    <SmartLink
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-2xl font-semibold tracking-tight"
                    >
                      {item.label}
                    </SmartLink>
                  </li>
                ))}
            </ul>
            <a
              href={links.boxen}
              className="flex items-center justify-between rounded-xl border border-primary/50 bg-primary/10 px-5 py-4"
            >
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-primary">Gruppetimer</span>
                <span className="text-lg font-semibold">Gå til BPC Boxen</span>
              </span>
              <ArrowUpRight aria-hidden="true" className="size-5 text-primary" />
            </a>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-6 text-muted-foreground">
              {secondaryNav.map((item) => (
                <li key={item.label}>
                  <SmartLink href={item.href} onClick={() => setOpen(false)} className="hover:text-foreground">
                    {item.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  )
}
