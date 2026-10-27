import { Dumbbell, MapPin, Sparkles, Users } from 'lucide-react'

const checks = [
  { icon: Dumbbell, title: 'Utstyret', text: 'Kjenn på apparatene og vektene selv.' },
  { icon: Sparkles, title: 'Fasilitetene', text: 'Garderobe, velvære og lokalene.' },
  { icon: Users, title: 'Menneskene', text: 'Miljøet, de ansatte og stemningen.' },
  { icon: MapPin, title: 'Logistikken', text: 'Passer beliggenhet og tider for deg?' },
]

export function TrialPitch() {
  return (
    <section aria-labelledby="test-title" className="border-t border-border py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-5 md:gap-16">
        <div className="flex flex-col gap-5 md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Vårt beste råd</p>
          <h2 id="test-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Usikker? Test det ut.
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Det viktigste du kan gjøre før du bestemmer deg, er å komme hit og kjenne på det selv. Vi presser ingen
            inn i et medlemskap. Vi mener produktet taler for seg selv.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:col-span-3">
          <ul className="grid gap-3 sm:grid-cols-2">
            {checks.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                >
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <blockquote className="flex flex-col gap-2 border-l-2 border-primary pl-5">
            <p className="text-pretty text-xl font-semibold leading-snug tracking-tight md:text-2xl">
              Vi står bak produktet vårt 100 %, men du må selv stå for beslutningen.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Kjennes det riktig og passer det i hverdagen din, er valget ditt. Da er det bare å bytte senter eller
              begynne.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
