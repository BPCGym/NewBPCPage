import Image from 'next/image'
import { HeartHandshake, Lock, ShowerHead, Sparkles } from 'lucide-react'

const features = [
  { icon: ShowerHead, title: 'Dusj', text: 'Egne dusjer i både jente- og guttegarderoben.' },
  { icon: Lock, title: 'Garderobeskap', text: 'Lås inn tingene dine mens du trener.' },
  { icon: Sparkles, title: 'Speil og føner', text: 'Gjør deg klar for resten av dagen.' },
]

export function LockerRooms() {
  return (
    <section aria-labelledby="garderober-title" className="border-t border-border py-14 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Garderobene</p>
              <h2 id="garderober-title" className="text-balance text-2xl font-semibold tracking-tight md:text-4xl">
                Lekre garderober med dusj og garderobeskap.
              </h2>
            </div>
            <p className="text-pretty border-l-2 border-primary pl-4 leading-relaxed text-muted-foreground">
              Treningen slutter ikke i salen. Garderobene er bygget med samme omtanke som resten av BPC, så du kan
              dusje, gjøre deg klar og gå videre med dagen.
            </p>
          </div>

          <aside
            aria-label="Felles ansvar for garderobene"
            className="flex max-w-sm flex-col gap-3 rounded-2xl border border-primary/40 bg-primary/10 p-5"
          >
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <HeartHandshake aria-hidden="true" className="size-4" />
              Felles ansvar
            </p>
            <p className="text-pretty text-lg font-semibold leading-snug">
              Vi har laget dem lekre. Sammen holder vi dem sånn.
            </p>
            <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              {['Rydd etter deg', 'Tørk av benken', 'Ta med håndkle'].map((item) => (
                <li key={item} className="rounded-full border border-border bg-background/60 px-3 py-1">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src="/images/garderobe-jente-oversikt.jpg"
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
              src="/images/garderobe-gutt-oversikt.jpg"
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
