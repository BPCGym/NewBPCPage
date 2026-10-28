'use client'

import Link from 'next/link'
import type { ComponentProps, MouseEvent } from 'react'

type SmartLinkProps = Omit<ComponentProps<'a'>, 'href'> & { href: string }

// Internal routes use next/link. External, tel: and mailto: links are plain anchors
// and deliberately open in the same tab (per the build brief).
export function SmartLink({ href, children, onClick, ...props }: SmartLinkProps) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} onClick={onClick} {...props}>
        {children}
      </Link>
    )
  }

  // Booking systems like sics.no refuse to render inside iframes (e.g. the v0 preview),
  // so when embedded we open them in a new tab instead of navigating the frame.
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented || !href.startsWith('http')) return
    if (window.self !== window.top) {
      e.preventDefault()
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
