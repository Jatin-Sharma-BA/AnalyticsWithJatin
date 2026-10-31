import React from 'react';
import { PageRoute } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, ShieldCheck, FileCode2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
  onOpenWordPressNotes?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWordPressNotes }) => {
  return (
    <footer className="bg-[#14243A] text-slate-300 border-t border-[#203B57]">
      {/* Top Banner / Core Commitment */}
      <div className="border-b border-[#203B57]/60 py-10 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#1B8A89] font-bold">
              Business Strategy & Analytics Consultancy
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-['Manrope']">
              Turning Business Insights Into Action.
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              From business questions to actionable decisions. We help startups and growing companies evaluate opportunities, improve performance, and build clear execution roadmaps.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-[#1B8A89] hover:bg-[#167271] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer whitespace-nowrap shadow-sm"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-2xl font-bold text-white font-['Manrope']">
              Analytics with Jatin
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A business strategy and analytics consultancy providing research-driven insights, business planning, analytical support and strategic guidance to founders and leadership teams.
            </p>
            
            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1B8A89] shrink-0" />
                <a href="mailto:analytics.jatin@gmail.com" className="hover:text-white transition-colors">
                  analytics.jatin@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1B8A89] shrink-0" />
                <a href="tel:+919517340696" className="hover:text-white transition-colors">
                  +91 9517340696
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#1B8A89] shrink-0" />
                <span>India (Serving Clients Nationally & Internationally)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-[#1B8A89] shrink-0" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  LinkedIn Profile <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {onOpenWordPressNotes && (
              <div className="pt-3">
                <button
                  onClick={onOpenWordPressNotes}
                  className="inline-flex items-center gap-1.5 text-xs text-[#1B8A89] hover:text-white transition-colors underline cursor-pointer"
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  View WordPress.com Architecture Guide & Gutenberg Specs
                </button>
              </div>
            )}
          </div>

          {/* Col 2: Primary Pages & Who We Help */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Consultancy
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                  About the Consultancy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left">
                  All 10 Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('for-startups')} className="hover:text-white transition-colors text-left">
                  For Startups
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('for-growing-businesses')} className="hover:text-white transition-colors text-left">
                  For Growing Businesses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-white transition-colors text-left">
                  Case Studies & Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">
                  Contact / Work With Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services 01 to 05 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Strategy & Planning
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_DATA.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate('service-detail', srv.slug)}
                    className="hover:text-white transition-colors text-left leading-snug py-0.5 block"
                  >
                    <span className="text-[#1B8A89] mr-1.5 font-mono">{srv.number}.</span>
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services 06 to 10 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Analytics & Operations
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_DATA.slice(5, 10).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate('service-detail', srv.slug)}
                    className="hover:text-white transition-colors text-left leading-snug py-0.5 block"
                  >
                    <span className="text-[#1B8A89] mr-1.5 font-mono">{srv.number}.</span>
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory Advisory Boundary Disclaimer */}
        <div className="mt-14 pt-8 border-t border-[#203B57] text-xs text-slate-400 leading-relaxed">
          <div className="p-4 rounded bg-[#0F1C2E] border border-[#203B57] flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#1B8A89] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-300">Professional Engagement Notice:</span>{' '}
              Analytics with Jatin is an independent business strategy and analytics consultancy providing research, business analysis, and management advisory. The consultancy does not provide legal, tax, audit, investment, or regulated financial advisory services.
            </div>
          </div>
        </div>

        {/* Copyright & Meta */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Analytics with Jatin. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Primary Focus: India & Global Remote Advisory</span>
            <span>·</span>
            <span>Turning Business Insights Into Action</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
