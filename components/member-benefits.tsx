import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

type Benefit = {
  partner: string
  highlight: string
  description: string
  image: string
  imagePosition?: string
}

const benefits: Benefit[] = [
  {
    partner: 'Sumo Restaurants',
    highlight: '20 %',
    description: 'rabatt på take-away, i tillegg til 25 % cashpoint på take-away og 10 % cashpoint på mat i restaurant.',
    image: '/images/fordeler/sumo.jpg',
    imagePosition: 'object-[center_5%]',
  },
  {
    partner: 'Park Bergen',
    highlight: '50 %',
    description: 'rabatt på spill søndag–torsdag: minigolf, golfsimulator, duckpin bowling, dart og shuffleboard.',
    image: '/images/fordeler/f5.jpg',
  },
  {
    partner: 'Big Bite Vestkanten',
    highlight: '25 %',
    description: 'rabatt på hele menyen – et eksklusivt tilbud for BPC-medlemmer.',
    image: '/images/fordeler/f3.jpg',
  },
  {
    partner: 'Pasta Sentral Vestkanten',
    highlight: '20 %',
    description: 'rabatt på hele menyen.',
    image: '/images/fordeler/f2.jpg',
  },
  {
    partner: 'Bergen Barber',
    highlight: '20 %',
    description: 'rabatt hos en ekte barbersjappe – skarp sveis, stramt skjegg og barbering slik det skal være.',
    image: '/images/fordeler/f1.jpg',
  },
  {
    partner: 'Nuju Frisør Bergen',
    highlight: '20 %',
    description: 'rabatt hos frisørsalongen sentralt i Bergen, med et bredt spekter av tjenester.',
    image: '/images/fordeler/f4.jpg',
  },
  {
    partner: 'Mathopen Kattepensjonat',
    highlight: '10 %',
    description: 'rabatt for alle BPC-medlemmer ved fremvisning av aktivt medlemskap.',
    image: '/images/fordeler/mathopen.jpg',
  },
]

export function MemberBenefits() {
  return (
    <section
      id="medlemsfordeler"
      aria-labelledby="medlemsfordeler-title"
      className="scroll-mt-28 border-t border-border py-14 md:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
          <SectionHeading
            id="medlemsfordeler-title"
            eyebrow="Medlemsfordeler"
            title="Partnere vi er stolte av å samarbeide med."
          />
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Medlemskapet ditt gjelder mer enn treningen. Som medlem hos BPC får du eksklusive fordeler
            hos gode lokale partnere i Bergen.
          </p>
        </div>

        <ul
          aria-label="Medlemsfordeler"
          className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-7"
        >
          {benefits.map((benefit, index) => (
            <li
              key={benefit.partner}
              data-reveal
              className="group flex w-40 shrink-0 snap-start flex-col md:w-auto overflow-hidden rounded-2xl border border-border bg-card text-card-foreground transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/15"
            >
              <div
                style={{ '--i': index } as React.CSSProperties}
                className="glint relative aspect-square overflow-hidden"
              >
                <Image
                  src={benefit.image || '/placeholder.svg'}
                  alt={`Medlemsfordel hos ${benefit.partner}`}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 14vw, (min-width: 768px) 25vw, 50vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${benefit.imagePosition ?? ''}`}
                />
              </div>
              <div className="flex flex-col gap-1 p-3">
                <p className="text-2xl font-semibold leading-none tracking-tight text-primary tabular-nums">
                  {benefit.highlight}
                </p>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold leading-snug">{benefit.partner}</h3>
                  <p className="line-clamp-3 text-pretty text-xs leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Hvordan du løser inn fordelene finner du i Appen Min Trening.
        </p>
      </div>
    </section>
  )
}
