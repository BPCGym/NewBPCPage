'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSyncExternalStore } from 'react'
import { Flame, QrCode, Snowflake, Star } from 'lucide-react'
import { useOpenStatus } from '@/lib/use-open-status'
import { cn } from '@/lib/utils'

const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/rLJWrHZNQPgFGBcj9'

function osloMinutes() {
  const parts = new Intl.DateTimeFormat('nb-NO', {
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
    timeZone: 'Europe/Oslo',
  }).formatToParts(new Date())
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0)
  return get('hour') * 60 + get('minute')
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000)
  return () => window.clearInterval(id)
}

function ClockDial({ closed }: { closed: boolean }) {
  const minutes = useSyncExternalStore(subscribe, osloMinutes, () => 12 * 60)
  const needle = (minutes / 1440) * 360

  return (
    <svg viewBox="0 0 40 40" className="size-full">
      <circle cx="20" cy="20" r="16" fill="none" className="stroke-foreground/10" strokeWidth="3" />
      <circle
        cx="20"
        cy="20"
        r="16"
        fill="none"
        pathLength={24}
        strokeDasharray="19 5"
        strokeLinecap="round"
        strokeWidth="3"
        transform="rotate(-30 20 20)"
        className={cn('island-arc', closed ? 'stroke-muted-foreground' : 'stroke-primary')}
      />
      <g className="island-needle" style={{ transform: `rotate(${needle}deg)` }}>
        <line x1="20" y1="9" x2="20" y2="3.5" className="stroke-foreground" strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="20" cy="20" r="2" className="fill-foreground" />
    </svg>
  )
}

const itemClass =
  'flex items-center gap-3 rounded-full px-3 py-2 pr-5 transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-foreground/5'
const visClass = 'relative grid size-10 shrink-0 place-items-center rounded-full bg-foreground/5 ring-1 ring-inset ring-foreground/10'

export function HeroIsland() {
  const { status } = useOpenStatus()
  const closed = status === 'closed'

  return (
    <ul aria-label="Kort om BPC" className="island relative flex flex-wrap items-center gap-1 rounded-3xl p-2 sm:rounded-full">
      <li className={cn(itemClass, 'hover:translate-y-0 hover:bg-transparent')}>
        <span aria-hidden="true" className={visClass}>
          <ClockDial closed={closed} />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <span aria-hidden="true" className="relative flex size-2">
              {!closed && <span className="absolute inset-0 animate-ping rounded-full bg-live opacity-70" />}
              <span className={cn('relative size-2 rounded-full', closed ? 'bg-muted-foreground' : 'bg-live')} />
            </span>
            <span aria-live="polite">{closed ? 'Stengt nå' : 'Åpent nå'}</span>
          </span>
          <span className="mt-0.5 text-xs text-muted-foreground">04–23 · alle dager hele året</span>
        </span>
      </li>

      <li>
        <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={itemClass}>
          <span aria-hidden="true" className={cn(visClass, 'bg-star/15')}>
            <Star className="island-twinkle size-5 fill-star text-star" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="flex items-center gap-2 text-sm font-semibold">
              4,9
              <span className="relative text-xs tracking-wider text-foreground/20" aria-label="4,9 av 5 stjerner">
                ★★★★★
                <span aria-hidden="true" className="island-stars absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-star">
                  ★★★★★
                </span>
              </span>
            </span>
            <span className="mt-0.5 text-xs text-muted-foreground">56 Google-anmeldelser</span>
          </span>
        </a>
      </li>

      <li>
        <Link href="/velvaere" className={itemClass}>
          <span aria-hidden="true" className={cn(visClass, 'overflow-hidden')}>
            <span className="island-spa-orb absolute inset-1 rounded-full" />
            <Flame className="relative size-5 text-foreground" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Badstue</span>
            <span className="mt-0.5 text-xs text-muted-foreground">Egen velværeavdeling</span>
          </span>
        </Link>
      </li>

      <li>
        <Link href="/velvaere#isbad-2027" className={itemClass}>
          <span aria-hidden="true" className={cn(visClass, 'overflow-hidden')}>
            <Image src="/images/isbad-2027.png" alt="" fill sizes="40px" className="object-cover" />
            <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-foreground/20" />
            <Snowflake className="island-twinkle relative size-4 text-foreground drop-shadow" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Premium isbad</span>
            <span className="mt-0.5 text-xs font-medium text-primary">Kommer 2027</span>
          </span>
        </Link>
      </li>

      <li>
        <Link href="/provetime" className={itemClass}>
          <span aria-hidden="true" className={cn(visClass, 'overflow-hidden')}>
            <QrCode className="size-5 text-primary" />
            <span className="island-scan absolute inset-x-1.5 h-0.5 rounded-full bg-primary" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">QR-kode</span>
            <span className="mt-0.5 text-xs text-muted-foreground">Tilgang i appen</span>
          </span>
        </Link>
      </li>
    </ul>
  )
}
