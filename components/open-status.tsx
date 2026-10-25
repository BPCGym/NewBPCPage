'use client'

import { useOpenStatus } from '@/lib/use-open-status'
import { cn } from '@/lib/utils'

export function OpenStatus({ className }: { className?: string }) {
  const { status, label } = useOpenStatus()
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span aria-hidden="true" className="relative flex size-2">
        {status === 'open' && <span className="absolute inset-0 animate-ping rounded-full bg-live opacity-70" />}
        <span className={cn('relative size-2 rounded-full', status === 'closed' ? 'bg-muted-foreground' : 'bg-live')} />
      </span>
      <span aria-live="polite">{label}</span>
    </span>
  )
}
