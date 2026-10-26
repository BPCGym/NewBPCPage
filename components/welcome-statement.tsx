import { ArrowDown } from 'lucide-react'

const line = 'Du har nå kommet til riktig sted.'.split(' ')

export function WelcomeStatement() {
  return (
    <section aria-labelledby="velkommen-title" className="relative overflow-hidden px-6 pb-2 pt-14 md:pb-4 md:pt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <h2
          id="velkommen-title"
          className="welcome-reveal text-balance text-6xl font-semibold leading-none tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="shine-text">Velkommen.</span>
        </h2>
        <p className="text-balance text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {line.map((word, i) => (
            <span key={i} className="welcome-word" style={{ '--i': i } as React.CSSProperties}>
              {word}{' '}
            </span>
          ))}
        </p>
        <p className="welcome-reveal text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {'Om du tar '}
          <span className="relative inline-block font-semibold text-foreground">
            steget
            <svg
              aria-hidden="true"
              viewBox="0 0 120 14"
              preserveAspectRatio="none"
              className="welcome-swoosh absolute -bottom-2 left-0 h-3 w-full text-primary"
            >
              <path
                d="M2 9 C 30 3, 70 2, 118 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength={1}
              />
            </svg>
          </span>
          {', er nå helt opp til deg.'}
        </p>
        <a
          href="#medlemskap-tilbud"
          aria-label="Se medlemskap"
          className="welcome-nudge mt-2 flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ArrowDown className="size-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
