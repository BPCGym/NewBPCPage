import Image from 'next/image'
import { BpcLogo, type BpcLogoVariant } from '@/components/bpc-logo'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

type FullBleedHeroProps = {
  id: string
  eyebrow: string
  title: string
  text: string
  image: { src: string; alt: string }
  logo?: { variant: BpcLogoVariant; alt: string }
  /** LED strips positioned in % of a 16:9 photo; the photo is then framed so they stay locked to it. */
  strips?: React.CSSProperties[]
  children?: React.ReactNode
}

export function FullBleedHero({ id, eyebrow, title, text, image, logo, strips, children }: FullBleedHeroProps) {
  return (
    <section aria-labelledby={id} className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      {strips ? (
        <div className="hero-stage absolute inset-0">
          <div className="hero-frame">
            <div className="hero-zoom absolute inset-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-aspect-ratio: 16/9) 100vw, 178svh"
                className="object-cover"
              />
              {strips.map((strip, i) => (
                <span key={i} aria-hidden="true" className="hero-strip hero-strip-warm" style={strip} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover object-center"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/0"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-28 md:pb-20">
        {logo ? (
          <div className="relative mb-4 size-28 md:size-40">
            <BpcLogo
              variant={logo.variant}
              label={logo.alt}
              priority
              sizes="(min-width: 768px) 160px, 112px"
              className="logo-in size-full text-foreground drop-shadow-[0_4px_24px_rgb(0_0_0/0.6)]"
            />
            <span aria-hidden="true" className="logo-sparkle absolute -right-1 top-2 size-3" style={delay(0)} />
            <span aria-hidden="true" className="logo-sparkle absolute -left-2 bottom-6 size-2" style={delay(1800)} />
            <span aria-hidden="true" className="logo-sparkle absolute bottom-0 right-5 size-2.5" style={delay(3400)} />
          </div>
        ) : null}
        <p className="hero-in mb-5 text-xs font-medium uppercase tracking-[0.3em] text-foreground/80" style={delay(0)}>
          {eyebrow}
        </p>
        <h1
          id={id}
          className="hero-in max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          style={delay(120)}
        >
          {title}
        </h1>
        <p
          className="hero-in mt-5 max-w-xl text-pretty text-lg leading-relaxed text-foreground/85 md:text-xl"
          style={delay(260)}
        >
          {text}
        </p>
        {children ? (
          <div className="hero-in mt-8 flex flex-wrap gap-3" style={delay(380)}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  )
}
