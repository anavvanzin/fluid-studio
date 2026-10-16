// ─────────────────────────────────────────────────────────────────────────────
// config.ts — única entrada de conteúdo do fluid-studio (instância av-os)
// Design system extraído do CSS de produção de anavanzin.com:
//   papel #F5F0E6 · tinta #171412 · bordô #750D20 · regra #B8A48F · noite #15110E · ouro #DECBA4
// ─────────────────────────────────────────────────────────────────────────────

export const tokens = {
  papel: '#F5F0E6',
  tinta: '#171412',
  bordô: '#750D20',
  regra: '#B8A48F',
  noite: '#15110E',
  ouro: '#DECBA4',
} as const

export const site = {
  lang: 'pt-BR',
  title: 'Ana Vanzin — Iuris Memoria',
  author: 'Ana Vitória Vanzin Mendes',
  email: 'ana@anavanzin.com',
  lede: 'Doutoranda em História do Direito (PPGD/UFSC). Pesquiso a alegoria feminina — Justitia, a República-mulher, a presidência totêmica — como operadora epistêmica da legitimidade jurídica.',
  // A escala de profundidade é o corpus: 0000–0145 m
  depth: { min: 0, max: 145, unit: 'm' },
} as const

export type NavItem = { path: string; label: string }
export const nav: NavItem[] = [
  { path: '/', label: 'início' },
  { path: '/sobre', label: 'sobre' },
  { path: '/trabalhos', label: 'trabalhos' },
  { path: '/mesa', label: 'mesa de trabalho' },
  { path: '/marginalia', label: 'marginalia' },
  { path: '/contato', label: 'contato' },
]

export type Case = {
  slug: string
  title: string
  subtitle: string
  depth: number // metros na escala do corpus
  image: string
  caption: string
  tags: string[]
  body: string[]
}

