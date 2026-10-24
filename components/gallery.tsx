import Image from 'next/image'
import { cn } from '@/lib/utils'

const spaces = [
  {
    src: '/images/bpc-apparater.jpg',
    title: 'Apparatsone',
    alt: 'Apparatsonen hos BPC med lilla og blått lys',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/bpc-badstue.jpg',
    title: 'Badstue',
    alt: 'Badstuen hos BPC med varmt lys og trebenker',
    className: '',
  },
  {
    src: '/images/bpc-garderobe.jpg',
    title: 'Garderobe og iskulp',
    alt: 'Garderoben hos BPC med rosa neonlys og inngang til badstue og iskulp',
    className: '',
  },
  {
    src: '/images/bpc-resepsjon.jpg',
    title: 'Resepsjon',
    alt: 'Inngangspartiet hos BPC med blått lys og marmorgulv',
    className: '',
  },
  {
    src: '/images/bpc-kids.jpg',
    title: 'BPC Kids',
    alt: 'BPC Kids-rommet med klatrevegg og myke matter',
    className: '',
  },
]

export function Gallery() {
  return (
    <section id="senteret" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Senteret
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Bygget for å skille seg ut.
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Badstue, iskulp, lounge og eget rom for barna. Alt du trenger før, under og etter
            økta.
          </p>
        </div>
        <ul className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[240px] md:grid-cols-4">
          {spaces.map((space) => (
            <li
              key={space.src}
              className={cn(
                'group relative overflow-hidden rounded-2xl ring-1 ring-border',
                space.className,
              )}
            >
              <Image
                src={space.src}
                alt={space.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent"
              />
              <p className="absolute bottom-4 left-4 text-sm font-medium">{space.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
