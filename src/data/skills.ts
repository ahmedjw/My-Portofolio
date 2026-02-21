export interface Skill {
  name: string;
  category: 'language' | 'frontend' | 'backend' | 'tools';
}

export const skills: Skill[] = [
  { name: 'JavaScript',    category: 'language' },
  { name: 'TypeScript',    category: 'language' },
  { name: 'Python',        category: 'language' },
  { name: 'HTML5',         category: 'language' },
  { name: 'CSS3',          category: 'language' },
  { name: 'React',         category: 'frontend' },
  { name: 'React Native',  category: 'frontend' },
  { name: 'Next.js',       category: 'frontend' },
  { name: 'Redux',         category: 'frontend' },
  { name: 'React Query',   category: 'frontend' },
  { name: 'React Router',  category: 'frontend' },
  { name: 'Electron.js',   category: 'frontend' },
  { name: 'Bootstrap',     category: 'frontend' },
  { name: 'MUI',           category: 'frontend' },
  { name: 'Tailwind',      category: 'frontend' },
  { name: 'Chakra UI',     category: 'frontend' },
  { name: 'Node.js',       category: 'backend' },
  { name: 'Express',       category: 'backend' },
  { name: 'GraphQL',       category: 'backend' },
  { name: 'REST APIs',     category: 'backend' },
  { name: 'Firebase',      category: 'backend' },
  { name: 'Stripe',        category: 'backend' },
  { name: 'AWS',           category: 'tools' },
  { name: 'Git',           category: 'tools' },
  { name: 'Docker',        category: 'tools' },
  { name: 'Vitest',        category: 'tools' },
  { name: 'Storybook',     category: 'tools' },
  { name: 'Sentry',        category: 'tools' },
  { name: 'Jira',          category: 'tools' },
];

export const categoryLabels: Record<string, string> = {
  all: 'All',
  language: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
};
