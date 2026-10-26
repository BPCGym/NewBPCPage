import Image from 'next/image'

const stories = [
  {
    id: 'kids-velkommen',
    eyebrow: 'Velkommen',
    title: 'Velkommen inn i et trygt og seriøst barnepass',
    text: 'BPC Kids har sitt eget rom midt i senteret. Du trener i fred, og barna har det gøy rett ved siden av.',
    image: {
      src: '/images/bpc-kids-velkommen.jpg',
      alt: 'Barnepasser i BPC-vest åpner døren inn til BPC Kids under det opplyste BPC Kids-skiltet',
    },
  },
  {
    id: 'kids-barnepassere',
    eyebrow: 'Barnepasserne',
    title: 'Våre flotte barnepassere',
    text: 'Våre trygge og blide barnepassere sørger for lek, omsorg og god stemning mens du trener.',
    image: {
      src: '/images/bpc-kids-barnepassere.jpg',
      alt: 'To smilende barnepassere i BPC-jakker holder en kosepanda og en koseape foran den malte klatreveggen',
    },
  },
]

export function KidsPeople() {
  return (
    <section aria-label="Menneskene i BPC Kids" className="py-14 md:py-20">
      <ul className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:gap-8">
        {stories.map((story) => (
          <li key={story.id} className="flex flex-col gap-5" data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={story.image.src}
                alt={story.image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">{story.eyebrow}</p>
              <h2 id={story.id} className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                {story.title}
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">{story.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
