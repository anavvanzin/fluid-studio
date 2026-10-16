import { sobre } from '@/config'
import { Figure } from '@/components/Figure'
import { Zona } from '@/components/Zone'

export function Sobre() {
  return (
    <>
      <Zona zone="papel" className="hero">
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p className="kicker">sobre</p>
          <h1 className="display">
            {sobre.heading.split(' — ')[0]}
            {sobre.heading.includes('—') && (
              <>
                {' '}
                <em className="detalhe">{sobre.heading.split(' — ')[1]}</em>
              </>
            )}
          </h1>
        </div>
      </Zona>

      <Zona zone="fundo">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          <div className="prosa">
            {sobre.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <ul className="mesa-lista" style={{ marginTop: '2rem' }}>
              {sobre.affiliations.map((a) => (
                <li key={a} style={{ display: 'block' }}>
                  <span className="meta">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <Figure
            src={sobre.portrait}
            caption="retrato — a pesquisadora à mesa"
            alt="Retrato de Ana Vanzin"
          />
        </div>
      </Zona>
    </>
  )
}
