import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare, ShieldCheck, Clock, FileCheck2 } from 'lucide-react';
import { PageRoute } from '../types';

interface FAQItem {
  id: string;
  category: 'Process & Scoping' | 'Duration & Timelines' | 'Deliverables' | 'Terms & Security';
  question: string;
  answer: string;
  bullets?: string[];
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'Process & Scoping',
    question: 'How does an engagement with Analytics with Jatin typically begin?',
    answer: 'Every engagement begins with a structured, confidential 30-minute introductory discovery session. We review your current commercial priorities, business model, and the specific decisions or data challenges you are facing.',
    bullets: [
      'Preliminary Diagnostic: We deconstruct your core problem and assess data readiness.',
      'Scoped Proposal: We deliver a detailed scope of work outlining exact activities, deliverables, milestones, and timelines.',
      'Mutual NDA: A bilateral Non-Disclosure Agreement is executed before any proprietary data, customer logs, or financial models are exchanged.',
      'Kickoff & Baseline: We agree on the communication cadence, project lead, and begin execution immediately.'
    ]
  },
  {
    id: 'faq-02',
    category: 'Duration & Timelines',
    question: 'How long do typical consulting projects and advisory engagements take?',
    answer: 'Engagement durations are calibrated strictly to the operational scope rather than open-ended billing cycles:',
    bullets: [
      'Focused Diagnostic Sprints (2 to 4 weeks): Ideal for Startup Idea Validation, Marketing Attribution Audits, Pricing Restructuring, or Unit Economics Modeling.',
      'Comprehensive Planning Engagements (4 to 8 weeks): Tailored for Zero-to-One Business Plans, Go-To-Market Architectures, and End-to-End Operational Workflow Restructuring.',
      'Ongoing Founder Advisory & Analytics Retainers (3 to 12 months): Cadenced bi-weekly or monthly strategic sparring, decision framework reviews, and live executive dashboard governance.'
    ]
  },
  {
    id: 'faq-03',
    category: 'Deliverables',
    question: 'What tangible deliverables will our team receive upon completion?',
    answer: 'We do not deliver vague, academic slide decks that sit on a shelf. Every deliverable is structured for immediate operational implementation by leadership and frontline teams:',
    bullets: [
      'Executive Strategy Decks: Crisp, decision-focused slide decks (typically 20–35 slides) synthesizing empirical findings, market moats, and prioritised next steps.',
      'Live BI Dashboards & Data Pipelines: Interactive Power BI (.pbix) files, Tableau workbooks, or documented SQL queries modeling sales velocity, cohort retention, and margin leakage.',
      'Dynamic Financial & Unit Economics Models: Fully documented Excel models with scenario toggles, Cost-Volume-Profit (CVP) analysis, and working capital forecasts.',
      'Standard Operating Procedures (SOPs): Visual process workflow maps (current vs future state), step-by-step SOP manuals, and RACI responsibility matrices.'
    ]
  },
  {
    id: 'faq-04',
    category: 'Terms & Security',
    question: 'How are consulting fees and commercial terms structured?',
    answer: 'We believe in transparent, outcome-oriented pricing. We do not use unpredictable hourly billing that incentivizes inefficiency:',
    bullets: [
      'Fixed-Scope Project Sprints: Defined milestones with fixed fees payable against verified deliverables (e.g. 50% mobilization / 50% completion).',
      'Monthly Advisory Retainers: Predictable flat monthly fee covering scheduled strategy sessions, async decision reviews, and milestone oversight.',
      'Enterprise Custom Scopes: Scoped collaboratively for complex multi-facility manufacturing audits or multi-source enterprise data integration.'
    ]
  },
  {
    id: 'faq-05',
    category: 'Terms & Security',
    question: 'How do you safeguard client confidentiality and proprietary business data?',
    answer: 'Confidentiality is fundamental to our practice. Before reviewing any internal business records, financial filings, customer lists, or proprietary data, we execute a legally binding bilateral Non-Disclosure Agreement (NDA). All data transfers take place over encrypted channels, and client materials are permanently scrubbed or archived under strict access controls post-engagement.'
  },
  {
    id: 'faq-06',
    category: 'Process & Scoping',
    question: 'Can we engage Analytics with Jatin if our company is based outside India?',
    answer: 'Yes. While our headquarters are based in India, our consulting workflows are fully structured for seamless remote collaboration worldwide. We work with clients across India, North America, the UK, Europe, Southeast Asia, and the UAE through scheduled video working sessions, shared analytical workspaces, and asynchronous milestone tracking.'
  },
  {
    id: 'faq-07',
    category: 'Process & Scoping',
    question: 'What if we are unsure which of the 10 services best matches our current bottleneck?',
    answer: 'You do not need to diagnose your own operational bottlenecks before reaching out. In our initial 30-minute introductory consultation, we map your business context and identify whether your immediate leverage point lies in market research, financial model restructuring, operational SOPs, or executive dashboards. If appropriate, we assemble a focused modular scope addressing your specific hurdles.'
  },
  {
    id: 'faq-08',
    category: 'Deliverables',
    question: 'What ongoing support or handover is provided after project delivery?',
    answer: 'Every completed engagement concludes with an executive handover walkthrough and training session for your management or operational team. Furthermore, we provide a standard 30-day post-delivery support window to address operational queries, refine dashboard slicers, and assist during the initial rollout of strategic recommendations.'
  }
];

interface FAQSectionProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>('faq-01');

  const categories = ['All', 'Process & Scoping', 'Duration & Timelines', 'Deliverables', 'Terms & Security'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-[#F5F7FA] border-b border-[#E3E8EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
            Client Engagement FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#667085] leading-relaxed">
            Clear, transparent answers regarding our consulting methodology, project durations, deliverables, and commercial arrangements.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#14243A] text-white font-semibold shadow-xs'
                  : 'bg-white border border-[#E3E8EF] text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#E3E8EF] rounded-lg transition-all shadow-xs overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#1B8A89] mt-0.5 shrink-0">
                      Q.
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#14243A] font-['Manrope'] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#1B8A89]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#344054] leading-relaxed border-t border-slate-100 bg-[#FAFCFD]">
                    <p className="mt-2 text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>

                    {faq.bullets && faq.bullets.length > 0 && (
                      <ul className="mt-3 space-y-2 pl-1">
                        {faq.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <span className="text-[#1B8A89] font-bold mt-0.5">·</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="max-w-2xl mx-auto mt-12 p-6 bg-white border border-[#E3E8EF] rounded-lg shadow-xs text-center space-y-3">
          <div className="text-xs font-semibold text-slate-700">
            Have a specific business inquiry or need a custom advisory scope?
          </div>
          <p className="text-xs text-[#667085]">
            We are glad to discuss your project requirements, data availability, and expected timelines directly.
          </p>
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-[#1B8A89] hover:bg-[#167271] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <span>Schedule a Scoping Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="mailto:analytics.jatin@gmail.com"
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
