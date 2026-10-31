import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  organization: string;
  industry: string;
  engagementType: string;
  caseStudySlug?: string;
  quote: string;
  beforeChallenge: string;
  intervention: string;
  verifiedOutcome: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'the-kollektor',
    clientName: 'Siddharth M.',
    role: 'Founder & Managing Director',
    organization: 'The Kollektor',
    industry: 'Luxury Retail & Premium Collectibles',
    engagementType: 'Zero-to-One Launch & Consignment Architecture',
    caseStudySlug: 'the-kollektor-luxury-commerce',
    quote: 'Analytics with Jatin transformed our concept from a fragmented curatorial idea into an operational, investor-grade commercial enterprise with clear consignment margins.',
    beforeChallenge: 'Strong aesthetic vision for luxury collectibles, but zero clarity on tiered vendor consignment commission models and unstructured launch milestones.',
    intervention: 'Conducted unit economics modeling, structured a 3-tier consignment agreement balancing seller retention with margin, and developed our 6-month phased launch roadmap.',
    verifiedOutcome: 'Onboarded 20+ gallery consignment partners under standardized contracts, avoiding premature capital allocation to expensive physical showroom leases.'
  },
  {
    id: 'the-cinnamon-kitchen',
    clientName: 'Priyansha A.',
    role: 'Founder & Operations Head',
    organization: 'The Cinnamon Kitchen',
    industry: 'Clean-Label FMCG & Packaged Confectionery',
    engagementType: 'Retail Expansion & SKU Unit Economics Advisory',
    caseStudySlug: 'the-cinnamon-kitchen-growth-advisory',
    quote: 'Before this engagement, sales growth was actually masking unit-level margin erosion. Jatin provided the rigorous financial modeling we needed to scale sustainably into retail.',
    beforeChallenge: 'Rapid top-line sales growth was straining production capacity, but channel commissions and transit breakage threatened working capital.',
    intervention: 'Audited contribution margins across all 24 SKUs, modeled modern trade 60-day payment terms, and formulated packaging barrier improvements.',
    verifiedOutcome: 'Pruned 6 low-velocity SKUs to free up 30% kitchen capacity for hero bestsellers, adjusted MSRP strategically, and preserved cash reserves prior to quick-commerce rollout.'
  },
  {
    id: 'pu-copper',
    clientName: 'Rajesh K.',
    role: 'Managing Partner',
    organization: 'PU Copperware',
    industry: 'Industrial Metalware & Consumer Manufacturing',
    engagementType: 'Operations Diagnostic, Scrap Auditing & SOP Engineering',
    caseStudySlug: 'pu-copper-operational-process-improvement',
    quote: 'The level of ground-level operational discipline introduced was remarkable. The process maps and job-cards are actively used on our shop floor every single day.',
    beforeChallenge: 'Volatile raw copper commodity prices, informal subcontractor tracking, and unaccounted scrap leakage during spinning and polishing.',
    intervention: 'Executed on-site mass-balance scrap accounting, designed daily shop-floor job cards, and authored comprehensive SOP manuals for station supervisors.',
    verifiedOutcome: 'Plugged an 8.4% unaccounted metal scrap loss during subcontracted polishing and significantly cut order fulfillment delays through station buffer controls.'
  },
  {
    id: 'polkraft-analytics',
    clientName: 'Vikram S.',
    role: 'Managing Director & Practice Lead',
    organization: 'Polkraft Analytics',
    industry: 'Enterprise Software & Analytics Services',
    engagementType: 'Consulting Service Modularization & Performance Management',
    caseStudySlug: 'polkraft-analytics-pmp-strategic-advisory',
    quote: 'Productizing our analytics service offerings eliminated the endless scope creep that previously plagued our enterprise BI client engagements.',
    beforeChallenge: 'Bespoke, unstandardized client scopes led to protracted delivery cycles, unbilled analyst hours, and misaligned expectations on data hygiene.',
    intervention: 'Codified custom analytical services into 4 modular fixed-scope sprints and introduced a mandatory upfront client Data Readiness Diagnostic.',
    verifiedOutcome: 'Reduced initial development cycles by 35% through standardized templates and established clear scope boundaries that protected billable margins.'
  }
];

interface TestimonialSliderProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance every 7 seconds when not paused
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  return (
    <section
      className="py-20 bg-white border-b border-[#E3E8EF]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Verified Client Feedback
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14243A] font-['Manrope']">
              What Founders & Business Leaders Say
            </h2>
            <p className="text-sm text-[#667085]">
              Attributable feedback and verified outcomes from our commercial advisory and operational analytics partnerships.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 mr-2 tabular-nums">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2.5 rounded border border-[#E3E8EF] hover:border-[#14243A] hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2.5 rounded border border-[#E3E8EF] hover:border-[#14243A] hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-7 sm:p-10 shadow-xs relative overflow-hidden transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Quote & Attribution (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Unboxed Metadata Header */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-[#14243A]">{current.organization}</span>
                <span aria-hidden="true">·</span>
                <span>{current.industry}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#1B8A89] font-medium">{current.engagementType}</span>
              </div>

              {/* Quote Body */}
              <div className="relative">
                <Quote className="w-8 h-8 text-[#1B8A89]/20 absolute -top-3 -left-2 -z-0" />
                <blockquote className="text-lg sm:text-xl font-bold text-[#14243A] font-['Manrope'] leading-relaxed relative z-10 pl-6 border-l-2 border-[#1B8A89]">
                  "{current.quote}"
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-2">
                <div className="text-sm font-bold text-[#14243A]">
                  {current.clientName}
                </div>
                <div className="text-xs text-[#667085]">
                  {current.role}, <span className="font-medium text-slate-700">{current.organization}</span>
                </div>
              </div>

              {/* Case Study Deep Link */}
              {current.caseStudySlug && (
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('case-study-detail', current.caseStudySlug)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B8A89] hover:underline cursor-pointer"
                  >
                    <span>Read Verified 13-Point Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Concrete Before / Intervention / Verified Outcome (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-[#E3E8EF] rounded-lg p-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#14243A] border-b border-[#E3E8EF] pb-2">
                Engagement Impact Snapshot
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">
                    Client Challenge:
                  </span>
                  <p className="text-slate-700 mt-0.5 leading-relaxed">
                    {current.beforeChallenge}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E3E8EF]">
                  <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">
                    Consultancy Scope:
                  </span>
                  <p className="text-slate-700 mt-0.5 leading-relaxed">
                    {current.intervention}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E3E8EF]">
                  <span className="text-emerald-700 font-semibold block text-[11px] uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Commercial Outcome:
                  </span>
                  <p className="text-slate-900 font-medium mt-0.5 leading-relaxed">
                    {current.verifiedOutcome}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="mt-8 pt-6 border-t border-[#E3E8EF] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Jump to testimonial ${idx + 1}`}
                  className={`h-1.5 transition-all rounded-full cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#1B8A89]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <div className="text-[11px] text-slate-400">
              Verified corporate advisory & operational analytics partnerships
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
