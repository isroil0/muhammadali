import Section from './Section'
import RichText from './RichText'
import { profile } from '../data'
import { useLanguage } from '../i18n/LanguageProvider'

export default function About() {
  const { t } = useLanguage()
  const a = t.about
  const name = `${profile.firstName} ${profile.lastName}`

  return (
    <Section
      id="about"
      eyebrow={a.eyebrow}
      title={<>{a.title} <span className="gradient-text">{a.titleAccent}</span></>}
    >
      <div className="about-grid">
        <div className="about-text reveal">
          <p><RichText text={a.p1} values={{ name }} /></p>
          <p><RichText text={a.p2} /></p>
          <p><RichText text={a.p3} /></p>

          <div className="about-facts">
            {a.facts.map((f) => (
              <div className="fact" key={f.label}>
                <small>{f.label}</small>
                <span>{f.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stats">
          {a.stats.map((s, i) => (
            <div className="card stat reveal" key={s.value} data-reveal-delay={i * 110}>
              <div className="stat-num">{s.value}</div>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
