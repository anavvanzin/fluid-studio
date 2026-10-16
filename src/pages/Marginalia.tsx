import { marginalia } from '@/config'
import { Zona } from '@/components/Zone'

export function Marginalia() {
  return (
    <>
      <Zona zone="papel" className="hero">
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p className="kicker">marginalia</p>
          <h1 className="display">
            Notas na <em className="detalhe">margem</em>
          </h1>
          <p className="prosa" style={{ marginTop: '1rem' }}>
            Cinco notas de leitura, corpus e oficina — o que se escreve na margem
            quando a página principal ainda está em disputa.
          </p>
        </div>
      </Zona>

      <Zona zone="noite">
        <div className="notas">
          {marginalia.map((n) => (
            <article key={n.id} className="nota">
              <p className="meta">nota {n.id} · {n.date}</p>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
            </article>
          ))}
        </div>
      </Zona>
    </>
  )
}
