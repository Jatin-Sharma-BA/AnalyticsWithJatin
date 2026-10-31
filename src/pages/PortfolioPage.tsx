import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ArrowRight,
  Filter,
  BarChart2,
  Briefcase,
  Search,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Analytics Projects' | 'Startup & Business Engagements'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCaseStudies = CASE_STUDIES_DATA.filter((cs) => {
    const matchesCategory =
      selectedCategory === 'All' || cs.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.toolsAndMethodology.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E3E8EF]">
        <Breadcrumb
          items={[{ label: 'Case Studies & Portfolio', page: 'portfolio' }]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Header */}
      <section className="bg-[#14243A] text-white py-16 lg:py-20 border-b border-[#203B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Consultancy Case-Study Library
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Manrope'] tracking-tight">
              Case Studies & Portfolio
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A structured repository of our analytical investigations, operational engineering engagements, and startup advisory partnerships. All case studies are presented with verifiable facts, methodological rigor, and clear engagement distinctions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <div className="bg-white border-b border-[#E3E8EF] sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer shrink-0 ${
                selectedCategory === 'All'
                  ? 'bg-[#14243A] text-white font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              All Projects ({CASE_STUDIES_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('Analytics Projects')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 ${
                selectedCategory === 'Analytics Projects'
                  ? 'bg-[#14243A] text-white font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              Analytics Projects (8)
            </button>
            <button
              onClick={() => setSelectedCategory('Startup & Business Engagements')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 ${
                selectedCategory === 'Startup & Business Engagements'
                  ? 'bg-[#14243A] text-white font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Startup & Business Engagements (4)
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by tool, industry or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#F5F7FA] border border-[#E3E8EF] rounded focus:outline-none focus:border-[#1B8A89] focus:bg-white text-slate-800"
            />
          </div>

        </div>
      </div>

      {/* Main Studies Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCaseStudies.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-lg border border-[#E3E8EF] space-y-3">
            <FileText className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No case studies match your search</h3>
            <p className="text-xs text-slate-500">Try adjusting your category filter or search keywords.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs text-[#1B8A89] font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white border border-[#E3E8EF] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#1B8A89]/50 transition-all shadow-sm group"
              >
                <div className="space-y-4">
                  
                  {/* Meta strip */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-[#14243A]">{cs.category}</span>
                    <span className="font-mono text-[11px] text-[#1B8A89] bg-[#F5F7FA] px-2 py-0.5 rounded border border-[#E3E8EF]">
                      {cs.projectNature}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-500 font-medium">
                    Industry: {cs.industry} {cs.duration && `· Duration: ${cs.duration}`}
                  </div>

                  <h3 className="text-xl font-bold text-[#14243A] font-['Manrope'] group-hover:text-[#1B8A89] transition-colors leading-snug">
                    {cs.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#344054] leading-relaxed line-clamp-3">
                    {cs.summary}
                  </p>

                  {/* Problem & Finding Snippet */}
                  <div className="p-4 bg-[#F5F7FA] border border-[#E3E8EF] rounded text-xs space-y-2">
                    <div>
                      <span className="font-semibold text-slate-800 block text-[11px] uppercase tracking-wider">
                        Core Problem Addressed:
                      </span>
                      <p className="text-slate-600 line-clamp-2 mt-0.5">
                        {cs.problemStatement}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E3E8EF]">
                      <span className="font-semibold text-slate-800 block text-[11px] uppercase tracking-wider">
                        Key Analytical Finding:
                      </span>
                      <p className="text-slate-600 line-clamp-2 mt-0.5">
                        {cs.keyFindings[0]}
                      </p>
                    </div>
                  </div>

                  {/* Tools used */}
                  <div className="pt-1">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      Tools & Methodology:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.toolsAndMethodology.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="pt-6 mt-6 border-t border-[#E3E8EF] flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    13-Point Structural Review
                  </span>
                  <button
                    onClick={() => onNavigate('case-study-detail', cs.slug)}
                    className="text-xs font-semibold text-[#14243A] group-hover:text-[#1B8A89] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>Read Full 13-Point Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1B8A89] transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Methodology Guarantee */}
      <section className="bg-white border-t border-[#E3E8EF] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg space-y-3">
            <h4 className="text-sm font-bold text-[#14243A] font-['Manrope']">
              Integrity & Attribution Standard:
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              In accordance with our strict consulting code of ethics, all case studies clearly distinguish between commercial implementation work, client advisory partnerships, and independent research diagnostics. We do not publish fabricated client testimonials or unverified financial returns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
