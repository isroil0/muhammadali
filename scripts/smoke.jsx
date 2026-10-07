/* Render the whole app once in Node to catch render-time crashes. */
import { renderToStaticMarkup } from 'react-dom/server'
import { LanguageProvider } from '../src/i18n/LanguageProvider.jsx'
import App from '../src/App.jsx'

const store = {}
globalThis.window = {
  localStorage: { getItem: (k) => store[k] ?? null, setItem: (k, v) => (store[k] = v) },
  matchMedia: () => ({ matches: false }),
  addEventListener() {}, removeEventListener() {},
  scrollY: 0, innerWidth: 1440, innerHeight: 900,
}
Object.defineProperty(globalThis, 'navigator', {
  value: { languages: ['en-US'], language: 'en-US' }, configurable: true,
})
globalThis.document = {
  documentElement: {}, title: '',
  querySelector: () => null, querySelectorAll: () => [],
  getElementById: () => null, body: { style: {} },
}
globalThis.localStorage = globalThis.window.localStorage

const html = renderToStaticMarkup(<LanguageProvider><App /></LanguageProvider>)
const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
console.log('rendered HTML :', html.length, 'bytes')
console.log('section ids   :', [...html.matchAll(/id="(home|about|skills|projects|experience|contact)"/g)].map(m => m[1]).join(', '))
console.log('cover scenes  :', (html.match(/cover-art/g) || []).length)
console.log('project cards :', (html.match(/class="card project/g) || []).length)
console.log('visible text  :', text.slice(0, 150))
