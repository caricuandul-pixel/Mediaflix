export interface ServiceSEO {
  title: string;
  description: string;

  ogImage?: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceHero {
  eyebrow: string;

  title: string;

  description: string;

  image: string;

  stats: ServiceStat[];
}

export interface ServiceOverview {
  title: string;

  description: string;

  highlights: string[];
}

export interface ServiceCapability {
  title: string;

  description: string;
}

export interface ServicePackage {
  name: string;

  description: string;

  features: string[];
}

export interface ServiceTechnology {
  title: string;

  description: string;
}

export interface ServiceWorkflowStep {
  title: string;

  description: string;
}

export interface ServiceProject {
  title: string;

  category: string;

  image: string;

  description: string;
}

export interface ServiceFAQ {
  question: string;

  answer: string;
}

export interface ServiceCTA {
  title: string;

  description: string;

  primaryButton: string;

  secondaryButton: string;
}

export interface ServiceData {
  slug: string;

  seo: ServiceSEO;

  hero: ServiceHero;

  overview: ServiceOverview;

  capabilities: ServiceCapability[];

  packages: ServicePackage[];

  technologies: ServiceTechnology[];

  workflow: ServiceWorkflowStep[];

  projects: ServiceProject[];

  industries: string[];

  coverage: string[];

  faqs: ServiceFAQ[];

  relatedServices: string[];

  cta: ServiceCTA;
}