import Image from 'next/image'
import { cn } from '@/lib/utils'

const stores = [
  {
    href: 'https://play.google.com/store/apps/details?id=com.sicssystemas.mintrening&hl=no',
    icon: '/icons/google-play.svg',
    kicker: 'Last ned på',
    name: 'Google Play',
    label: 'Last ned Min Trening på Google Play',
  },
  {
    href: 'https://apps.apple.com/no/app/min-trening/id1481636666',
    icon: '/icons/apple.svg',
    kicker: 'Last ned i',
    name: 'App Store',
    label: 'Last ned Min Trening i App Store',
  },
]

export function AppBadges({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/70">
        Appen Min Trening
      </p>
      <ul className="flex flex-wrap gap-3">
        {stores.map((store) => (
          <li key={store.name}>
            <a
              href={store.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={store.label}
              className="group flex h-14 items-center gap-3 rounded-xl border border-foreground/25 bg-background/85 px-4 text-foreground backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-foreground/60 hover:bg-background hover:shadow-[0_10px_30px_-10px_var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Image
                src={store.icon}
                alt=""
                width={24}
                height={24}
                className="size-6 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] font-medium uppercase tracking-wide text-foreground/75">{store.kicker}</span>
                <span className="text-lg font-semibold tracking-tight">{store.name}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
