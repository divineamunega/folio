/**
 * Global Type Definitions
 */

export interface Project {
  title: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  features: string[];
  challenges?: string;
}

export type ProjectSlug = string;

export interface ProjectData {
  [key: ProjectSlug]: Project;
}

export interface ContactLink {
  label: string;
  href: string;
  username: string;
  external?: boolean;
}
