import Image from 'next/image'

export function Community() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/community.png"
        alt="Medlemmer som trener sammen hos BPC"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-background/75" />
      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center md:py-44">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Mer enn et treningssenter
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          Et sted der folk trives, utvikler seg og føler ekte tilhørighet.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Trening handler om mer enn økter og resultater. Det handler om miljø, respekt og å bli
          møtt på en god måte, uansett nivå, bakgrunn eller mål.
        </p>
      </div>
    </section>
  )
}
