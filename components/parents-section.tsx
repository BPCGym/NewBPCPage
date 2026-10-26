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
    text: 'Toalettene i BPC Boxen har stellebord, så du kan skifte bleie i ro og fred før eller etter økten.',
  },
]

export function ParentsSection() {
  return (
    <section aria-labelledby="foreldre-title" className="border-t border-border bg-card py-16 md:py-24">
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

        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:grid-rows-[3fr_2fr]">
          <figure className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl md:col-span-1 md:aspect-auto">
            <Image
              src="/images/boxen-stellebord.jpg"
              alt="Nedfellbart stellebord med hvit stellepute på toalettet i BPC Boxen, i lilla lys"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/85 px-3 py-1 text-sm font-semibold text-foreground backdrop-blur">
              Stellebord i BPC Boxen
            </figcaption>
          </figure>
          <figure className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl md:col-span-1 md:aspect-auto">
            <Image
              src="/images/boxen-toalett.jpg"
              alt="Toalettet i BPC Boxen med sort servant, treskap, store speil og lilla lys"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
