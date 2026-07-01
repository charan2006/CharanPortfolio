import { about } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="eyebrow">About</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: 14 }}>
          What I do
        </h2>

        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="stat-list">
            {about.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-value gradient-text">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}