/** Shared section shell: anchor id, eyebrow, title and optional subtitle. */
export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <header className="section-head reveal">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
