import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="eyebrow">Projects</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: 14 }}>
          Things I've built
        </h2>

        <div className="project-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <a className="project-link" href={p.link}>View project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}