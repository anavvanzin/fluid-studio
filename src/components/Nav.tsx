import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { nav, site } from '@/config'

export function Nav() {
  const { pathname } = useLocation()
  const [aberto, setAberto] = useState(false)

  const atual = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <header className="nav">
      <Link to="/" className="nav-marca" onClick={() => setAberto(false)}>
        ana vanzin<span>.</span>
      </Link>

      <button
        type="button"
        className="nav-burger"
        aria-expanded={aberto}
        aria-controls="nav-links"
        onClick={() => setAberto((v) => !v)}
      >
        menu
      </button>

      <nav
        id="nav-links"
        className={`nav-links${aberto ? ' aberto' : ''}`}
        aria-label="navegação principal"
      >
        {nav.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            aria-current={atual(item.path) ? 'page' : undefined}
            onClick={() => setAberto(false)}
          >
            {item.label}
          </Link>
        ))}
        <span className="meta">{site.email}</span>
      </nav>
    </header>
  )
}
