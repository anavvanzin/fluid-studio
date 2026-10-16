import { Link } from 'react-router'
import { cases, home, site } from '@/config'
import { FluidCanvas } from '@/components/FluidCanvas'
import { Figure } from '@/components/Figure'
import { Zona } from '@/components/Zone'

export function Home() {
  return (
    <>
      {/* descida 1 — papel: hero fluido */}
      <section className="hero" data-zone="papel">
        <FluidCanvas className="hero-canvas" />
        <img className="hero-frontispicio" src={home.heroImage} alt="" aria-hidden="true" />
        <div className="hero-conteudo">
          <p className="kicker">{home.heroKicker}</p>
          <h1 className="display">
            A <em>mulher-alegoria</em> assina o direito
          </h1>
          <p className="prosa" style={{ maxWidth: '44rem', marginTop: '1.25rem' }}>
            {site.lede}
          </p>
          <p style={{ marginTop: '1.75rem' }}>
            <Link className="botao" to="/trabalhos">
              descer ao corpus ↓
            </Link>
          </p>
        </div>
        <div className="hero-legenda meta">
          <span>{home.heroCaption}</span>
          <span>
            profundidade {site.depth.min.toString().padStart(4, '0')}–
            {site.depth.max.toString().padStart(4, '0')} {site.depth.unit}
          </span>
        </div>
      </section>

      {/* descida 2 — papel fundo: trabalhos */}
      <Zona zone="fundo">
        <p className="kicker">trabalhos</p>
        <h2 className="titulo-grande">Seis camadas do <em className="detalhe">argumento</em></h2>
        <p className="prosa" style={{ marginBottom: '2.5rem' }}>
          Cada trabalho é uma profundidade diferente do mesmo mergulho: da tese ao
          manifesto, a alegoria feminina como operadora epistêmica da legitimidade jurídica.
        </p>
        <div className="grade-casos">
          {cases.map((c) => (
            <Link key={c.slug} to={`/trabalhos/${c.slug}`} className="caso-card">
              <img src={c.image} alt={c.caption} loading="lazy" />
              <h3>{c.title}</h3>
              <span className="meta">
                {c.depth.toString().padStart(4, '0')} {site.depth.unit} · {c.tags.join(' · ')}
              </span>
            </Link>
          ))}
        </div>
      </Zona>

      <hr className="regua" />

      {/* descida 3 — banda bordô */}
      <Zona zone="borda">
        <p className="kicker">a escala</p>
        <h2 className="titulo-grande">
          O corpus é a <em className="detalhe">profundidade</em>
        </h2>
        <p className="prosa">
          O medidor à direita não é decoração: cada metro é uma peça do corpus
          iconográfico. Descer a página é descer pela coleção — do frontispício
          às contraprovas contemporâneas.
        </p>
      </Zona>

      {/* descida 4 — abismo noturno com ouro: galeria do corpus */}
      <Zona zone="noite">
        <p className="kicker">galeria do corpus</p>
        <h2 className="titulo-grande">
          Figuras que <em className="detalhe">decidem</em>
        </h2>
        <div className="galeria" style={{ marginTop: '2.5rem' }}>
          {home.gallery.map((g) => (
            <Figure key={g.src} src={g.src} caption={g.caption} />
          ))}
        </div>
      </Zona>
    </>
  )
}
