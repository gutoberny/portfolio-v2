export interface Skill {
  name: string;
  level?: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  image?: string;
  contact: Contact;
}
