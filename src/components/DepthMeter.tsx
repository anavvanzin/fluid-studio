import { useEffect, useState } from 'react'
import { site } from '@/config'

const formatar = (n: number) =>
  String(Math.round(n)).padStart(4, '0') + ' ' + site.depth.unit

/**
 * Medidor de profundidade 0000–0145 m — o corpus como escala.
 * Acompanha o scroll da página e muda para ouro nas zonas noturnas.
 */
export function DepthMeter() {
  const [progresso, setProgresso] = useState(0)
  const [noite, setNoite] = useState(false)

  useEffect(() => {
    const aoRolar = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgresso(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    window.addEventListener('resize', aoRolar)

    const observador = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setNoite(entry.target.getAttribute('data-zone') === 'noite')
          }
        }
      },
      { threshold: 0.35 },
    )
    document
      .querySelectorAll('[data-zone]')
      .forEach((el) => observador.observe(el))

    return () => {
      window.removeEventListener('scroll', aoRolar)
      window.removeEventListener('resize', aoRolar)
      observador.disconnect()
    }
  }, [])

  const profundidade = site.depth.min + progresso * (site.depth.max - site.depth.min)

  return (
    <div
      className={`meter${noite ? ' meter-noite' : ''}`}
      role="meter"
      aria-valuemin={site.depth.min}
      aria-valuemax={site.depth.max}
      aria-valuenow={Math.round(profundidade)}
      aria-label="profundidade no corpus"
    >
      <span>{formatar(site.depth.min)}</span>
      <div className="meter-trilho">
        <div className="meter-marcador" style={{ top: `${progresso * 100}%` }} />
      </div>
      <span aria-hidden="true">{formatar(profundidade)}</span>
      <span className="meter-max">{formatar(site.depth.max)}</span>
    </div>
  )
}
