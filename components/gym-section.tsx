import Image from 'next/image'
import { CtaLink } from '@/components/cta-link'
import { SectionHeading } from '@/components/section-heading'
import { equipmentBrands } from '@/lib/site'

const photos = [
  {
    src: '/images/bpc-stativer.jpg',
    alt: 'Styrkesonen hos BPC med blå stativer, benker, vektskiver og speilvegg under lyslister i taket',
    caption: 'Stort treningsrom',
    className: 'col-span-2 aspect-[16/10] md:row-span-2 md:aspect-auto',
    sizes: '(min-width: 768px) 66vw, 100vw',
  },
  {
    src: '/images/bpc-hjertet.jpg',
    alt: 'Apparatsalen hos BPC med styrkeapparater, Booty Builder og blått, marmorert gulv',
    caption: 'Hjertet av BPC',
    className: 'aspect-square md:row-span-2 md:aspect-auto',
    sizes: '(min-width: 768px) 33vw, 50vw',
  },
  {
    src: '/images/bpc-frivekter.jpg',
    alt: 'Frivektsonen hos BPC med lange rader manualer, benker med BPC-logo og blått lys',
    caption: 'Frivekter',
    className: 'aspect-square md:aspect-auto',
    sizes: '(min-width: 768px) 33vw, 50vw',
  },
  {
    src: '/images/bpc-kondisjon.jpg',
    alt: 'Kondisjonssonen hos BPC med Woodway-tredemøller langs en vegg med opplyste ruter',
    caption: 'Langt treningsrom',
    className: 'aspect-square md:aspect-auto',
    sizes: '(min-width: 768px) 33vw, 50vw',
  },
  {
    src: '/images/bpc-funksjonell.jpg',
    alt: 'Funksjonell sone hos BPC med kunstgress, romaskiner, airbikes, frivekter og BPC-logo på gulvet',
    caption: 'BPC Boxen',
    className: 'aspect-square md:aspect-auto',
    sizes: '(min-width: 768px) 33vw, 50vw',
  },
]

export function GymSection() {
  return (
    <section id="gymmet" aria-labelledby="gymmet-title" className="scroll-mt-28 py-14 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        <div className="flex max-w-2xl flex-col gap-5">
          <SectionHeading
            id="gymmet-title"
            eyebrow="Gymmet"
            title="Et sted du får lyst til å komme tilbake til."
          />
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Ta en titt inn. Bli kjent med lokalene, finn favorittapparatene dine og se hva BPC Gym kan
            bli for deg.
          </p>
        </div>

        <GymGallery />
        <EquipmentBrands />

        <CtaLink href="/gymmet" variant="outline" className="self-start">
          Utforsk gymmet
        </CtaLink>
      </div>
    </section>
  )
}

export function GymGallery() {
  return (
    <ul className="grid grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-3 md:gap-4">
      {photos.map((photo, i) => (
        <li
          key={photo.src}
          data-reveal
          style={{ '--d': `${i * 90}ms` } as React.CSSProperties}
          className={`group relative overflow-hidden rounded-xl border border-border md:rounded-2xl ${photo.className}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            loading="lazy"
            sizes={photo.sizes}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/90 to-transparent"
          />
          <p className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-semibold md:bottom-4 md:left-4 md:text-sm uppercase tracking-wider transition-transform duration-500 group-hover:translate-x-1">
            <span aria-hidden="true" className="size-1.5 rotate-45 bg-primary" />
            {photo.caption}
          </p>
        </li>
      ))}
    </ul>
  )
}

export function EquipmentBrands() {
  return (
    <div data-reveal className="flex flex-col gap-5 border-t border-border pt-8">
      <p className="text-sm font-medium">Utstyr fra blant andre</p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-slow flex w-max gap-3">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0 gap-3">
              {equipmentBrands.map((brand, index) => (
                <li
                  key={brand.name}
                  style={{ '--i': index } as React.CSSProperties}
                  className="glint relative aspect-[2/1] w-44 overflow-hidden rounded-xl border border-border transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg hover:shadow-primary/20 md:w-56"
                >
                  <Image
                    src={brand.logo}
                    alt={copy === 1 ? '' : brand.name}
                    fill
                    loading="lazy"
                          sizes="224px"
                          className={brand.square ? 'object-contain' : 'object-cover'}
                          style={brand.square ? { backgroundColor: '#000' } : undefined}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
