import type { ReactNode } from 'react'

export type ZonaProps = {
  zone?: 'papel' | 'fundo' | 'borda' | 'noite'
  children: ReactNode
  className?: string
  id?: string
}

/**
 * Zona de profundidade — as seções da "descida":
 * papel → papel fundo → banda bordô → abismo noturno com ouro.
 */
export function Zona({ zone = 'papel', children, className = '', id }: ZonaProps) {
  return (
    <section id={id} data-zone={zone} className={`zona zona-${zone} ${className}`}>
      {children}
    </section>
  )
}
