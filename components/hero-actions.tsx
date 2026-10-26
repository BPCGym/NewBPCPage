import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { SmartLink } from '@/components/smart-link'

export function HeroActions() {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col lg:items-stretch">
      <SmartLink
        href="/medlemskap"
        className="cta-sweep glow group relative flex h-16 items-center justify-between gap-6 overflow-hidden rounded-full bg-primary pl-7 pr-2 text-lg font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] lg:min-w-72"
      >
        <span className="relative">Bli medlem</span>
        <span className="relative flex size-12 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45">
          <ArrowRight className="size-5" aria-hidden="true" />
        </span>
      </SmartLink>

      <SmartLink
        href="#gymmet"
        className="group flex h-16 items-center gap-3 rounded-full border border-foreground/15 bg-background/40 pl-2 pr-5 backdrop-blur-md transition-colors duration-300 hover:border-foreground/35 hover:bg-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:min-w-72"
      >
        <span className="relative size-12 shrink-0 overflow-hidden rounded-full ring-1 ring-foreground/20">
          <Image
            src="/images/bpc-frivekter.jpg"
            alt=""
            fill
            sizes="48px"
            className="object-cover transition-transform duration-500 group-hover:scale-125"
          />
        </span>
        <span className="flex flex-1 flex-col leading-tight">
          <span className="text-base font-semibold text-foreground">Se gymmet</span>
          <span className="text-sm text-foreground/70">Ta en titt rundt</span>
        </span>
        <ArrowDown
          className="float-y size-5 text-foreground/70 transition-colors group-hover:text-foreground"
          aria-hidden="true"
        />
      </SmartLink>
    </div>
  )
}
