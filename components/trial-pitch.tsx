import { BadgeCheck, Dumbbell, MapPin, Sparkles, Users } from 'lucide-react'

const checks = [
  { icon: Dumbbell, title: 'Utstyret', text: 'Kjenn på apparatene og vektene selv.' },
  { icon: Sparkles, title: 'Fasilitetene', text: 'Garderobe, velvære og lokalene.' },
  { icon: Users, title: 'Menneskene', text: 'Miljøet, de ansatte og stemningen.' },
  { icon: MapPin, title: 'Logistikken', text: 'Passer beliggenhet og tider for deg?' },
]

export function TrialPitch() {
  return (
    <section aria-labelledby="test-title" className="border-t border-border py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-5 md:items-center md:gap-16">
        <div className="flex flex-col gap-5 md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Vårt beste råd</p>
          <h2 id="test-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Usikker? Test det ut.
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Det viktigste du kan gjøre før du bestemmer deg, er å komme hit og kjenne på det selv. Vi presser ingen
            inn i et medlemskap. Vi mener produktet taler for seg selv.
          </p>
          <p className="flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 p-4 font-semibold leading-relaxed">
            <BadgeCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
            <span className="text-pretty">Vi står bak produktet vårt 100 %, men du må selv stå for beslutningen.</span>
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 md:col-span-3">
          {checks.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary/40 transition-transform duration-300 group-hover:scale-105"
              >
                <Icon className="size-6" strokeWidth={2.25} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold leading-tight">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
