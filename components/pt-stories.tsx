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
    <section aria-label="Hva du får med personlig trening" className="border-t border-border py-10 md:py-14">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2 md:gap-6">
        {stories.map((story) => (
          <article
            key={story.id}
            aria-labelledby={`${story.id}-title`}
            className="grid grid-cols-[7rem_1fr] items-center gap-4 rounded-2xl border border-border bg-card p-3 sm:grid-cols-[10rem_1fr] sm:gap-6 md:p-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src={story.image.src}
                alt={story.image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 640px) 160px, 112px"
                className={`object-cover ${story.image.position}`}
              />
            </div>
            <div className="flex flex-col gap-2 pr-2">
              <p className="text-xs font-medium uppercase tracking-widest text-primary">{story.eyebrow}</p>
              <h2 id={`${story.id}-title`} className="text-balance text-lg font-semibold tracking-tight md:text-xl">
                {story.title}
              </h2>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{story.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
