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
        // "VEL" glows like sauna heat, "VÆRE" is frozen like the ice bath.
        <svg viewBox="0 0 1482 1482" aria-hidden="true" className="absolute inset-0 size-full overflow-visible">
          <defs>
            <linearGradient id="velvaere-hot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff4b8" />
              <stop offset="0.3" stopColor="#ffb01f" />
              <stop offset="0.65" stopColor="#ff4a00" />
              <stop offset="1" stopColor="#b80f08" />
            </linearGradient>
            <linearGradient id="velvaere-ice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="0.35" stopColor="#dff6ff" />
              <stop offset="0.7" stopColor="#8ed6ff" />
              <stop offset="1" stopColor="#3a9fe0" />
            </linearGradient>
            <filter id="velvaere-heat" x="-20%" y="-40%" width="140%" height="180%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="2" seed="3" result="noise">
                <animate attributeName="seed" values="3;9;3" dur="2.4s" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" result="shimmer" />
              <feGaussianBlur in="SourceAlpha" stdDeviation="14" result="blur" />
              <feFlood floodColor="#ff5a00" floodOpacity="0.85" />
              <feComposite in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="shimmer" />
              </feMerge>
            </filter>
            <filter id="velvaere-frost" x="-20%" y="-40%" width="140%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur" />
              <feFlood floodColor="#7fd4ff" floodOpacity="0.7" />
              <feComposite in2="blur" operator="in" result="glow" />
              <feTurbulence type="fractalNoise" baseFrequency="0.06 0.22" numOctaves="3" seed="7" result="noise" />
              <feColorMatrix
                in="noise"
                type="matrix"
                values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 2.2 -0.95"
                result="frost"
              />
              <feComposite in="frost" in2="SourceAlpha" operator="in" result="frostOnText" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
                <feMergeNode in="frostOnText" />
              </feMerge>
            </filter>
          </defs>
          <text
            x="733"
            y="1127"
            textAnchor="end"
            textLength="220"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#velvaere-hot)"
            filter="url(#velvaere-heat)"
            fontSize="145"
            fontWeight="700"
            fontStyle="italic"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            VEL
          </text>
          <g filter="url(#velvaere-frost)">
            <text
              x="741"
              y="1127"
              textAnchor="start"
              textLength="312"
              lengthAdjust="spacingAndGlyphs"
              fill="url(#velvaere-ice)"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeOpacity="0.8"
              fontSize="145"
              fontWeight="700"
              fontStyle="italic"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              VÆRE
            </text>
            <path
              d="M760 1125 l7 27 l7 -27 Z M815 1125 l5 18 l5 -18 Z M872 1125 l7 32 l7 -32 Z M940 1125 l5 19 l5 -19 Z M1002 1125 l6 26 l6 -26 Z"
              fill="url(#velvaere-ice)"
            />
          </g>
        </svg>
      ) : null}
        </span>
      </span>
      <Image src={`${prefix}-arc-top.png`} {...shared} className="bpc-arc object-contain" />
      <Image src={`${prefix}-arc-bottom.png`} {...shared} className="bpc-arc bpc-arc-bottom object-contain" />
    </span>
  )
}
