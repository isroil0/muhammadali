import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { languages, translations } from './translations'

const STORAGE_KEY = 'portfolio-lang'
const DEFAULT_LANG = 'en'

const LanguageContext = createContext(null)

/** Saved choice first, then the browser's language, then English. */
function detectLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANG

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && translations[saved]) return saved

  const codes = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const code of codes) {
    const short = String(code).slice(0, 2).toLowerCase()
    if (translations[short]) return short
  }
  return DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage)

  // Keep <html lang>, <title> and the meta description in sync.
  useEffect(() => {
    const meta = translations[lang].meta
    const entry = languages.find((l) => l.code === lang)

    document.documentElement.lang = entry?.htmlLang || lang
    document.title = meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', meta.description)

    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang], languages }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

/** `const { t, lang, setLang } = useLanguage()` */
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
