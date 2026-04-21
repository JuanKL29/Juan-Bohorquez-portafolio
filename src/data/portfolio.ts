export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Biblioteca Personal',
    description: 'Desarrollé una página web para la gestión de una biblioteca personal, que permite administrar libros mediante operaciones CRUD (crear, consultar, actualizar y eliminar). La estructura fue construida con HTML5 y los estilos con CSS3, mientras que la lógica se implementó con JavaScript, incluyendo la conexión a Firebase para el almacenamiento y sincronización de datos en tiempo real.Este proyecto fortaleció mis habilidades en desarrollo web, manejo de bases de datos en la nube y organización de información mediante soluciones prácticas.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Base de Datos'],
    github: 'https://juankl29.github.io/mi-biblioteca/',
  },
  {
    id: 2,
    title: 'Aplicación de Taxis Inteligente',
    description: 'Desarrollo de una plataforma digital orientada a la creación de sitios web empresariales y la centralización de servicios en el sector de taxis regionales. La solución busca optimizar la gestión, visibilidad y acceso a servicios de transporte, integrando herramientas digitales que facilitan la conexión entre empresas, conductores y usuarios.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MySQL', 'Google Maps API', 'Git'],
    github: 'https://github.com/JuanKL29',
  },
  {
    id: 3,
    title: 'Juego Snake (Videojuego Web)',
    description: 'Desarrollé un videojuego web basado en el clásico Snake, donde el jugador controla una serpiente que crece al consumir alimentos mientras evita colisionar consigo misma. El proyecto fue construido utilizando HTML5 para la estructura, CSS3 para el diseño visual y JavaScript para la lógica del juego, incluyendo el control de movimiento, detección de colisiones y sistema de puntuación.Este proyecto fortaleció mis habilidades en desarrollo web, manejo de eventos, lógica de programación y creación de interfaces interactivas en tiempo real.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'HTML5 Canvas API', 'Web Audio API'],
    github: 'https://juankl29.github.io/snake-game/',
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'SCSS/CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
];

export const info = {
  name: 'Juan Jose Bohorquez Pabon',
  role: 'Desarrollador Fronted',
  location: 'Cucuta, Colombia',
  bio: 'Desarrollador pasionado por crear experiencias web increíbles.',
  email: 'juan29021117@gmail.com',
  github: 'https://github.com/tuusuario',
  linkedin: 'https://linkedin.com/in/tuusuario',
};
