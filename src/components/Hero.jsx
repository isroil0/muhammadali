import { profile } from '../data'
import { useTypewriter } from '../hooks/useTypewriter'
import { useLanguage } from '../i18n/LanguageProvider'
import {
  IconArrow, IconDownload, IconInstagram, IconTelegram,
  IconSpark, IconLayers, IconMail,
} from './Icons'

export default function Hero() {
  const { t } = useLanguage()
  const role = useTypewriter(t.hero.roles)
  const fullName = `${profile.firstName} ${profile.lastName}`

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        {/* ---------- Copy ---------- */}
        <div className="hero-copy">
          <p className="hero-badge reveal">
            <span className="hero-dot" />
            {t.hero.availability} · {t.contact.locationValue}
          </p>

          <h1 className="hero-title reveal" data-reveal-delay="90">
            <span>{t.hero.greeting}</span>
            <span className="line-2">{fullName}</span>
          </h1>

          <p className="hero-role reveal" data-reveal-delay="160">
            {role}
            <i className="caret" />
          </p>

          <p className="hero-desc reveal" data-reveal-delay="230">{t.hero.tagline}</p>

          <div className="hero-actions reveal" data-reveal-delay="300">
            <a href="#projects" className="btn btn-primary">
              {t.hero.viewWork} <IconArrow width={17} height={17} />
            </a>
            <a href={profile.resumeUrl} className="btn btn-ghost">
              <IconDownload width={17} height={17} /> {t.hero.downloadCv}
            </a>
          </div>

          <div className="hero-socials reveal" data-reveal-delay="370">
            <a className="social-btn" href={profile.socials.telegram} target="_blank" rel="noreferrer" aria-label="Telegram"><IconTelegram /></a>
            <a className="social-btn" href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram /></a>
            <a className="social-btn" href={`mailto:${profile.email}`} aria-label={t.contact.email}><IconMail /></a>
          </div>
        </div>

        {/* ---------- Portrait ---------- */}
        <div className="hero-visual reveal" data-reveal-delay="140">
          <div className="orbit orbit--1" />
          <div className="orbit orbit--2" />

          <div className="portrait">
            <img
              src={profile.photo}
              alt={fullName}
              width="720"
              height="900"
              fetchpriority="high"
            />
            <div className="portrait-tag">
              <div>
                <strong>{fullName}</strong>
                <small>{t.hero.roles[0]}</small>
              </div>
              <em>{t.hero.openToWork}</em>
            </div>
          </div>

          <div className="chip chip--1">
            <span className="chip-icon"><IconSpark width={16} height={16} /></span>
            <div><b>2+</b> <span>{t.hero.chipYears}</span></div>
          </div>

          <div className="chip chip--2">
            <span className="chip-icon"><IconLayers width={16} height={16} /></span>
            <div><b>20+</b> <span>{t.hero.chipProjects}</span></div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label={t.hero.scroll}>
        <i />
        {t.hero.scroll}
      </a>
    </section>
  )
}
