import React from 'react';
import { PageRoute } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  FileCheck2,
  Target,
  Sparkles,
  Milestone
} from 'lucide-react';

interface ForStartupsPageProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const ForStartupsPage: React.FC<ForStartupsPageProps> = ({ onNavigate }) => {
  const startupServices = SERVICES_DATA.filter((s) =>
    ['service-01', 'service-03', 'service-04', 'service-05', 'service-10'].includes(s.id)
  );

  const startupCaseStudies = CASE_STUDIES_DATA.filter((cs) =>
    ['the-kollektor', 'the-cinnamon-kitchen'].includes(cs.id)
  );

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E3E8EF]">
        <Breadcrumb
          items={[{ label: 'Who We Help' }, { label: 'For Startups' }]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-[#14243A] text-white py-16 lg:py-20 border-b border-[#203B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              <Compass className="w-4 h-4" />
              <span>Startup Consulting Practice</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Manrope'] tracking-tight">
              Strategic Guidance for Founders & Early-Stage Ventures
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From idea validation and business model architecture to zero-to-one operational roadmaps and go-to-market execution. We help entrepreneurs reduce venture risk, avoid capital misallocation, and make informed strategic choices.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-[#1B8A89] hover:bg-[#167271] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-md cursor-pointer"
              >
                Book a Startup Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Common Challenges */}
      <section className="py-16 bg-white border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              The Founder Dilemma
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              Critical Challenges Early Founders Must Solve
            </h2>
            <p className="text-sm text-[#667085]">
              90% of early-stage failures stem not from lack of effort, but from building products for unvalidated markets or scaling flawed unit economics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg space-y-3">
              <div className="text-xs font-mono font-bold text-amber-700">CHALLENGE 01</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">
                Unvalidated Market Assumptions
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Founders often mistake user polite compliments for genuine willingness-to-pay, investing months of engineering time into products lacking true commercial demand.
              </p>
            </div>

            <div className="p-6 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg space-y-3">
              <div className="text-xs font-mono font-bold text-amber-700">CHALLENGE 02</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">
                Fragile Unit Economics & Pricing
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Underpricing to attract early users without modeling gross contribution margins, fulfillment overhead, or customer acquisition costs leads to cash depletion.
              </p>
            </div>

            <div className="p-6 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg space-y-3">
              <div className="text-xs font-mono font-bold text-amber-700">CHALLENGE 03</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">
                Unstructured Launch Execution
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Lacking a clear phase-gate roadmap leads to scattered priorities, missed vendor dependencies, regulatory oversights, and unfocused launch campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Startup Lifecycle Support (6 Stages) */}
      <section className="py-16 bg-[#F5F7FA] border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Sequential Maturity Stages
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              How We Support the Startup Lifecycle
            </h2>
            <p className="text-sm text-[#667085]">
              Structured consulting interventions designed for each inflection point of early venture building.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">STAGE 01</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">Idea Stage</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Interrogating the fundamental thesis, problem severity, and addressable market opportunity before dedicating personal savings or quitting careers.
              </p>
            </div>

            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">STAGE 02</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">Validation Stage</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Conducting secondary market intelligence, competitor benchmarking, and customer segment profiling to test critical commercial assumptions.
              </p>
            </div>

            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">STAGE 03</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">Business Model Stage</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Structuring tiered pricing, contribution margin schedules, vendor contracts, and revenue mechanisms that ensure each sale is profitable.
              </p>
            </div>

            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">STAGE 04</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">Planning Stage</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Formulating detailed Business Requirements Documents (BRDs), operational phase-gate milestones, and vendor onboarding SOPs.
              </p>
            </div>

            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">STAGE 05</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">Launch Stage</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Designing Go-To-Market strategies, beachhead customer positioning, lead capture funnels, and initial customer onboarding protocols.
              </p>
            </div>

            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">STAGE 06</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">Early Growth Stage</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Ongoing founder advisory, cohort retention analysis, customer feedback loops, and unit economics monitoring to reach sustainability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Relevant Services */}
      <section className="py-16 bg-white border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Curated Services
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              Core Services for Startup Founders
            </h2>
            <p className="text-sm text-[#667085]">
              Select from our modular offerings tailored specifically for pre-launch and early-stage companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startupServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6 flex flex-col justify-between hover:border-[#1B8A89]/50 transition-all shadow-xs"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#1B8A89] mb-2">
                    SERVICE {srv.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#14243A] font-['Manrope'] mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed line-clamp-3">
                    {srv.positioning}
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-[#E3E8EF]">
                  <button
                    onClick={() => onNavigate('service-detail', srv.slug)}
                    className="text-xs font-semibold text-[#14243A] hover:text-[#1B8A89] flex items-center justify-between w-full cursor-pointer"
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1B8A89]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Relevant Case Studies */}
      <section className="py-16 bg-[#F5F7FA] border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Startup Proof Points
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              Featured Startup Advisory Engagements
            </h2>
            <p className="text-sm text-[#667085]">
              How we partnered directly with startup leadership to navigate 0-to-1 launches and commercial expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {startupCaseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white border border-[#E3E8EF] rounded-lg p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#1B8A89]/50 transition-all"
              >
                <div className="space-y-4">
                  <div className="text-xs font-mono text-slate-500">{cs.industry}</div>
                  <h3 className="text-xl font-bold text-[#14243A] font-['Manrope']">{cs.title}</h3>
                  <p className="text-sm text-[#344054] leading-relaxed">{cs.summary}</p>
                  
                  <div className="p-4 bg-[#F5F7FA] border border-[#E3E8EF] rounded text-xs space-y-1">
                    <span className="font-semibold text-slate-800">Verified Advisory Deliverables:</span>
                    <ul className="text-slate-600 space-y-1 pt-1">
                      {cs.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#1B8A89]">·</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E3E8EF]">
                  <button
                    onClick={() => onNavigate('case-study-detail', cs.slug)}
                    className="text-xs font-semibold text-[#14243A] hover:text-[#1B8A89] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1B8A89]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Boundary Notice & Final CTA */}
      <section className="py-20 bg-[#14243A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
            Begin Your Venture Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Manrope']">
            Validate Your Startup Thesis Before Committing Capital
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule an initial 30-minute founder diagnostic. We review your core assumptions, discuss target customer demand signals, and outline a structured roadmap.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#1B8A89] hover:bg-[#167271] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-md cursor-pointer"
            >
              Book a Startup Consultation
            </button>
          </div>
          <p className="text-xs text-slate-400 pt-4">
            Notice: Analytics with Jatin provides strategic, analytical, and operational business planning. We do not guarantee venture capital funding or specific commercial outcomes.
          </p>
        </div>
      </section>
    </div>
  );
};
