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
  bio: 'Frontend-focused full-stack developer with 2+ years of experience shipping client-facing web applications from design handoff to production delivery.',
  contact: {
    email: 'dev.mdnuruzzaman@gmail.com',
    phone: '+880 1973 875893',
    location: 'Dhaka, Bangladesh',
    github: 'github.com/mdnuruzzamannirob',
    linkedin: 'linkedin.com/in/mdnuruzzamannirob4',
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
      'Deliver client projects across e-commerce platforms, dashboards, landing pages, and custom web apps in a fast-paced agency environment',
      'Own the frontend delivery pipeline from design handoff to UI implementation, API integration, QA alignment, and release handoff',
      'Lead direct client communication including requirement clarification, progress updates, review cycles, and final delivery coordination',
      'Collaborate closely with backend developers to align API contracts and reduce integration friction during delivery',
    ],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Bhuiyan Tourism',
    location: 'Shewrapara, Dhaka',
    period: 'April 2024 - September 2025',
    highlights: [
      'Contributed to a production OTA (Online Travel Agency) platform focused on real-world flight booking workflows',
      'Built new UI pages, maintained existing modules, integrated REST APIs, and resolved production issues independently',
      'Owned feature delivery end-to-end from implementation through release with minimal supervision',
      'Strengthened production engineering discipline through accountability for code quality, reliability, and user-facing behavior',
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
  { name: 'JWT / Firebase Authentication', level: 65 },
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
    degree: 'Bachelor of Arts in English',
    institution: 'National University',
    location: 'Bangladesh',
    period: '2023 - 2027 (Expected)',
    description:
      'Ongoing undergraduate program focused on language proficiency, critical reading, and academic communication.',
    link: 'https://www.nu.ac.bd/syllabus-Bachelor-of-Arts-Honours.php',
  },
  {
    degree: 'Practical Prompt Engineering',
    institution: 'Frontend Masters',
    location: 'Online',
    period: 'April 2026',
    description:
      'Completed hands-on training on prompt design, LLM behavior, and practical AI integration. Credential ID: e50180c855-QrhipoBEtR.',
    link: 'https://static.frontendmasters.com/ud/c/e50180c855/QrhipoBEtR/prompt-engineering.pdf',
  },
  {
    degree: 'Tailwind CSS 4+',
    institution: 'Frontend Masters',
    location: 'Online',
    period: 'March 2026',
    description:
      'Completed advanced Tailwind CSS v4 training on utility-first architecture, theming, and responsive UI patterns. Credential ID: e50180c855-XQKnWntAkM.',
    link: 'https://static.frontendmasters.com/ud/c/e50180c855/XQKnWntAkM/tailwind-css-v2.pdf',
  },
  {
    degree: 'Complete Web Development Course',
    institution: 'Programming Hero',
    location: 'Online',
    period: 'July 2023 - December 2023',
    description:
      'Completed an intensive web development bootcamp covering HTML, CSS, JavaScript, React, and Tailwind CSS. Credential ID: WEB8-1658.',
    link: 'https://drive.google.com/file/d/1D0nnc-MkBQRgks2zXhF_eXX-8EVH0y0t/view?usp=sharing',
  },
]

