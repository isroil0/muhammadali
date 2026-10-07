import { useEffect, useRef } from 'react'

/**
 * Fixed cosmic backdrop: gradient wash + drifting orbs + grid + a canvas
 * star field that gently twinkles and parallaxes with the scroll position.
 */
export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let stars = []
    let frame
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round((window.innerWidth * window.innerHeight) / 9000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.3 + 0.25,
        a: Math.random() * 0.6 + 0.15,
        speed: Math.random() * 0.012 + 0.003,
        phase: Math.random() * Math.PI * 2,
        depth: Math.random() * 0.5 + 0.2,
      }))
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      const shift = window.scrollY * 0.06

      for (const s of stars) {
        const twinkle = reduced ? s.a : s.a + Math.sin(t * s.speed + s.phase) * 0.28
        const y = s.y - shift * s.depth
        const wrapped = ((y % window.innerHeight) + window.innerHeight) % window.innerHeight

        ctx.beginPath()
        ctx.arc(s.x, wrapped, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(190, 215, 255, ${Math.max(twinkle, 0.05)})`
        ctx.fill()
      }

      frame = requestAnimationFrame(draw)
    }

    build()
    frame = requestAnimationFrame(draw)

    let resizeTimer
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(build, 180)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="bg" aria-hidden="true">
      <canvas ref={canvasRef} className="bg-stars" />
      <div className="bg-orb bg-orb--1" />
      <div className="bg-orb bg-orb--2" />
      <div className="bg-orb bg-orb--3" />
      <div className="bg-grid" />
      <div className="bg-noise" />
    </div>
  )
}
