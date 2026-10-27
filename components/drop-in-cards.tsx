import { SmartLink } from '@/components/smart-link'
import { dropIns } from '@/lib/site'

const formatPrice = (price: number) => price.toLocaleString('nb-NO')

export function DropInCards() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {dropIns.map((item) => (
        <li
          key={item.name}
          data-reveal
          className="flex flex-col gap-5 rounded-2xl border border-foreground/15 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-foreground" />
            Drop-in
          </p>
          <h3 className="text-pretty text-lg font-semibold leading-snug">{item.name}</h3>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">Pr besøk</span>
            <span className="text-4xl font-semibold tracking-tight">{`kr ${formatPrice(item.price)}`}</span>
          </div>
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
            {`${item.note} Ingen innmeldingsavgift og ingen binding.`}
          </p>
          <SmartLink
            href="/provetime"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Kjøp i Appen
          </SmartLink>
        </li>
      ))}
    </ul>
  )
}
