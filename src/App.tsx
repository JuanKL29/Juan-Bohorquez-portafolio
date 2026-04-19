import { Header } from './components/Header';
import { Hero } from './components/Hero';
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
        <About />
        <Projects />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '24px', color: 'var(--text-secondary)' }}>
        <p>© 2024 Tu Nombre. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
