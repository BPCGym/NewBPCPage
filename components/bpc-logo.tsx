import Image from 'next/image'
import { cn } from '@/lib/utils'

export function BpcLogo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <span aria-hidden="true" className={cn('relative block shrink-0', className)}>
      <Image src="/images/bpc-logo-base.png" alt="" fill sizes="96px" priority={priority} className="object-contain" />
      <Image
        src="/images/bpc-logo-arc-top.png"
        alt=""
        fill
        sizes="96px"
        priority={priority}
        className="bpc-arc object-contain"
      />
      <Image
        src="/images/bpc-logo-arc-bottom.png"
        alt=""
        fill
        sizes="96px"
        priority={priority}
        className="bpc-arc bpc-arc-bottom object-contain"
      />
    </span>
  )
}
