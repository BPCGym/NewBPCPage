import Image from 'next/image'
import { CtaLink } from '@/components/cta-link'
import { SectionHeading } from '@/components/section-heading'

export function WellnessSection() {
  return (
    <section id="velvaere" aria-labelledby="velvaere-title" className="scroll-mt-28 bg-card py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:order-2">
          <Image
            src="/images/bpc-badstue.jpg"
            alt="Badstuen hos BPC med glassvegg, trebenker og varmt lys"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-6">
          <SectionHeading id="velvaere-title" eyebrow="BPC Velvære" title="Ta deg tid til en pause." />
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Oppdag velværetilbudet hos BPC. Se hva tilgangen omfatter, og hvordan du legger den til
            medlemskapet ditt.
          </p>
          <div className="flex w-full flex-col gap-4 border-y border-border py-6">
            <p className="leading-relaxed">
              Velvære gir tilgang til badstue og isbad i egne rolige rom ved garderobene.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Velvære er et tillegg til et aktivt medlemskap og er ikke inkludert i alle medlemskap. Spør
              oss om tilgang og hvordan du legger det til.
            </p>
          </div>
          <CtaLink href="/velvaere" variant="outline">
            Utforsk velvære
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
