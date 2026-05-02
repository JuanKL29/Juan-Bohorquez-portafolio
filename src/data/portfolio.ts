import bibliotecaImg from '/biblioteca.jpg';
import taxisImg from '/taxis.jpg';
import snakeImg from '/snake.jpg';
import html5Img from '/html5.png';
import css3Img from '/css3.png';
import javascriptImg from '/javascript.png';
import pythonImg from '/python.png';
import mysqlImg from '/mysql.png';
import javaImg from '/java.png';
import phpImg from '/php.png';
import cppImg from '/cpp.png';
import gitImg from '/git.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github: string;
  demo?: string;
}

export interface Skill {
  name: string;
  level?: number;
  color: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'tools';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Biblioteca Personal',
    description: 'Desarrollé una página web para la gestión de una biblioteca personal, que permite administrar libros mediante operaciones CRUD (crear, consultar, actualizar y eliminar). La estructura fue construida con HTML5 y los estilos con CSS3, mientras que la lógica se implementó con JavaScript, incluyendo la conexión a Firebase para el almacenamiento y sincronización de datos en tiempo real.Este proyecto fortaleció mis habilidades en desarrollo web, manejo de bases de datos en la nube y organización de información mediante soluciones prácticas.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Base de Datos'],
    image: bibliotecaImg,
    github: 'https://juankl29.github.io/mi-biblioteca/',
  },
  {
    id: 2,
    title: 'Aplicación de Taxis Inteligente',
    description: 'Desarrollo de una plataforma digital orientada a la creación de sitios web empresariales y la centralización de servicios en el sector de taxis regionales. La solución busca optimizar la gestión, visibilidad y acceso a servicios de transporte, integrando herramientas digitales que facilitan la conexión entre empresas, conductores y usuarios.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MySQL', 'Google Maps API', 'Git'],
    github: 'https://github.com/JuanKL29',
    image: taxisImg,
  },
  {
    id: 3,
    title: 'Juego Snake (Videojuego Web)',
    description: 'Desarrollé un videojuego web basado en el clásico Snake, donde el jugador controla una serpiente que crece al consumir alimentos mientras evita colisionar consigo misma. El proyecto fue construido utilizando HTML5 para la estructura, CSS3 para el diseño visual y JavaScript para la lógica del juego, incluyendo el control de movimiento, detección de colisiones y sistema de puntuación.Este proyecto fortaleció mis habilidades en desarrollo web, manejo de eventos, lógica de programación y creación de interfaces interactivas en tiempo real.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'HTML5 Canvas API', 'Web Audio API'],
    github: 'https://juankl29.github.io/snake-game/',
    image: snakeImg,
  },
];

export const skills: Skill[] = [
  { name: 'HTML5', color: '#E34F26', icon: html5Img, category: 'frontend' },
  { name: 'CSS3', color: '#1572B6', icon: css3Img, category: 'frontend' },
  { name: 'JavaScript', color: '#F7DF1E', icon: javascriptImg, category: 'frontend' },
  { name: 'Python', color: '#3776AB', icon: pythonImg, category: 'backend' },
  { name: 'MySQL', color: '#4479A1', icon: mysqlImg, category: 'backend' },
  { name: 'Java', color: '#ED8B00', icon: javaImg, category: 'backend' },
  { name: 'PHP', color: '#777BB4', icon: phpImg, category: 'backend' },
  { name: 'C++', color: '#00599C', icon: cppImg, category: 'backend' },
  { name: 'Git', color: '#000000', icon: gitImg, category: 'tools' },
];

export const info = {
  name: 'Juan Bohorquez',
  role: 'Desarrollador Frontend enfocado en interfaces modernas e intuitivas',
  location: 'Colombia',
  bio: 'Apasionado por el desarrollo web, enfocado en diseñar y construir experiencias digitales atractivas, funcionales y centradas en el usuario.',
  email: 'juan29021117@gmail.com',
  github: 'https://github.com/JuanKL29',
  linkedin: 'https://www.linkedin.com/in/juanjosebohorquez29/',
};
