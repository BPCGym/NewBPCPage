'use client'

import { Pause, Play } from 'lucide-react'
import { useRef, useState } from 'react'

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)

  const toggle = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      void video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <video
        ref={ref}
        className="hero-zoom absolute inset-0 size-full object-cover"
        src="/media/bpc-gym.mp4"
        poster="/images/bpc-styrkesal.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute right-6 top-32 z-10 inline-flex size-11 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-md transition-colors hover:bg-background/90"
      >
        {playing ? <Pause aria-hidden="true" className="size-4" /> : <Play aria-hidden="true" className="size-4" />}
        <span className="sr-only">{playing ? 'Pause bakgrunnsvideo' : 'Spill av bakgrunnsvideo'}</span>
      </button>
    </>
  )
}
