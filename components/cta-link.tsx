import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { SmartLink } from '@/components/smart-link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type CtaLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  arrow?: boolean
  className?: string
}

export function CtaLink({ href, children, variant = 'primary', arrow = false, className }: CtaLinkProps) {
  return (
    <SmartLink
      href={href}
      className={cn(
        buttonVariants({ size: 'lg', variant: variant === 'primary' ? 'default' : 'outline' }),
        'h-12 gap-2 rounded-full px-6 text-base',
        variant === 'outline' &&
          'border-foreground/25 bg-transparent text-foreground hover:bg-foreground/10',
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight aria-hidden="true" />}
    </SmartLink>
  )
}
