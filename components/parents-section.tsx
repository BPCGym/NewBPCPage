import Image from 'next/image'
import { Baby, Clock, ShieldAlert } from 'lucide-react'

const points = [
  {
    icon: Clock,
    title: 'Kom gjerne mellom 04:00 og 15:00',
    text: 'Da er det roligere i salen. Etter klokken 15 kommer det mye mer folk, og da er det tryggere for den lille å slippe trengselen. Vi er ikke strenge på dette, men vi anbefaler det på det varmeste.',
  },
  {
    icon: ShieldAlert,
    title: 'Du har ansvaret for barnet',
    text: 'Tar du med barn i bilsete, er det ditt eget ansvar hele tiden. BPC fraskriver seg ethvert ansvar. Dette står i medlemsvilkårene våre, og vi ber alle foreldre respektere det.',
  },
  {
    icon: Baby,
    title: 'Stellebord i BPC Boxen',
    text: 'Toalettet i BPC Boxen har eget stellebord, så du kan skifte bleie i ro og fred før eller etter økten.',
  },
]

export function ParentsSection() {
  return (
    <section aria-labelledby="foreldre-title" className="border-t border-border bg-card py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Småbarnsforeldre</p>
            <h2 id="foreldre-title" className="text-balance text-2xl font-semibold tracking-tight md:text-4xl">
              Ta med den lille på trening.
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Hos oss trener en stor gjeng småbarnsforeldre, og det er vi glade for. Du er hjertelig velkommen til å
              ta med babyen eller den minste i bilsetet mens du trener.
            </p>
          </div>

          <ul className="flex flex-col border-t border-border">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 border-b border-border py-5">
                <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-auto md:min-h-full">
          <Image
            src="/images/boxen-stellebord.jpg"
            alt="Nedfellbart stellebord med hvit stellepute på toalettet i BPC Boxen, i lilla lys"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-[45%_center]"
          />
          <figcaption className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 rounded-xl bg-background/85 px-4 py-3 text-foreground backdrop-blur">
            <span className="text-sm font-semibold">Stellebord i BPC Boxen</span>
            <span className="text-sm leading-relaxed text-muted-foreground">
              Fell ned bordet, skift bleie og fell det opp igjen etterpå.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
