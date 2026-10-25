import Image from 'next/image'
import { CtaLink } from '@/components/cta-link'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <Image
        src="/images/bpc-styrkesal.jpg"
        alt="Styrkesalen hos BPC Gym med blå apparater, manualer og lysringer i taket"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/0"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-28 md:pb-20">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-foreground/80">
          BPC GYM · LODDEFJORD
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Bli en del av kulturen.
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-foreground/85 md:text-xl">
          Ditt tempo. Dine mål. Et sted å høre til.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href="/medlemskap" arrow>
            Bli medlem
          </CtaLink>
          <CtaLink href="#gymmet" variant="outline">
            Se gymmet
          </CtaLink>
        </div>
        <p className="mt-10 border-t border-foreground/15 pt-5 text-sm text-foreground/75">
          Egentrening · Velvære · Åpent 04–23
        </p>
      </div>
    </section>
  )
}
