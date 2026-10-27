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
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-28 md:pb-12">
        <div>
          <div>
            <p
              className="hero-in mb-3 text-xs font-medium uppercase tracking-[0.3em] text-foreground/80"
              style={delay(0)}
            >
              BPC
            </p>
            <h1
              id="hero-title"
              className="hero-in max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              style={delay(120)}
            >
              Bli en del av <span className="sr-only">kulturen.</span>
              <span aria-hidden="true" className="culture whitespace-nowrap">
                <span className="culture-glow" />
                <span className="culture-word" data-text="kulturen">
                  kulturen
                </span>
                <span className="culture-dot">.</span>
                <svg
                  className="culture-swoosh"
                  viewBox="0 0 400 24"
                  preserveAspectRatio="none"
                  focusable="false"
                >
                  <defs>
                    <linearGradient id="culture-swoosh-base" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" className="culture-stop-fade" />
                      <stop offset="35%" className="culture-stop-blue" />
                      <stop offset="85%" className="culture-stop-light" />
                      <stop offset="100%" className="culture-stop-fade" />
                    </linearGradient>
                  </defs>
                  <path
                    className="culture-swoosh-base"
                    d="M6 17 C 110 7, 270 4, 394 11"
                    pathLength={100}
                    stroke="url(#culture-swoosh-base)"
                  />
                  <path
                    className="culture-swoosh-tail"
                    d="M6 17 C 110 7, 270 4, 394 11"
                    pathLength={100}
                  />
                  <path
                    className="culture-swoosh-head"
                    d="M6 17 C 110 7, 270 4, 394 11"
                    pathLength={100}
                  />
                </svg>
                <span className="culture-spark culture-spark-1" />
                <span className="culture-spark culture-spark-2" />
                <span className="culture-spark culture-spark-3" />
              </span>
            </h1>
  <p className="mt-5 flex max-w-xl flex-wrap gap-x-2 text-pretty text-lg font-medium leading-relaxed text-foreground/90 md:text-xl">
  {['Ditt tempo.', 'Dine mål.', 'Et sted å høre til.'].map((phrase, i) => (
  <span key={phrase} className="hero-punch inline-block" style={{ animationDelay: `${900 + i * 420}ms` }}>
  {phrase}
  </span>
  ))}
  </p>
          </div>
          <div className="hero-in mt-8" style={delay(380)}>
            <HeroActions />
          </div>
        </div>
        <div className="hero-in mt-10" style={delay(450)}>
          <AppBadges />
        </div>
        <div className="hero-in mt-10" style={delay(560)}>
          <HeroIsland />
        </div>
      </div>
    </section>
  )
}
