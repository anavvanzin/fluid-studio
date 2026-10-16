import { Link } from 'react-router'
import { Zona } from '@/components/Zone'

export function NotFound() {
  return (
    <Zona zone="papel" className="hero">
      <div style={{ position: 'relative', zIndex: 2 }}>
        <p className="kicker">404 · fora do corpus</p>
        <h1 className="display">
          Esta profundidade <em className="detalhe">não foi catalogada</em>
        </h1>
        <p>
          <Link className="botao" to="/">
            voltar à superfície
          </Link>
        </p>
      </div>
    </Zona>
  )
}
