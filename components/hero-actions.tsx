import { ArrowDown, ArrowRight } from 'lucide-react'
import { SmartLink } from '@/components/smart-link'
import { links } from '@/lib/site'

const springHover =
  'origin-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-110 active:scale-100 motion-reduce:transition-none motion-reduce:hover:transform-none'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <SmartLink
        href={links.signup}
        className={`cta-sweep cta-culture glow group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full pl-7 pr-6 text-base font-semibold ${springHover} ${focusRing}`}
      >
        <span className="relative">Bli medlem</span>
        <ArrowRight
          className="relative size-5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </SmartLink>

      <SmartLink
        href="#gymmet"
        className={`sparkle-btn group relative inline-flex h-14 items-center gap-3 overflow-visible rounded-full pl-7 pr-6 text-base font-semibold text-foreground backdrop-blur-md ${springHover} ${focusRing}`}
      >
        Se gymmet
        <ArrowDown
          className="size-5 text-foreground/80 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-foreground"
          aria-hidden="true"
        />
      </SmartLink>
    </div>
  )
}
