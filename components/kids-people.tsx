import Image from 'next/image'

const welcome = {
  id: 'kids-velkommen',
  eyebrow: 'Velkommen',
  title: 'Velkommen inn i et trygt og seriøst barnepass',
  text: 'BPC Kids har sitt eget rom midt i senteret. Du trener i fred, og barna har det gøy rett ved siden av.',
  image: {
    src: '/images/bpc-kids-velkommen.jpg',
    alt: 'Barnepasser i BPC-vest åpner døren inn til BPC Kids under det opplyste BPC Kids-skiltet',
  },
}

const stories = [
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
  {
    id: 'kids-eventyr',
    eyebrow: 'Lek og trygghet',
    title: 'Trygge hender, små eventyr.',
    text: 'Mens du trener, utforsker barna klatreveggen, lekekjøkkenet og de myke mattene sammen med våre barnepassere. Du er bare noen meter unna.',
    image: {
      src: '/images/bpc-kids-klatring.jpg',
      alt: 'Barnepasser holder en liten gutt som klatrer på den fargerike klatreveggen i BPC Kids',
    },
  },
]

export function KidsPeople() {
  return (
    <section aria-label="Menneskene i BPC Kids" className="pt-10 pb-10 md:pt-14 md:pb-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:gap-12">
        <article
          aria-labelledby={welcome.id}
          className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16"
          data-reveal
        >
          <div className="relative aspect-[2/3] w-full max-w-md shrink-0 overflow-hidden rounded-2xl">
            <Image
              src={welcome.image.src}
              alt={welcome.image.alt}
              fill
              priority
              sizes="(min-width: 768px) 448px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex max-w-lg flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">{welcome.eyebrow}</p>
            <h2 id={welcome.id} className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              {welcome.title}
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{welcome.text}</p>
          </div>
        </article>

        <ul className="mx-auto grid w-full max-w-5xl gap-10 sm:grid-cols-2 md:gap-10">
          {stories.map((story) => (
            <li key={story.id} className="flex flex-col gap-5" data-reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={story.image.src}
                  alt={story.image.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">{story.eyebrow}</p>
                <h3 id={story.id} className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                  {story.title}
                </h3>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{story.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
