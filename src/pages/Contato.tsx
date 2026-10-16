import { useState } from 'react'
import { contato, site } from '@/config'
import { Zona } from '@/components/Zone'

export function Contato() {
  const [enviado, setEnviado] = useState(false)

  return (
    <>
      <Zona zone="papel" className="hero">
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p className="kicker">contato</p>
          <h1 className="display">
            {contato.heading.split(' para ')[0]} para a{' '}
            <em className="detalhe">mesa</em>
          </h1>
          <p className="prosa" style={{ marginTop: '1rem' }}>
            {contato.note}
          </p>
          <p className="meta" style={{ marginTop: '1rem' }}>
            e-mail direto: <a href={`mailto:${site.email}`} style={{ color: 'var(--bordô)' }}>{site.email}</a>
          </p>
        </div>
      </Zona>

      <Zona zone="fundo">
        {enviado ? (
          <p className="prosa" role="status">
            {contato.sentMessage}
          </p>
        ) : (
          <form
            className="formulario"
            onSubmit={(e) => {
              e.preventDefault()
              setEnviado(true)
            }}
          >
            <label>
              nome
              <input name="nome" type="text" required autoComplete="name" />
            </label>
            <label>
              e-mail
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              mensagem
              <textarea name="mensagem" rows={6} required />
            </label>
            <button className="botao" type="submit">
              lacrar e enviar
            </button>
          </form>
        )}
      </Zona>
    </>
  )
}
