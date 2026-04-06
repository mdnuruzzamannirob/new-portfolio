import type {
  Education,
  Experience,
  Interest,
  Language,
  PersonalInfo,
  Project,
  Skill,
} from '@/types/types'

export const personalInfo: PersonalInfo = {
  name: 'Md. Nuruzzaman',
  title: 'Full-Stack Developer',
  bio: 'Passionate developer with 2+ years of experience building production-ready web applications. Specialized in frontend development, with growing expertise in full-stack development.',
  contact: {
    email: 'dev.mdnuruzzaman@gmail.com',
    phone: '+880 1973 875893',
    location: 'Dhaka, Bangladesh',
    linkedin: 'linkedin.com/in/mdnuruzzamannirob4',
    github: 'github.com/mdnuruzzamannirob',
    medium: 'medium.com/@mdnuruzzamannirob',
  },
}

export const experiences: Experience[] = [
  {
    role: 'Junior Full-Stack Developer',
    company: 'Sparktech Agency',
    location: 'Mohakhali, Dhaka',
    period: 'October 2025 - Present',
    highlights: [
      'Built and delivered varied client projects including e-commerce platforms, dashboards, landing pages, and custom web apps in a fast-paced, Fiverr-based agency environment',
      'Handled the complete frontend pipeline — from design handoff to UI development, API integration, and final delivery',
      'Managed client communication directly, including requirement gathering, progress updates, and review cycles',
      'Coordinated with backend developers to ensure smooth API integration and consistent cross-team delivery',
    ],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Bhuiyan Tourism',
    location: 'Shewrapara, Dhaka',
    period: 'April 2024 - September 2025',
    highlights: [
      'Worked on a production-grade OTA (Online Travel Agency) platform focused on the flight booking experience',
      'Built new UI pages, maintained existing features, integrated REST APIs, and handled bug fixes independently',
      'Owned features end-to-end — from implementation to delivery — with minimal oversight',
      'Developed a strong habit of accountability and responsibility for production-level code affecting real users',
    ],
  },
]

export const skills: Skill[] = [
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'React.js / Next.js', level: 88 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'Redux Toolkit (RTK Query)', level: 82 },
  { name: 'API Integration (REST)', level: 80 },
  { name: 'Shadcn UI / MUI / Ant Design', level: 70 },
  { name: 'React Hook Form / Zod', level: 75 },
  { name: 'Git / GitHub', level: 82 },
  { name: 'Node.js / Express.js', level: 65 },
  { name: 'MongoDB / Mongoose', level: 60 },
]

export const languages: Language[] = [
  { name: 'Bengali', level: 'Native' },
  { name: 'English', level: 'Intermediate' },
  { name: 'Hindi', level: 'Basic' },
]

export const interests: Interest[] = [
  { name: 'Coding', level: 'Passionate' },
  { name: 'Traveling', level: 'Enthusiast' },
  { name: 'Movies', level: 'Active' },
  { name: 'Cricket', level: 'Enthusiast' },
]

export const education: Education[] = [
  {
    degree: 'Bachelor of Arts in English Literature',
    institution: 'National University',
    location: 'Bangladesh',
    period: '2023 - 2027 (Expected)',
    description:
      'Studying English literature with emphasis on language proficiency, literary analysis, and academic writing.',
    link: 'https://www.nu.ac.bd/syllabus-Bachelor-of-Arts-Honours.php',
  },
  {
    degree: 'Practical Prompt Engineering',
    institution: 'Frontend Masters',
    location: '',
    period: 'April 2026',
    description:
      'Completed a hands-on course covering prompt design, LLM behavior, and practical AI integration techniques. Credential ID: e50180c855-QrhipoBEtR',
    link: 'https://static.frontendmasters.com/ud/c/e50180c855/QrhipoBEtR/prompt-engineering.pdf',
  },
  {
    degree: 'Tailwind CSS 4+',
    institution: 'Frontend Masters',
    location: '',
    period: 'March 2026',
    description:
      'Completed an in-depth course on Tailwind CSS v4, covering utility-first design, custom theming, and modern responsive layouts. Credential ID: e50180c855-XQKnWntAkM',
    link: 'https://static.frontendmasters.com/ud/c/e50180c855/XQKnWntAkM/tailwind-css-v2.pdf',
  },
  {
    degree: 'Complete Web Development Course',
    institution: 'Programming Hero',
    location: '',
    period: 'July 2023 - December 2023',
    description:
      'Completed a full web development bootcamp covering HTML, CSS, JavaScript, React, Tailwind CSS and more. Credential ID: WEB8-1658',
    link: 'https://drive.google.com/file/d/1D0nnc-MkBQRgks2zXhF_eXX-8EVH0y0t/view?usp=sharing',
  },
]

export const projects: Project[] = [
  {
    name: 'NextTrade',
    type: 'Team Project',
    description: [
      'Online trading and business platform for buying and selling assets with real-time price tracking',
      'Features trading page, market page, portfolio, watchlist, and admin dashboard for user and transaction management',
      'Integrated Stripe for secure deposit and withdrawal, and Firebase for authentication with JWT',
      'Built real-time notifications and live chat using Socket.IO',
    ],
    tags: [
      'Next.js',
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Material UI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'Firebase',
    ],
    githubClient: 'https://github.com/diptomahin/nextrade',
    githubServer: 'https://github.com/diptomahin/nexTrade-server',
    liveUrl: 'https://nextrade-front-end.vercel.app',
  },
  {
    name: 'Invento Wave',
    type: 'Personal Project',
    description: [
      'Inventory management system for registered shops to manage products, categories, and discounts',
      'Includes sales tracking, invoice generation, and stock management across multiple modules',
      'Firebase authentication with role-based access for shop owners and managers',
    ],
    tags: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
    ],
    githubClient: 'https://github.com/mdnuruzzamannirob/invento-wave-client',
    githubServer: 'https://github.com/Md-Nuruzzaman-nirob/invento-wave-server',
    liveUrl: 'https://invento-wave.web.app',
  },
  {
    name: 'Library Hub',
    type: 'Personal Project',
    description: [
      'Library management website for borrowing and returning books across different categories',
      'Users can add, update, and manage books with a clean and responsive UI',
      'Firebase authentication with protected routes for authorized users',
    ],
    tags: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
    ],
    githubClient: 'https://github.com/mdnuruzzamannirob/library-hub-client',
    githubServer: 'https://github.com/Md-Nuruzzaman-nirob/library-hub-server',
    liveUrl: 'https://library-hub-ef83f.web.app',
  },
  {
    name: 'Brand Shop',
    type: 'Personal Project',
    description: [
      'Automotive brand website showcasing products across multiple car categories',
      'Users can browse brand-wise car listings with dynamic product data from the database',
      'Responsive design with Firebase authentication and protected routes',
    ],
    tags: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
    ],
    githubClient: 'https://github.com/mdnuruzzamannirob/brand-shop-client',
    githubServer: 'https://github.com/Md-Nuruzzaman-nirob/brand-shop-server',
    liveUrl: 'https://brand-shop-61d84.web.app',
  },
  {
    name: 'Confer',
    type: 'Personal Project',
    description: [
      'Event management website for browsing and registering to conferences and events',
      'Firebase-powered authentication with user-specific event tracking',
      'Fully client-side application with no backend server required',
    ],
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Firebase'],
    githubClient: 'https://github.com/mdnuruzzamannirob/confer',
    liveUrl: 'https://confer-42442.web.app',
  },
]
