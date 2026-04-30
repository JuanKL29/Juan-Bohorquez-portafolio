import { useState } from 'react';
import './Header.scss';

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">JB</a>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menú">
            <span className={`nav-toggle__line ${open ? 'nav-toggle__line--active' : ''}`} />
            <span className={`nav-toggle__line ${open ? 'nav-toggle__line--active' : ''}`} />
            <span className={`nav-toggle__line ${open ? 'nav-toggle__line--active' : ''}`} />
          </button>
          <div className={`nav-links ${open ? 'nav-links--open' : ''}`}>
            <ul>
              <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
              <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
