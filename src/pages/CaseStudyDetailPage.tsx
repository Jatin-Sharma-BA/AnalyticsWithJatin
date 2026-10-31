import React from 'react';
import { PageRoute } from '../types';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';
import { SERVICES_DATA } from '../data/servicesData';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileText,
  Lightbulb,
  Award,
  Layers,
  Wrench,
  BookOpen,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

interface CaseStudyDetailPageProps {
  slug: string;
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ slug, onNavigate }) => {
  const caseStudy = CASE_STUDIES_DATA.find((c) => c.slug === slug) || CASE_STUDIES_DATA[0];

  const relatedServices = SERVICES_DATA.filter((s) =>
    caseStudy.relatedServiceIds.includes(s.slug)
  );

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E3E8EF]">
        <Breadcrumb
          items={[
            { label: 'Case Studies', page: 'portfolio' },
            { label: caseStudy.title }
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Header */}
      <section className="bg-[#14243A] text-white py-14 lg:py-18 border-b border-[#203B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span className="font-mono text-[#1B8A89] bg-[#203B57] px-2.5 py-1 rounded font-semibold">
                {caseStudy.projectNature}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-300 font-medium">{caseStudy.category}</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-300">Industry: {caseStudy.industry}</span>
              {caseStudy.duration && (
                <>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-400">{caseStudy.duration}</span>
                </>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] tracking-tight leading-tight">
              {caseStudy.title}
            </h1>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {caseStudy.summary}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('portfolio')}
                className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Case Studies
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Main 13-Point Structural Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 1. Overview */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-7 shadow-xs space-y-3">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">
                01. OVERVIEW
              </div>
              <h2 className="text-xl font-bold text-[#14243A] font-['Manrope']">
                Project Overview
              </h2>
              <p className="text-sm text-[#344054] leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            {/* 2. Business Context & 3. Problem Statement */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-7 shadow-xs space-y-6">
              <div>
                <div className="text-xs font-mono font-bold text-[#1B8A89]">
                  02. BUSINESS CONTEXT
                </div>
                <h2 className="text-xl font-bold text-[#14243A] font-['Manrope'] mt-1">
                  Commercial & Industry Context
                </h2>
                <p className="text-sm text-[#344054] leading-relaxed mt-2">
                  {caseStudy.businessContext}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E3E8EF]">
                <div className="text-xs font-mono font-bold text-amber-700">
                  03. PROBLEM STATEMENT
                </div>
                <h3 className="text-lg font-bold text-[#14243A] font-['Manrope'] mt-1">
                  Core Business Friction
                </h3>
                <div className="p-4 bg-amber-50/60 border border-amber-200/60 rounded text-xs text-amber-950 mt-2 leading-relaxed">
                  {caseStudy.problemStatement}
                </div>
              </div>
            </div>

            {/* 4. Objectives */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-7 shadow-xs space-y-4">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">
                04. OBJECTIVES
              </div>
              <h2 className="text-xl font-bold text-[#14243A] font-['Manrope']">
                Engagement Objectives
              </h2>
              <div className="grid grid-cols-1 gap-2.5 pt-1">
                {caseStudy.objectives.map((obj, oIdx) => (
                  <div key={oIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#1B8A89] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Role and Contribution */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-7 shadow-xs space-y-3">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">
                05. ROLE & CONTRIBUTION
              </div>
              <h2 className="text-xl font-bold text-[#14243A] font-['Manrope']">
                Consultancy Mandate & Responsibilities
              </h2>
              <p className="text-sm text-[#344054] leading-relaxed">
                {caseStudy.roleAndContribution}
              </p>
            </div>

            {/* 6. Research & Analytical Approach & 7. Work Performed */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-7 shadow-xs space-y-6">
              <div>
                <div className="text-xs font-mono font-bold text-[#1B8A89]">
                  06. RESEARCH & ANALYTICAL APPROACH
                </div>
                <h2 className="text-xl font-bold text-[#14243A] font-['Manrope'] mt-1">
                  Methodological Framework
                </h2>
                <p className="text-sm text-[#344054] leading-relaxed mt-2">
                  {caseStudy.researchAndAnalyticalApproach}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E3E8EF]">
                <div className="text-xs font-mono font-bold text-[#1B8A89]">
                  07. WORK PERFORMED
                </div>
                <h3 className="text-lg font-bold text-[#14243A] font-['Manrope'] mt-1 mb-3">
                  Key Analytical & Advisory Activities
                </h3>
                <div className="space-y-2">
                  {caseStudy.workPerformed.map((work, wIdx) => (
                    <div key={wIdx} className="p-3 bg-[#F5F7FA] border border-[#E3E8EF] rounded text-xs text-slate-700 flex items-start gap-2.5">
                      <span className="font-mono text-[#1B8A89] font-bold mt-0.5">·</span>
                      <span className="leading-relaxed">{work}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 8. Tools and Methodology */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-7 shadow-xs space-y-4">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">
                08. TOOLS & METHODOLOGY
              </div>
              <h2 className="text-xl font-bold text-[#14243A] font-['Manrope']">
                Technical Stack & Analytical Techniques
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {caseStudy.toolsAndMethodology.map((tool, tIdx) => (
                  <div key={tIdx} className="p-3 bg-[#F5F7FA] border border-[#E3E8EF] rounded text-xs text-slate-800 font-medium flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-[#1B8A89] shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 9. Key Findings & 10. Recommendations */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-7 shadow-xs space-y-6">
              <div>
                <div className="text-xs font-mono font-bold text-[#1B8A89]">
                  09. KEY FINDINGS
                </div>
                <h2 className="text-xl font-bold text-[#14243A] font-['Manrope'] mt-1 mb-3">
                  Empirical Findings & Insights
                </h2>
                <div className="space-y-3">
                  {caseStudy.keyFindings.map((finding, fIdx) => (
                    <div key={fIdx} className="p-4 bg-slate-50 border border-[#E3E8EF] rounded-lg text-xs text-slate-800 space-y-1">
                      <span className="font-semibold text-[#14243A] block">Finding #{fIdx + 1}:</span>
                      <p className="leading-relaxed text-slate-700">{finding}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E3E8EF]">
                <div className="text-xs font-mono font-bold text-[#1B8A89]">
                  10. RECOMMENDATIONS
                </div>
                <h3 className="text-lg font-bold text-[#14243A] font-['Manrope'] mt-1 mb-3">
                  Strategic & Operational Recommendations
                </h3>
                <div className="space-y-2.5">
                  {caseStudy.recommendations.map((rec, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="text-[#1B8A89] font-bold font-mono mt-0.5">→</span>
                      <span className="leading-relaxed font-medium">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 11. Deliverables */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-7 shadow-xs space-y-4">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">
                11. DELIVERABLES
              </div>
              <h2 className="text-xl font-bold text-[#14243A] font-['Manrope']">
                Delivered Work Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {caseStudy.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="p-3 bg-[#F5F7FA] border border-[#E3E8EF] rounded text-xs text-slate-800 font-medium flex items-start gap-2">
                    <FileText className="w-3.5 h-3.5 text-[#1B8A89] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 12. Verified Outcomes */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-7 shadow-xs space-y-4">
              <div className="text-xs font-mono font-bold text-emerald-700">
                12. VERIFIED OUTCOMES
              </div>
              <h2 className="text-xl font-bold text-[#14243A] font-['Manrope']">
                Verified Business Impact & Evidence
              </h2>
              <div className="space-y-2.5">
                {caseStudy.verifiedOutcomes.map((out, oIdx) => (
                  <div key={oIdx} className="p-3.5 bg-emerald-50/50 border border-emerald-200/60 rounded text-xs text-emerald-950 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 13. Learnings */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-7 shadow-xs space-y-4">
              <div className="text-xs font-mono font-bold text-[#1B8A89]">
                13. LEARNINGS
              </div>
              <h2 className="text-xl font-bold text-[#14243A] font-['Manrope']">
                Consulting Insights & Takeaways
              </h2>
              <div className="space-y-2.5">
                {caseStudy.learnings.map((learn, lIdx) => (
                  <div key={lIdx} className="p-3.5 bg-slate-50 border border-[#E3E8EF] rounded text-xs text-slate-700 flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-[#1B8A89] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{learn}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Project Summary Box */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-xs space-y-4 sticky top-24">
              <div className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                Case Study Metadata
              </div>

              <div className="space-y-3 text-xs border-b border-[#E3E8EF] pb-4">
                <div>
                  <span className="text-slate-400 block text-[11px]">Category:</span>
                  <span className="font-semibold text-slate-800">{caseStudy.category}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Nature:</span>
                  <span className="font-semibold text-[#1B8A89]">{caseStudy.projectNature}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Industry Domain:</span>
                  <span className="font-semibold text-slate-800">{caseStudy.industry}</span>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="space-y-2 pt-1 border-b border-[#E3E8EF] pb-4">
                  <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                    Related Services:
                  </div>
                  <div className="space-y-1.5">
                    {relatedServices.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => onNavigate('service-detail', srv.slug)}
                        className="text-left text-xs text-[#14243A] hover:text-[#1B8A89] flex items-center gap-1.5 w-full cursor-pointer py-1"
                      >
                        <span className="font-mono text-[#1B8A89] text-[11px]">{srv.number}.</span>
                        <span className="truncate">{srv.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Booking Button */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact', caseStudy.title)}
                  className="w-full py-3 bg-[#1B8A89] hover:bg-[#167271] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs cursor-pointer text-center"
                >
                  Discuss a Similar Project
                </button>
              </div>

              <div className="p-3 bg-slate-50 border border-[#E3E8EF] rounded text-[11px] text-slate-500 leading-normal">
                Want to evaluate your own data or business models? We conduct confidential diagnostics under mutual NDA.
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
