import { useEffect, useRef } from 'react'
import { tokens } from '@/config'

type Blob = {
  x: number
  y: number
  r: number
  fase: number
  velocidade: number
  raio: number
  alfa: number
}

/**
 * FluidHero — "tinta bordô sobre espuma de papel".
 * Simulação 2D leve: manchas de tinta com queda radial,
 * deriva por campos senoidais e perturbação pelo ponteiro.
 * Respeita prefers-reduced-motion (renderiza 1 frame estático)
 * e pausa quando fora da tela.
 */
export function FluidCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let largura = 0
    let altura = 0
    let raf = 0
    let ativo = true
    let t = 0
    const ponteiro = { x: 0.5, y: 0.4, forca: 0 }

    let manchas: Blob[] = []

    const semear = () => {
      const n = largura < 700 ? 6 : 9
      manchas = Array.from({ length: n }, (_, i) => ({
        x: Math.random(),
        y: Math.random() * 0.9,
        r: 0.09 + Math.random() * 0.16,
        fase: (i / n) * Math.PI * 2,
        velocidade: 0.12 + Math.random() * 0.22,
        raio: 0.6 + Math.random() * 0.5,
        alfa: 0.5 + Math.random() * 0.35,
      }))
    }

    const dimensionar = () => {
      const rect = canvas.getBoundingClientRect()
      largura = Math.max(1, rect.width)
      altura = Math.max(1, rect.height)
      canvas.width = Math.round(largura * dpr)
      canvas.height = Math.round(altura * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const pintarFundo = () => {
      ctx.fillStyle = tokens.papel
      ctx.fillRect(0, 0, largura, altura)
    }

    const desenhar = () => {
      // rastro: sobrepõe papel com alpha baixo → rastro de tinta na espuma
      ctx.fillStyle = 'rgba(245, 240, 230, 0.16)'
      ctx.fillRect(0, 0, largura, altura)

      for (const m of manchas) {
        m.fase += 0.004 * m.velocidade * 60
        const ox = Math.sin(m.fase + m.y * 4) * 0.06
        const oy = Math.cos(m.fase * 0.8 + m.x * 3) * 0.05
        let px = (m.x + ox) * largura
        let py = (m.y + oy) * altura

        // perturbação do ponteiro: a tinta foge da mão
        const dx = px - ponteiro.x * largura
        const dy = py - ponteiro.y * altura
        const dist = Math.hypot(dx, dy) || 1
        const alcance = Math.min(largura, altura) * 0.35
        if (dist < alcance && ponteiro.forca > 0) {
          const empurrao = (1 - dist / alcance) * 46 * ponteiro.forca
          px += (dx / dist) * empurrao
          py += (dy / dist) * empurrao
        }

        const raio = m.r * Math.min(largura, altura) * (0.85 + 0.15 * Math.sin(m.fase * m.raio))
        const g = ctx.createRadialGradient(px, py, 0, px, py, raio)
        g.addColorStop(0, `rgba(117, 13, 32, ${0.34 * m.alfa})`)
        g.addColorStop(0.55, `rgba(117, 13, 32, ${0.12 * m.alfa})`)
        g.addColorStop(1, 'rgba(117, 13, 32, 0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(px, py, raio, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const quadro = () => {
      if (!ativo) return
      t += 1
      desenhar()
      raf = requestAnimationFrame(quadro)
    }

    const aoMover = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      ponteiro.x = (e.clientX - rect.left) / rect.width
      ponteiro.y = (e.clientY - rect.top) / rect.height
      ponteiro.forca = Math.min(1, ponteiro.forca + 0.08)
    }

    dimensionar()
    semear()
    pintarFundo()

    if (reduzir) {
      for (let i = 0; i < 90; i += 1) desenhar()
    } else {
      raf = requestAnimationFrame(quadro)
      window.addEventListener('pointermove', aoMover, { passive: true })
    }

    const observador = new IntersectionObserver(([entry]) => {
      if (reduzir) return
      if (entry.isIntersecting && !ativo) {
        ativo = true
        raf = requestAnimationFrame(quadro)
      } else if (!entry.isIntersecting && ativo) {
        ativo = false
        cancelAnimationFrame(raf)
      }
    })
    observador.observe(canvas)

    const aoRedimensionar = () => {
      dimensionar()
      pintarFundo()
    }
    window.addEventListener('resize', aoRedimensionar)

    return () => {
      ativo = false
      cancelAnimationFrame(raf)
      observador.disconnect()
      window.removeEventListener('resize', aoRedimensionar)
      window.removeEventListener('pointermove', aoMover)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" data-testid="fluid-canvas" />
}
