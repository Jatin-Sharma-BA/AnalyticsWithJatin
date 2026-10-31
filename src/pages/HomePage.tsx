import React from 'react';
import { PageRoute } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  TrendingUp,
  BarChart3,
  Search,
  Layers,
  FileCheck2,
  Building2,
  Clock,
  Sparkles,
  Target,
  LineChart,
  ShieldAlert
} from 'lucide-react';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { FAQSection } from '../components/FAQSection';
import heroImage from '../assets/images/consulting_strategy_hero_1793334166830.jpg';

interface HomePageProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Selected featured case studies (2 from Analytics, 2 from Business Engagements)
  const featuredCaseStudies = [
    CASE_STUDIES_DATA.find((c) => c.id === 'the-kollektor')!,
    CASE_STUDIES_DATA.find((c) => c.id === 'hospital-performance-analytics')!,
    CASE_STUDIES_DATA.find((c) => c.id === 'the-cinnamon-kitchen')!,
    CASE_STUDIES_DATA.find((c) => c.id === 'nykaa-brand-perception')!,
  ].filter(Boolean);

  return (
    <div className="bg-[#F5F7FA]">
      
      {/* SECTION 1: CONSULTING HERO */}
      <section className="relative bg-[#14243A] text-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#203B57] overflow-hidden">
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#1B8A89_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quiet unboxed kicker */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
                <span>Business Strategy & Analytics Consultancy</span>
                <span aria-hidden="true" className="text-slate-500">·</span>
                <span className="text-slate-300">India & International</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Manrope'] leading-[1.15] text-balance">
                Turning Business Insights Into Action.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                We help startups and growing businesses understand their markets, evaluate opportunities, analyse performance and develop practical strategies for better-informed decisions.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-[#1B8A89] hover:bg-[#167271] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  Book a Consultation
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 bg-transparent hover:bg-white/10 active:scale-[0.98] text-slate-200 hover:text-white border border-[#203B57] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all cursor-pointer whitespace-nowrap"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Core Pillars Adjacency */}
              <div className="pt-6 border-t border-[#203B57]/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
                <div>
                  <span className="font-semibold text-white block">Market Research</span>
                  <span className="text-slate-400 text-[11px]">Demand & trends</span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Business Planning</span>
                  <span className="text-slate-400 text-[11px]">0-to-1 Roadmaps</span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Analytics & BI</span>
                  <span className="text-slate-400 text-[11px]">Dashboards & KPIs</span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Founder Advisory</span>
                  <span className="text-slate-400 text-[11px]">Strategic sparring</span>
                </div>
              </div>
            </div>

            {/* Right Focal Carrier (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-[#203B57] shadow-2xl bg-[#0F1C2E]">
                <img
                  src={heroImage}
                  alt="Analytics with Jatin strategic boardroom session"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-4 bg-[#14243A]/95 border-t border-[#203B57]">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-white font-medium">Boutique Strategic Advisory</span>
                    <span className="font-mono text-[#1B8A89]">Research · Model · Execute</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CONSULTANCY INTRODUCTION */}
      <section className="py-20 bg-white border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
                Consulting Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope'] leading-tight">
                Better Business Decisions Start With Better Understanding.
              </h2>
              <div className="w-12 h-1 bg-[#1B8A89]"></div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#344054] leading-relaxed">
              <p>
                Every business faces pivotal inflection points: validating a new concept before committing capital, untangling declining margins, deciding where to invest marketing budget, or structuring operations for sustainable scale.
              </p>
              <p>
                Too often, leadership teams are forced to choose between abstract high-cost agency presentations or disorganized intuition. <strong>Analytics with Jatin</strong> was established to bridge this divide. We combine the intellectual rigor of management consulting with granular, hands-on data analytics and grounded business planning.
              </p>
              <p className="text-slate-600 text-sm">
                We believe data without strategic context is noise, and strategy without analytical validation is guesswork. Our work is designed to give founders and business leaders the clarity needed to act with conviction.
              </p>
              
              <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B8A89]" />
                  Zero generic templates
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B8A89]" />
                  Empirical business research
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B8A89]" />
                  Direct senior partnership
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHO WE HELP */}
      <section className="py-20 bg-[#F5F7FA] border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Client Engagement Focus
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              Tailored Support for Startups and Growing Businesses
            </h2>
            <p className="text-sm text-[#667085]">
              Whether you are standing at zero or building from proven market validation, our engagements are engineered around your specific operational stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Box 1: For Startups */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-8 shadow-sm flex flex-col justify-between hover:border-[#1B8A89]/40 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded bg-[#14243A] text-white flex items-center justify-center">
                  <Compass className="w-6 h-6 text-[#1B8A89]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B8A89]">
                    Pre-Launch & Early Stage
                  </span>
                  <h3 className="text-xl font-bold text-[#14243A] font-['Manrope'] mt-1">
                    For Startups
                  </h3>
                </div>
                <p className="text-sm text-[#344054] leading-relaxed">
                  From idea validation to launch planning, business models and go-to-market strategy. We help entrepreneurs pressure-test commercial viability, avoid costly launch missteps, and build investor-grade operational plans.
                </p>
                
                <div className="pt-2 border-t border-[#E3E8EF] space-y-2">
                  <div className="text-xs font-semibold text-slate-700">Typical Solutions:</div>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span className="text-[#1B8A89] font-mono">01.</span>
                      Startup Idea Validation & TAM Sizing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#1B8A89] font-mono">02.</span>
                      Business Model & Pricing Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#1B8A89] font-mono">03.</span>
                      Zero-to-One Business Roadmap & Launch Ops
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#1B8A89] font-mono">04.</span>
                      Go-To-Market & Early Customer Acquisition
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('for-startups')}
                  className="w-full py-3 px-4 bg-[#14243A] hover:bg-[#203B57] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Startup Solutions <ArrowRight className="w-4 h-4 text-[#1B8A89]" />
                </button>
              </div>
            </div>

            {/* Box 2: For Growing Businesses */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-8 shadow-sm flex flex-col justify-between hover:border-[#1B8A89]/40 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded bg-[#14243A] text-white flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#1B8A89]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B8A89]">
                    Established & Scaling
                  </span>
                  <h3 className="text-xl font-bold text-[#14243A] font-['Manrope'] mt-1">
                    For Growing Businesses
                  </h3>
                </div>
                <p className="text-sm text-[#344054] leading-relaxed">
                  From performance analytics to process improvement, growth opportunities and strategic planning. We help small and medium companies turn scattered records into unified dashboards, remove operational bottlenecks, and structure sustainable expansion.
                </p>
                
                <div className="pt-2 border-t border-[#E3E8EF] space-y-2">
                  <div className="text-xs font-semibold text-slate-700">Typical Solutions:</div>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span className="text-[#1B8A89] font-mono">01.</span>
                      SQL, Power BI & Tableau Executive Dashboards
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#1B8A89] font-mono">02.</span>
                      Marketing Attribution & Ad Spend Efficiency
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#1B8A89] font-mono">03.</span>
                      Operational Bottlenecks & SOP Engineering
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#1B8A89] font-mono">04.</span>
                      Growth Scenarios & Ongoing Founder Advisory
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('for-growing-businesses')}
                  className="w-full py-3 px-4 bg-[#14243A] hover:bg-[#203B57] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Business Solutions <ArrowRight className="w-4 h-4 text-[#1B8A89]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: OUR 10 SERVICES */}
      <section className="py-20 bg-white border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
                Consulting Services Catalogue
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
                Comprehensive Business Support Across Strategy & Analytics.
              </h2>
              <p className="text-sm text-[#667085]">
                Ten distinct, specialized consulting offerings. Each service is scoped with clear deliverables, rigorous analytical methodologies, and actionable execution roadmaps.
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-semibold uppercase tracking-wider text-[#14243A] hover:text-[#1B8A89] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                View Full Specifications <ArrowRight className="w-4 h-4 text-[#1B8A89]" />
              </button>
            </div>
          </div>

          {/* 10 Services Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6 flex flex-col justify-between hover:shadow-md hover:border-[#1B8A89]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#1B8A89] bg-white border border-[#E3E8EF] px-2 py-0.5 rounded">
                      SERVICE {srv.number}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {srv.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#14243A] font-['Manrope'] group-hover:text-[#1B8A89] transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-[#667085] mt-2.5 leading-relaxed line-clamp-3">
                    {srv.positioning}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#E3E8EF]">
                    <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Key Deliverables:
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {srv.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5 line-clamp-1">
                          <span className="text-[#1B8A89] shrink-0 font-bold">·</span>
                          <span className="truncate">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#E3E8EF]/80">
                  <button
                    onClick={() => onNavigate('service-detail', srv.slug)}
                    className="w-full text-xs font-semibold text-[#14243A] group-hover:text-[#1B8A89] flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1B8A89] transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: OUR CONSULTING APPROACH */}
      <section className="py-20 bg-[#F5F7FA] border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Engagement Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              Our 4-Step Consulting Approach
            </h2>
            <p className="text-sm text-[#667085]">
              A disciplined, repeatable framework turning complex business questions into validated decisions and actionable execution steps.
            </p>
          </div>

          {/* Process Diagram: Horizontal on desktop, vertical on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 relative shadow-sm">
              <div className="text-xs font-mono font-bold text-[#1B8A89] mb-3">
                PHASE 01
              </div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Understand the Challenge
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Initial strategic dialogue to deconstruct founder hypotheses, audit baseline metrics, review current operational friction, and define explicit engagement goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 relative shadow-sm">
              <div className="text-xs font-mono font-bold text-[#1B8A89] mb-3">
                PHASE 02
              </div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Research & Analyse
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Execute deep secondary market intelligence, competitor benchmarking, SQL data normalization, and unit economics modeling to uncover factual truths.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 relative shadow-sm">
              <div className="text-xs font-mono font-bold text-[#1B8A89] mb-3">
                PHASE 03
              </div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Develop Strategies
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Translate empirical findings into structured commercial options, pricing tiers, go-to-market beachheads, or operational process improvements.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 relative shadow-sm">
              <div className="text-xs font-mono font-bold text-[#1B8A89] mb-3">
                PHASE 04
              </div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Plan Practical Next Steps
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Deliver phased execution roadmaps, milestone tracking sheets, SOP manuals, and ongoing sparring cadence to ensure ideas translate into reality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: SELECTED CASE STUDIES */}
      <section className="py-20 bg-white border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
                Verified Consulting Engagements
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
                Selected Case Studies & Analysis
              </h2>
              <p className="text-sm text-[#667085]">
                Rigorous 13-point diagnostic reviews across commercial analytics projects and startup advisory partnerships.
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('portfolio')}
                className="text-xs font-semibold uppercase tracking-wider text-[#14243A] hover:text-[#1B8A89] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                View All 12 Case Studies <ArrowRight className="w-4 h-4 text-[#1B8A89]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCaseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#1B8A89]/50 transition-all shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-[#14243A]">{cs.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cs.industry}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14243A] font-['Manrope'] leading-snug">
                    {cs.title}
                  </h3>

                  <p className="text-sm text-[#344054] leading-relaxed line-clamp-3">
                    {cs.summary}
                  </p>

                  <div className="p-4 bg-white border border-[#E3E8EF] rounded text-xs space-y-1.5">
                    <div className="font-semibold text-slate-800">Key Analytical Finding:</div>
                    <p className="text-slate-600 line-clamp-2">
                      {cs.keyFindings[0]}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E3E8EF] flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-mono">
                    {cs.projectNature}
                  </div>
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

      {/* SECTION 7: WHY WORK WITH ANALYTICS WITH JATIN? */}
      <section className="py-20 bg-[#F5F7FA] border-b border-[#E3E8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Strategic Differentiation
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              Why Partner With Analytics with Jatin?
            </h2>
            <p className="text-sm text-[#667085]">
              Grounding every business recommendation in commercial reality, statistical truth, and execution feasibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Value 1 */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#14243A] text-[#1B8A89] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Business-First Thinking
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                We never treat analytics as an academic exercise. Every model, metric, and finding is anchored directly in commercial margins, customer acquisition, and enterprise value.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#14243A] text-[#1B8A89] flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Research-Driven Approach
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                We replace assumptions with structured primary and secondary intelligence. We investigate competitive moats, pricing elasticities, and buyer friction before formulating plans.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#14243A] text-[#1B8A89] flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Analytical Problem-Solving
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Utilizing SQL, Power BI, Tableau, and advanced financial modeling, we clean dirty source data, find systemic leakage points, and build automated leadership dashboards.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#14243A] text-[#1B8A89] flex items-center justify-center mb-4">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2">
                Practical Recommendations
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                No 100-slide theoretical decks that gather dust. We produce concise execution blueprints, clear milestone trackers, and standard operating procedures your team can implement on Monday.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: VERIFIED CLIENT TESTIMONIALS (SLIDER) */}
      <TestimonialSlider onNavigate={onNavigate} />

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      <FAQSection onNavigate={onNavigate} />

      {/* SECTION 10: FINAL CONSULTATION CTA */}
      <section className="py-20 bg-[#14243A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
            Begin Your Engagement
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Manrope'] leading-tight">
            Let's Discuss Your Business Priorities.
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are evaluating a new opportunity, planning a launch or looking to improve business performance, let's discuss your requirements in a structured introductory consultation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#1B8A89] hover:bg-[#167271] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 active:scale-[0.98] text-slate-200 border border-[#203B57] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all cursor-pointer whitespace-nowrap"
            >
              Review Case Studies
            </button>
          </div>

          <div className="pt-8 text-xs text-slate-400">
            Initial discovery calls are confidential and focused entirely on understanding your commercial challenges.
          </div>
        </div>
      </section>

    </div>
  );
};
