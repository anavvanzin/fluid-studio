import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import App from '@/App'

function renderRota(rota: string) {
  return render(
    <MemoryRouter initialEntries={[rota]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App — rotas principais', () => {
  it('renderiza a home com hero e galeria', () => {
    renderRota('/')
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThanOrEqual(2)
  })

  it('renderiza a página sobre com retrato', () => {
    renderRota('/sobre')
    expect(screen.getByAltText(/retrato de ana vanzin/i)).toBeInTheDocument()
  })

  it('renderiza trabalhos com seis cards', () => {
    renderRota('/trabalhos')
    expect(screen.getAllByRole('link', { name: /iconocracia|atlas|defesa|trechos|metodologia|manifesto/i }).length).toBeGreaterThanOrEqual(6)
  })

  it('renderiza página de caso existente', () => {
    renderRota('/trabalhos/iconocracia')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Iconocracia')
  })

  it('renderiza fallback para caso inexistente', () => {
    renderRota('/trabalhos/inexistente')
    expect(screen.getByText(/não existe/i)).toBeInTheDocument()
  })

  it('renderiza a mesa com os interlocutores', () => {
    renderRota('/mesa')
    expect(screen.getByText('Pathosformel')).toBeInTheDocument()
    expect(screen.getByText('Imago decidendi')).toBeInTheDocument()
  })

  it('renderiza marginalia com as cinco notas', () => {
    renderRota('/marginalia')
    expect(screen.getByText(/nota I ·/)).toBeInTheDocument()
    expect(screen.getByText(/nota V ·/)).toBeInTheDocument()
  })

  it('renderiza contato com formulário front-end', () => {
    renderRota('/contato')
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument()
  })

  it('renderiza 404 para rota fora do corpus', () => {
    renderRota('/rota-que-nao-existe')
    expect(screen.getByText(/não foi catalogada/i)).toBeInTheDocument()
  })

  it('renderiza navegação com os seis itens', () => {
    renderRota('/')
    const navEl = screen.getByRole('navigation', { name: /principal/i })
    expect(navEl).toBeInTheDocument()
  })

  it('renderiza rodapé com e-mail', () => {
    renderRota('/')
    expect(screen.getAllByText('ana@anavanzin.com').length).toBeGreaterThanOrEqual(1)
  })
})
