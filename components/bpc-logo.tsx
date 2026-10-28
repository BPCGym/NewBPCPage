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
      <span className="bpc-mark absolute inset-0">
        <span className="bpc-slide absolute inset-0">
      <Image src={`${prefix}-base.png`} {...shared} className="object-contain" />
      {variant === 'velvaere' ? (
        // Sauna heat fading into ice-bath cold, echoing the Velvære department.
        <svg viewBox="0 0 1482 1482" aria-hidden="true" className="absolute inset-0 size-full">
          <defs>
            <linearGradient id="velvaere-heat-cold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#ff8a3d" />
              <stop offset="0.45" stopColor="#ffc27a" />
              <stop offset="0.55" stopColor="#bfe9ff" />
              <stop offset="1" stopColor="#3fb6ff" />
            </linearGradient>
          </defs>
          <text
            x="741"
            y="1140"
            textAnchor="middle"
            textLength="680"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#velvaere-heat-cold)"
            fontSize="180"
            fontWeight="700"
            fontStyle="italic"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            VELVÆRE
          </text>
          <path
            d="M421 1200 q40 -26 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0"
            fill="none"
            stroke="url(#velvaere-heat-cold)"
            strokeWidth="16"
            strokeLinecap="round"
          />
        </svg>
      ) : null}
        </span>
      </span>
      <Image src={`${prefix}-arc-top.png`} {...shared} className="bpc-arc object-contain" />
      <Image src={`${prefix}-arc-bottom.png`} {...shared} className="bpc-arc bpc-arc-bottom object-contain" />
    </span>
  )
}
