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
              <stop offset="0" stopColor="#e8f8ff" />
              <stop offset="0.25" stopColor="#7fd3ff" />
              <stop offset="0.6" stopColor="#1f8fff" />
              <stop offset="1" stopColor="#0a3fb8" />
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
              <feGaussianBlur in="SourceAlpha" stdDeviation="14" result="blur" />
              <feFlood floodColor="#1a8cff" floodOpacity="0.9" />
              <feComposite in2="blur" operator="in" result="glow" />
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="bump" />
              <feSpecularLighting
                in="bump"
                surfaceScale="6"
                specularConstant="1.1"
                specularExponent="28"
                lightingColor="#ffffff"
                result="spec"
              >
                <feDistantLight azimuth="235" elevation="48" />
              </feSpecularLighting>
              <feComposite in="spec" in2="SourceAlpha" operator="in" result="gloss" />
              <feTurbulence type="fractalNoise" baseFrequency="0.09 0.3" numOctaves="3" seed="7" result="noise" />
              <feColorMatrix
                in="noise"
                type="matrix"
                values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 2.6 -1.05"
                result="frost"
              />
              <feComposite in="frost" in2="SourceAlpha" operator="in" result="frostOnText" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
                <feMergeNode in="gloss" />
                <feMergeNode in="frostOnText" />
              </feMerge>
            </filter>
          </defs>
          <text
            x="705"
            y="1122"
            textAnchor="end"
            textLength="250"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#velvaere-hot)"
            filter="url(#velvaere-heat)"
            fontSize="128"
            fontWeight="700"
            fontStyle="italic"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            SAUNA
          </text>
          <text
            x="737"
            y="1110"
            textAnchor="middle"
            fill="#ffffff"
            fillOpacity="0.9"
            fontSize="64"
            fontWeight="700"
            fontStyle="italic"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            &amp;
          </text>
          <g filter="url(#velvaere-frost)">
            <text
              x="769"
              y="1122"
              textAnchor="start"
              textLength="250"
              lengthAdjust="spacingAndGlyphs"
              fill="url(#velvaere-ice)"
              stroke="#e6f7ff"
              strokeWidth="3"
              strokeOpacity="0.95"
              fontSize="128"
              fontWeight="700"
              fontStyle="italic"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              ISBAD
            </text>
            <path
              d="M780 1119 l7 32 l7 -32 Z M812 1119 l4 14 l4 -14 Z M838 1119 l6 24 l6 -24 Z M868 1119 l4 12 l4 -12 Z M892 1119 l7 38 l7 -38 Z M925 1119 l4 15 l4 -15 Z M950 1119 l6 26 l6 -26 Z M978 1119 l4 13 l4 -13 Z M1000 1119 l7 30 l7 -30 Z"
              fill="url(#velvaere-ice)"
              stroke="#e6f7ff"
              strokeWidth="1.5"
              strokeOpacity="0.9"
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
