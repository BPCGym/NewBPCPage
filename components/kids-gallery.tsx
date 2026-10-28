import Image from 'next/image'

const LANDSCAPE = 5820 / 3274
const PORTRAIT = 3905 / 5858

type Photo = { src: string; alt: string; ratio: number; sizes: string }

// Each row is a justified flex row: items grow in proportion to their aspect ratio,
// so every photo keeps its full frame and the rows line up into one clean rectangle.
const rows: Photo[][] = [
  [
    {
      src: '/images/bpc-kids-klatrevegg.jpg',
      alt: 'Malt klatrevegg med fjell og regnbue, ribbevegg og myke matter i BPC Kids',
      ratio: LANDSCAPE,
      sizes: '(min-width: 768px) 55vw, 75vw',
    },
    {
      src: '/images/bpc-kids-skilt.jpg',
      alt: 'BPC Kids-skilt i treklosser med kosebamser i vinduskarmen',
      ratio: PORTRAIT,
      sizes: '(min-width: 768px) 20vw, 30vw',
    },
  ],
  [
    {
      src: '/images/bpc-kids-ribbevegg.jpg',
      alt: 'Ribbevegg med klatretau over en myk matte full av kosedyr',
      ratio: PORTRAIT,
      sizes: '(min-width: 768px) 15vw, 25vw',
    },
    {
      src: '/images/bpc-kids-lekekjokken.jpg',
      alt: 'Klatreveggen sett nedenfra, med lekekjøkken og myke matter på gulvet',
      ratio: PORTRAIT,
      sizes: '(min-width: 768px) 15vw, 25vw',
    },
    {
      src: '/images/bpc-kids-rom.jpg',
      alt: 'Hele barnerommet med fargerike tepper, saccosekker og leker',
      ratio: LANDSCAPE,
      sizes: '(min-width: 768px) 40vw, 60vw',
    },
  ],
]

export function KidsGallery() {
  return (
    <section aria-labelledby="kids-gallery-title" className="border-t border-border py-10 md:py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Inne hos BPC Kids</p>
            <h2 id="kids-gallery-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Et eget rom for de minste.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground md:text-right">
            Klatrevegg, lekekjøkken, myke matter og kosedyr, rett ved treningsområdet.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 md:gap-3">
          {rows.map((row, rowIndex) => (
            <ul key={rowIndex} className="flex gap-2 md:gap-3">
              {row.map((photo) => (
                <li
                  key={photo.src}
                  className="group relative overflow-hidden rounded-xl bg-muted md:rounded-2xl"
                  style={{ flex: `${photo.ratio} 1 0%`, aspectRatio: photo.ratio }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="lazy"
                    sizes={photo.sizes}
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
