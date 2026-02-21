export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Identity Wallet',
    description: 'A DID-based Identity Wallet mobile application built with React Native. Users can manage their decentralized identities, credentials, and digital documents securely on their mobile devices.',
    technologies: ['React Native', 'TypeScript', 'DID', 'Sentry'],
  },
  {
    title: 'Mercibookoup',
    description: 'A progressive web app platform for swapping books between users in Europe. Built the frontend using Next.js, React, TypeScript, and Material UI with Agile methodology (Scrum). Integrated REST API data and implemented pagination using React Query.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Material UI', 'React Query', 'REST API'],
    liveUrl: 'https://mercibookoup.com/',
  },
  {
    title: 'VendorBay',
    description: 'A medical equipment e-commerce platform serving vendors in Canada and the USA. Built the entire frontend using React, Next.js, and Bootstrap. Managed state with Redux and integrated data through GraphQL APIs with Apollo.',
    technologies: ['Next.js', 'React', 'Bootstrap', 'Redux', 'GraphQL', 'Apollo'],
    liveUrl: 'https://myvendorbay.com/',
  },
  {
    title: 'Pezmix Platform',
    description: 'A full-stack web platform with secure Stripe payment processing and subscription management. Built UI components with React, developed backend endpoints with Node.js, and integrated Firebase for real-time data synchronization.',
    technologies: ['React', 'Node.js', 'Firebase', 'Stripe', 'Express', 'TypeScript'],
  },
];
