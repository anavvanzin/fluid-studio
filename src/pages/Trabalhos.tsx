import { Link } from 'react-router'
import { cases, site } from '@/config'
import { Zona } from '@/components/Zone'

export function Trabalhos() {
  return (
    <>
      <Zona zone="papel" className="hero">
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p className="kicker">trabalhos</p>
          <h1 className="display">
            O corpus em <em className="detalhe">camadas</em>
          </h1>
          <p className="prosa" style={{ marginTop: '1rem' }}>
            Seis trabalhos, seis profundidades. Cada card abre a página de caso;
            a numeração é a posição do trabalho na escala do corpus.
          </p>
        </div>
      </Zona>

      <Zona zone="fundo">
        <div className="grade-casos">
          {cases.map((c) => (
            <Link key={c.slug} to={`/trabalhos/${c.slug}`} className="caso-card">
              <img src={c.image} alt={c.caption} loading="lazy" />
              <h3>{c.title}</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>{c.subtitle}</p>
              <span className="meta">
                {c.depth.toString().padStart(4, '0')} {site.depth.unit} · {c.tags.join(' · ')}
              </span>
            </Link>
          ))}
        </div>
      </Zona>
    </>
  )
}
