import Image from 'next/image'
import type { ReactNode } from 'react'

type PageIntroProps = {
  id: string
  eyebrow: string
  title: string
  text: string
  image?: { src: string; alt: string }
  children?: ReactNode
}

export function PageIntro({ id, eyebrow, title, text, image, children }: PageIntroProps) {
  return (
    <section aria-labelledby={id} className="pb-16 pt-28 md:pb-24 md:pt-36">
      <div
        className={
          image
            ? 'mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16'
            : 'mx-auto max-w-7xl px-6'
        }
      >
        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
          <h1 id={id} className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">{text}</p>
          {children && <div className="flex flex-wrap gap-3 pt-2">{children}</div>}
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[4/5]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}
