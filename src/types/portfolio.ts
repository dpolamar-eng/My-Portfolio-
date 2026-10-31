export interface PersonalInfo {
  name: string;
  titles: string[];
  narrativeHook: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  currentStatus: {
    status: string;
    role: string;
    organization: string;
    timeframe: string;
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  highlights?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  keyLearning: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  category: "Applied AI / NLP" | "Business Intelligence & Analytics" | "Data Science & Predictive Modeling";
  summary: string;
  problemSolved: string;
  myContribution: string;
  architectureDetails: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  metricsOrOutcomes: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: "Core" | "Proficient" | "Exploring";
  }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  category: string;
  verificationUrl?: string;
}

