import { ArrowDown, ArrowRight, Sparkle } from 'lucide-react'
import { SmartLink } from '@/components/smart-link'
import { links } from '@/lib/site'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <SmartLink
        href={links.signup}
        className={`cta-sweep cta-culture glow group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full pl-7 pr-6 text-base font-semibold transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${focusRing}`}
      >
        <span className="relative">Bli medlem</span>
        <ArrowRight
          className="relative size-5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </SmartLink>

      <SmartLink
        href="#gymmet"
        className={`sparkle-btn group relative inline-flex h-14 items-center gap-3 overflow-visible rounded-full pl-7 pr-6 text-base font-semibold text-foreground backdrop-blur-md transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 ${focusRing}`}
      >
        <Sparkle aria-hidden="true" className="sparkle-star -left-2.5 -top-3 size-6 fill-current" />
        <Sparkle aria-hidden="true" className="sparkle-star -right-2 -top-2 size-4 fill-current [animation-delay:0.6s]" />
        <Sparkle aria-hidden="true" className="sparkle-star -bottom-3 left-1/2 size-5 fill-current [animation-delay:1.2s]" />
        <Sparkle aria-hidden="true" className="sparkle-star -bottom-2 -right-3 size-3 fill-current [animation-delay:1.8s]" />
        Se gymmet
        <ArrowDown
          className="size-5 text-foreground/80 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-foreground"
          aria-hidden="true"
        />
      </SmartLink>
    </div>
  )
}
