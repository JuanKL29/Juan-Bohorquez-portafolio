import './Header.scss';

export function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">&lt;/&gt;</a>
          <div className="nav-links">
            <ul>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
