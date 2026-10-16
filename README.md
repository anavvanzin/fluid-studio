# fluid-studio (instância av-os)

Reconstrução do app React "fluid-studio" adaptado ao design system av-os de
anavanzin.com — build de outubro/2026 perdido com a máquina anterior (commit
local `c2b7639`, nunca enviado ao GitHub), reescrito a partir da transcrição
da sessão original ("Anavanzin Web App Build.docx").

## Stack

React 19 + TypeScript + Vite + Tailwind (base shadcn/ui, componentes próprios).
Conteúdo 100% em `src/config.ts` — única entrada de conteúdo, como no original.

## Design authority

`design-precedent-gate` → Authority 2: páginas do ecossistema anavanzin.com
herdam o av-os vivo (papel #F5F0E6, tinta #171412, bordô #750D20, regra #B8A48F,
noite #15110E, ouro #DECBA4; Instrument Serif + DM Sans + JetBrains Mono +
Playfair, auto-hospedadas). Não passar pelo musepool para esta superfície.

## Rodar

```bash
npm install
npm run dev      # dev server
npm test         # 31 testes (vitest + testing-library)
npm run build    # dist/ estático
```

## Estrutura

- `src/config.ts` — tokens, site, nav, 6 casos de trabalho, mesa, marginalia, contato
- `src/components/` — FluidCanvas (hero fluido), DepthMeter (0000–0145 m), Nav, Footer, Zona, Figure
- `src/pages/` — Home, Sobre, Trabalhos, CasePage, Mesa, Marginalia, Contato, NotFound
- `public/assets/` — corpus iconográfico (Bruegel 1559, Clésinger 1900, Villares,
  STF 1961, Esslingen 1589, Chifflart 1865, atlas nacionais) + frontispício + retrato
- `public/fonts/` — woff2 auto-hospedados (sem Google Fonts)
- `qa/` — harness de screenshots (Playwright); saídas em `qa/shots/` (não versionado)

## Ressalvas

- O formulário de contato é deliberadamente front-end (site estático; não persiste).
- Se as páginas deste app forem fundidas ao anavanzin.com, portar para o pipeline
  estático do site — o gate proíbe introduzir build step no site vivo.
