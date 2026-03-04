import type {
  PersonalInfo,
  Experience,
  Skill,
  Language,
  Interest,
  Education,
  Project,
} from "@/types/types";

export const personalInfo: PersonalInfo = {
  name: "Daniel Laera",
  title: "Software Engineer",
  bio: "Passionate developer with 6+ years of experience building production-ready full-stack applications. Specialized in both frontend and backend development.",
  contact: {
    email: "daniel.laera@outlook.com",
    phone: "+41764244220",
    location: "Geneva, CH",
    linkedin: "linkedin.com/in/daniellaera",
    github: "github.com/daniellaera",
  },
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Software Engineer",
    company: "Avosad",
    location: "Lausanne",
    period: "3.2023 – Present",
    highlights: [
      "Development of an automatic publication system for medical documents from Medilink to the Electronic Patient Record (EPR)",
      "Backend development in Java, Spring, Spring Boot, Maven and ArangoDB for data management",
      "Development of an Angular interface for managing and monitoring",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Queue management with RabbitMQ to ensure reliable and scalable transmission",
      "Secure transmission of documents to CARA via web services and SAML authentication",
      "Deployment in development and production environments using containerization (Docker, Kubernetes)",
      "Automated GitLab CI/CD pipelines for building, testing, and deployment",
    ],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "SwissSign AG",
    location: "Lausanne",
    period: "3.2023 – 11.2024",
    highlights: [
      "Backend and frontend development for on-premises solutions for SwissSign digital signature services",
      "Designed and developed backend REST APIs using Java, Spring, Spring Boot, and Maven for digital signature solutions",
      "Worked with PostgreSQL databases using Flyway for migration management and implemented JPA persistence and Hibernate ORM for data access",
      "Created and managed RESTful APIs enabling interaction between microservices and frontend applications",
      "Deployed and tested REST APIs in on-premises environments using Docker containers",
      "Managed continuous integration and deployment pipelines on GitLab, including automated testing and build validation",
      "Performed continuous integration and deployment of Tomcat servers via Jenkins pipelines",
      "Developed dynamic, responsive user interfaces with Angular, ensuring an optimal user experience",
      "Participated in code reviews via GitLab, ensuring code quality and maintainability",
      "Wrote and executed unit tests with Mockito and JUnit to ensure software reliability and performance",
      "Participated in AGILE project management (SCRUM ceremonies)",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "DCSN",
    location: "Geneva",
    period: "8.2022 – 2.2023",
    highlights: [
      "Development of forms for the e-Démarche platform of the State of Geneva",
      "Developed backend and frontend forms using Wiley, Angular, and Java",
      "Conducted user testing and ensured compliance of forms",
      "Created deployment environments with GitLab, ArgoCD, and Jenkins",
      "Built and deployed applications using Docker containers and GitLab CI/CD pipelines",
      "Deployed applications on Tomcat servers across multiple environments (test, staging, production)",
      "Participated in AGILE project management (SCRUM ceremonies)",
    ],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Itchor",
    location: "Lausanne",
    period: "10.2021 – 4.2022",
    highlights: [
      "Business applications for trading and maritime market management development",
      "Full-stack Development Monorepo NX in remote dev container",
      "VS Code Remote Development & Git workflow",
      "APIs backend implementation with NodeJS",
      "React and AntD UI components",
      "Unit tests",
      "GitLab CI/CD & pipelines monitoring",
      "Postgres DBs with basic Row-Level Security & exposing API GraphQL",
      "Authentication & authorization Microsoft",
      "AGILE workflow",
    ],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "JPL Informatique SA",
    location: "Morges",
    period: "6.2019 – 9.2021",
    highlights: [
      "Business applications for État du Valais back-office management",
      "Java/Spring REST APIs",
      "Camunda BPMN workflow implementation",
    ],
  },
  {
    role: "Junior Full-Stack Developer",
    company: "Hôpitaux Universitaires de Genève",
    location: "Carouge",
    period: "11.2018 – 5.2019",
    highlights: [
      "Project SPHN (Clinerion), DPIData importer",
      "Java/Spring REST APIs",
      "Angular dashboard development",
    ],
  },
  {
    role: "Web Developer",
    company: "ReverseWeb",
    location: "Carouge",
    period: "7.2017 – 8.2018",
    highlights: [
      "Various projects with WixCode, React",
      "Responsive Websites",
      "UX/UI design & interfaces and dynamic databases",
    ],
  },
];

export const skills: Skill[] = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React / Next.js / Vue / Angular", level: 90 },
  { name: "Node.js / Express / NestJS", level: 85 },
  { name: "Java / Spring Boot / Maven", level: 88 },
  { name: "PostgreSQL / MongoDB / SQL / Prisma / JPA", level: 82 },
  { name: "Docker / Kubernetes / CI/CD (GitLab, Jenkins)", level: 80 },
  { name: "Testing (JUnit, Cypress, Mockito)", level: 78 },
  {
    name: "API Integration (REST / GraphQL / SOAP / Kafka / RabbitMQ)",
    level: 85,
  },
  { name: "UX/UI – Chakra UI / AntD / PrimeNG / Styled Components", level: 75 },
  {
    name: "DevOps / Agile (Scrum, Kanban) / Tools (VSCode, IntelliJ, Git)",
    level: 80,
  },
];

export const languages: Language[] = [
  { name: "Italian", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" },
];

export const interests: Interest[] = [
  { name: "Table Tennis", level: "Passionate" },
  { name: "Movies", level: "Enthusiast" },
  { name: "Hiking", level: "Active" },
  { name: "Organic Farming", level: "Engaged" },
];

export const education: Education[] = [
  {
    degree: "Training Certificate",
    institution: "Udemy Online",
    location: "",
    period: "9.2018",
    description: "Full-Stack Developer, React, Angular 2+",
  },
  {
    degree: "Training Certificate",
    institution: "Association Nomades Ateliers",
    location: "Geneva",
    period: "1.2018 – 7.2018",
    description: "Mobile Web Application Developer / PWA",
  },
  {
    degree: "Higher Vocational School Diploma",
    institution: "I.P.I.A. L. Palmieri – Italy",
    location: "",
    period: "2004 – 2009",
    description: "Electronics and Telecommunications Industry Technician",
  },
];

export const projects: Project[] = [
  {
    name: "Dev Connector",
    description:
      "A full-stack dashboard with React, Node.js, Postgres and Prisma",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Chakra UI",
      "Supabase",
      "Socket.IO",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "CI/CD",
    ],
  },
  {
    name: "Book Management App",
    description: "A library book management application with real-time updates",
    tags: [
      "Java",
      "Spring",
      "PostgreSQL",
      "Flyway",
      "Vue.js",
      "TypeScript",
      "GitHub CI/CD",
      "Docker",
    ],
  },
  {
    name: "Ollama DeepSeek AI Chatbot",
    description:
      "Natural language processing chatbot with React, Spring, Chakra UI, Ollama and DeepSeek LLM model",
    tags: ["Spring", "React", "Ollama", "DeepSeek (v1.5)"],
  },
];
