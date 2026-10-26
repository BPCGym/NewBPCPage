import Image from 'next/image'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

type FullBleedHeroProps = {
  id: string
  eyebrow: string
  title: string
  text: string
  image: { src: string; alt: string }
  logo?: { src: string; alt: string }
  children?: React.ReactNode
}

export function FullBleedHero({ id, eyebrow, title, text, image, logo, children }: FullBleedHeroProps) {
  return (
    <section aria-labelledby={id} className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
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
        {logo ? (
          <div className="relative mb-4 size-28 md:size-40">
            <div
              aria-hidden="true"
              className="logo-halo absolute -inset-10 rounded-full bg-[radial-gradient(circle,var(--background)_45%,transparent_72%)] opacity-95"
            />
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={200}
              className="logo-in relative size-full mix-blend-screen [mask-image:radial-gradient(circle,#000_62%,transparent_71%)]"
            />
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
