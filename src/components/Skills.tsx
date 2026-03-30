import './Skills.scss';
import { skills } from '../data/portfolio';

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Herramientas' },
] as const;

export function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills__grid">
          {categories.map((cat) => (
            <div className="skills__card" key={cat.key}>
              <div className="skills__category">{cat.label}</div>
              <div className="skills__list">
                {skills
                  .filter((s) => s.category === cat.key)
                  .map((skill) => (
                    <div className="skills__item" key={skill.name}>
                      <div className="skills__item-header">
                        <span className="skills__item-name">{skill.name}</span>
                        <span className="skills__item-percent">{skill.level}%</span>
                      </div>
                      <div className="skills__item-bar">
                        <div
                          className="skills__item-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
