export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'for-startups'
  | 'for-growing-businesses'
  | 'portfolio'
  | 'case-study-detail'
  | 'contact';

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: 'Strategy & Planning' | 'Analytics & Performance' | 'Advisory & Operations';
  positioning: string;
  tagline: string;
  clientChallenges: string[];
  whatWeProvide: string;
  scopeOfWork: string[];
  deliverables: string[];
  typicalProcess: {
    step: string;
    title: string;
    description: string;
  }[];
  relatedCaseStudyIds: string[];
  ctaText: string;
  idealFor: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  clientOrTopic: string;
  category: 'Analytics Projects' | 'Startup & Business Engagements';
  projectNature: 'Independent Consulting Engagement' | 'Business Advisory & Research' | 'Commercial Analytics Project' | 'Strategic Research & Market Audit';
  industry: string;
  summary: string;
  duration?: string;
  // 13 Required Structural Dimensions
  overview: string;
  businessContext: string;
  problemStatement: string;
  objectives: string[];
  roleAndContribution: string;
  researchAndAnalyticalApproach: string;
  workPerformed: string[];
  toolsAndMethodology: string[];
  keyFindings: string[];
  recommendations: string[];
  deliverables: string[];
  verifiedOutcomes: string[];
  learnings: string[];
  relatedServiceIds: string[];
}

export interface ConsultationInquiry {
  id: string;
  name: string;
  businessEmail: string;
  contactNumber: string;
  companyName: string;
  website?: string;
  clientCategory: 'Startup Founder' | 'Business Owner' | 'Established Business' | 'Other';
  serviceOfInterest: string;
  businessChallenge: string;
  expectedTimeline: string;
  budgetRange?: string;
  consent: boolean;
  createdAt: string;
}
