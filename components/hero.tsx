import Image from 'next/image'
import { AppBadges } from '@/components/app-badges'
import { HeroActions } from '@/components/hero-actions'
import { HeroIsland } from '@/components/hero-island'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

const ringBig = { '--x': '67.6%', '--y': '20.4%', '--w': '17%', '--h': '11%', '--r': '-14deg', '--t': '3px', '--s': '5s' } as React.CSSProperties
const ringSmall = { '--x': '48%', '--y': '34.6%', '--w': '7.4%', '--h': '3.4%', '--r': '-1deg', '--t': '2px', '--s': '4s' } as React.CSSProperties

const wallStrips = [
  { '--x': '6.8%', '--y': '31.8%', '--w': '8.8%', '--r': '0deg', '--s': '11s', '--delay': '-3s' },
  { '--x': '18.4%', '--y': '41.2%', '--w': '49.6%', '--r': '0deg', '--s': '14s', '--delay': '0s' },
  { '--x': '70.6%', '--y': '39.8%', '--w': '11.6%', '--r': '-3deg', '--s': '10s', '--delay': '-6s' },
] as React.CSSProperties[]

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <div className="hero-stage absolute inset-0">
        <div className="hero-frame">
          <div className="hero-zoom absolute inset-0">
            <Image
              src="/images/bpc-hero-styrkesal-36.jpg"
              alt="Styrkesalen hos BPC Gym med blå benker og apparater under lysende ringer i taket"
              fill
              priority
              sizes="(min-aspect-ratio: 16/9) 100vw, 178svh"
              className="object-cover"
            />
            <span aria-hidden="true" className="hero-ring" style={ringBig} />
            <span aria-hidden="true" className="hero-ring" style={ringSmall} />
            {wallStrips.map((strip, i) => (
              <span key={i} aria-hidden="true" className="hero-strip" style={strip} />
            ))}
          </div>
        </div>
      </div>
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
              className="hero-in max-w-4xl text-balance font-display text-5xl font-extrabold leading-[1] tracking-tight sm:text-6xl lg:text-7xl"
              style={delay(120)}
            >
              Bli en del av <span className="sr-only">kulturen.</span>
              <span aria-hidden="true" className="culture whitespace-nowrap">
                <span className="culture-glow" />
                <svg
                  className="culture-brush"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                  focusable="false"
                >
                  <defs>
                    <linearGradient id="culture-brush-fill" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" className="culture-stop-blue" />
                      <stop offset="55%" className="culture-stop-mid" />
                      <stop offset="100%" className="culture-stop-violet" />
                    </linearGradient>
                    <filter id="culture-brush-rough" x="-5%" y="-20%" width="110%" height="140%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.035 0.6" numOctaves="2" seed="7" />
                      <feDisplacementMap in="SourceGraphic" scale="9" />
                    </filter>
                  </defs>
                  <path
                    filter="url(#culture-brush-rough)"
                    fill="url(#culture-brush-fill)"
                    d="M4 62 C 40 48, 120 40, 210 38 C 290 36, 360 34, 398 30 L 392 70 C 340 76, 270 80, 190 82 C 110 84, 50 86, 10 92 C 2 82, 0 72, 4 62 Z"
                  />
                  <path
                    className="culture-brush-sheen"
                    filter="url(#culture-brush-rough)"
                    d="M4 62 C 40 48, 120 40, 210 38 C 290 36, 360 34, 398 30 L 392 70 C 340 76, 270 80, 190 82 C 110 84, 50 86, 10 92 C 2 82, 0 72, 4 62 Z"
                  />
                </svg>
                <span className="culture-word">kulturen</span>
                <span className="culture-dot">.</span>
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
