import { ChevronDown } from 'lucide-react'
import type { TermsBlock, TermsDocument as TermsDoc } from '@/lib/terms'

function Block({ block }: { block: TermsBlock }) {
  if (typeof block === 'string') {
    return <p className="text-pretty leading-relaxed text-muted-foreground">{block}</p>
  }
  if ('heading' in block) {
    return <h4 className="pt-2 font-semibold text-foreground">{block.heading}</h4>
  }
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 leading-relaxed text-muted-foreground marker:text-primary">
      {block.list.map((item) => (
        <li key={item} className="text-pretty">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function TermsDocument({ doc }: { doc: TermsDoc }) {
  return (
    <section id={doc.id} aria-labelledby={`${doc.id}-title`} className="flex scroll-mt-28 flex-col gap-6">
      <h2 id={`${doc.id}-title`} className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
        {doc.title}
      </h2>
      <div className="flex flex-col gap-3">
        {doc.intro.map((p) => (
          <p key={p} className="text-pretty leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </div>
      <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
        {doc.sections.map((section) => (
          <details key={section.id} id={section.id} className="group scroll-mt-28">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
              <span className="text-pretty">{section.title}</span>
              <ChevronDown
                aria-hidden="true"
                className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="flex flex-col gap-4 px-6 pb-6">
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
