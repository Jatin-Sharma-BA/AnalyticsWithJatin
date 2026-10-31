import React, { useState, useEffect, useRef } from 'react';
import { PageRoute } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, Compass, BarChart3, TrendingUp } from 'lucide-react';

interface HeaderProps {
  currentPage: PageRoute;
  currentSlug?: string;
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  currentSlug,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [whoWeHelpDropdownOpen, setWhoWeHelpDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const whoWeHelpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (whoWeHelpRef.current && !whoWeHelpRef.current.contains(e.target as Node)) {
        setWhoWeHelpDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageRoute, slug?: string) => {
    onNavigate(page, slug);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setWhoWeHelpDropdownOpen(false);
  };

  const isServicesActive = currentPage === 'services' || currentPage === 'service-detail';
  const isWhoWeHelpActive = currentPage === 'for-startups' || currentPage === 'for-growing-businesses';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#14243A]/98 backdrop-blur-md shadow-md border-b border-[#203B57]'
          : 'bg-[#14243A] border-b border-[#203B57]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Strict Top Bar Contract: Single text element, no subtitle badges) */}
          <div className="shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group cursor-pointer"
            >
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-['Manrope'] whitespace-nowrap">
                Analytics with Jatin
              </span>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap py-2 border-b-2 ${
                currentPage === 'home'
                  ? 'border-[#1B8A89] text-white font-semibold'
                  : 'border-transparent text-slate-300'
              }`}
            >
              Home
            </button>

            {/* About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap py-2 border-b-2 ${
                currentPage === 'about'
                  ? 'border-[#1B8A89] text-white font-semibold'
                  : 'border-transparent text-slate-300'
              }`}
            >
              About
            </button>

            {/* Services Dropdown (All 10 services) */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap py-2 border-b-2 ${
                  isServicesActive
                    ? 'border-[#1B8A89] text-white font-semibold'
                    : 'border-transparent text-slate-300'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#1B8A89]' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-[480px] bg-[#14243A] border border-[#203B57] shadow-2xl rounded-lg p-4 mt-0 grid grid-cols-2 gap-2 text-left animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="col-span-2 pb-2 mb-1 border-b border-[#203B57] flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold tracking-wider text-slate-300 uppercase">
                      All 10 Advisory & Analytics Services
                    </span>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-[#1B8A89] hover:underline flex items-center gap-1 font-medium"
                    >
                      View All <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  {SERVICES_DATA.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => handleNavClick('service-detail', srv.slug)}
                      className={`text-left p-2 rounded transition-all hover:bg-[#203B57] cursor-pointer flex items-start gap-2.5 ${
                        currentSlug === srv.slug ? 'bg-[#203B57] border-l-2 border-[#1B8A89]' : ''
                      }`}
                    >
                      <span className="text-xs font-mono text-[#1B8A89] mt-0.5 font-bold">
                        {srv.number}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-white leading-tight">
                          {srv.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                          {srv.shortTitle}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Who We Help Dropdown (Industries / Who We Help) */}
            <div
              ref={whoWeHelpRef}
              className="relative"
              onMouseEnter={() => setWhoWeHelpDropdownOpen(true)}
              onMouseLeave={() => setWhoWeHelpDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap py-2 border-b-2 ${
                  isWhoWeHelpActive
                    ? 'border-[#1B8A89] text-white font-semibold'
                    : 'border-transparent text-slate-300'
                }`}
              >
                <span>Who We Help</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    whoWeHelpDropdownOpen ? 'rotate-180 text-[#1B8A89]' : ''
                  }`}
                />
              </button>

              {whoWeHelpDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#14243A] border border-[#203B57] shadow-2xl rounded-lg p-2 mt-0 text-left animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNavClick('for-startups')}
                    className={`w-full text-left p-2.5 rounded transition-all hover:bg-[#203B57] cursor-pointer mb-1 ${
                      currentPage === 'for-startups' ? 'bg-[#203B57] text-white' : 'text-slate-200'
                    }`}
                  >
                    <div className="text-sm font-semibold text-white flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#1B8A89]" />
                      For Startups
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Idea validation, launch planning & GTM
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('for-growing-businesses')}
                    className={`w-full text-left p-2.5 rounded transition-all hover:bg-[#203B57] cursor-pointer ${
                      currentPage === 'for-growing-businesses' ? 'bg-[#203B57] text-white' : 'text-slate-200'
                    }`}
                  >
                    <div className="text-sm font-semibold text-white flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#1B8A89]" />
                      For Growing Businesses
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Analytics, process improvement & scale
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Case Studies */}
            <button
              onClick={() => handleNavClick('portfolio')}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap py-2 border-b-2 ${
                currentPage === 'portfolio' || currentPage === 'case-study-detail'
                  ? 'border-[#1B8A89] text-white font-semibold'
                  : 'border-transparent text-slate-300'
              }`}
            >
              Case Studies
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap py-2 border-b-2 ${
                currentPage === 'contact'
                  ? 'border-[#1B8A89] text-white font-semibold'
                  : 'border-transparent text-slate-300'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1B8A89] hover:bg-[#167271] active:scale-[0.98] transition-all rounded shadow-sm cursor-pointer whitespace-nowrap"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#14243A] border-b border-[#203B57] px-4 pt-2 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 py-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium ${
                currentPage === 'home' ? 'bg-[#203B57] text-white' : 'text-slate-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium ${
                currentPage === 'about' ? 'bg-[#203B57] text-white' : 'text-slate-300'
              }`}
            >
              About the Consultancy
            </button>

            {/* Who We Help Section */}
            <div className="pt-2 pb-1 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Who We Help
            </div>
            <button
              onClick={() => handleNavClick('for-startups')}
              className={`w-full text-left px-4 py-2 rounded text-sm ${
                currentPage === 'for-startups' ? 'bg-[#203B57] text-white' : 'text-slate-300'
              }`}
            >
              For Startups
            </button>
            <button
              onClick={() => handleNavClick('for-growing-businesses')}
              className={`w-full text-left px-4 py-2 rounded text-sm ${
                currentPage === 'for-growing-businesses' ? 'bg-[#203B57] text-white' : 'text-slate-300'
              }`}
            >
              For Growing Businesses
            </button>

            {/* Services Section */}
            <div className="pt-3 pb-1 px-3 flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <span>All 10 Services</span>
              <button
                onClick={() => handleNavClick('services')}
                className="text-[#1B8A89] normal-case text-xs hover:underline"
              >
                Overview
              </button>
            </div>
            <div className="grid grid-cols-1 gap-1 pl-2">
              {SERVICES_DATA.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => handleNavClick('service-detail', srv.slug)}
                  className={`w-full text-left px-3 py-1.5 rounded text-xs flex items-center gap-2 ${
                    currentSlug === srv.slug ? 'bg-[#203B57] text-white font-medium' : 'text-slate-300'
                  }`}
                >
                  <span className="text-[#1B8A89] font-mono">{srv.number}.</span>
                  <span className="truncate">{srv.title}</span>
                </button>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => handleNavClick('portfolio')}
                className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium ${
                  currentPage === 'portfolio' || currentPage === 'case-study-detail'
                    ? 'bg-[#203B57] text-white'
                    : 'text-slate-300'
                }`}
              >
                Case Studies & Portfolio
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium ${
                  currentPage === 'contact' ? 'bg-[#203B57] text-white' : 'text-slate-300'
                }`}
              >
                Contact / Work With Us
              </button>
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1B8A89] rounded shadow"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
