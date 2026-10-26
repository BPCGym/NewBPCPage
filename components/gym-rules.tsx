'use client'

import { useEffect, useRef, useState } from 'react'
import { Camera, Dumbbell, HandHeart, Home, ShieldAlert, Shirt, SprayCan } from 'lucide-react'

const rules = [
  {
    icon: Home,
    title: 'Behandle BPC som ditt eget hjem',
    text: 'Rydd etter deg, hold orden der andre ikke har klart det, og hjelp til. Det er det eneste vi krever av hvert medlem.',
  },
  {
    icon: SprayCan,
    title: 'Rengjør apparater etter bruk',
    text: 'Bruk renholdsstasjonene våre. Det er et krav, og det koster deg ingenting.',
  },
  {
    icon: Camera,
    title: 'Ikke film andre uten at de vet det',
    text: 'Skal du filme til et prosjekt, ta kontakt, så finner vi et eget tidspunkt sent på kvelden – kun etter avtale.',
  },
  {
    icon: Dumbbell,
    title: 'Slipp vekter kun på løftestasjonene',
    text: 'Vi har 10 løftestasjoner spesiallaget for vektløfting.',
  },
  {
    icon: Shirt,
    title: 'Tren i klær som tar hensyn',
    text: 'Singlet er lov, men ta hensyn hvis den er veldig tynn og åpen.',
  },
  {
    icon: HandHeart,
    title: 'Vi bråker ikke av umodenhet',
    text: 'Hard trening kan høres. Unødvendig rop og tull hører ikke hjemme her.',
  },
] as const

function useActiveRule() {
  const listRef = useRef<HTMLOListElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLLIElement>('[data-rule-index]')
    if (!items?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(Number((entry.target as HTMLElement).dataset.ruleIndex))
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return { listRef, activeIndex }
}

export function GymRules() {
  const { listRef, activeIndex } = useActiveRule()

  return (
    <section
      id="gymregler"
      aria-labelledby="gymregler-title"
      className="scroll-mt-24 border-t border-border py-16 md:py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <header className="flex flex-col gap-4">
          <h2
            id="gymregler-title"
            className="text-balance text-5xl font-bold uppercase tracking-tight text-primary md:text-7xl"
          >
            Gymregler
          </h2>
          <div className="flex flex-col gap-1">
            <p className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Brudd fører til utestengelse.
            </p>
            <p className="flex items-center gap-2 text-lg font-medium text-muted-foreground md:text-xl">
              <ShieldAlert className="size-5 shrink-0 text-primary" aria-hidden="true" />
              Det gjelder spesielt punkt 1.
            </p>
          </div>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            BPC er et voksent gym og et nøytralt sted der alle skal føle seg velkommen, uansett hvem du er og hvor du
            kommer fra. Vi respekterer utstyret, fasilitetene og menneskene som trener her.
          </p>
        </header>

        <ol ref={listRef} className="grid gap-2 md:grid-cols-2">
          {rules.map(({ icon: Icon, title, text }, index) => {
            const isKeyRule = index === 0
            const isActive = activeIndex === index
            return (
              <li
                key={title}
                data-rule-index={index}
                data-active={isActive}
                tabIndex={0}
                className={`group relative flex items-start gap-4 overflow-hidden rounded-xl border p-5 outline-none transition-all duration-300 ease-out before:absolute before:inset-y-0 before:left-0 before:w-1 before:origin-top before:scale-y-0 before:bg-primary before:transition-transform before:duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:before:scale-y-100 focus-visible:border-primary focus-visible:before:scale-y-100 data-[active=true]:border-primary/50 data-[active=true]:bg-card data-[active=true]:before:scale-y-100 active:scale-[0.99] ${
                  isKeyRule ? 'border-primary/40 bg-card md:col-span-2' : 'border-border'
                }`}
              >
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-semibold transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-data-[active=true]:scale-110 group-data-[active=true]:bg-primary group-data-[active=true]:text-primary-foreground ${
                    isKeyRule ? 'bg-primary text-primary-foreground' : 'border border-border text-muted-foreground'
                  }`}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3
                    className={`flex items-center gap-2 font-bold uppercase tracking-wide ${
                      isKeyRule ? 'text-lg md:text-xl' : 'text-base'
                    }`}
                  >
                    <span className="sr-only">{`Punkt ${index + 1}: `}</span>
                    {title}
                    <Icon
                      className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-125 group-data-[active=true]:scale-125"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
