import { Clock, Flame, QrCode } from 'lucide-react'
import { CtaLink } from '@/components/cta-link'
import { HeroVideo } from '@/components/hero-video'
import { OpenStatus } from '@/components/open-status'

const facts = [
  { icon: Flame, title: 'Badstue & isbad', text: 'Egen velværeavdeling' },
  { icon: QrCode, title: 'QR-kode', text: 'Tilgang i appen' },
]

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <HeroVideo />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 pt-32 md:pb-14">
        <p className="hero-in mb-5 text-xs font-medium uppercase tracking-[0.3em] text-foreground/80" style={{ '--d': '0ms' } as React.CSSProperties}>
          BPC GYM · LODDEFJORD
        </p>
        <h1
          id="hero-title"
          className="max-w-5xl text-balance text-6xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-9xl"
        >
          <span className="hero-in block" style={{ '--d': '120ms' } as React.CSSProperties}>
            Bli en del
          </span>
          <span className="hero-in block" style={{ '--d': '260ms' } as React.CSSProperties}>
            av <em className="shine-text not-italic lg:italic">kulturen</em>
          </span>
        </h1>
        <p
          className="hero-in mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/85 md:text-xl"
          style={{ '--d': '420ms' } as React.CSSProperties}
        >
          Ditt tempo. Dine mål. Et sted å høre til.
        </p>
        <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ '--d': '540ms' } as React.CSSProperties}>
          <CtaLink href="/medlemskap" arrow className="glow">
            Bli medlem
          </CtaLink>
          <CtaLink href="#gymmet" variant="outline">
            Se gymmet
          </CtaLink>
        </div>

        <ul
          className="hero-in mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border backdrop-blur-md sm:grid-cols-3"
          style={{ '--d': '700ms' } as React.CSSProperties}
        >
          <li className="flex items-center gap-3 bg-background/70 px-5 py-4">
            <Clock aria-hidden="true" className="size-5 text-primary" />
            <div className="flex flex-col">
              <OpenStatus className="text-sm font-semibold" />
              <span className="text-xs text-muted-foreground">04–23 · alle dager hele året</span>
            </div>
          </li>
          {facts.map((fact) => (
            <li key={fact.title} className="flex items-center gap-3 bg-background/70 px-5 py-4">
              <fact.icon aria-hidden="true" className="float-y size-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{fact.title}</span>
                <span className="text-xs text-muted-foreground">{fact.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
