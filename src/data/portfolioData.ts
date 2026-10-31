import {
  PersonalInfo,
  EducationItem,
  ExperienceItem,
  ProjectItem,
  SkillGroup,
  CertificationItem,
} from "../types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Disha Polamarasetti",
  titles: ["Data Scientist", "Data Analyst", "Applied AI Builder"],
  narrativeHook: "From Learning to Building",
  summary:
    "Data Science graduate student with proven academic rigor (9.1 CGPA) and industry internship experience. I transform structured and unstructured data into predictive machine learning models, interactive business intelligence dashboards, and production-ready NLP tools.",
  email: "dishapolamarasetti2003@gmail.com",
  phone: "+91 9398019939",
  location: "Visakhapatnam, India",
  githubUrl: "https://github.com/disha-polamarasetti",
  linkedinUrl: "https://linkedin.com/in/disha-polamarasetti",
  currentStatus: {
    status: "Active Industry Experience",
    role: "Data Science & Machine Learning Intern",
    organization: "Launched Global",
    timeframe: "May 2025 – June 2025",
  },
};

export const experienceData: ExperienceItem[] = [
  {
    role: "Data Science & Machine Learning Intern",
    company: "Launched Global",
    period: "May 2025 – June 2025",
    type: "Industry Internship",
    summary:
      "Engaged in real-world data science workflows, focusing on end-to-end data preparation pipelines, exploratory analysis, and predictive model benchmarking.",
    responsibilities: [
      "Engineered automated data preprocessing routines and handled exploratory data analysis (EDA) across multi-source datasets.",
      "Built, evaluated, and fine-tuned baseline machine learning models, measuring performance using standard evaluation metrics.",
      "Collaborated in an agile cross-functional setting, translating business problem statements into analytical pipelines.",
    ],
    technologies: ["Python", "Pandas", "Scikit-Learn", "NumPy", "EDA", "Data Preprocessing"],
    keyLearning:
      "Learned how production data differs drastically from clean benchmark datasets, requiring robust defensive preprocessing and careful metric evaluation.",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "resumate-ai",
    title: "ResuMate AI",
    badge: "NLP & Applied AI",
    category: "Applied AI / NLP",
    summary:
      "An automated recruitment screening engine using Natural Language Processing to extract candidate competencies from unstructured resume texts and match them to job criteria.",
    problemSolved:
      "Manual resume screening is slow, subjective, and prone to human bias when filtering hundreds of applicant submissions for technical positions.",
    myContribution:
      "Sole architect and developer. Designed the NLP pipeline, tokenization rules, and TF-IDF/vectorization matching algorithms to calculate candidate-job fit scores.",
    architectureDetails: [
      "Text extraction and normalization pipeline for unstructured PDF/text documents.",
      "Custom tokenization and stop-word filtering tuned for engineering taxonomies.",
      "Feature engineering with vectorization for semantic skill-to-job matching.",
      "Automated scoring algorithm simulating enterprise recruitment filtering systems.",
    ],
    techStack: ["Python", "NLP", "Scikit-Learn", "NLTK", "Regex", "Text Vectorization"],
    githubUrl: "https://github.com/disha-polamarasetti/resumate-ai",
    featured: true,
    metricsOrOutcomes: [
      "Simulates enterprise ATS screening logic",
      "Automated extraction across diverse resume formats",
      "High precision keyword & semantic matching",
    ],
  },
  {
    id: "business-analytics-suite",
    title: "Business Analytics Suite",
    badge: "BI & Strategic Forecasting",
    category: "Business Intelligence & Analytics",
    summary:
      "Comprehensive revenue analysis and predictive sales forecasting platform paired with dynamic Power BI KPI dashboards for strategic executive decision-making.",
    problemSolved:
      "Business stakeholders often struggle to correlate multi-channel sales figures with customer behavior, leading to reactive rather than predictive planning.",
    myContribution:
      "Built predictive sales forecasting models, performed behavioral customer segmentation, and engineered interactive multi-page Power BI executive dashboards.",
    architectureDetails: [
      "Predictive revenue and sales trend forecasting using time-series and historical indicators.",
      "Unsupervised clustering/segmentation to isolate high-value customer cohorts.",
      "Interactive Power BI dashboard architecture with real-time KPI card filters, drill-downs, and financial metrics.",
      "SQL data modeling and ETL transformations to standardize operational metrics.",
    ],
    techStack: ["Power BI", "SQL", "Python", "Data Modeling", "Customer Segmentation", "Excel (Advanced)"],
    githubUrl: "https://github.com/disha-polamarasetti/business-analytics-suite",
    featured: true,
    metricsOrOutcomes: [
      "Real-time visibility into executive revenue metrics",
      "Identified distinct customer behavioral segments",
      "Data-backed sales forecasting models",
    ],
  },
  {
    id: "data-science-portfolio",
    title: "Predictive Salary Analytics & EDA Suite",
    badge: "Statistical Modeling & Insights",
    category: "Data Science & Predictive Modeling",
    summary:
      "In-depth exploratory data analysis and regression suite evaluating salary benchmarks across experience levels, tech stacks, and company tiers.",
    problemSolved:
      "Navigating non-transparent compensation distributions across disparate job markets and roles requires statistically rigorous normalization and regression modeling.",
    myContribution:
      "Conducted extensive data cleaning and exploratory analysis, designed regression models to predict salary bands, and synthesized visual insight reports.",
    architectureDetails: [
      "Structured data preprocessing and outlier detection on compensation datasets.",
      "Multivariate regression modeling to identify statistically significant salary determinants.",
      "Visual exploratory storytelling using Matplotlib and Seaborn distributions.",
    ],
    techStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Regression Analysis"],
    githubUrl: "https://github.com/disha-polamarasetti/data-science-portfolio",
    featured: true,
    metricsOrOutcomes: [
      "Quantified salary variance across role seniority",
      "Comprehensive exploratory distribution reports",
      "Trained and cross-validated regression models",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Querying",
    description: "Core languages used daily for data manipulation and backend scripting.",
    icon: "Code",
    skills: [
      { name: "Python", level: "Core" },
      { name: "SQL", level: "Core" },
      { name: "MySQL", level: "Proficient" },
    ],
  },
  {
    category: "Business Intelligence & Visualization",
    description: "Translating complex datasets into actionable executive visual narratives.",
    icon: "BarChart3",
    skills: [
      { name: "Power BI", level: "Core" },
      { name: "Tableau", level: "Proficient" },
      { name: "Alteryx (Designer Core)", level: "Core" },
      { name: "Excel (Pivot, XLOOKUP, INDEX-MATCH)", level: "Core" },
      { name: "Matplotlib & Seaborn", level: "Core" },
    ],
  },
  {
    category: "Machine Learning & Applied AI",
    description: "Predictive algorithms, feature engineering, and statistical learning.",
    icon: "Brain",
    skills: [
      { name: "Regression & Classification", level: "Core" },
      { name: "Natural Language Processing (NLP)", level: "Proficient" },
      { name: "Model Evaluation & Tuning", level: "Core" },
      { name: "Feature Extraction & Vectorization", level: "Core" },
      { name: "Customer Segmentation", level: "Proficient" },
    ],
  },
  {
    category: "Data Engineering & Concepts",
    description: "Pipelines, data modeling principles, and statistical foundations.",
    icon: "Database",
    skills: [
      { name: "Exploratory Data Analysis (EDA)", level: "Core" },
      { name: "ETL Pipelines", level: "Proficient" },
      { name: "Data Warehousing & Modeling", level: "Proficient" },
      { name: "Statistical Hypothesis Testing", level: "Core" },
      { name: "Financial & Metric Analysis", level: "Proficient" },
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Master of Science in Data Science",
    institution: "GITAM Deemed to be University",
    period: "2024 – 2026",
    score: "9.1 / 10",
    scoreType: "CGPA",
    highlights: [
      "Advanced predictive modeling, statistical computing, and enterprise database systems.",
      "Consistently achieved top academic standing with a 9.1 CGPA.",
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Gayatri Vidya Parishad College",
    period: "2021 – 2024",
    score: "8.7 / 10",
    scoreType: "CGPA",
    highlights: [
      "Core computer science foundations: data structures, relational databases, software engineering, and object-oriented programming.",
      "Graduated with distinction (8.7 CGPA).",
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Data Analytics Certification",
    issuer: "Deloitte",
    category: "Enterprise Analytics",
  },
  {
    title: "Alteryx Designer Core Certified",
    issuer: "Alteryx",
    category: "Automated Data Prep & Analytics",
  },
  {
    title: "Controllers Job Simulation",
    issuer: "Goldman Sachs",
    category: "Financial Analysis & Compliance",
  },
  {
    title: "Machine Learning Foundation",
    issuer: "AWS Academy",
    category: "Cloud ML & Infrastructure",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "Palo Alto Networks",
    category: "Data Security & Networks",
  },
];

