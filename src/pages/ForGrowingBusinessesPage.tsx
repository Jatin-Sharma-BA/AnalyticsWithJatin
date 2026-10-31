import React from 'react';
import { PageRoute } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  TrendingUp,
  BarChart3,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertOctagon,
  Database,
  Cpu,
  FileCheck2,
  Workflow
} from 'lucide-react';

interface ForGrowingBusinessesPageProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const ForGrowingBusinessesPage: React.FC<ForGrowingBusinessesPageProps> = ({ onNavigate }) => {
  const businessServices = SERVICES_DATA.filter((s) =>
    ['service-06', 'service-07', 'service-08', 'service-09', 'service-10'].includes(s.id)
  );

  const businessCaseStudies = CASE_STUDIES_DATA.filter((cs) =>
    ['hospital-performance-analytics', 'pu-copper', 'regional-sales-performance', 'polkraft-analytics-pmp'].includes(cs.id)
  );

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E3E8EF]">
        <Breadcrumb
          items={[{ label: 'Who We Help' }, { label: 'For Growing Businesses' }]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-[#14243A] text-white py-16 lg:py-20 border-b border-[#203B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              <TrendingUp className="w-4 h-4" />
              <span>Established & Scaling Business Practice</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Manrope'] tracking-tight">
              Operational Clarity & Analytics for Growing Enterprises
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From performance analytics and unified executive dashboards to operational process engineering and strategic scale-up advisory. We help business owners and management teams break through growth plateaus with data-backed decisions.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-[#1B8A89] hover:bg-[#167271] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-md cursor-pointer"
              >
                Schedule an Operational Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Common Business Challenges */}
      <section className="py-16 bg-white border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Scaling Friction Points
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              Challenges Faced When Scaling Beyond the Initial Phase
            </h2>
            <p className="text-sm text-[#667085]">
              As headcount and transaction volume expand, informal coordination breaks down. Growing businesses experience predictable operational strains:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg space-y-3">
              <div className="text-xs font-mono font-bold text-amber-700">STRAIN 01</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">
                Disjointed Data & Blind Spots
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Records fragmented across accounting software, CRM systems, Shopify, and local spreadsheets. Monthly reporting requires days of tedious manual copying.
              </p>
            </div>

            <div className="p-6 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg space-y-3">
              <div className="text-xs font-mono font-bold text-amber-700">STRAIN 02</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">
                Operational Bottlenecks & Scrap
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Workflows dependent on memory rather than documented SOPs. High error rates, repeated handoff friction, and material scrap erode net margins.
              </p>
            </div>

            <div className="p-6 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg space-y-3">
              <div className="text-xs font-mono font-bold text-amber-700">STRAIN 03</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">
                Unclear Growth Levers
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Rising customer acquisition costs with diminishing returns. Uncertainty over whether to expand geographically or launch adjacent product categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Three Pillars of Support */}
      <section className="py-16 bg-[#F5F7FA] border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Integrated Advisory Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              How We Help Growing Businesses Scale Sustainably
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded bg-[#14243A] text-[#1B8A89] flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#14243A] font-['Manrope']">
                1. Performance & Analytics Support
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                We clean raw transactional datasets and construct live, interactive Power BI or Tableau dashboards. Track sales velocity, dealer margins, customer cohort retention, and inventory turns in real time.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                Tools: SQL · Power BI · Tableau · Excel
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded bg-[#14243A] text-[#1B8A89] flex items-center justify-center">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#14243A] font-['Manrope']">
                2. Operational & Process Improvement
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                We map your shop-floor or digital workflows, locate cycle-time bottlenecks, eliminate redundant handoffs, design Standard Operating Procedures (SOPs), and establish clear RACI accountability matrices.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                Tools: Process Maps · SOP Manuals · RACI
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded bg-[#14243A] text-[#1B8A89] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#14243A] font-['Manrope']">
                3. Strategy & Scale-Up Advisory
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                We evaluate market adjacencies, audit ad spend attribution to eliminate wasted budget, stress-test working capital requirements, and act as a regular strategic sparring partner for leadership.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                Tools: CVP Models · MER Attribution · Advisory
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Relevant Services */}
      <section className="py-16 bg-white border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Enterprise Suite
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              Specialized Services for Growing Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((srv) => (
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

      {/* Section 4: Proven Case Studies */}
      <section className="py-16 bg-[#F5F7FA] border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Enterprise Evidence
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              Featured Case Studies for Growing Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessCaseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white border border-[#E3E8EF] rounded-lg p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#1B8A89]/50 transition-all"
              >
                <div className="space-y-4">
                  <div className="text-xs font-mono text-slate-500">{cs.industry}</div>
                  <h3 className="text-xl font-bold text-[#14243A] font-['Manrope']">{cs.title}</h3>
                  <p className="text-sm text-[#344054] leading-relaxed">{cs.summary}</p>
                  
                  <div className="p-4 bg-[#F5F7FA] border border-[#E3E8EF] rounded text-xs space-y-1">
                    <span className="font-semibold text-slate-800">Key Analytical Result:</span>
                    <p className="text-slate-600 pt-1">{cs.keyFindings[0]}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E3E8EF]">
                  <button
                    onClick={() => onNavigate('case-study-detail', cs.slug)}
                    className="text-xs font-semibold text-[#14243A] hover:text-[#1B8A89] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Full 13-Point Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1B8A89]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-20 bg-[#14243A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
            Enterprise Diagnostic
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Manrope']">
            Identify Margin Leakage & Operational Bottlenecks
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule an introductory consultation to discuss your reporting architecture, operational workflows, or expansion plans.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#1B8A89] hover:bg-[#167271] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-md cursor-pointer"
            >
              Book an Operational Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
