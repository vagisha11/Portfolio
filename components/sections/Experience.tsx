'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Role {
  title: string;
  company: string;
  period: string;
  summary: string;
  details: string[];
}

const roles: Role[] = [
  {
    title: 'Senior Analyst',
    company: 'Johnson Controls',
    period: 'Sep 2025 – Mar 2026',
    summary:
      'Execution-side product owner for Supplier Performance Management SaaS — bridging business and engineering.',
    details: [
      'Defined requirements for deterministic and AI-driven workflow automation initiatives spanning supplier onboarding, compliance tracking, and performance reporting. Worked closely with Infosys engineering teams to translate complex business rules into structured technical specifications, ensuring alignment between stakeholder expectations and implementation feasibility.',
      'Established and tracked KPIs covering SLA adherence, supplier quality metrics, and compliance benchmarks. These KPIs directly informed quarterly business reviews and contributed to a measurable 20% improvement in SLA adherence post-deployment, demonstrating tangible ROI to senior leadership.',
      'Built comprehensive Power BI dashboards from scratch to maintain real-time visibility across 100+ project deliverables. This initiative reduced reporting turnaround time by 40%, enabling faster decision-making and proactive risk identification during critical project phases.',
      'Conducted end-to-end UAT cycles with business stakeholders, meticulously documenting edge cases and regression scenarios. Provided detailed annotations on Figma designs for UX refinements and facilitated monthly governance reviews to surface delivery blockers and align cross-functional teams.',
      'Partnered with procurement and compliance teams to validate automation workflows against enterprise policies, ensuring the SaaS solution met regulatory requirements while maintaining operational efficiency.',
    ],
  },
  {
    title: 'Product Consultant',
    company: 'Kitaabh Technologies',
    period: 'Feb 2025 – Jun 2025',
    summary: 'Voice-of-customer research and WhatsApp AI assistant PoC deployment.',
    details: [
      'Conducted structured voice-of-customer sessions with enterprise clients to surface usability friction points and adoption barriers. Used qualitative research methods including user interviews and workflow observations to translate raw feedback into actionable product insights that informed roadmap priorities.',
      'Coordinated the end-to-end design and proof-of-concept deployment of a WhatsApp-based AI assistant powered by OpenAI API. This involved architecting conversational flows, defining fallback scenarios, and establishing guardrails to ensure accurate handling of GST, invoicing, and reconciliation queries—all while maintaining compliance with financial data security standards.',
      'Authored detailed prompt engineering guidelines and configured business logic rules to handle edge cases in tax calculations and invoice processing. Iterated on prompts based on user feedback loops, improving response accuracy and reducing the need for human-in-the-loop interventions.',
      'Scaled the pilot to reach 100+ users across multiple client organizations and implemented instrumentation to measure success metrics. Demonstrated a ~25% reduction in support query volume, validating the assistant\'s effectiveness in deflecting routine inquiries and freeing up support teams for higher-value work.',
      'Presented findings and recommendations to stakeholders, including ROI projections and suggestions for scaling the solution beyond the pilot phase.',
    ],
  },
  {
    title: 'Solution Partner – Product Development',
    company: 'People Tech Group (Quest Global)',
    period: 'Jan 2024 – Dec 2024',
    summary:
      'BA-led execution for agentic AI procurement platform across 4+ enterprise client engagements.',
    details: [
      'Gathered and documented detailed requirements for LLM-powered document processing and contract generation workflows across four distinct enterprise client engagements. Each client had unique procurement processes and compliance needs, requiring adaptable requirement frameworks that balanced standardization with customization.',
      'Worked directly with pilot deployment teams to validate LLM-generated contract outputs against legal and compliance standards. Contributed to achieving a ~30% reduction in manual drafting effort by identifying high-impact automation opportunities and refining model outputs through structured feedback loops.',
      'Conducted 15+ client discovery calls to deeply understand pain points in existing procurement workflows. Translated these insights into prioritized user stories, acceptance criteria, and functional specifications that informed engineering sprints and ensured product-market fit within the enterprise procurement space.',
      'Coordinated the delivery of 15+ feature releases via Jira, managing sprint planning, backlog grooming, and release documentation in Confluence. Acted as the bridge between business stakeholders and engineering, ensuring that feature scope, timelines, and quality expectations were clearly communicated and aligned.',
      'Actively participated in feedback and evaluation cycles to assess LLM and agentic AI model performance in real-world scenarios. Flagged quality gaps such as hallucinations, inconsistent outputs, and edge case failures—providing structured input to data science teams for prompt refinement and model fine-tuning.',
      'Collaborated with cross-functional teams including legal, compliance, and procurement operations to ensure the AI-driven platform met enterprise standards for security, auditability, and regulatory adherence.',
    ],
  },
];

export function Experience() {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  return (
    <section id="experience" className="min-h-screen px-6 py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-700">
            2+ years across enterprise SaaS, AI-driven products, and B2B procurement workflows.
          </p>
        </div>

        <div className="space-y-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/80 backdrop-blur-sm overflow-hidden shadow-lg border border-indigo-100 hover:shadow-2xl transition-all"
            >
              <button
                onClick={() => setExpandedRole(expandedRole === index ? null : index)}
                className="w-full text-left p-8 hover:bg-indigo-50/50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold text-gray-900">
                      {role.title}
                    </h3>
                    <p className="text-lg text-gray-700 mt-1">{role.company}</p>
                    <p className="text-sm text-gray-500 mt-1">{role.period}</p>
                    <p className="text-gray-600 mt-3">{role.summary}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedRole === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-indigo-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {expandedRole === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden border-t border-indigo-100"
                  >
                    <div className="p-8 space-y-4 bg-gradient-to-br from-indigo-50/30 to-blue-50/30">
                      {role.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-indigo-500 mt-1 flex-shrink-0 text-lg">→</span>
                          <p className="text-gray-700 leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="pt-8 space-y-4">
          <h3 className="text-2xl font-serif font-semibold text-gray-900">Education</h3>
          <div className="space-y-3">
            <div>
              <p className="text-lg font-medium text-gray-900">
                Post Graduate Diploma in Management (Healthcare Management)
              </p>
              <p className="text-gray-600">Goa Institute of Management · 2021–2023</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">
                Bachelor of Arts (Political Science, Economics, Sociology)
              </p>
              <p className="text-gray-600">Mount Carmel College · 2016–2019</p>
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-6">
          <h3 className="text-2xl font-serif font-semibold text-gray-900">Achievements & Certifications</h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 w-full md:w-64">
                <img
                  src="/certificate-runner-up.png"
                  alt="1st Runner-Up Certificate - AI Agent Hackathon"
                  className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => window.open('/certificate-runner-up.png', '_blank')}
                />
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-xl font-medium text-gray-900">1st Runner-Up – AI Agent Hackathon</h4>
                <p className="text-gray-600">Product Space · June 2026</p>
                <p className="text-gray-700 leading-relaxed">
                  Recognized for exceptional contributions in AI Agent development, demonstrating innovative problem-solving
                  and technical expertise in building intelligent agent workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
