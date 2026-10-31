import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Compass,
  BarChart3,
  TrendingUp,
  Filter
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E3E8EF]">
        <Breadcrumb
          items={[{ label: 'Consulting Services', page: 'services' }]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Services Hero Header */}
      <section className="bg-[#14243A] text-white py-16 lg:py-20 border-b border-[#203B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Specialized Consulting Offerings
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Manrope'] tracking-tight">
              The Complete 10-Service Catalogue
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Structured advisory and analytical support across every critical business stage — from pre-launch idea validation to executive dashboard automation and founder strategic sparring.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Jump Bar & Filter */}
      <div className="bg-white border-b border-[#E3E8EF] sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
            <span className="text-xs font-semibold text-slate-500 mr-2 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-[#14243A] text-white font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              All 10 Services
            </button>
            <button
              onClick={() => setSelectedCategory('Strategy & Planning')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer shrink-0 ${
                selectedCategory === 'Strategy & Planning'
                  ? 'bg-[#14243A] text-white font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Strategy & Planning (01-05)
            </button>
            <button
              onClick={() => setSelectedCategory('Analytics & Performance')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer shrink-0 ${
                selectedCategory === 'Analytics & Performance'
                  ? 'bg-[#14243A] text-white font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Analytics & Dashboards (06-07)
            </button>
            <button
              onClick={() => setSelectedCategory('Advisory & Operations')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer shrink-0 ${
                selectedCategory === 'Advisory & Operations'
                  ? 'bg-[#14243A] text-white font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Advisory & Operations (08-10)
            </button>
          </div>

          <div className="text-xs text-slate-500 hidden md:block">
            Showing <span className="font-semibold text-slate-900">{filteredServices.length}</span> of 10 services
          </div>
        </div>
      </div>

      {/* Main Services List */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              id={srv.slug}
              className="bg-white border border-[#E3E8EF] rounded-lg p-6 sm:p-8 shadow-sm hover:border-[#1B8A89]/50 transition-all scroll-mt-36"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Overview (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#1B8A89] bg-[#F5F7FA] border border-[#E3E8EF] px-2.5 py-1 rounded">
                      SERVICE {srv.number}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {srv.category}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-[#1B8A89] font-medium">
                      {srv.idealFor}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#14243A] font-['Manrope']">
                    {srv.title}
                  </h2>

                  <p className="text-sm text-[#344054] leading-relaxed">
                    {srv.positioning}
                  </p>

                  <div className="p-4 bg-slate-50 border border-[#E3E8EF] rounded-lg">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 mb-2">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      Client Challenges Addressed:
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-1">
                      {srv.clientChallenges.slice(0, 4).map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-slate-400">·</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scope of Work Snippet */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Scope of Work Highlights:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {srv.scopeOfWork.slice(0, 6).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1B8A89] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Deliverables & CTA (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14243A] mb-3">
                      <FileCheck className="w-4 h-4 text-[#1B8A89]" />
                      Potential Deliverables
                    </div>
                    <ul className="text-xs text-slate-700 space-y-2 mb-6">
                      {srv.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-[#1B8A89] font-bold">✓</span>
                          <span className="font-medium">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#E3E8EF] space-y-2.5">
                    <button
                      onClick={() => onNavigate('service-detail', srv.slug)}
                      className="w-full py-2.5 px-4 bg-[#14243A] hover:bg-[#203B57] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>View Full Service Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#1B8A89]" />
                    </button>
                    <button
                      onClick={() => onNavigate('contact', srv.title)}
                      className="w-full py-2 px-4 bg-transparent hover:bg-slate-200/60 text-[#14243A] text-xs font-medium rounded transition-colors text-center cursor-pointer"
                    >
                      Enquire About {srv.shortTitle}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="bg-[#14243A] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Manrope'] text-white">
            Unsure Which Service Fits Your Current Stage?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Schedule a free 30-minute introductory discovery consultation. We review your current priorities and recommend the most effective, highest-leverage engagement model.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-[#1B8A89] hover:bg-[#167271] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded shadow transition-all cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
