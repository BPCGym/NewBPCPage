import Image from 'next/image'
import { Lock, ShowerHead, Sparkles } from 'lucide-react'

const features = [
  { icon: ShowerHead, title: 'Dusj', text: 'Egne dusjer i både jente- og guttegarderoben.' },
  { icon: Lock, title: 'Garderobeskap', text: 'Lås inn tingene dine mens du trener.' },
  { icon: Sparkles, title: 'Speil og føner', text: 'Gjør deg klar for resten av dagen.' },
]

export function LockerRooms() {
  return (
    <section aria-labelledby="garderober-title" className="border-t border-border py-14 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Garderobene</p>
            <h2 id="garderober-title" className="text-balance text-2xl font-semibold tracking-tight md:text-4xl">
              Lekre garderober med dusj og garderobeskap.
            </h2>
          </div>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Treningen slutter ikke i salen. Garderobene er bygget med samme omtanke som resten av BPC, så du kan dusje,
            gjøre deg klar og gå videre med dagen.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src="/images/garderobe-jente.jpg"
              alt="Jentegarderoben hos BPC i rosa lys med betongvask, opplyst speil, føner og neonskiltet «you go girl»"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/85 px-3 py-1 text-sm font-semibold text-foreground backdrop-blur">
              Jentegarderoben
            </figcaption>
          </figure>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src="/images/garderobe-gutt.jpg"
              alt="Guttegarderoben hos BPC i blått lys med betongvegger, steinvask, stort opplyst speil, benker og rund sittepuff"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/85 px-3 py-1 text-sm font-semibold text-foreground backdrop-blur">
              Guttegarderoben
            </figcaption>
          </figure>
        </div>

        <ul className="grid gap-6 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
