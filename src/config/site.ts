/**
 * Site Configuration
 * Central configuration file for site-wide settings
 */

export const siteConfig = {
  name: "Divinne Amunega",
  title:
    "Divinne Amunega - Software Engineer Nigeria | Backend, AI, TypeScript",
  description:
    "Software engineer in Lagos, Nigeria building backend and AI-integrated systems in TypeScript and Node.js — API services, model routing, and data pipelines over PostgreSQL and Redis. Currently building PhishCore, a human risk management platform. Available for backend, AI, and full-stack engineering roles, remote or on-site.",
  url: "https://folio.divinne.workers.dev",
  ogImage: "https://folio.divinne.workers.dev/og-image.png",
  author: {
    name: "Divinne Amunega",
    alternateName: "Divine Amunega",
    email: "divineamunega@gmail.com",
    image: "/person.jpg",
    jobTitle: "Software Engineer",
    location: "Nigeria",
    addressRegion: "Lagos",
    addressCountry: "NG",
    blog: "/blog",
  },
  social: {
    github: "https://github.com/divineamunega",
    linkedin: "https://linkedin.com/in/divinne",
    twitter: "https://x.com/divv_dev",
    twitterHandle: "@divv_dev",
  },
  blog: "/blog",
  devToUsername: "divineamunega",
} as const;

export const seoKeywords = [
  // Core titles with location
  "software engineer Nigeria",
  "software developer Nigeria",
  "fullstack developer Nigeria",
  "web developer Nigeria",
  "software engineer in Nigeria",
  "software developer in Nigeria",

  // Specific cities
  "software engineer Lagos",
  "software developer Lagos",
  "fullstack developer Lagos",
  "web developer Lagos",

  // Technologies with location
  "React developer Nigeria",
  "Node.js developer Nigeria",
  "TypeScript developer Nigeria",
  "JavaScript developer Nigeria",
  "frontend developer Nigeria",
  "backend developer Nigeria",

  // General tech skills
  "React developer",
  "Node.js developer",
  "TypeScript",
  "JavaScript",
  "fullstack developer",
  "software engineer",
  "web developer",

  // Remote work
  "remote software engineer Nigeria",
  "remote developer Nigeria",
  "freelance developer Nigeria",

  // Nigerian tech
  "Nigerian software engineer",
  "Nigerian developer",
  "Nigerian tech talent",
  "Africa software engineer",

  // Personal brand
  "Divinne Amunega",
  "Divine Amunega",
] as const;