export const projects: Project[] = [
  {
    name: 'Testora',

    year: 2026,
    description: [
      'Built a multi-tenant SaaS platform for exam preparation, course sales, and educational content workflows across multiple user roles',
      'Developed a responsive student experience with practice sessions, course purchase flow, and article reading using React and Redux Toolkit',
      'Engineered an admin dashboard for user management, content moderation, order handling, and analytics visualization with Recharts',
      'Implemented OTP-based authentication, password recovery, and profile management with React Hook Form and Zod validation',
      'Deployed frontend and dashboard applications on Vercel with production-focused performance and SEO setup',
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Shadcn UI',
      'React Hook Form',
      'Zod',
      'Recharts',
    ],
    urls: [
      { label: 'Live Demo', url: 'https://testora-frontend.vercel.app' },
      { label: 'Dashboard Demo', url: 'https://testora-dashboard.vercel.app' },
      {
        label: 'Frontend Code',
        url: 'https://github.com/mdnuruzzamannirob/testora-frontend',
      },
      {
        label: 'Dashboard Code',
        url: 'https://github.com/mdnuruzzamannirob/testora-dashboard',
      },
    ],
  },
  {
    name: 'WanderStay',

    year: 2026,
    description: [
      'Created a booking platform connecting travelers with property owners using Next.js and a component-driven frontend architecture',
      'Built customer-facing flows for property search, availability calendar, booking management, and reservation tracking with date-fns',
      'Developed an admin dashboard with user operations, occupancy analytics, guest messaging, and transaction reporting using Recharts',
      'Implemented real-time status updates and notifications with responsive behavior across mobile, tablet, and desktop layouts',
      'Deployed frontend and dashboard applications on Vercel with optimized builds and maintainable Redux Toolkit state management',
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Shadcn UI',
      'Radix UI',
      'React Hook Form',
      'Recharts',
      'date-fns',
    ],
    urls: [
      { label: 'Live Demo', url: 'https://wanderstay-frontend.vercel.app' },
      {
        label: 'Dashboard Demo',
        url: 'https://wanderstay-dashboard.vercel.app',
      },
      {
        label: 'Frontend Code',
        url: 'https://github.com/mdnuruzzamannirob/wander-stay-frontend',
      },
      {
        label: 'Dashboard Code',
        url: 'https://github.com/mdnuruzzamannirob/wander-stay-dashboard',
      },
    ],
  },
  {
    name: 'NextTrade',
    year: 2024,
    description: [
      'Collaborated on a full-stack trading platform supporting trade execution, real-time market visibility, and portfolio tracking',
      'Developed trading interfaces including watchlists, portfolio dashboards, and live pricing flows with Socket.IO integration',
      'Integrated Stripe payments for deposit and withdrawal workflows with Firebase authentication and JWT-based authorization',
      'Built a learning module for market insights, educational content, and user feedback to improve product engagement',
      'Implemented responsive UI patterns with Material UI and Framer Motion to improve navigation clarity and interaction quality',
    ],
    tags: [
      'Next.js',
      'JavaScript',
      'Material UI',
      'Framer Motion',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'Stripe',
      'Socket.IO',
    ],
    urls: [
      { label: 'Live Demo', url: 'https://nextrade-front-end.vercel.app' },
      { label: 'Frontend Code', url: 'https://github.com/diptomahin/nextrade' },
      {
        label: 'Backend Code',
        url: 'https://github.com/diptomahin/nexTrade-server',
      },
    ],
  },
  {
    name: 'Invento Wave',

    year: 2023,
    description: [
      'Engineered an inventory management system for retail operations with product tracking and stock monitoring workflows',
      'Implemented product catalog management with category controls, discounts, and real-time inventory updates',
      'Built an admin dashboard with sales insights, role-based access (owner, manager, staff), and invoice generation',
      'Integrated Stripe payment workflows for secure transaction processing and checkout reliability',
      'Developed a responsive frontend with Vite and Tailwind CSS, backed by Firebase authentication and role-aware access',
    ],
    tags: [
      'React',
      'Vite',
      'JavaScript',
      'Tailwind CSS',
      'React Hook Form',
      'Firebase',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Stripe',
    ],
    urls: [
      { label: 'Live Demo', url: 'https://invento-wave.web.app' },
      {
        label: 'Frontend Code',
        url: 'https://github.com/mdnuruzzamannirob/invento-wave-client',
      },
      {
        label: 'Backend Code',
        url: 'https://github.com/mdnuruzzamannirob/invento-wave-server',
      },
    ],
  },
  {
    name: 'Library Hub',

    year: 2023,
    description: [
      'Built a library management platform with categorized book catalogs and search-first discovery experiences',
      'Implemented borrow and return workflows with automated history tracking and availability status management',
      'Developed community contribution features to add books and maintain catalog information collaboratively',
      'Created user dashboards for borrowing history, reading preferences, and personalized recommendation flows',
      'Designed a maintainable Material UI interface with React Router navigation and Vite-powered frontend performance',
    ],
    tags: [
      'React',
      'Vite',
      'JavaScript',
      'Material UI',
      'React Router',
      'Firebase',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    urls: [
      { label: 'Live Demo', url: 'https://library-hub-ef83f.web.app' },
      {
        label: 'Frontend Code',
        url: 'https://github.com/mdnuruzzamannirob/library-hub-client',
      },
      {
        label: 'Backend Code',
        url: 'https://github.com/mdnuruzzamannirob/library-hub-server',
      },
    ],
  },
  {
    name: 'Brand Shop',

    year: 2023,
    description: [
      'Developed an automotive e-commerce platform with multi-brand catalog structures and product-focused browsing',
      'Built search and filtering experiences with specifications, customer reviews, ratings, and stock visibility',
      'Implemented cart, checkout, and persistent state workflows to support smooth purchase journeys',
      'Created authenticated user account features for order tracking, wishlist management, and purchase history',
      'Designed responsive Tailwind CSS interfaces with SweetAlert2 status feedback for key order interactions',
    ],
    tags: [
      'React',
      'Vite',
      'JavaScript',
      'Tailwind CSS',
      'React Router',
      'Firebase',
      'SweetAlert2',
      'Express.js',
      'MongoDB',
    ],
    urls: [
      { label: 'Live Demo', url: 'https://brand-shop-61d84.web.app' },
      {
        label: 'Frontend Code',
        url: 'https://github.com/mdnuruzzamannirob/brand-shop-client',
      },
      {
        label: 'Backend Code',
        url: 'https://github.com/mdnuruzzamannirob/brand-shop-server',
      },
    ],
  },
  {
    name: 'Confer',

    year: 2023,
    description: [
      'Developed an event discovery platform with conference and event listings across multiple categories',
      'Implemented search and filter workflows with category navigation and detailed event information views',
      'Built user registration flows with personal dashboards for event tracking and reminder-aware experiences',
      'Created a responsive React and React Router frontend with Vite for fast development and build performance',
      'Designed Material Tailwind interfaces with intuitive navigation patterns and real-time search behavior',
    ],
    tags: [
      'React',
      'Vite',
      'JavaScript',
      'Tailwind CSS',
      'Material Tailwind',
      'React Router',
      'Firebase',
    ],
    urls: [
      { label: 'Live Demo', url: 'https://confer-42442.web.app' },
      {
        label: 'Frontend Code',
        url: 'https://github.com/mdnuruzzamannirob/confer',
      },
    ],
  },
]
