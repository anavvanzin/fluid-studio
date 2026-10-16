import { mesa } from '@/config'
import { Zona } from '@/components/Zone'

export function Mesa() {
  return (
    <>
      <Zona zone="papel" className="hero">
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p className="kicker">mesa de trabalho</p>
          <h1 className="display">
            Os <em className="detalhe">interlocutores</em> à mesa
          </h1>
          <p className="prosa" style={{ marginTop: '1rem' }}>
            Os conceitos e as vozes com os quais a tese conversa todos os dias —
            de Warburg a Stramignoni, cada um com seu lugar e sua função no argumento.
          </p>
        </div>
      </Zona>

      <Zona zone="fundo">
        <ul className="mesa-lista">
          {mesa.map((item) => (
            <li key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <span className="meta">{item.role}</span>
              </div>
              <p>{item.note}</p>
            </li>
          ))}
        </ul>
      </Zona>
    </>
  )
}
