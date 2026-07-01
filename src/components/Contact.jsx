import { profile } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-box">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Contact</span>
          <h2 style={{ marginTop: 14 }}>
            Let's build something <span className="gradient-text">intelligent</span> together
          </h2>
          <p style={{ marginTop: 14 }}>
            Open to new roles, collaborations, and interesting problems.
          </p>

          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Say hello</a>
            {profile.socials.map((s) => (
              <a className="btn btn-ghost" href={s.href} key={s.label} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}