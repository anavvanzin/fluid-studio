import { describe, expect, it } from 'vitest'
import { cases, contato, home, marginalia, mesa, nav, site, sobre, tokens } from '@/config'

describe('tokens av-os', () => {
  it('define as seis cores do design system extraído do site', () => {
    expect(tokens.papel).toBe('#F5F0E6')
    expect(tokens.tinta).toBe('#171412')
    expect(tokens.bordô).toBe('#750D20')
    expect(tokens.regra).toBe('#B8A48F')
    expect(tokens.noite).toBe('#15110E')
    expect(tokens.ouro).toBe('#DECBA4')
  })
})

describe('site', () => {
  it('usa escala de profundidade 0000–0145 (o corpus)', () => {
    expect(site.depth.min).toBe(0)
    expect(site.depth.max).toBe(145)
    expect(site.depth.unit).toBe('m')
  })

  it('tem e-mail de contato válido', () => {
    expect(site.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
  })

  it('tem lede de pesquisa não vazia', () => {
    expect(site.lede.length).toBeGreaterThan(80)
  })
})

describe('navegação', () => {
  it('tem seis itens cobrindo as páginas principais', () => {
    expect(nav.map((n) => n.path)).toEqual([
      '/',
      '/sobre',
      '/trabalhos',
      '/mesa',
      '/marginalia',
      '/contato',
    ])
  })
})

describe('trabalhos (casos)', () => {
  it('tem seis casos', () => {
    expect(cases).toHaveLength(6)
  })

  it('slugs únicos', () => {
    const slugs = cases.map((c) => c.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('slugs cobrem os trabalhos do original', () => {
    expect(cases.map((c) => c.slug).sort()).toEqual(
      ['atlas', 'defesa', 'iconocracia', 'manifesto', 'metodologia', 'trechos'].sort(),
    )
  })

  it('profundidades dentro da escala do corpus', () => {
    for (const c of cases) {
      expect(c.depth).toBeGreaterThanOrEqual(site.depth.min)
      expect(c.depth).toBeLessThanOrEqual(site.depth.max)
    }
  })

  it('cada caso tem imagem, legenda, tags e dois parágrafos', () => {
    for (const c of cases) {
      expect(c.image).toMatch(/^assets\//)
      expect(c.caption.length).toBeGreaterThan(10)
      expect(c.tags.length).toBeGreaterThan(0)
      expect(c.body).toHaveLength(2)
    }
  })

  it('o caso da tese está na profundidade máxima', () => {
    const tese = cases.find((c) => c.slug === 'iconocracia')
    expect(tese?.depth).toBe(site.depth.max)
  })
})

describe('mesa de trabalho', () => {
  it('tem seis interlocutores', () => {
    expect(mesa).toHaveLength(6)
  })

  it('inclui os nomes centrais do método', () => {
    const nomes = mesa.map((m) => m.role).join(' ')
    for (const esperado of ['Warburg', 'Goodrich', 'Panofsky', 'Mondzain', 'Rancière', 'Stramignoni']) {
      expect(nomes).toContain(esperado)
    }
  })

  it('cada item tem nota explicativa', () => {
    for (const m of mesa) {
      expect(m.note.length).toBeGreaterThan(40)
    }
  })
})

describe('marginalia', () => {
  it('tem cinco notas numeradas em algarismos romanos', () => {
    expect(marginalia).toHaveLength(5)
    expect(marginalia.map((n) => n.id)).toEqual(['I', 'II', 'III', 'IV', 'V'])
  })
})

describe('galeria da home', () => {
  it('tem oito peças com legenda', () => {
    expect(home.gallery).toHaveLength(8)
    for (const g of home.gallery) {
      expect(g.src).toMatch(/^assets\//)
      expect(g.caption.length).toBeGreaterThan(3)
    }
  })

  it('hero tem título e frontispício', () => {
    expect(home.heroTitle.length).toBeGreaterThan(10)
    expect(home.heroImage).toMatch(/^assets\//)
  })
})

describe('sobre', () => {
  it('tem retrato e três parágrafos', () => {
    expect(sobre.portrait).toMatch(/^assets\//)
    expect(sobre.paragraphs).toHaveLength(3)
  })

  it('declara afiliações', () => {
    expect(sobre.affiliations.length).toBeGreaterThanOrEqual(2)
  })
})

describe('contato', () => {
  it('declara honestamente que o formulário não persiste', () => {
    expect(contato.note).toMatch(/front-end|persist/i)
    expect(contato.sentMessage).toMatch(/não (persiste|enviado)|não persiste/i)
  })
})
