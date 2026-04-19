import './Hero.scss';
import { info } from '../data/portfolio';

export function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__badge">Disponible para trabajar</div>
          <h1 className="hero__title">
            Hola, soy <span>{info.name}</span>
          </h1>
          <p className="hero__subtitle">{info.role}</p>
          <div className="hero__buttons">
            <a href="#contact" className="btn btn--primary">
              Contactame
            </a>
            <a href="#projects" className="btn btn--outline">
              Ver proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
