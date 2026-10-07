import { useEffect, useState } from 'react'

/** Thin gradient bar across the top showing how far down the page you are. */
export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setWidth(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="progress-bar" style={{ width: `${width}%` }} aria-hidden="true" />
}
