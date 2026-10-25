'use client'

import { useSyncExternalStore } from 'react'

const OPEN_HOUR = 4
const CLOSE_HOUR = 23

function osloHour() {
  const hour = new Intl.DateTimeFormat('nb-NO', {
    hour: 'numeric',
    hourCycle: 'h23',
    timeZone: 'Europe/Oslo',
  }).format(new Date())
  return Number(hour)
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 60_000)
  return () => window.clearInterval(id)
}

function getSnapshot() {
  const hour = osloHour()
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR ? 'open' : 'closed'
}

export type OpenStatus = 'open' | 'closed' | 'unknown'

export function useOpenStatus(): { status: OpenStatus; label: string } {
  const status = useSyncExternalStore<OpenStatus>(subscribe, getSnapshot, () => 'unknown')
  const label =
    status === 'open' ? 'Åpent nå · til 23:00' : status === 'closed' ? 'Stengt · åpner 04:00' : 'Åpent 04–23 alle dager'
  return { status, label }
}
