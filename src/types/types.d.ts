export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  contact: ContactInfo;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export type Level = "Native" | "Fluent" | "Advanced" | "Intermediate" | "Basic";

export interface Language {
  name: string;
  level: Level;
}

export interface Interest {
  name: string;
  level: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
}
