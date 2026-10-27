'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SmartLink } from '@/components/smart-link'
import { buttonVariants } from '@/components/ui/button'
import { OpenStatus } from '@/components/open-status'
import { links, mainNav, secondaryNav } from '@/lib/site'
import { cn } from '@/lib/utils'

function Logo() {
  return (
    <SmartLink href="/" className="flex items-center gap-3" aria-label="BPC Gym – til forsiden">
      <Image src="/images/bpc-logo.png" alt="" width={44} height={44} priority className="size-11" />
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
          <OpenStatus className="text-foreground/85" />
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
            href={links.signup}
            className={cn(
              buttonVariants({ size: 'sm' }),
              'cta-sweep cta-culture glow relative h-9 overflow-hidden rounded-full px-5 font-semibold',
            )}
          >
            <span className="relative">Bli medlem</span>
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

      <div
        id="scroll-progress"
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-0.5 bg-primary"
      />

      {open && (
        <nav
          id="mobilmeny"
          aria-label="Mobilmeny"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <SmartLink
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 py-2 text-2xl font-semibold tracking-tight"
                  >
                    {item.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
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
