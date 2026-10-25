import Image from 'next/image'
import { CtaLink } from '@/components/cta-link'
import { mailto } from '@/lib/site'

export function TrySection() {
  return (
    <section
      id="prov-bpc"
      aria-labelledby="prov-title"
      className="relative scroll-mt-28 overflow-hidden"
    >
      <Image
        src="/images/bpc-resepsjon.jpg"
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-background/80" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Prøv BPC</p>
          <h2 id="prov-title" className="max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Bli kjent med BPC før du bestemmer deg.
          </h2>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-foreground/85">
            Kom innom, se deg rundt og spør oss om prøvetime eller drop-in. Vi tar imot deg, uansett alder og
            nivå, og hjelper deg med neste steg.
          </p>
          <CtaLink href={mailto('Prøvetime hos BPC')} arrow>
            Spør om prøvetime
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
