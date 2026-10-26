import Image from 'next/image'

const machines = [
  { src: '/videos/newtech-high-row.mp4', name: 'Torture High Row', tilt: 'md:-rotate-2' },
  { src: '/videos/newtech-t-bar-row.mp4', name: 'Torture Linear T-Bar Row', tilt: 'md:rotate-2 md:translate-y-10' },
]

const qualities = ['Svært ergonomiske', 'Passer for alle', 'Føles fantastiske', 'Enkle å bruke', 'Naturlige bevegelsesbaner']

export function NewtechSection() {
  return (
    <section id="newtech" aria-labelledby="newtech-title" className="scroll-mt-24 overflow-hidden border-t border-border py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/newtech-logo.png"
              alt="Newtech Strength Equipment"
              width={96}
              height={96}
              className="size-20 rounded-2xl ring-1 ring-border md:size-24"
            />
            <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Kommer snart
            </span>
          </div>

          <h2 id="newtech-title" className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            BPC blir powered by Newtech
          </h2>
          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            {
              'Vi har kjøpt inn nye apparater fra Newtech Strength Equipment – noen av de mest ergonomiske maskinene som finnes. De tilpasser seg kroppen din, passer for alle uansett nivå, og føles rett og slett fantastiske å trene i.'
            }
          </p>

          <ul className="flex flex-wrap gap-2">
            {qualities.map((quality) => (
              <li key={quality} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                {quality}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 md:pb-10">
          {machines.map((machine) => (
            <figure
              key={machine.src}
              className={`group relative overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-transform duration-500 ease-out hover:rotate-0 hover:scale-[1.03] ${machine.tilt}`}
            >
              <video
                src={machine.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`Video av ${machine.name} fra Newtech`}
                className="aspect-[3/4] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 pt-12 text-sm font-semibold">
                {machine.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
