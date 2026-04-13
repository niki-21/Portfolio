export type NavItem = {
  id: string;
  label: string;
};

export type ExternalLink = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
  detail?: string;
  countTo?: number;
  prefix?: string;
  suffix?: string;
};

export type Profile = {
  name: string;
  headline: string;
  summary: string;
  location: string;
  ctaText: string;
  resumeUrl: string;
  linkedInUrl: string;
  githubUrl: string;
  email: string;
  portraitSrc: string;
  publicNote?: string;
  heroHighlights: string[];
};

export type ExperienceItem = {
  org: string;
  role: string;
  dates: string;
  summary: string;
  bullets: string[];
  impactMetrics: string[];
};

export type ProjectLinks = {
  repo?: string;
  website?: string;
  linkedin?: string;
  demo?: string;
  paper?: string;
  competition?: string;
  article?: string;
  caseStudy?: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  dates: string;
  highlight: string;
  techStack: string[];
  motivation: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  links: ProjectLinks;
  featured: boolean;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type CaseStudySection = {
  title: string;
  paragraphs: string[];
};

export type CaseStudyMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  dates: string;
  stack: string[];
  metrics: Metric[];
  challenge: string;
  solution: string;
  outcomes: string[];
  awards: string[];
  heroLinks: ExternalLink[];
  sections: CaseStudySection[];
  media: CaseStudyMedia[];
};

export type CuratedRepo = {
  owner: string;
  name: string;
  description: string;
  language: string;
  href: string;
  homepage?: string;
  topics: string[];
};

export type GitHubRepoCardData = CuratedRepo & {
  stars?: number;
  forks?: number;
  updatedAt?: string;
  source: "live" | "fallback";
};
