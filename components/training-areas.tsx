import Image from 'next/image'

const areas = [
  {
    name: 'Langt treningsrom',
    text: 'Kondisjon og styrkeapparater side om side. Varm opp på tredemølla og gå rett videre til apparatene.',
    tags: ['Kondisjon', 'Styrkeapparater'],
    image: {
      src: '/images/bpc-kondisjon.jpg',
      alt: 'Langt treningsrom hos BPC med Woodway-tredemøller langs en vegg med opplyste ruter',
    },
  },
  {
    name: 'Stort treningsrom',
    text: 'Rommet for deg som liker frivekter. Mye manualer, benker og stativer, kombinert med apparater.',
    tags: ['Frivekter', 'Manualer', 'Apparater'],
    image: {
      src: '/images/bpc-frivekter.jpg',
      alt: 'Stort treningsrom hos BPC med lange rader manualer, benker med BPC-logo og blått lys',
    },
  },
  {
    name: 'Hjertet av BPC',
    text: 'Bare apparater med vektmagasin og pin select, nøye utplukket. Enkle å bruke, enten du er erfaren eller helt ny.',
    tags: ['Pin select', 'For alle nivåer'],
    image: {
      src: '/images/bpc-apparatsal.jpg',
      alt: 'Hjertet av BPC med styrkeapparater med vektmagasin og blått, marmorert gulv',
    },
  },
  {
    name: 'BPC Boxen',
    text: 'Funksjonell sone med stor frihet. Åpent område og mye funksjonelt utstyr for både styrke og kondisjon.',
    tags: ['Funksjonell', 'Styrke', 'Kondisjon'],
    image: {
      src: '/images/bpc-funksjonell.jpg',
      alt: 'BPC Boxen med kunstgress, romaskiner, airbikes, frivekter og BPC-logo på gulvet',
    },
  },
]

export function TrainingAreas() {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
      {areas.map((area, i) => (
        <li
          key={area.name}
          data-reveal
          style={{ '--d': `${(i % 2) * 90}ms` } as React.CSSProperties}
          className="group flex flex-col gap-5"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
            <Image
              src={area.image.src}
              alt={area.image.alt}
              fill
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="flex items-center gap-3 text-xl font-semibold tracking-tight md:text-2xl">
              <span aria-hidden="true" className="size-2 rotate-45 bg-primary" />
              {area.name}
            </h3>
            <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">{area.text}</p>
            <ul className="flex flex-wrap gap-2" aria-label={`Utstyr i ${area.name}`}>
              {area.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wider"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}
