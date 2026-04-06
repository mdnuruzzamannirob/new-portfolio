export interface ContactInfo {
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  medium: string
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  contact: ContactInfo
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export interface Skill {
  name: string
  level: number // 0-100
}

export type Level = 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic'

export interface Language {
  name: string
  level: Level
}

export type InterestLevel = 'Passionate' | 'Enthusiast' | 'Active' | 'Casual'

export interface Interest {
  name: string
  level: InterestLevel
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  description: string
  link: string
}

export interface Project {
  name: string
  type: 'Team Project' | 'Personal Project'
  description: string[]
  tags: string[]
  githubClient?: string
  githubServer?: string
  liveUrl?: string
}
