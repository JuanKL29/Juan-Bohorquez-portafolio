import './About.scss';
import { info } from '../data/portfolio';

export function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="about__content">
          <div className="about__image">
            <img src="/JuanBohorquez.jpg" alt={info.name} className="about__image-placeholder" />
          </div>
          <div className="about__text">
            <p>{info.bio}</p>
            <div className="about__info">
              <div className="about__item">
                <span>Nombre</span>
                <strong>{info.name}</strong>
              </div>
              <div className="about__item">
                <span>Ubicación</span>
                <strong>{info.location}</strong>
              </div>
              <div className="about__item">
                <span>Email</span>
                <strong>{info.email}</strong>
              </div>
              <div className="about__item">
                <span>Disponibilidad</span>
                <strong>Freelance / Tiempo completo</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
