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
  const splitSubtitle = variant === 'gym' || variant === 'boxen'

  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      data-variant={variant}
      className={cn('bpc-logo relative block shrink-0', className)}
    >
      <span className="bpc-mark absolute inset-0">
        <span className="bpc-slide absolute inset-0">
      <Image
        src={`${prefix}-base.png`}
        {...shared}
        className={cn('object-contain', variant === 'kids' && 'bpc-kids-dance', splitSubtitle && 'bpc-only-wordmark')}
      />
        </span>
      </span>
      {variant === 'velvaere' ? (
        // HOT/COLD live on their own layer so they can step forward, burn and freeze while BPC pulls back.
        <span className="bpc-sub absolute inset-0">
          <span className="bpc-slide absolute inset-0">
        <svg viewBox="0 0 1482 1482" aria-hidden="true" className="absolute inset-0 size-full overflow-visible">
          <defs>
            <linearGradient id="velvaere-hot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffe2b0" />
              <stop offset="0.45" stopColor="#f08a3c" />
              <stop offset="1" stopColor="#c2410c" />
            </linearGradient>
            <linearGradient id="velvaere-ice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f2fbff" />
              <stop offset="0.45" stopColor="#9fdcff" />
              <stop offset="1" stopColor="#3b8fd9" />
            </linearGradient>
            <filter id="velvaere-glow-hot" x="-20%" y="-60%" width="140%" height="220%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur" />
              <feFlood floodColor="#ff7a1a" floodOpacity="0.45" />
              <feComposite in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="velvaere-glow-cold" x="-20%" y="-60%" width="140%" height="220%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur" />
              <feFlood floodColor="#5cc4ff" floodOpacity="0.45" />
              <feComposite in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* HOT sits above BPC, COLD below, both centred inside the ring. x is nudged by half the trailing letter-spacing. */}
          <g
            fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
            fontSize="140"
            fontWeight="500"
            letterSpacing="22"
            textAnchor="middle"
          >
            <g className="vel-hot">
              <text x="753" y="500" fill="url(#velvaere-hot)" filter="url(#velvaere-glow-hot)">
                HOT
              </text>
              <g className="vel-flame">
                <g transform="translate(478 404) scale(1.45)" filter="url(#velvaere-glow-hot)">
                  <path
                    d="M24 0C30 14 44 22 44 40C44 54 35 64 22 64C9 64 0 54 0 41C0 31 6 24 11 16C13 23 16 27 20 29C19 19 20 9 24 0Z"
                    fill="url(#velvaere-hot)"
                  />
                  <path d="M22 34C26 40 31 44 31 51C31 57 27 61 22 61C17 61 13 57 13 51C13 45 18 41 22 34Z" fill="#ffe9c4" />
                </g>
              </g>
            </g>
            <g className="vel-cold">
              <text x="753" y="1060" fill="url(#velvaere-ice)" filter="url(#velvaere-glow-cold)">
                COLD
              </text>
              <g className="vel-snow">
                <g
                  transform="translate(1040 1010) scale(1.3)"
                  stroke="url(#velvaere-ice)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#velvaere-glow-cold)"
                >
                  {[0, 60, 120].map((angle) => (
                    <g key={angle} transform={`rotate(${angle})`}>
                      <line x1="0" y1="-30" x2="0" y2="30" />
                      <polyline points="-9,-24 0,-15 9,-24" />
                      <polyline points="-9,24 0,15 9,24" />
                    </g>
                  ))}
                </g>
              </g>
            </g>
          </g>
        </svg>
          </span>
        </span>
      ) : null}
      {splitSubtitle ? (
        // The subtitle (EST. 2014 / BOXEN) is cut from the same artwork so it can step forward while BPC pulls back.
        <span className="bpc-sub absolute inset-0">
          <span className="bpc-slide absolute inset-0">
            <Image src={`${prefix}-base.png`} {...shared} className="bpc-only-subtitle object-contain" />
          </span>
        </span>
      ) : null}
      <Image src={`${prefix}-arc-top.png`} {...shared} className="bpc-arc object-contain" />
      <Image src={`${prefix}-arc-bottom.png`} {...shared} className="bpc-arc bpc-arc-bottom object-contain" />
    </span>
  )
}
