import Link from 'next/link'
import type { ComponentProps } from 'react'

type SmartLinkProps = Omit<ComponentProps<'a'>, 'href'> & { href: string }

// Internal routes use next/link. External, tel: and mailto: links are plain anchors
// and deliberately open in the same tab (per the build brief).
export function SmartLink({ href, children, ...props }: SmartLinkProps) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}
