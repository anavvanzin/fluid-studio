import { Link, useParams } from 'react-router'
import { cases, site } from '@/config'
import { Figure } from '@/components/Figure'
import { Zona } from '@/components/Zone'

export function CasePage() {
  { /* página de caso — cada trabalho com sua própria descida */ }
  const { slug } = useParams()
  const caso = cases.find((c) => c.slug === slug)

  if (!caso) {
    return (
      <Zona zone="papel" className="hero">
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p className="kicker">caso não encontrado</p>
          <h1 className="display">Esta camada <em className="detalhe">não existe</em></h1>
          <p>
            <Link className="botao" to="/trabalhos">
              voltar aos trabalhos
            </Link>
          </p>
        </div>
      </Zona>
    )
  }

  return (
    <>
      <Zona zone="papel" className="hero">
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '52rem' }}>
          <p className="kicker">
            trabalho · {caso.depth.toString().padStart(4, '0')} {site.depth.unit}
          </p>
          <h1 className="display">
            {caso.title}
            {caso.subtitle && (
              <>
                {' '}
                <em className="detalhe" style={{ fontSize: '0.55em' }}>{caso.subtitle}</em>
              </>
            )}
          </h1>
          <p className="meta" style={{ marginTop: '1rem' }}>
            {caso.tags.join(' · ')}
          </p>
        </div>
      </Zona>

      <Zona zone="fundo">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          <div className="prosa">
            {caso.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p style={{ marginTop: '2rem' }}>
              <Link className="botao" to="/trabalhos">
                ← todos os trabalhos
              </Link>
            </p>
          </div>
          <Figure src={caso.image} caption={caso.caption} alt={caso.caption} />
        </div>
      </Zona>
    </>
  )
}