export const cases: Case[] = [
  {
    slug: 'iconocracia',
    title: 'Iconocracia',
    subtitle: 'Alegoria feminina e legitimidade jurídica — a tese',
    depth: 145,
    image: 'assets/corpus/fr-bruegel-justicia-1559.jpg',
    caption: 'Justitia entre a balança e a espada, gravura do círculo de Bruegel (1559).',
    tags: ['tese', 'iconologia', 'história do direito'],
    body: [
      'A tese investiga as figuras alegóricas femininas — Justitia, a República personificada, a presidência como corpo totêmico — como operadores epistêmicos da legitimidade jurídica, e não como ornamento da razão pública. A pergunta central é como a mulher-alegoria passou a assinar, visualmente, o que o direito não consegue dizer por texto.',
      'O corpus reúne personificações nacionais e jurídicas de quinze países, do século XIII ao século XX, lidas com o método iconológico de Panofsky e com as fórmulas de pathos de Warburg. A hipótese do regime iconocrático é testada contra contraprovas: onde a alegoria falha, e o que essa falha revela.',
    ],
  },
  {
    slug: 'atlas',
    title: 'Atlas',
    subtitle: 'Personificações nacionais — o corpus em mapa',
    depth: 96,
    image: 'assets/atlas/EU-1628-europa-regina-atlas.png',
    caption: 'Europa regina, Münster 1628 — o continente coroado como rainha.',
    tags: ['corpus', 'atlas', 'alegorias nacionais'],
    body: [
      'O atlas reúne as personificações nacionais do corpus: Britannia, Marianne, Germania, Columbia, Helvetia, Italia turrita, a República brasileira, a República espanhola e Hispania — e, sobre todas, Europa regina. Cada figura é uma tese de soberania vestida de corpo feminino.',
      'Ler o atlas em conjunto é ver a repetição como método: a mesma fórmula de pathos migrando de país para país, de século para século, trocando atributos e conservando a estrutura. A genealogia das figuras é a gramática da iconocracia.',
    ],
  },
  {
    slug: 'defesa',
    title: 'Defesa',
    subtitle: 'O regime iconocrático em exame',
    depth: 88,
    image: 'assets/corpus/br-stf-justica-1961.jpg',
    caption: 'Justiça no STF, 1961 — a alegoria vestindo a toga do tribunal.',
    tags: ['qualificação', 'argumento', 'memória'],
    body: [
      'A defesa de qualificação organiza o argumento da tese em três movimentos: a constituição do corpus, a leitura iconológica das figuras centrais e o teste da hipótese do regime iconocrático diante de casos-limite.',
      'O STF de 1961 é um desses casos: a alegoria da Justiça deixou de frontispício para habitar a arquitetura do tribunal — a imagem torna-se instituição, e a instituição passa a se ver como imagem.',
    ],
  },
  {
    slug: 'trechos',
    title: 'Trechos',
    subtitle: 'Escritos em circulação — artigos e ensaios',
    depth: 61,
    image: 'assets/corpus/de-justitia-esslingen-1589-c.png',
    caption: 'Justitia de Esslingen, 1589 — a alegoria entre a venda e o livro.',
    tags: ['escrita', 'artigos', 'ensaio'],
    body: [
      'Trechos reúne artigos e ensaios publicados ou em circulação: a gramática alegórica da iconocracia, a Europa lamentans, a Justiça cega de Bruegel a Hirsch. Cada texto é uma camada do argumento da tese, escrita para ser lida também fora dele.',
      'A escrita acadêmica aqui é tratada como continuação da mesa de trabalho: nenhum número sem âncora, nenhuma afirmação sem fonte, nenhuma síntese que não declare seu grau de inferência.',
    ],
  },
  {
    slug: 'metodologia',
    title: 'Metodologia',
    subtitle: 'Como se lê uma alegoria — o método iconográfico',
    depth: 42,
    image: 'assets/corpus/fr-chifflart-justice-1865.jpg',
    caption: 'Justice, Chifflart 1865 — a fórmula de pathos sob a República.',
    tags: ['método', 'Panofsky', 'Warburg'],
    body: [
      'O método cruza os três estratos da iconologia panofskiana — descrição pré-iconográfica, análise iconográfica, interpretação iconológica — com as fórmulas de pathos de Warburg e com o paradigma indiciário. Catálogo documentado, leitura comparada, contra-prova permanente.',
      'A metodologia é também uma ética: estabilidade terminológica, integridade de citação, conformidade ABNT. O aparato mínimo é deliberado — preferimos um catálogo honesto a um índice agregado que esconda as decisões.',
    ],
  },
  {
    slug: 'manifesto',
    title: 'Manifesto',
    subtitle: 'Por uma jurisprudência noturna da imagem',
    depth: 23,
    image: 'assets/corpus/uk-justitia-prudentia-c.png',
    caption: 'Justitia e Prudentia, Grã-Bretanha — a sabedoria como segunda alegoria.',
    tags: ['manifesto', 'teoria', 'imagem'],
    body: [
      'O manifesto declara a aposta da pesquisa: a imagem jurídica não ilustra o direito — ela decide com ele. Da jurisprudência noturna de Stramignoni ao imago decidendi de Goodrich, a imagem é tratada como operador epistêmico, com direito de voz no tribunal da teoria.',
      'Escrever o manifesto é aceitar o risco da tese forte: se toda legitimidade jurídica passa pela mulher-alegoria, então desmontar a alegoria é desmontar a própria cena de fundação do direito.',
    ],
  },
]

export type MesaItem = { title: string; role: string; note: string }
export const mesa: MesaItem[] = [
  {
    title: 'Pathosformel',
    role: 'Aby Warburg',
    note: 'A fórmula de pathos como memória sobrevivente do gesto: a alegoria conserva o que a razão jurídica esqueceu que sentiu.',
  },
  {
    title: 'Imago decidendi',
    role: 'Peter Goodrich',
    note: 'A imagem como razão de decidir — não a ilustração do argumento, mas o argumento em estado visual.',
  },
  {
    title: 'Os três estratos',
    role: 'Erwin Panofsky',
    note: 'Descrição, análise, interpretação: o método que impede que a alegoria seja lida depressa.',
  },
  {
    title: 'Economia da imagem',
    role: 'Marie-José Mondzain',
    note: 'A imagem como economia e teologia: quem controla a visibilidade controla a comunidade.',
  },
  {
    title: 'Partilha do sensível',
    role: 'Jacques Rancière',
    note: 'O que se vê e o que se pode dizer sobre o que se vê: a política como distribuição dos lugares visíveis.',
  },
  {
    title: 'Jurisprudência noturna',
    role: 'Alessandro Stramignoni',
    note: 'O direito que trabalha na noite da imagem — a sombra como jurisdição, não como ausência de luz.',
  },
]

