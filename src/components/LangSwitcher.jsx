import { useLanguage } from '../i18n/LanguageProvider'

/** Segmented UZ / RU / EN control with a sliding highlight. */
export default function LangSwitcher({ className = '' }) {
  const { lang, setLang, languages, t } = useLanguage()
  const index = languages.findIndex((l) => l.code === lang)

  return (
    <div
      className={`lang-switch ${className}`.trim()}
      role="group"
      aria-label={t.nav.language}
    >
      <span
        className="lang-thumb"
        style={{ transform: `translateX(${index * 100}%)` }}
        aria-hidden="true"
      />
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-btn${l.code === lang ? ' is-active' : ''}`}
          onClick={() => setLang(l.code)}
          aria-pressed={l.code === lang}
          title={l.name}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
