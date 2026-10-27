import Image from 'next/image'

const photos = [
  {
    src: '/images/pt-knebay.jpg',
    alt: 'PT veileder et medlem i knebøy med stang i riggen, med BPC-logoen i gulvet',
    className: 'col-span-2 aspect-[4/3] md:col-span-1 md:aspect-auto',
    position: 'object-[center_30%]',
  },
  {
    src: '/images/pt-skulderpress.jpg',
    alt: 'PT støtter et medlem under skulderpress med manualer foran speilveggen',
    className: 'aspect-[4/3] md:aspect-auto',
    position: 'object-[40%_25%]',
  },
  {
    src: '/images/pt-curl.jpg',
    alt: 'Smilende PT heier frem et medlem som trener biceps med manualer',
    className: 'aspect-[4/3] md:aspect-auto',
    position: 'object-[40%_top]',
  },
]

const points = [
  { title: 'Teknikk først', text: 'Trygg og riktig utførelse, slik at du får mest mulig ut av hver repetisjon.' },
  { title: 'Plan for deg', text: 'Opplegget tilpasses målet ditt, hverdagen din og nivået du er på i dag.' },
  { title: 'Noen i hjørnet ditt', text: 'Oppfølging og motivasjon underveis, også de dagene det går tyngre.' },
]

export function PtGallery() {
  return (
    <section aria-labelledby="pt-galleri-title" className="border-t border-border py-10 md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6">
        <div className="flex max-w-2xl flex-col gap-2">
          <h2 id="pt-galleri-title" className="text-balance text-xl font-semibold tracking-tight md:text-2xl">
            Trening med en som følger deg hele veien
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Våre PT-er er på gulvet sammen med deg, retter, heier og justerer. Det er bare BPCs egne PT-er som
            driver personlig trening i lokalene.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:h-72 md:grid-cols-[3fr_4fr_4fr] md:gap-4">
          {photos.map((photo) => (
            <li key={photo.src} className={`relative overflow-hidden rounded-2xl ${photo.className}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 33vw, 50vw"
                className={`object-cover transition-transform duration-700 hover:scale-105 ${photo.position}`}
              />
            </li>
          ))}
        </ul>

        <ul className="grid gap-4 border-t border-border pt-6 md:grid-cols-3 md:gap-6">
          {points.map((point) => (
            <li key={point.title} className="flex flex-col gap-1">
              <h3 className="font-semibold">{point.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
