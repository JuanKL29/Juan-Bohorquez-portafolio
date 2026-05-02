import { skills } from '../data/portfolio';
import './Knowledge.scss';

export function Knowledge() {
  return (
    <section className="knowledge section" id="knowledge">
      <div className="container">
        <h2 className="section-title">Conocimientos</h2>
        <div className="knowledge__grid">
          {skills.map((skill) => (
            <div
              className="knowledge__card"
              key={skill.name}
              style={{ '--accent-color': skill.color } as React.CSSProperties}
            >
              {skill.icon && (
                <img src={skill.icon} alt={skill.name} className="knowledge__icon" />
              )}
              <span className="knowledge__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
