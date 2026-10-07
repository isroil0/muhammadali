import { profile } from '../data'
import { IconArrow, IconMail, IconPhone, IconPin } from './Icons'
import { useLanguage } from '../i18n/LanguageProvider'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact

  const items = [
    { icon: IconMail, label: c.email, value: profile.email, href: `mailto:${profile.email}` },
    { icon: IconPhone, label: c.phone, value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: IconPin, label: c.location, value: c.locationValue, href: null },
  ]

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-wrap reveal">
          <div className="contact-grid">
            <div>
              <p className="eyebrow">{c.eyebrow}</p>
              <h2>{c.title} <span className="gradient-text">{c.titleAccent}</span></h2>
              <p>{c.text}</p>
              <div className="hero-actions">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  {c.button} <IconArrow width={17} height={17} />
                </a>
              </div>
            </div>

            <div className="contact-list">
              {items.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="skill-icon"><Icon width={19} height={19} /></span>
                    <div>
                      <small>{label}</small>
                      <span>{value}</span>
                    </div>
                  </>
                )
                return href ? (
                  <a className="contact-item" href={href} key={label}>{inner}</a>
                ) : (
                  <div className="contact-item" key={label}>{inner}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
