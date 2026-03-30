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
    title: 'Proyecto 1',
    description: 'Descripción del proyecto con tecnologías utilizadas.',
    tags: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Descripción del proyecto con tecnologías utilizadas.',
    tags: ['React', 'SCSS', 'Firebase'],
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Descripción del proyecto con tecnologías utilizadas.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
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
