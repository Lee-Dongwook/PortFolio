export type ProjectStatus = "in-progress" | "operating" | "deprecated" | "private";

export type ProjectRole = "Solo" | "Lead" | "Contributor";

export interface ProjectDescription {
  paragraphs: string[];
  decisions: string[];
}

export interface ProjectInterface {
  id: string;
  name: string;
  tagline: string;
  role: ProjectRole;
  roleDetail?: string;
  status: ProjectStatus;
  startDate: Date;
  endDate?: Date;
  techStack: string[];
  description: ProjectDescription;
  githubLink?: string;
  websiteLink?: string;
  demoLink?: string;
}
