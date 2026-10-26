import Image from 'next/image'

const photos = [
  {
    src: '/images/pt-knebay.jpg',
    alt: 'PT veileder et medlem i knebøy med stang i riggen, med BPC-logoen i gulvet',
    className: 'aspect-[4/5] md:row-span-2 md:aspect-auto',
    position: 'object-center',
  },
  {
    src: '/images/pt-skulderpress.jpg',
    alt: 'PT støtter et medlem under skulderpress med manualer foran speilveggen',
    className: 'aspect-[16/10] md:aspect-auto',
    position: 'object-[40%_center]',
  },
  {
    src: '/images/pt-curl.jpg',
    alt: 'Smilende PT heier frem et medlem som trener biceps med manualer',
    className: 'aspect-[16/10] md:aspect-auto',
    position: 'object-[45%_center]',
  },
]

const points = [
  { title: 'Teknikk først', text: 'Trygg og riktig utførelse, slik at du får mest mulig ut av hver repetisjon.' },
  { title: 'Plan for deg', text: 'Opplegget tilpasses målet ditt, hverdagen din og nivået du er på i dag.' },
  { title: 'Noen i hjørnet ditt', text: 'Oppfølging og motivasjon underveis, også de dagene det går tyngre.' },
]

export function PtGallery() {
  return (
    <section aria-labelledby="pt-galleri-title" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 id="pt-galleri-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            Trening med en som følger deg hele veien
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Våre PT-er er på gulvet sammen med deg, retter, heier og justerer. Det er bare BPCs egne PT-er som
            driver personlig trening i lokalene.
          </p>
        </div>

        <ul className="grid gap-3 md:h-[40rem] md:grid-cols-2 md:grid-rows-2 md:gap-4">
          {photos.map((photo) => (
            <li key={photo.src} className={`relative overflow-hidden rounded-2xl ${photo.className}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`object-cover transition-transform duration-700 hover:scale-105 ${photo.position}`}
              />
            </li>
          ))}
        </ul>

        <ul className="grid gap-6 border-t border-border pt-8 md:grid-cols-3">
          {points.map((point) => (
            <li key={point.title} className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{point.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
