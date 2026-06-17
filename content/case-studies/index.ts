export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  hook: string;
  tags: string[];
  pdfPath: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'browserstack-jira',
    title: 'Improving Feature Adoption in Enterprise SaaS',
    company: 'BrowserStack',
    hook: 'Diagnosed why a high-value JIRA integration had near-zero adoption — and shipped the fixes that actually moved the needle.',
    tags: ['Diagnostic', 'Enterprise SaaS', 'Adoption Funnel'],
    pdfPath: '/case-studies/Feature Adoption CaseStudy.pdf',
  },
  {
    id: 'uber-gifts',
    title: 'Uber Gifts: Instant Joy, Delivered',
    company: 'Uber (Concept)',
    hook: 'A 0→1 product vision exploring how Uber could own the instant gifting moment by leveraging its delivery infrastructure.',
    tags: ['0→1 Product', 'Market Sizing', 'Competitive Strategy'],
    pdfPath: '/case-studies/Uber Gifts CaseStudy.pdf',
  },
  {
    id: 'infeedo-ai',
    title: 'InFeedo AI Assist: Competing on Differentiation',
    company: 'InFeedo',
    hook: 'Entered a crowded AI-powered employee engagement space by choosing which USPs to own, not which features to match.',
    tags: ['Competitive Strategy', 'AI Product', 'Feature Prioritization'],
    pdfPath: '/case-studies/InFeedo_CaseStudy.pdf',
  },
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.id === id);
}
