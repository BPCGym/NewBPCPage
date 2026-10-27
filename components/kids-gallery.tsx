import Image from 'next/image'

const photos = [
  {
    src: '/images/bpc-kids-klatrevegg.jpg',
    alt: 'Malt klatrevegg med fjell og regnbue, ribbevegg og myke matter i BPC Kids',
    className: 'col-span-2 row-span-2 md:col-span-3 md:row-span-2',
    sizes: '(min-width: 768px) 50vw, 100vw',
  },
  {
    src: '/images/bpc-kids-skilt.jpg',
    alt: 'BPC Kids-skilt i treklosser med kosebamser i vinduskarmen',
    className: 'row-span-2 md:col-span-1 md:row-span-2',
    sizes: '(min-width: 768px) 17vw, 50vw',
  },
  {
    src: '/images/bpc-kids-ribbevegg.jpg',
    alt: 'Ribbevegg med klatretau over en myk matte full av kosedyr',
    className: 'md:col-span-2',
    sizes: '(min-width: 768px) 33vw, 50vw',
  },
  {
    src: '/images/bpc-kids-lekekjokken.jpg',
    alt: 'Klatreveggen sett nedenfra, med lekekjøkken og myke matter på gulvet',
    className: '',
    sizes: '(min-width: 768px) 17vw, 50vw',
  },
  {
    src: '/images/bpc-kids-rom.jpg',
    alt: 'Hele barnerommet med fargerike tepper, saccosekker og leker',
    className: 'col-span-2 md:col-span-1',
    sizes: '(min-width: 768px) 17vw, 100vw',
  },
]

export function KidsGallery() {
  return (
    <section aria-labelledby="kids-gallery-title" className="border-t border-border py-10 md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Inne hos BPC Kids</p>
            <h2 id="kids-gallery-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Et eget rom for de minste.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Klatrevegg, lekekjøkken, myke matter og kosedyr, rett ved treningsområdet.
          </p>
        </div>
        <ul className="grid auto-rows-[9rem] grid-cols-2 gap-3 md:aspect-[12/5] md:auto-rows-auto md:grid-cols-6 md:grid-rows-2">
          {photos.map((photo) => (
            <li key={photo.src} className={`group relative overflow-hidden rounded-2xl ${photo.className}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes={photo.sizes}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
