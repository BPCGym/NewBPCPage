import { ArrowDown, ArrowRight } from 'lucide-react'
import { SmartLink } from '@/components/smart-link'
import { links } from '@/lib/site'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <SmartLink
        href={links.signup}
        className={`cta-sweep glow group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full bg-primary pl-7 pr-6 text-base font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${focusRing}`}
      >
        <span className="relative">Bli medlem</span>
        <ArrowRight
          className="relative size-5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </SmartLink>

      <SmartLink
        href="#gymmet"
        className={`group inline-flex h-14 items-center gap-3 rounded-full border border-foreground/10 bg-gradient-to-r from-background/90 via-background/60 to-background/20 pl-7 pr-6 text-base font-semibold text-foreground backdrop-blur-md transition-colors duration-300 hover:border-foreground/30 hover:from-background ${focusRing}`}
      >
        Se gymmet
        <ArrowDown
          className="size-5 text-foreground/60 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-foreground"
          aria-hidden="true"
        />
      </SmartLink>
    </div>
  )
}
