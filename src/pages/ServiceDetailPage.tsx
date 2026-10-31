import React from 'react';
import { PageRoute } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileCheck2,
  Clock,
  Layers,
  ArrowLeft,
  Briefcase,
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate }) => {
  const service = SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];

  // Related case studies
  const relatedCaseStudies = CASE_STUDIES_DATA.filter((cs) =>
    service.relatedCaseStudyIds.includes(cs.id)
  );

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-[#E3E8EF]">
        <Breadcrumb
          items={[
            { label: 'Consulting Services', page: 'services' },
            { label: service.title }
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Service Header */}
      <section className="bg-[#14243A] text-white py-16 lg:py-20 border-b border-[#203B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#1B8A89] bg-[#203B57] px-3 py-1 rounded">
                SERVICE {service.number}
              </span>
              <span className="text-xs text-slate-300 font-medium">
                {service.category}
              </span>
              <span className="text-xs text-slate-500">·</span>
              <span className="text-xs text-slate-300">
                Independent Advisory Specification
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Manrope'] tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {service.positioning}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact', service.title)}
                className="px-6 py-3 bg-[#1B8A89] hover:bg-[#167271] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                {service.ctaText}
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-4 py-3 bg-transparent hover:bg-white/10 text-slate-300 hover:text-white border border-[#203B57] text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Body (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. What the Consultancy Provides */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-8 shadow-sm space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
                Consultancy Engagement Scope
              </div>
              <h2 className="text-2xl font-bold text-[#14243A] font-['Manrope']">
                What Analytics with Jatin Provides
              </h2>
              <p className="text-sm sm:text-base text-[#344054] leading-relaxed">
                {service.whatWeProvide}
              </p>
            </div>

            {/* 2. Client Challenges */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#14243A]">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                Target Business Problems
              </div>
              <h2 className="text-xl font-bold text-[#14243A] font-['Manrope']">
                Typical Challenges Addressed in This Service
              </h2>
              <p className="text-xs text-[#667085]">
                We partner with leadership teams when facing these critical questions:
              </p>
              <div className="grid grid-cols-1 gap-3 pt-2">
                {service.clientChallenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#F5F7FA] border border-[#E3E8EF] rounded text-xs text-[#344054] flex items-start gap-3"
                  >
                    <span className="text-[#1B8A89] font-mono font-bold mt-0.5">0{idx + 1}.</span>
                    <span className="leading-relaxed font-medium">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Detailed Scope of Work */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-8 shadow-sm space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
                  Methodology & Execution
                </div>
                <h2 className="text-2xl font-bold text-[#14243A] font-['Manrope'] mt-1">
                  Comprehensive Scope of Work
                </h2>
                <p className="text-xs text-[#667085] mt-1">
                  Every activity is rigorously documented and aligned with commercial objectives:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.scopeOfWork.map((scope, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 bg-white border border-[#E3E8EF] rounded flex items-start gap-2.5 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1B8A89] shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Typical Engagement Process */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-8 shadow-sm space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
                  Phase-Gate Delivery
                </div>
                <h2 className="text-2xl font-bold text-[#14243A] font-['Manrope'] mt-1">
                  Typical Engagement Process
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.typicalProcess.map((proc, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-4 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg space-y-1.5"
                  >
                    <div className="text-xs font-mono font-bold text-[#1B8A89]">
                      PHASE {proc.step}
                    </div>
                    <div className="text-sm font-bold text-[#14243A] font-['Manrope']">
                      {proc.title}
                    </div>
                    <p className="text-xs text-[#667085] leading-relaxed">
                      {proc.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Related Case Studies */}
            {relatedCaseStudies.length > 0 && (
              <div className="bg-white border border-[#E3E8EF] rounded-lg p-8 shadow-sm space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
                    Verified Proof Points
                  </div>
                  <h2 className="text-xl font-bold text-[#14243A] font-['Manrope'] mt-1">
                    Related Engagements & Case Studies
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedCaseStudies.map((cs) => (
                    <div
                      key={cs.id}
                      className="p-5 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="text-[11px] text-slate-500 font-mono mb-1">{cs.industry}</div>
                        <h4 className="text-sm font-bold text-[#14243A] font-['Manrope'] line-clamp-2">
                          {cs.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                          {cs.summary}
                        </p>
                      </div>
                      <button
                        onClick={() => onNavigate('case-study-detail', cs.slug)}
                        className="text-xs font-semibold text-[#14243A] hover:text-[#1B8A89] flex items-center gap-1.5 transition-colors cursor-pointer pt-2 border-t border-[#E3E8EF]"
                      >
                        <span>View 13-Point Study</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#1B8A89]" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Deliverables & Booking (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Deliverables Card */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-4 sticky top-24">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14243A]">
                <FileCheck2 className="w-4 h-4 text-[#1B8A89]" />
                Tangible Deliverables
              </div>
              <ul className="text-xs text-slate-700 space-y-2.5">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#1B8A89] font-bold">✓</span>
                    <span className="font-medium">{deliv}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#E3E8EF] space-y-2">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Ideal Client Category
                </div>
                <div className="text-xs text-slate-700 font-medium">
                  {service.idealFor}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E3E8EF]">
                <button
                  onClick={() => onNavigate('contact', service.title)}
                  className="w-full py-3 bg-[#1B8A89] hover:bg-[#167271] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs cursor-pointer text-center"
                >
                  Book Consultation on This Service
                </button>
              </div>

              <div className="p-3 bg-slate-50 border border-[#E3E8EF] rounded text-[11px] text-slate-500 leading-normal">
                Strict confidentiality guaranteed under standard bilateral non-disclosure agreements (NDAs) prior to data exchange.
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
