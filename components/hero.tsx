import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const stats = [
  { value: '04–23', label: 'Åpent alle dager' },
  { value: '365', label: 'Dager i året' },
  { value: '100%', label: 'Uavhengig og familieeid' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <Image
        src="/images/bpc-styrkesal.jpg"
        alt="Styrkesalen hos BPC med blå apparater, manualer og lysringer i taket"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-24">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Treningssenter i Loddefjord, Bergen
        </p>
        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          Bli en del av kulturen.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          En treningsopplevelse for deg som liker høy kvalitet i alle ledd og et inkluderende
          treningsmiljø.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#kontakt"
            className={cn(buttonVariants({ size: 'lg' }), 'h-12 gap-2 rounded-full px-7 text-base')}
          >
            Bli medlem
            <ArrowRight aria-hidden="true" />
          </a>
          <a
            href="#om"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'h-12 rounded-full border-foreground/20 bg-transparent px-7 text-base hover:bg-foreground/10',
            )}
          >
            Se senteret
          </a>
        </div>
        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight md:text-3xl">{stat.value}</dd>
              <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
