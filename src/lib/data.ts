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
    name: 'Testora',
    type: 'Personal Project',
    year: 2026,
    description: [
      'Built scalable multi-tenant SaaS platform for exam preparation, course marketplace, and educational content management serving multiple user roles',
      'Developed responsive student dashboard with interactive practice question engine, course purchase workflow, and article reading interface using React and Redux state management',
      'Engineered admin panel with user management, content moderation, order processing, and real-time analytics dashboards using Recharts for data visualization',
      'Implemented OTP-based authentication with password recovery and profile management using React Hook Form and Zod validation',
      'Deployed production-ready application on Vercel with optimized performance and SEO implementation',
    ],
    tags: [
      'Next.js',
      'React',
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
    type: 'Personal Project',
    year: 2026,
    description: [
      'Created full-featured booking platform connecting travelers with property owners using Next.js and React',
      'Built customer-facing application with property search with real-time availability calendar, booking management, and reservation tracking using date-fns',
      'Developed comprehensive admin dashboard featuring user management, occupancy analytics, guest messaging system, and transaction history with Recharts',
      'Implemented real-time notifications and status updates with responsive design for mobile, tablet, and desktop platforms',
      'Deployed on Vercel with optimized build performance and production-ready state management using Redux Toolkit',
    ],
    tags: [
      'Next.js',
      'React',
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
    type: 'Team Project',
    year: 2024,
    description: [
      'Collaborated on full-stack trading platform enabling users to execute trades with real-time market data and portfolio tracking',
      'Developed trading interface with watchlist management, portfolio dashboard, real-time price updates using Socket.IO connection',
      'Integrated Stripe payment gateway for secure deposits and withdrawals with Firebase authentication and JWT tokens',
      'Built trading academy section with market insights, educational content, and user review system',
      'Implemented Material UI components with Framer Motion animations for smooth user experience across responsive design',
    ],
    tags: [
      'Next.js',
      'React',
      'Material UI',
      'Framer Motion',
      'Tailwind CSS',
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
    type: 'Personal Project',
    year: 2023,
    description: [
      'Engineered complete inventory management system for retail shops with product tracking and stock monitoring capabilities',
      'Implemented product catalog with category organization, discount management, and real-time inventory updates',
      'Built admin dashboard with sales analytics, role-based access control (owner/manager/staff), and automated invoice generation',
      'Integrated Stripe payment processing for customer transactions with secure checkout flow',
      'Developed responsive UI using Vite and Tailwind CSS for optimized performance with Firebase authentication',
    ],
    tags: [
      'React',
      'Vite',
      'Tailwind CSS',
      'React Hook Form',
      'Firebase',
      'Express.js',
      'MongoDB',
      'Stripe',
      'JWT',
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
    type: 'Personal Project',
    year: 2023,
    description: [
      'Built complete library management platform with book catalog across multiple categories and advanced search functionality',
      'Implemented borrow/return workflow with automated book history tracking and availability status management',
      'Developed community features allowing users to contribute by adding new books and updating existing information',
      'Created user dashboard with borrowing history, reading preferences, and personalized book recommendations',
      'Designed Material UI interface with React Router navigation and Vite build optimization for fast load times',
    ],
    tags: [
      'React',
      'Vite',
      'Material UI',
      'React Router',
      'Firebase',
      'Express.js',
      'MongoDB',
      'JWT',
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
    type: 'Personal Project',
    year: 2023,
    description: [
      'Developed automotive e-commerce platform with product catalog across multiple brands and categories',
      'Built advanced search and filtering system with product specifications, customer reviews with star ratings, and real-time stock status',
      'Implemented complete shopping cart functionality with persistent state management and secure checkout process',
      'Created user account system for order tracking, wishlist management, and purchase history with Firebase authentication',
      'Designed responsive UI using Tailwind CSS with SweetAlert2 notifications for order status updates',
    ],
    tags: [
      'React',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Firebase',
      'SweetAlert2',
      'Express.js',
      'MongoDB',
      'JWT',
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
    type: 'Personal Project',
    year: 2023,
    description: [
      'Developed event discovery platform with conference and event listings across multiple categories',
      'Implemented event search and filtering system with category-based browsing and detailed event information display',
      'Built user registration workflow with personal dashboard for tracking registered events and automatic reminders',
      'Created responsive client-side application using React and React Router with fast performance using Vite',
      'Designed professional Material Tailwind interface with intuitive navigation and real-time search capabilities',
    ],
    tags: [
      'React',
      'Vite',
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
