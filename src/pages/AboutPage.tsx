import React from 'react';
import { PageRoute } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import analyticsBiImage from '../assets/images/analytics_bi_intelligence_1793334167839.jpg';
import {
  ShieldCheck,
  Target,
  BarChart2,
  Database,
  Layers,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Cpu,
  FileSpreadsheet
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E3E8EF]">
        <Breadcrumb
          items={[{ label: 'About the Consultancy', page: 'about' }]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Header */}
      <section className="bg-[#14243A] text-white py-16 lg:py-20 border-b border-[#203B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Consultancy Profile
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Manrope'] tracking-tight">
              About Analytics with Jatin
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              An independent business strategy and analytics consultancy providing research-driven insights, commercial planning, analytical support, and strategic guidance to startups and growing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Overview & Mission */}
      <section className="py-16 bg-white border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#344054] leading-relaxed">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
                Our Firm
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
                Bridging Strategic Vision and Quantitative Rigor.
              </h2>
              <p>
                <strong>Analytics with Jatin</strong> operates as a boutique strategy advisory designed for modern enterprises. While traditional corporate advisory firms often deliver detached, high-level presentations and freelance platforms provide disjointed technical tasks, we unite both disciplines under one roof.
              </p>
              <p>
                Our core commitment is simple: <em>From business questions to actionable decisions.</em> We work directly with founders, executive leadership, and business owners to uncover the fundamental economics of their operations, test critical commercial assumptions, and build structured roadmaps that enable confident execution.
              </p>
              <div className="p-4 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg">
                <span className="font-semibold text-[#14243A] block mb-1">
                  Primary Geographical Focus:
                </span>
                <span className="text-xs text-slate-600">
                  Headquartered in India with full digital advisory capabilities to support high-growth clients internationally across North America, Southeast Asia, and the Middle East.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-[#E3E8EF] shadow-md bg-white">
                <img
                  src={analyticsBiImage}
                  alt="Analytics with Jatin research and executive dashboard modeling"
                  referrerPolicy="no-referrer"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="p-5 border-t border-[#E3E8EF] bg-slate-50">
                  <div className="text-xs font-semibold text-[#14243A]">Structured Business Planning</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Empirical research, unit economics and business intelligence.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Consulting Philosophy */}
      <section className="py-16 bg-[#F5F7FA] border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Core Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              Our Consulting Philosophy
            </h2>
            <p className="text-sm text-[#667085]">
              Four non-negotiable principles that shape every diagnostic review, data model, and strategy document we produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm">
              <div className="text-xs font-mono font-bold text-[#1B8A89] mb-2">PRINCIPLE 01</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Ground Decisions in Statistical Fact
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Opinions and intuitions are hypotheses, not plans. We interrogate transactional databases, audit public filings, and benchmark direct competitors to uncover factual reality before proposing capital deployment.
              </p>
            </div>

            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm">
              <div className="text-xs font-mono font-bold text-[#1B8A89] mb-2">PRINCIPLE 02</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Simplicity Over Theoretical Complexity
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                A 10-page execution plan that the team actually adopts is infinitely more valuable than a 100-page academic thesis that gathers dust. We build clear, actionable frameworks designed for real operations.
              </p>
            </div>

            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm">
              <div className="text-xs font-mono font-bold text-[#1B8A89] mb-2">PRINCIPLE 03</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Commercial Focus & Margin Discipline
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Top-line vanity metrics mean nothing if unit economics do not hold. Every strategy we build emphasizes Contribution Margin 2 (CM2), CAC/LTV ratios, and cash conversion cycles to protect enterprise viability.
              </p>
            </div>

            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm">
              <div className="text-xs font-mono font-bold text-[#1B8A89] mb-2">PRINCIPLE 04</div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Strict Integrity & Independent Perspective
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                We are not yes-men. If an idea validation report reveals unviable market economics or excessive customer acquisition friction, we advise founders directly rather than encouraging wasteful execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 & 4: Professional Profile & Entrepreneurial Exposure */}
      <section className="py-16 bg-white border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 bg-[#14243A] text-white rounded-lg shadow-sm space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
                  Leadership Profile
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Manrope'] text-white">Jatin Sharma</h3>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Principal Consultant · Business Strategy & Analytics Lead
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-[#203B57]">
                  Specializing in commercial architecture, secondary market intelligence, operational process engineering, and data pipeline modeling for emerging businesses and middle-market enterprises.
                </p>
                <div className="text-xs text-slate-400 space-y-1.5 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#1B8A89] rounded-full"></span>
                    <span>Direct founder engagement model</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#1B8A89] rounded-full"></span>
                    <span>12+ completed case diagnostics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#1B8A89] rounded-full"></span>
                    <span>Full-stack business analytics stack</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 text-sm text-[#344054] leading-relaxed">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89] mb-1">
                  Professional Background
                </div>
                <h2 className="text-2xl font-bold text-[#14243A] font-['Manrope']">
                  Hands-On Business & Entrepreneurial Exposure
                </h2>
              </div>
              <p>
                Having navigated the realities of startup building and commercial operations firsthand, the consultancy’s advisory perspective is shaped by practical exposure rather than ivory-tower theory.
              </p>
              <p>
                From structuring zero-to-one luxury commerce operations at <strong>The Kollektor</strong> to optimizing FMCG product contribution margins at <strong>The Cinnamon Kitchen</strong> and engineering shop-floor scrap control at <strong>PU Copper</strong>, our consulting engagements demonstrate a consistent ability to operate across diverse industry verticals.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-[#F5F7FA] border border-[#E3E8EF] rounded">
                  <span className="font-semibold text-xs text-[#14243A] block mb-1">
                    Startup 0-to-1 Architecture
                  </span>
                  <p className="text-xs text-[#667085]">
                    Validating demand, defining beachhead segments, structuring tiered monetization, and architecting launch roadmaps.
                  </p>
                </div>
                <div className="p-4 bg-[#F5F7FA] border border-[#E3E8EF] rounded">
                  <span className="font-semibold text-xs text-[#14243A] block mb-1">
                    Mid-Market Operational Scaling
                  </span>
                  <p className="text-xs text-[#667085]">
                    Analyzing inventory turns, auditing marketing spend efficiency, developing SOP manuals, and engineering leadership dashboards.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: Analytics & Research Capabilities */}
      <section className="py-16 bg-[#F5F7FA] border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Technical & Methodological Toolkit
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              Analytics & Research Capabilities
            </h2>
            <p className="text-sm text-[#667085]">
              We deploy industry-standard analytical software and proven management consulting frameworks to ensure transparent, reproducible, and verifiable deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-3">
              <Database className="w-6 h-6 text-[#1B8A89]" />
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">
                SQL & Relational Modeling
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                PostgreSQL, MySQL, BigQuery. Writing performant queries for multi-table joins, cohort retention segmentation, transaction aggregation, and automated data extraction.
              </p>
            </div>

            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-3">
              <BarChart2 className="w-6 h-6 text-[#1B8A89]" />
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">
                Power BI & Tableau
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                DAX formulas, interactive parameter slicers, data mart modeling, and executive summary visualizations with drill-down views down to transaction-level line items.
              </p>
            </div>

            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-3">
              <FileSpreadsheet className="w-6 h-6 text-[#1B8A89]" />
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">
                Advanced Financial Modeling
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Dynamic 3-statement sensitivity sheets, unit economics simulators, contribution margin decomposition, Monte Carlo scenarios, and cash-burn runways.
              </p>
            </div>

            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm space-y-3">
              <Layers className="w-6 h-6 text-[#1B8A89]" />
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope']">
                Market Intelligence & SOPs
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                TAM/SAM/SOM modeling, competitor feature benchmarking matrices, customer journey friction audits, and end-to-end SOP documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 & 7: Engagement Approach & CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
            Client Engagement Cadence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
            Direct, Confidential & High-Accountability Partnerships
          </h2>
          <p className="text-sm text-[#344054] leading-relaxed max-w-2xl mx-auto">
            We work on both fixed-scope diagnostic sprints and ongoing monthly advisory retainers. Every engagement begins with an introductory scoping session where we review your key business challenges and determine the right service structure.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-[#1B8A89] hover:bg-[#167271] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-md cursor-pointer"
            >
              Discuss Your Business Needs
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3.5 bg-transparent hover:bg-slate-100 text-[#14243A] border border-[#E3E8EF] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all cursor-pointer"
            >
              View Service Catalogue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
