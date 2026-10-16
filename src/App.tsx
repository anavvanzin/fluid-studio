import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { DepthMeter } from '@/components/DepthMeter'
import { Home } from '@/pages/Home'
import { Sobre } from '@/pages/Sobre'
import { Trabalhos } from '@/pages/Trabalhos'
import { CasePage } from '@/pages/CasePage'
import { Mesa } from '@/pages/Mesa'
import { Marginalia } from '@/pages/Marginalia'
import { Contato } from '@/pages/Contato'
import { NotFound } from '@/pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <DepthMeter />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
          <Route path="/trabalhos/:slug" element={<CasePage />} />
          <Route path="/mesa" element={<Mesa />} />
          <Route path="/marginalia" element={<Marginalia />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
