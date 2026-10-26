import Image from 'next/image'
import { AppBadges } from '@/components/app-badges'
import { HeroActions } from '@/components/hero-actions'
import { HeroIsland } from '@/components/hero-island'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <Image
        src="/images/bpc-hero-styrkesal-36.jpg"
        alt="Styrkesalen hos BPC Gym med blå benker og apparater under lysende ringer i taket"
        fill
        priority
        sizes="100vw"
        className="hero-zoom object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/0"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-28 md:pb-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className="hero-in mb-3 text-xs font-medium uppercase tracking-[0.3em] text-foreground/80"
              style={delay(0)}
            >
              BPC GYM · LODDEFJORD
            </p>
            <h1
              id="hero-title"
              className="hero-in max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              style={delay(120)}
            >
              Bli en del av <span className="shine-text">kulturen</span>.
            </h1>
            <p
              className="hero-in mt-5 max-w-xl text-pretty text-lg leading-relaxed text-foreground/85 md:text-xl"
              style={delay(260)}
            >
              Ditt tempo. Dine mål. Et sted å høre til.
            </p>
          </div>
          <div className="hero-in" style={delay(380)}>
            <HeroActions />
          </div>
        </div>
        <div className="hero-in mt-8" style={delay(450)}>
          <AppBadges />
        </div>
        <div className="hero-in mt-10" style={delay(560)}>
          <HeroIsland />
        </div>
      </div>
    </section>
  )
}
