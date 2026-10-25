import Image from 'next/image'
import { CtaLink } from '@/components/cta-link'
import { SectionHeading } from '@/components/section-heading'
import { equipmentBrands } from '@/lib/site'

const photos = [
  {
    src: '/images/bpc-stativer.jpg',
    alt: 'Styrkesonen hos BPC med blå stativer, benker, vektskiver og speilvegg under lyslister i taket',
    caption: 'Styrketrening',
    className: 'aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto',
    sizes: '(min-width: 768px) 66vw, 100vw',
  },
  {
    src: '/images/bpc-apparatsal.jpg',
    alt: 'Apparatsalen hos BPC med styrkeapparater, Booty Builder og blått, marmorert gulv',
    caption: 'Apparatsal',
    className: 'aspect-[3/4] md:row-span-2 md:aspect-auto',
    sizes: '(min-width: 768px) 33vw, 100vw',
  },
  {
    src: '/images/bpc-frivekter.jpg',
    alt: 'Frivektsonen hos BPC med lange rader manualer, benker med BPC-logo og blått lys',
    caption: 'Frivekter',
    className: 'aspect-[4/3] md:aspect-auto',
    sizes: '(min-width: 768px) 33vw, 100vw',
  },
  {
    src: '/images/bpc-kondisjon.jpg',
    alt: 'Kondisjonssonen hos BPC med Woodway-tredemøller langs en vegg med opplyste ruter',
    caption: 'Kondisjon',
    className: 'aspect-[4/3] md:aspect-auto',
    sizes: '(min-width: 768px) 33vw, 100vw',
  },
  {
    src: '/images/bpc-funksjonell.jpg',
    alt: 'Funksjonell sone hos BPC med kunstgress, romaskiner, airbikes, frivekter og BPC-logo på gulvet',
    caption: 'Funksjonell sone',
    className: 'aspect-[4/3] md:aspect-auto',
    sizes: '(min-width: 768px) 33vw, 100vw',
  },
]

export function GymSection() {
  return (
    <section id="gymmet" aria-labelledby="gymmet-title" className="scroll-mt-28 py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
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
    <ul className="grid grid-cols-1 gap-4 md:auto-rows-[240px] md:grid-cols-3">
      {photos.map((photo) => (
        <li key={photo.src} className={`relative overflow-hidden rounded-2xl ${photo.className}`}>
          <Image src={photo.src} alt={photo.alt} fill loading="lazy" sizes={photo.sizes} className="object-cover" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent"
          />
          <p className="absolute bottom-4 left-4 text-sm font-medium">{photo.caption}</p>
        </li>
      ))}
    </ul>
  )
}

export function EquipmentBrands() {
  return (
    <div className="flex flex-col gap-3 border-t border-border pt-8 md:flex-row md:items-baseline md:gap-10">
      <p className="shrink-0 text-sm font-medium">Utstyr fra blant andre</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        {equipmentBrands.map((brand) => (
          <li key={brand}>{brand}</li>
        ))}
      </ul>
    </div>
  )
}
