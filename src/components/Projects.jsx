import Section from './Section'
import { projectMeta } from '../data'
import { IconExternal, IconGithub } from './Icons'
import ProjectCover from './ProjectCover'
import { useLanguage } from '../i18n/LanguageProvider'

export default function Projects() {
  const { t } = useLanguage()
  const p = t.projects

  return (
    <Section
      id="projects"
      eyebrow={p.eyebrow}
      title={<>{p.title} <span className="gradient-text">{p.titleAccent}</span></>}
      subtitle={p.subtitle}
    >
      <div className="projects-grid">
        {p.items.map((project, i) => {
          const meta = projectMeta[i]
          return (
            <article className="card project reveal" key={meta.glyph} data-reveal-delay={i * 90}>
              <ProjectCover kind={meta.cover} glyph={meta.glyph} />

              <div className="project-body">
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <span className="project-year">{meta.year}</span>
                </div>

                <p>{project.description}</p>

                <div className="project-stack">
                  {meta.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>

                <div className="project-links">
                  {meta.demo && (
                    <a href={meta.demo} target="_blank" rel="noreferrer">
                      <IconExternal width={16} height={16} />
                      {meta.live ? p.visitSite : p.liveDemo}
                    </a>
                  )}
                  {meta.code && (
                    <a href={meta.code} target="_blank" rel="noreferrer">
                      <IconGithub width={16} height={16} /> {p.sourceCode}
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