export type Nota = { id: string; title: string; date: string; text: string }
export const marginalia: Nota[] = [
  {
    id: 'I',
    title: 'Sobre a venda',
    date: 'nota de leitura',
    text: 'A Justiça vendada não nasce cega: ela escolhe não ver. A venda é fundação, não deficiência — o gesto que funda a imparcialidade como teatro. Toda vez que a alegoria levanta a venda, alguém decide o que ela deve olhar.',
  },
  {
    id: 'II',
    title: 'A balança como sintaxe',
    date: 'nota de corpus',
    text: 'A balança não pesa: ela compara. O prato que desce não é o mais pesado, é o mais legítimo. A metáfora da medida esconde que a medida já decidiu o que conta como peso.',
  },
  {
    id: 'III',
    title: 'Europa lamentans',
    date: 'nota de escrita',
    text: 'A rainha coroada virou continente choroso em meio século. A queixa da Europa é o lamento da soberania feminina quando o império a exige de joelhos.',
  },
  {
    id: 'IV',
    title: 'O corpus respira',
    date: 'nota de método',
    text: 'Um corpus de alegorias não é uma lista: é um organismo que cresce por afinidade e é podado por contraprova. Cada peça nova reorganiza as antigas.',
  },
  {
    id: 'V',
    title: 'Tinta bordô',
    date: 'nota de oficina',
    text: 'O lacre, a venda, o manto: o vermelho-escuro da alegoria não é decoração — é a cor do sigilo que funda o veredito.',
  },
]

export const sobre = {
  portrait: 'assets/home/ana-vanzin-portrait.webp',
  heading: 'A alegoria como operadora epistêmica',
  paragraphs: [
    'Sou doutoranda no Programa de Pós-Graduação em Direito da UFSC, com cotutela na UGent, e líder do grupo de pesquisa Ius Gentium. Minha tese, ICONOCRACIA, estuda as figuras alegóricas femininas da cultura jurídica dos séculos XIX e XX — Justitia, a República-mulher, a presidência totêmica — como operadores epistêmicos da legitimidade.',
    'Antes da tese, a dissertação de mestrado tratou da nacionalidade da mulher casada e sua relação com o estado civil no direito internacional. O fio condutor não mudou: o direito constitui corpos, e os corpos que ele constitui são sempre também imagens.',
    'Trabalho com Zotero, Obsidian, GitHub e Python, com um monorepo que codifica os princípios não-negociáveis da pesquisa: integridade de citação, estabilidade terminológica, conformidade ABNT. O método é parte da tese.',
  ],
  affiliations: ['PPGD/UFSC — cotutela UGent', 'Ius Gentium — grupo de pesquisa', 'História do direito · iconologia · teoria feminista'],
}

export const contato = {
  heading: 'Escreva para a mesa',
  note: 'O formulário é só front-end — nada é persistido. Para correspondência real, escreva direto para ana@anavanzin.com.',
  sentMessage: 'Registrado em tinta — mas não enviado. Este formulário não persiste dados; use o e-mail acima para me alcançar.',
}

export const home = {
  heroTitle: 'A mulher-alegoria assina o direito',
  heroKicker: 'Iuris Memoria · pesquisa em história da cultura jurídica',
  heroImage: 'assets/home/frontispicio-justitia.jpg',
  heroCaption: 'Corpus iconographicum juridicum — frontispício da pesquisa.',
  gallery: [
    { src: 'assets/corpus/fr-clesinger-republique-1900.jpg', caption: 'La République, Clésinger 1900' },
    { src: 'assets/corpus/br-villares-republica.jpg', caption: 'A República, Villares' },
    { src: 'assets/atlas/UK-1912-britannia-atlas.png', caption: 'Britannia, atlas 1912' },
    { src: 'assets/atlas/FR-007-marianne-atlas.png', caption: 'Marianne, atlas' },
    { src: 'assets/atlas/DE-013-germania-atlas.png', caption: 'Germania, atlas' },
    { src: 'assets/atlas/US-012-columbia-atlas-v2.png', caption: 'Columbia, atlas' },
    { src: 'assets/atlas/IT-005-italia-turrita-atlas.png', caption: 'Italia turrita, atlas' },
    { src: 'assets/atlas/BR-005-republica-atlas.png', caption: 'A República brasileira, atlas' },
  ],
}
