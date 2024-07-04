export interface Education {
  institute: string;
  course: string;
  duration: string;
  score: string;
}

export interface Internship {
  role: string;
  company: string;
  duration: string;
  description: string[];
}
export interface Certification {
  title: string;
  institution: string;
  details: string[];
}

export interface Skill {
  name: string;
  level: string;
  rating: number;
}

export interface Project {
  title: string;
  technologies: string;
  description: string[];
  githubLink: string;
}

