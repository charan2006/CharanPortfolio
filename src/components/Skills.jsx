import { skillGroups, certifications } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="eyebrow">Skills</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: 14 }}>
          Tools I reach for
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.label}>
              <h3>{group.label}</h3>
              <div className="chip-row">
                {group.skills.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {certifications?.length > 0 && (
          <div style={{ marginTop: 28 }}>
            <span className="eyebrow">Certifications</span>
            <div className="chip-row" style={{ marginTop: 14 }}>
              {certifications.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}