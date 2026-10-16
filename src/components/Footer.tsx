import { Link } from 'react-router'
import { nav, site } from '@/config'

export function Footer() {
  return (
    <footer className="rodape">
      <div>
        <p className="titulo-medio" style={{ marginBottom: '0.25em' }}>
          ana vanzin<span className="detalhe" style={{ color: 'var(--ouro)' }}>.</span>
        </p>
        <p className="meta">
          {site.title} — feito com tinta bordô sobre papel · {site.depth.min.toString().padStart(4, '0')}–{site.depth.max.toString().padStart(4, '0')} {site.depth.unit}
        </p>
      </div>
      <nav aria-label="rodapé">
        {nav.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.label}
          </Link>
        ))}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </nav>
    </footer>
  )
}
