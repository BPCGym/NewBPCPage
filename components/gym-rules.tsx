import { SectionHeading } from '@/components/section-heading'
import { gymRules } from '@/lib/site'

export function GymRules() {
  return (
    <section id="regler" aria-labelledby="regler-title" className="scroll-mt-28 border-t border-border bg-card py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
          <SectionHeading id="regler-title" eyebrow="Husregler" title="Slik tar vi vare på gymmet og hverandre." />
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Noen få enkle regler gjør at alle får en god økt. Les dem før første besøk.
          </p>
        </div>

        <ul className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {gymRules.items.map((rule, i) => (
            <li
              key={rule.title}
              data-reveal
              style={{ '--d': `${(i % 3) * 100}ms` } as React.CSSProperties}
              className="group flex flex-col gap-2 border-b border-border py-6 transition-colors hover:bg-background/40 sm:px-4"
            >
              <h3 className="flex items-center gap-3 text-lg font-semibold">
                <span
                  aria-hidden="true"
                  className="size-2 rotate-45 border border-primary transition-colors group-hover:bg-primary"
                />
                {rule.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{rule.text}</p>
            </li>
          ))}
        </ul>

        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">{gymRules.footnote}</p>
      </div>
    </section>
  )
}
