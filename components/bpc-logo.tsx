import Image from 'next/image'
import { cn } from '@/lib/utils'

export type BpcLogoVariant = 'gym' | 'velvaere' | 'boxen' | 'kids'

const assetPrefix: Record<BpcLogoVariant, string> = {
  gym: '/images/bpc-logo',
  velvaere: '/images/bpc-velvaere-logo',
  boxen: '/images/bpc-boxen-logo',
  kids: '/images/bpc-kids-logo',
}

type BpcLogoProps = {
  className?: string
  priority?: boolean
  variant?: BpcLogoVariant
  sizes?: string
  label?: string
}

export function BpcLogo({ className, priority, variant = 'gym', sizes = '96px', label }: BpcLogoProps) {
  const prefix = assetPrefix[variant]
  const shared = { alt: '', fill: true, sizes, priority } as const

  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn('relative block shrink-0', className)}
    >
      <Image src={`${prefix}-base.png`} {...shared} className="object-contain" />
      {variant === 'velvaere' ? (
        // Temporary subtitle until the real Velvære logo exists.
        <svg viewBox="0 0 1482 1482" aria-hidden="true" className="absolute inset-0 size-full">
          <text
            x="741"
            y="1098"
            textAnchor="middle"
            textLength="640"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            fontSize="172"
            fontWeight="700"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            VELVÆRE
          </text>
        </svg>
      ) : null}
      <Image src={`${prefix}-arc-top.png`} {...shared} className="bpc-arc object-contain" />
      <Image src={`${prefix}-arc-bottom.png`} {...shared} className="bpc-arc bpc-arc-bottom object-contain" />
    </span>
  )
}
