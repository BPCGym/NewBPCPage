import Image from 'next/image'

const brands = [
  'Woodway',
  'Atlantis Strength',
  'Arsenal Strength',
  'Prime Fitness',
  'Rogue Fitness',
  'Eleiko',
  'Concept2',
]

export function Equipment() {
  return (
    <section id="utstyr" className="scroll-mt-16 border-y border-border bg-card py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_0_80px_-20px] shadow-primary/50 ring-1 ring-primary/30">
          <Image
            src="/images/bpc-funksjonell.jpg"
            alt="Funksjonell sone hos BPC med sprintbane, romaskiner og BPC Boxen"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">Utstyr</p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Treningsutstyr i verdensklasse.
          </h2>
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Verdensledende løpemøller og nøye utvalgt styrkeutstyr. Alt er valgt for å gi deg den
            beste treningsopplevelsen, uansett nivå og mål.
          </p>
          <ul className="mt-10 flex flex-wrap gap-3" aria-label="Utstyrsprodusenter">
            {brands.map((brand) => (
              <li
                key={brand}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
