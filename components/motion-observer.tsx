'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function MotionObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('motion-ready')

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )

    const observeAll = () =>
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => io.observe(el))
    observeAll()

    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    const bar = document.getElementById('scroll-progress')
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight
        bar?.style.setProperty('--progress', String(max > 0 ? window.scrollY / max : 0))
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      mo.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return null
}
