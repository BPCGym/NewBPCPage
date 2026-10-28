import Image from 'next/image'

const specs = [
  { value: '25 %', label: 'Maks incline' },
  { value: '30 km/t', label: 'Toppfart' },
]

const audiences = [
  {
    title: 'For proffene',
    text: 'Samme møller som eliteløpere og toppidrettsutøvere trener på – bygget for høy fart, bratte bakker og tøffe økter.',
  },
  {
    title: 'For vonde knær',
    text: 'Ønsker du et skånsomt underlag? Det myke lamellbåndet demper støtet og tar vare på knær og ledd.',
  },
]

const qualities = ['Lamellbånd som demper støt', 'Skånsom for ledd og knær', 'Stabil i alle hastigheter']

export function WoodwaySection() {
  return (
    <section id="woodway" aria-labelledby="woodway-title" className="scroll-mt-24 overflow-hidden border-t border-border py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1fr]">
        <figure className="group relative overflow-hidden rounded-3xl bg-card ring-1 ring-border lg:order-first">
          <Image
            src="/images/woodway-lopemoller.jpg"
            alt="Rekke med Woodway løpemøller med buede håndtak under blått og lilla lys hos BPC"
            width={1568}
            height={2352}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 pt-16 text-sm font-semibold">
            Woodway-rekka hos BPC
          </figcaption>
        </figure>

        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Verdens beste løpemøller
          </span>

          <h2 id="woodway-title" className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Løp uten begrensninger.
          </h2>
          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            {
              'Vi har Woodway – løpemøllene proffene trener på. Det unike lamellbåndet gir etter under hvert steg og gir et naturlig, responsivt løpesteg. Enten du går rolig i bakke eller kjører intervaller i full fart, setter møllen aldri grensen.'
            }
          </p>

          <div className="grid max-w-lg gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div key={audience.title} className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold">{audience.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{audience.text}</p>
              </div>
            ))}
          </div>

          <dl className="grid max-w-md grid-cols-2 gap-4">
            {specs.map((spec) => (
              <div key={spec.label} className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-5">
                <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight md:text-4xl">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="flex flex-wrap gap-2">
            {qualities.map((quality) => (
              <li key={quality} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                {quality}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
