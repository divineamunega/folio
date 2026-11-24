/**
 * Technology Stack Configuration
 * Define all technologies and skills displayed on the site
 */

export interface TechItem {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export const techStack: TechItem[] = [
  {
    name: "React",
    icon: "devicon-react-original colored",
    category: "frontend",
  },
  {
    name: "Node",
    icon: "devicon-nodejs-plain colored",
    category: "backend",
  },
  {
    name: "JS",
    icon: "devicon-javascript-plain colored",
    category: "frontend",
  },
  {
    name: "TS",
    icon: "devicon-typescript-plain colored",
    category: "frontend",
  },
  {
    name: "Astro",
    icon: "devicon-astro-original colored",
    category: "frontend",
  },
  {
    name: "Mongo",
    icon: "devicon-mongodb-plain colored",
    category: "database",
  },
  {
    name: "Postgres",
    icon: "devicon-postgresql-plain colored",
    category: "database",
  },
  {
    name: "Supabase",
    icon: "devicon-supabase-plain colored",
    category: "database",
  },
  {
    name: "Firebase",
    icon: "devicon-firebase-plain colored",
    category: "database",
  },
  {
    name: "Python",
    icon: "devicon-python-plain colored",
    category: "backend",
  },
  {
    name: "Linux",
    icon: "devicon-linux-plain colored",
    category: "tools",
  },
  {
    name: "CSS",
    icon: "devicon-css3-plain colored",
    category: "frontend",
  },
] as const;
