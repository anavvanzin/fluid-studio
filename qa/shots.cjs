/* QA visual: screenshots do fluid-studio (build de produção) + extração de tokens do site vivo */
const { chromium } = require('playwright')
const path = require('path')
const os = require('os')

const EXEC = process.env.CHROME_PATH ||
  `${os.homedir()}/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`

const OUT = path.join(__dirname, 'shots')
const BASE = process.env.QA_BASE || 'http://localhost:4173'

const rotas = [
  ['home', '#/'],
  ['sobre', '#/sobre'],
  ['trabalhos', '#/trabalhos'],
  ['caso-iconocracia', '#/trabalhos/iconocracia'],
  ['mesa', '#/mesa'],
  ['marginalia', '#/marginalia'],
  ['contato', '#/contato'],
]

;(async () => {
  const browser = await chromium.launch({ executablePath: EXEC })
  const erros = []

  // ── fluid-studio local ────────────────────────────────────────────────────
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  page.on('console', (m) => { if (m.type() === 'error') erros.push(`[console] ${m.text()}`) })
  page.on('pageerror', (e) => erros.push(`[pageerror] ${e}`))

  for (const [nome, rota] of rotas) {
    await page.goto(`${BASE}/${rota}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(700)
    await page.screenshot({ path: `${OUT}/desktop-${nome}.png`, fullPage: nome === 'home' })
  }

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(`${BASE}/#/`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(700)
  await page.screenshot({ path: `${OUT}/mobile-home.png`, fullPage: true })

  // overflow horizontal?
  const overflows = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  await page.close()

  // ── site vivo ─────────────────────────────────────────────────────────────
  let vivo = null
  try {
    const live = await browser.newPage({ viewport: { width: 1440, height: 900 } })
    const resposta = await live.goto('https://www.anavanzin.com', { waitUntil: 'domcontentloaded', timeout: 45000 })
    await live.waitForTimeout(4000)
    await live.screenshot({ path: `${OUT}/vivo-home.png` })
    const vars = await live.evaluate(() => {
      const s = getComputedStyle(document.documentElement)
      const pegar = (n) => (s.getPropertyValue(n) || '').trim()
      return {
        status: 'ok',
        http: 0,
        papel: pegar('--papel'), tinta: pegar('--tinta'), bordo: pegar('--bordô') || pegar('--bordo'),
        regra: pegar('--regra'), noite: pegar('--noite'), ouro: pegar('--ouro'),
        titulo: document.title,
        h1: document.querySelector('h1')?.textContent?.trim().slice(0, 120) || null,
        cssVarsCount: s.cssText ? undefined : undefined,
      }
    })
    vars.http = resposta ? resposta.status() : null
    vivo = vars
    await live.close()
  } catch (e) {
    vivo = { status: 'falha', erro: String(e).slice(0, 300) }
  }

  console.log(JSON.stringify({ erros, overflowHorizontalMobile: overflows, vivo }, null, 2))
  await browser.close()
})()
