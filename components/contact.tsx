import { Mail, MapPin, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const contactItems = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Lyderhornsveien 287, 5171 Loddefjord',
    href: 'https://www.google.com/maps/search/?api=1&query=Lyderhornsveien+287+5171+Loddefjord',
  },
  { icon: Phone, label: 'Telefon', value: '938 82 777', href: 'tel:+4793882777' },
  { icon: Mail, label: 'E-post', value: 'post@bpcgym.no', href: 'mailto:post@bpcgym.no' },
]

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                Klar for å bli med?
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed opacity-80">
                Ta kontakt eller kom innom i bemannet tid, så hjelper vi deg i gang.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+4793882777"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'h-12 rounded-full bg-primary-foreground px-7 text-base text-primary [a]:hover:bg-primary-foreground/90',
                )}
              >
                Ring oss
              </a>
              <a
                href="mailto:post@bpcgym.no"
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'h-12 rounded-full border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
                )}
              >
                Send e-post
              </a>
            </div>
          </div>
        </div>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  <span className="block text-sm text-muted-foreground">{label}</span>
                  <span className="mt-1 block font-medium">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
