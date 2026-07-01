import { experience } from '../data/portfolioData'
import {workExperience} from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience">
      
      <div className="container">
        <span className="eyebrow">Experience</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: 14 }}>
          Work Experience
        </h2>

        <div className="timeline">
          {workExperience.map((e) => (
            <div className="timeline-item" key={e.role + e.company}>
              <div className="timeline-role">{e.role} · {e.company}</div>
              {e.period && <div className="timeline-meta">{e.period}</div>}
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br>
      <div className="container">
        <span className="eyebrow">Journey</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: 14 }}>
          Academics &amp; achievements
        </h2>

        <div className="timeline">
          {experience.map((e) => (
            <div className="timeline-item" key={e.role + e.company}>
              <div className="timeline-role">{e.role} · {e.company}</div>
              {e.period && <div className="timeline-meta">{e.period}</div>}
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  )
}