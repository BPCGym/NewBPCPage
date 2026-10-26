import Image from 'next/image'
import { CtaLink } from '@/components/cta-link'
import { mailto } from '@/lib/site'

const items = [
  {
    eyebrow: 'BPC Kids · Barnepass',
    title: 'Trening med plass til familielivet.',
    text: 'Spør oss om barnepass og babypass, aktuelle tider og hvordan dere kommer i gang.',
    cta: 'Spør oss om barnepass',
    subject: 'BPC Kids – barnepass',
  },
  {
    eyebrow: 'PT',
    title: 'Finn en god retning for treningen.',
    text: 'Nysgjerrig på personlig trening? Ta kontakt om mulighetene hos BPC.',
    cta: 'Spør oss om PT',
    subject: 'Personlig trening hos BPC',
  },
]

export function EverydaySection() {
  return (
    <section id="hverdagen" aria-labelledby="hverdagen-title" className="scroll-mt-28 border-t border-border py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-5 md:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2 md:aspect-auto">
          <Image
            src="/images/bpc-kids.jpg"
            alt="Barnerommet hos BPC med klatrevegg, ribbevegg og myke matter"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-10 md:col-span-3">
          <h2 id="hverdagen-title" className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Plass til hverdagen
          </h2>
          {items.map((item, i) => (
            <div
              key={item.eyebrow}
              className={`flex flex-col items-start gap-4 ${i > 0 ? 'border-t border-border pt-10' : ''}`}
            >
              <p className="text-sm font-medium text-muted-foreground">{item.eyebrow}</p>
              <h3 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">{item.title}</h3>
              <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">{item.text}</p>
              <CtaLink href={mailto(item.subject)} variant="outline">
                {item.cta}
              </CtaLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
