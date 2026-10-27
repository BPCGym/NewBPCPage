import Image from 'next/image'
import { Armchair, Leaf, Moon } from 'lucide-react'

const moments = [
  { icon: Moon, title: 'Pust ut mellom rundene', text: 'Kjøl ned, senk pulsen og kjenn varmen slippe taket.' },
  { icon: Armchair, title: 'Ta med håndkle', text: 'Legg håndkleet over stolen før du setter deg.' },
  { icon: Leaf, title: 'Snakk lavt', text: 'Stillesonen er for ro. Ta lengre samtaler i badstuen.' },
]

export function WellnessQuietZone() {
  return (
    <section aria-labelledby="stillesone-title" className="bg-background py-14 text-foreground md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 md:flex-row md:items-center md:gap-14">
        <figure className="group relative mx-auto w-full max-w-xs shrink-0 overflow-hidden rounded-2xl border border-sauna/40 md:mx-0 md:max-w-sm">
          <Image
            src="/images/velvaere-stillesone.jpg"
            alt="To medlemmer i badetøy slapper av og prater på trestoler med håndkle i stillesonen hos BPC Velvære"
            width={3983}
            height={5310}
            unoptimized
            className="h-auto w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
          />
          <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur md:text-sm">
            Stillesonen
          </figcaption>
        </figure>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sauna">Mellom rundene</p>
            <h2 id="stillesone-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Senk skuldrene i stillesonen.
            </h2>
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              Etter badstuen venter en rolig krok med dempet lys, planter og gode stoler. Her lar du kroppen
              hente seg inn før neste runde, eller før du går hjem.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {moments.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-sauna/15 text-sauna"
                >
                  <Icon className="size-4" />
                </span>
                <div className="flex flex-col">
                  <p className="font-semibold">{title}</p>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
