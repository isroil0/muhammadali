import Section from './Section'
import { useLanguage } from '../i18n/LanguageProvider'

export default function Experience() {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <Section
      id="experience"
      eyebrow={e.eyebrow}
      title={<>{e.title} <span className="gradient-text">{e.titleAccent}</span></>}
      subtitle={e.subtitle}
    >
      <div className="timeline">
        {e.items.map((item, i) => (
          <article className="card tl-item reveal" key={i} data-reveal-delay={i * 110}>
            <div className="tl-top">
              <h3>{item.title}</h3>
              <span className="tl-period">{item.period}</span>
            </div>
            <p className="tl-org">{item.org}</p>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
