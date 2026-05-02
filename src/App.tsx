import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Knowledge } from './components/Knowledge';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './styles/main.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Knowledge />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '24px', color: 'var(--text-secondary)' }}>
        <p>© 2026 Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
