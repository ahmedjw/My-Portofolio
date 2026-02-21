export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Front-End Developer',
    company: 'Angelfish',
    period: 'Feb 2025 — Present',
    description: 'Built and maintained reusable UI components for a desktop application using Electron.js and a DID-based Identity Wallet mobile app using React Native.',
    highlights: [
      'Refactored and standardized Storybook stories, improving component documentation and developer experience',
      'Wrote comprehensive unit tests using Vitest, increasing reliability and test coverage',
      'Led the migration from React 16 to React 19, leveraging modern rendering and performance improvements',
      'Replaced Redux with React Query for state and data management, simplifying logic and improving maintainability',
      'Integrated Sentry into the Electron application for error tracking and performance monitoring',
      'Built the complete frontend for an Identity Wallet (DID-based) mobile app using React Native',
    ],
    technologies: ['React', 'React Native', 'Electron.js', 'Storybook', 'Vitest', 'React Query', 'Sentry'],
  },
  {
    role: 'Software Engineer',
    company: 'Pezmiz',
    period: 'Jul 2024 — Dec 2024',
    description: 'Built and implemented UI components with their respective logic, developed backend endpoints and integrated them with the frontend.',
    highlights: [
      'Integrated Stripe for secure payment processing using Stripe React Hooks and backend webhooks',
      'Handled subscription logic on the backend with Stripe integration',
      'Worked with Firebase as a database, managing data storage, retrieval, and real-time synchronization',
    ],
    technologies: ['React', 'Node.js', 'Firebase', 'Stripe'],
  },
  {
    role: 'Frontend Developer',
    company: 'Order41',
    period: 'Apr 2024 — Jun 2024',
    description: 'Contributed to the development of a B2B wholesale ordering platform, building frontend features and improving the user experience.',
    highlights: [
      'Built and maintained frontend components for the wholesale ordering platform',
      'Collaborated with the team to deliver features on tight deadlines',
    ],
    technologies: ['React', 'TypeScript'],
  },
  {
    role: 'Software Developer',
    company: 'Tindo',
    period: 'Jul 2023 — Nov 2023',
    description: 'Developed user interfaces using React and Chakra UI to create a responsive and accessible design system.',
    highlights: [
      'Integrated Strapi as a content management system, streamlining content delivery and management',
      'Utilized Docker for containerization, ensuring consistent development and production environments',
      'Designed and built a custom rich text editor using React with formatting, keyboard shortcuts, mentions, and markdown parsing',
    ],
    technologies: ['React', 'Chakra UI', 'Strapi', 'Docker'],
  },
  {
    role: 'Software Developer',
    company: 'MedSupply',
    period: 'Aug 2022 — Jan 2023',
    description: 'Built the frontend of a medical equipment e-commerce platform serving vendors in Canada and the USA.',
    highlights: [
      'Built the frontend of the company website using React and Next.js, improving load times and user engagement',
      'Integrated data using GraphQL APIs with Apollo, enhancing data retrieval and management capabilities',
      'Implemented state management with Redux, ensuring smooth data flow and application performance',
    ],
    technologies: ['React', 'Next.js', 'GraphQL', 'Apollo', 'Redux'],
  },
  {
    role: 'Frontend Developer',
    company: 'Kiitos Technologies',
    period: 'Feb 2022 — Jul 2022',
    description: 'Developed the frontend of a social book sharing and exchanging platform for a startup in Amsterdam.',
    highlights: [
      'Built the front-end using Next.js, React, TypeScript, and Material UI following Agile framework (Scrum)',
      'Validated UI screens and components to ensure the delivery of quality products',
      'Integrated data with API and implemented pagination using React Query',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Material UI', 'React Query'],
  },
  {
    role: 'Frontend Developer',
    company: 'FTC',
    period: 'Jan 2021 — Jun 2021',
    description: 'Built single-page applications using React as part of a frontend development internship.',
    highlights: [
      'Learned and applied React concepts including JSX, ES6, component lifecycle, Hooks, and state management',
      'Built the frontend for SPAs using React, MUI, React Router, Axios, and Redux',
    ],
    technologies: ['React', 'Redux', 'MUI', 'Axios'],
  },
];
