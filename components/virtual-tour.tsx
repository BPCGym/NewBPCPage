'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, Rotate3d, X } from 'lucide-react'

const TOUR_URL = 'https://my.matterport.com/show/?m=bQSMiS4e2rR'

export function VirtualTour() {
  const [active, setActive] = useState(false)

  return (
    <section id="omvisning" aria-labelledby="tour-title" className="scroll-mt-28 border-t border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-5 md:py-24">
        <div className="flex flex-col items-start gap-5 md:col-span-2">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            3D-omvisning
          </p>
          <h2 id="tour-title" className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Gå rundt i hele senteret i 3D.
          </h2>
          <a
            href={TOUR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Åpne i fullskjerm
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card md:col-span-3">
          {active ? (
            <>
              <iframe
                src={`${TOUR_URL}&play=1&qs=1`}
                title="3D-omvisning av BPC Gym"
                allow="xr-spatial-tracking; fullscreen"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
              <button
                type="button"
                onClick={() => setActive(false)}
                className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
              >
                <X className="size-4" aria-hidden="true" />
                <span className="sr-only">Lukk 3D-omvisning</span>
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setActive(true)}
              className="group absolute inset-0 size-full text-left"
            >
              <Image
                src="/images/bpc-styrkesal.jpg"
                alt=""
                fill
                loading="lazy"
                sizes="(min-width: 768px) 60vw, 100vw"
                className="tour-pan object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div aria-hidden="true" className="tour-grid absolute inset-0" />

              <span className="absolute left-4 top-4 rounded-full border border-foreground/20 bg-background/60 px-3 py-1 font-mono text-xs font-semibold tracking-widest text-foreground backdrop-blur">
                3D
              </span>

              <span className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex size-20 items-center justify-center">
                  <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                  <span className="relative flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                    <Rotate3d className="size-7" aria-hidden="true" />
                  </span>
                </span>
              </span>

              <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-foreground">Gå inn i BPC</span>
                <span className="text-xs text-foreground/70">Dra for å se deg rundt</span>
              </span>
              <span className="sr-only">Start 3D-omvisning av BPC Gym</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
