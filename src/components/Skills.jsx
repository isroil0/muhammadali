import Section from './Section'
import { marqueeItems, skillIconOrder } from '../data'
import { skillIcons } from './Icons'
import { useLanguage } from '../i18n/LanguageProvider'

export default function Skills() {
  const { t } = useLanguage()
  const s = t.skills

  return (
    <Section
      id="skills"
      eyebrow={s.eyebrow}
      title={<>{s.title} <span className="gradient-text">{s.titleAccent}</span></>}
      subtitle={s.subtitle}
    >
      <div className="skills-grid">
        {s.groups.map((group, i) => {
          const Icon = skillIcons[skillIconOrder[i]]
          return (
            <article className="card skill-card reveal" key={skillIconOrder[i]} data-reveal-delay={i * 90}>
              <div className="skill-head">
                <span className="skill-icon"><Icon width={22} height={22} /></span>
                <div>
                  <h3>{group.title}</h3>
                  <small>{group.note}</small>
                </div>
              </div>
              <ul className="skill-tags">
                {group.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}
              </ul>
            </article>
          )
        })}
      </div>

      <div className="marquee reveal" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>
    </Section>
  )
}
