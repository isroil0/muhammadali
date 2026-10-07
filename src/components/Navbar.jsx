import { useEffect, useState } from 'react'
import { navItems, profile } from '../data'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useLanguage } from '../i18n/LanguageProvider'
import LangSwitcher from './LangSwitcher'

const sectionIds = navItems.map((n) => n.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sectionIds)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <nav className="container nav-inner" aria-label={t.nav.home}>
          <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
            <span className="nav-logo-mark">{profile.initials}</span>
            <span>{profile.firstName} {profile.lastName}</span>
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link${active === item.id ? ' is-active' : ''}`}
                  aria-current={active === item.id ? 'page' : undefined}
                >
                  {t.nav[item.id]}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <LangSwitcher className="lang-switch--desktop" />
            <a href="#contact" className="btn btn-primary nav-cta">{t.nav.hire}</a>
          </div>

          <button
            type="button"
            className={`nav-toggle${open ? ' is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
          >
            <span /><span /><span />
          </button>
        </nav>
      </header>

      {open && (
        <div className="nav-mobile">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {t.nav[item.id]}
            </a>
          ))}
          <LangSwitcher className="lang-switch--mobile" />
        </div>
      )}
    </>
  )
}
