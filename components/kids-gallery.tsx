import Image from 'next/image'

const photos = [
  {
    src: '/images/bpc-kids-klatrevegg.jpg',
    alt: 'Malt klatrevegg med fjell og regnbue, ribbevegg og myke matter i BPC Kids',
    className: 'aspect-[4/3] md:col-span-2',
    sizes: '(min-width: 768px) 66vw, 100vw',
  },
  {
    src: '/images/bpc-kids-skilt.jpg',
    alt: 'BPC Kids-skilt i treklosser med kosebamser i vinduskarmen',
    className: 'aspect-[4/5] md:aspect-auto',
    sizes: '(min-width: 768px) 33vw, 100vw',
  },
  {
    src: '/images/bpc-kids-ribbevegg.jpg',
    alt: 'Ribbevegg med klatretau over en myk matte full av kosedyr',
    className: 'aspect-[4/5]',
    sizes: '(min-width: 768px) 33vw, 100vw',
  },
  {
    src: '/images/bpc-kids-lekekjokken.jpg',
    alt: 'Klatreveggen sett nedenfra, med lekekjøkken og myke matter på gulvet',
    className: 'aspect-[4/5]',
    sizes: '(min-width: 768px) 33vw, 100vw',
  },
  {
    src: '/images/bpc-kids-rom.jpg',
    alt: 'Hele barnerommet med fargerike tepper, saccosekker og leker',
    className: 'aspect-[4/5]',
    sizes: '(min-width: 768px) 33vw, 100vw',
  },
]

export function KidsGallery() {
  return (
    <section aria-labelledby="kids-gallery-title" className="pb-16 md:pb-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Inne hos BPC Kids</p>
          <h2 id="kids-gallery-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Et eget rom for de minste.
          </h2>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <li key={photo.src} className={`relative overflow-hidden rounded-2xl ${photo.className}`}>
              <Image src={photo.src} alt={photo.alt} fill sizes={photo.sizes} className="object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
