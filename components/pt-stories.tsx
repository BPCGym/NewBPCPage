import Image from 'next/image'

const stories = [
  {
    id: 'pt-teknikk',
    eyebrow: 'Teknikk og trygghet',
    title: 'Vi lærer deg teknikken. Du får trygge rammer.',
    text: 'PT-en viser, retter og justerer, rep for rep. Du lærer å bevege deg riktig fra første økt, og trener med en trygghet som varer også når du står alene på gulvet.',
    image: {
      src: '/images/pt-teknikk.jpg',
      alt: 'PT sitter på huk og veileder et eldre medlem i knebøy ned mot benk foran BPC-veggen',
      position: 'object-[60%_center]',
    },
  },
  {
    id: 'pt-alder',
    eyebrow: 'For alle',
    title: 'Alder og form er ingen hindring.',
    text: 'Uansett hvor du starter, møter vi deg der du er. Vi pusher når du trenger det, og hjelper deg hele veien.',
    image: {
      src: '/images/pt-slede.jpg',
      alt: 'Eldre medlem skyver slede på kunstgresset mens PT følger med ved siden av',
      position: 'object-center',
    },
  },
]

export function PtStories() {
  return (
    <section aria-label="Hva du får med personlig trening" className="border-t border-border py-14 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 md:gap-20">
        {stories.map((story, index) => (
          <article
            key={story.id}
            aria-labelledby={`${story.id}-title`}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div
              className={`relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-[5/6] ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}
            >
              <Image
                src={story.image.src}
                alt={story.image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`object-cover ${story.image.position}`}
              />
            </div>
            <div className="flex max-w-lg flex-col gap-4">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">{story.eyebrow}</p>
              <h2
                id={`${story.id}-title`}
                className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
              >
                {story.title}
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{story.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
