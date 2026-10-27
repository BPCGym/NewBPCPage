import Image from 'next/image'
import type { ReactNode } from 'react'

type PageIntroProps = {
  id: string
  eyebrow: string
  title: string
  text: string
  image?: { src: string; alt: string }
  children?: ReactNode
  belowHero?: boolean
  compact?: boolean
  imagePosition?: string
}

export function PageIntro({
  id,
  eyebrow,
  title,
  text,
  image,
  children,
  belowHero = false,
  compact = false,
  imagePosition = 'object-center',
}: PageIntroProps) {
  const Heading = belowHero ? 'h2' : 'h1'
  const spacing = belowHero
    ? 'py-10 md:py-12'
    : compact
      ? 'pb-10 pt-24 md:pb-14 md:pt-28'
      : 'pb-16 pt-28 md:pb-24 md:pt-36'
  return (
    <section aria-labelledby={id} className={spacing}>
      <div
        className={
          image
            ? `mx-auto grid max-w-7xl items-center px-6 ${belowHero ? 'md:grid-cols-[5fr_7fr]' : 'md:grid-cols-2'} ${compact || belowHero ? 'gap-8 md:gap-12' : 'gap-10 md:gap-16'}`
            : 'mx-auto max-w-7xl px-6'
        }
      >
        <div className={`flex flex-col items-start ${compact || belowHero ? 'gap-4' : 'gap-6'}`}>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
          <Heading
            id={id}
            className={`text-balance font-semibold leading-tight tracking-tight ${
              compact ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'
            }`}
          >
            {title}
          </Heading>
          <p
            className={`max-w-lg text-pretty leading-relaxed text-muted-foreground ${compact ? 'text-base' : 'text-lg'}`}
          >
            {text}
          </p>
          {children && <div className="flex flex-wrap gap-3 pt-2">{children}</div>}
        </div>
        {image && (
          <div
            className={`relative overflow-hidden rounded-2xl ${
              compact
                ? 'aspect-[16/10]'
                : belowHero
                  ? 'aspect-[4/3] md:aspect-[5/4]'
                  : 'aspect-[4/3] md:aspect-[4/5]'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`object-cover ${imagePosition}`}
            />
          </div>
        )}
      </div>
    </section>
  )
}
