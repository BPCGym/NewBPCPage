'use client'

import { useEffect, useRef, useState } from 'react'
import { Ban, Camera, Dumbbell, HandHeart, Home, Shirt, SprayCan } from 'lucide-react'

const keyRule = {
  icon: Home,
  title: 'Behandle BPC som ditt eget hjem',
  text: 'Rydd etter deg, hold orden der andre ikke har klart det, og hjelp til. Det er det eneste vi krever av hvert medlem.',
}

const rules = [
  {
    icon: SprayCan,
    title: 'Rengjør apparater etter bruk',
    text: 'Bruk renholdsstasjonene. Det er et krav, og det koster deg ingenting.',
  },
  {
    icon: Camera,
    title: 'Ikke film andre uten at de vet det',
    text: 'Skal du filme til et prosjekt, avtal et eget tidspunkt sent på kvelden med oss.',
  },
  {
    icon: Dumbbell,
    title: 'Slipp vekter kun på løftestasjonene',
    text: 'Vi har 10 løftestasjoner spesiallaget for vektløfting.',
  },
  {
    icon: Shirt,
    title: 'Tren i klær som tar hensyn',
    text: 'Singlet er lov, men ta hensyn hvis den er veldig tynn og åpen. Det er ikke alle som vil se nipplene dine.',
  },
  {
    icon: HandHeart,
    title: 'Ingen bråk av umodenhet',
    text: 'Hard trening kan høres. Unødvendig rop og tull hører ikke hjemme her.',
  },
] as const

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

function RulesHeading() {
  const { ref, inView } = useInView<HTMLHeadingElement>()

  return (
    <h2
      ref={ref}
      id="gymregler-title"
      className="text-balance text-6xl font-black uppercase leading-none tracking-tighter md:text-8xl"
    >
      <span className="sr-only">Gymregler</span>
      <span
  aria-hidden="true"
  className="inline-block origin-center cursor-default transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
  >
  <span className={inView ? 'culture whitespace-nowrap' : 'invisible whitespace-nowrap'}>
        <svg className="culture-brush" viewBox="0 0 400 100" preserveAspectRatio="none" focusable="false">
          <defs>
            <linearGradient id="rules-brush-fill" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" className="culture-stop-blue" />
              <stop offset="55%" className="culture-stop-mid" />
              <stop offset="100%" className="culture-stop-violet" />
            </linearGradient>
            <filter id="rules-brush-rough" x="-5%" y="-20%" width="110%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.035 0.6" numOctaves="2" seed="11" />
              <feDisplacementMap in="SourceGraphic" scale="9" />
            </filter>
          </defs>
          <path
            filter="url(#rules-brush-rough)"
            fill="url(#rules-brush-fill)"
            d="M4 62 C 40 48, 120 40, 210 38 C 290 36, 360 34, 398 30 L 392 70 C 340 76, 270 80, 190 82 C 110 84, 50 86, 10 92 C 2 82, 0 72, 4 62 Z"
          />
          <path
            className="culture-brush-sheen"
            filter="url(#rules-brush-rough)"
            d="M4 62 C 40 48, 120 40, 210 38 C 290 36, 360 34, 398 30 L 392 70 C 340 76, 270 80, 190 82 C 110 84, 50 86, 10 92 C 2 82, 0 72, 4 62 Z"
          />
        </svg>
        <span className="culture-word">Gymregler</span>
        <span className="culture-dot">.</span>
        <span className="culture-spark culture-spark-1" />
  <span className="culture-spark culture-spark-2" />
  </span>
  </span>
  </h2>
  )
}

export function GymRules() {
  const KeyIcon = keyRule.icon

  return (
    <section
      id="gymregler"
      aria-labelledby="gymregler-title"
      className="scroll-mt-24 overflow-hidden border-t border-border py-14 md:py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <RulesHeading />
          <p className="flex w-fit shrink-0 items-center gap-2 rounded-md border-2 border-primary px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-primary md:mb-3">
            <Ban className="size-4" aria-hidden="true" />
            Brudd = utestengelse
          </p>
        </div>
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          BPC er et voksent gym og et nøytralt sted der alle skal føle seg velkommen. Reglene er få, men vi håndhever
          dem strengt.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-3 px-6 md:mt-12">
        <article
          aria-labelledby="rule-1-title"
          className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border-2 border-primary bg-card p-6 md:flex-row md:items-center md:gap-8 md:p-8"
        >
          <span
            aria-hidden="true"
            className="text-7xl font-black leading-none tracking-tighter text-primary md:text-8xl"
          >
            1
          </span>
          <div className="flex flex-1 flex-col gap-2">
            <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary">
              <KeyIcon className="size-4" aria-hidden="true" />
              Viktigste regel
            </p>
            <h3 id="rule-1-title" className="text-balance text-2xl font-black uppercase tracking-tight md:text-4xl">
              <span className="sr-only">Punkt 1: </span>
              {keyRule.title}
            </h3>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{keyRule.text}</p>
          </div>
        </article>

        <ol className="flex flex-col" start={2}>
          {rules.map(({ icon: Icon, title, text }, index) => {
            const number = index + 2
            return (
              <li
                key={title}
                tabIndex={0}
                className="group relative grid grid-cols-[3.5rem_1fr] items-center gap-x-4 gap-y-1 border-b border-border py-5 outline-none transition-colors duration-300 hover:bg-card focus-visible:bg-card md:grid-cols-[5rem_minmax(0,1.1fr)_minmax(0,1fr)] md:gap-x-8 md:px-4"
              >
                <span
                  aria-hidden="true"
                  className="text-outline row-span-2 text-5xl font-black leading-none tracking-tighter transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary group-hover:[-webkit-text-stroke-color:var(--primary)] group-focus-visible:text-primary md:row-span-1 md:text-6xl"
                >
                  {number}
                </span>
                <h3 className="flex items-center gap-2 text-pretty text-lg font-black uppercase tracking-tight md:text-xl">
                  <span className="sr-only">{`Punkt ${number}: `}</span>
                  {title}
                  <Icon
                    className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125"
                    aria-hidden="true"
                  />
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">{text}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
