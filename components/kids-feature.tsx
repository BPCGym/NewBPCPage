import Image from 'next/image'

export function KidsFeature() {
  return (
    <section aria-labelledby="kids-feature-title" className="border-t border-border py-10 md:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/bpc-kids-klatring.jpg"
            alt="Barnepasser holder en liten gutt som klatrer på den fargerike klatreveggen i BPC Kids"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 id="kids-feature-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            Trygge hender, små eventyr.
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Mens du trener, utforsker barna klatreveggen, lekekjøkkenet og de myke mattene sammen med våre
            barnepassere. Du er bare noen meter unna, og barna har det gøy i mellomtiden.
          </p>
        </div>
      </div>
    </section>
  )
}
