import { useEffect } from 'react'

/**
 * Adds `.is-visible` to every `.reveal` element once it scrolls into view.
 * A small stagger is applied to siblings so grids animate in sequence.
 *
 * Pass a `dep` (e.g. the active language) to re-scan the page after a
 * re-render has swapped elements out.
 */
export function useReveal(dep) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const delay = Number(entry.target.dataset.revealDelay || 0)
          setTimeout(() => entry.target.classList.add('is-visible'), delay)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [dep])
}
