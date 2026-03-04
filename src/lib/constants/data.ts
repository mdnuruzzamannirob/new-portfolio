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
  name: "Md. Nuruzzaman",
  title: "Junior Full-Stack Developer",
  bio: "Passionate developer with 2+ years of experience building production-ready full-stack applications. Specialized in both frontend and backend development.",
  contact: {
    email: "dev.mdnuruzzaman@gmail.com",
    phone: "+880 1973 875893",
    location: "Dhaka, Bangladesh",
    linkedin: "linkedin.com/in/mdnuruzzamannirob4",
    github: "github.com/mdnuruzzamannirob",
  },
};

export const experiences: Experience[] = [
  {
    role: "Junior Full-Stack Developer",
    company: "Sparktech Agency",
    location: "Mohakhali",
    period: "February 2026 - Present",
    highlights: [
      "Project SPHN (Clinerion), DPIData importer",
      "Java/Spring REST APIs",
      "Angular dashboard development",
    ],
  },
  {
    role: "Trainee Full-Stack Developer",
    company: "Sparktech Agency",
    location: "Mohakhali",
    period: "October 2025 - January 2026",
    highlights: [
      "Project SPHN (Clinerion), DPIData importer",
      "Java/Spring REST APIs",
      "Angular dashboard development",
    ],
  },
  {
    role: "Entry-Level Frontend Developer",
    company: "Bhuiyan Tourism",
    location: "West Shewrapara",
    period: "April 2024 - September 2025",
    highlights: [
      "Various projects with WixCode, React",
      "Responsive Websites",
      "UX/UI design & interfaces and dynamic databases",
    ],
  },
];

export const skills: Skill[] = [
  { name: "JavaScript / TypeScript", level: 95 },
  { name: "React / Next.js", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "MongoDB / Mongoose", level: 82 },
  { name: "Git / GitHub", level: 80 },
  { name: "RESTful API design", level: 85 },
  {
    name: "UX/UI - Shadcn UI / Ant Design / Material UI / Styled Components",
    level: 75,
  },
  {
    name: "Agile (Scrum) / Tools (VSCode, Git)",
    level: 80,
  },
];

export const languages: Language[] = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Intermediate" },
  { name: "Hindi", level: "Intermediate" },
];

export const interests: Interest[] = [
  { name: "Coding", level: "Passionate" },
  { name: "Traveling", level: "Enthusiast" },
  { name: "Movies", level: "Active" },
  { name: "Cooking", level: "Engaged" },
];

export const education: Education[] = [
  {
    degree: "Training Certificate",
    institution: "Programming Hero Online",
    location: "",
    period: "July 2023 - December 2023",
    description:
      "Complete Web Development Course with Jhankar Mahbub, covering HTML, CSS, JavaScript, React and more.",
  },
  {
    degree: "Bachelor of Arts in English Literature",
    institution: "National University - Bangladesh",
    location: "",
    period: "2023 - 2027",
    description:
      "Studying English literature with emphasis on language proficiency, literary analysis, and academic writing to develop strong communication and analytical skills.",
  },
];

export const projects: Project[] = [
  {
    name: "Online Hotel Booking Platform",
    description:
      "A hotel booking platform with React, TypeScript, RTK Query and Socket.IO for real-time booking updates",
    tags: [
      "React",
      "TypeScript",
      "RTK Query",
      "Tailwind CSS",
      "Shadcn UI",
      "Socket.IO",
    ],
  },
  {
    name: "E-commerce Buyer Seller Website",
    description:
      "An e-commerce platform with React, TypeScript, RTK Query and Socket.IO for real-time order updates",
    tags: [
      "React",
      "TypeScript",
      "RTK Query",
      "Tailwind CSS",
      "Shadcn UI",
      "Socket.IO",
    ],
  },
  {
    name: "Online Trading Platform",
    description:
      "A trading platform with React, TypeScript, RTK Query and Socket.IO for real-time market data updates",
    tags: ["React", "TypeScript", "RTK Query", "Tailwind CSS", "Shadcn UI"],
  },
];
