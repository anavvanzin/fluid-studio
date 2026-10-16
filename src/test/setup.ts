import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// IntersectionObserver não existe no jsdom — stub mínimo
class IOStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
if (!('IntersectionObserver' in globalThis)) {
  // @ts-expect-error stub proposital
  globalThis.IntersectionObserver = IOStub
}

// matchMedia não existe no jsdom — stub mínimo
if (!window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}

// getContext de canvas não existe no jsdom — stub mínimo
HTMLCanvasElement.prototype.getContext = (() =>
  null) as unknown as typeof HTMLCanvasElement.prototype.getContext

afterEach(() => {
  cleanup()
})
