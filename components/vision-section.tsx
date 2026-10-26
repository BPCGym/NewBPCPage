import Image from 'next/image'

export function VisionSection() {
  return (
    <section aria-labelledby="visjon-title" className="border-t border-border bg-card py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-5 md:gap-16">
        <div className="flex flex-col gap-5 md:col-span-2">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Siden 2014 · Langt fra ferdig</p>
          <h2 id="visjon-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Vi bygger fortsatt.
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Vi åpnet i 2014 med et klart mål: å skape noe som ikke fantes. Det sporet holder vi fortsatt. Nye
            løsninger kommer på plass, og nye prosjekter går fra idé til virkelighet.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Visjonen vår er større enn det BPC er i dag, og den skal leve videre gjennom generasjonene som
            kommer.
          </p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:col-span-3">
          <Image
            src="/images/bpc-utvikling.jpg"
            alt="Smilende BPC-ansatt foran den opplyste BPC-logoen og resepsjonsdisken"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
