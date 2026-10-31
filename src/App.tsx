import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WordPressNotesModal } from './components/WordPressNotesModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ForStartupsPage } from './pages/ForStartupsPage';
import { ForGrowingBusinessesPage } from './pages/ForGrowingBusinessesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [currentSlug, setCurrentSlug] = useState<string | undefined>(undefined);
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);
  const [isWordPressModalOpen, setIsWordPressModalOpen] = useState(false);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash || hash === '') {
        setCurrentPage('home');
        setCurrentSlug(undefined);
      } else if (hash === 'about') {
        setCurrentPage('about');
        setCurrentSlug(undefined);
      } else if (hash === 'services') {
        setCurrentPage('services');
        setCurrentSlug(undefined);
      } else if (hash.startsWith('services/')) {
        const slug = hash.replace('services/', '');
        setCurrentPage('service-detail');
        setCurrentSlug(slug);
      } else if (hash === 'for-startups') {
        setCurrentPage('for-startups');
        setCurrentSlug(undefined);
      } else if (hash === 'for-growing-businesses') {
        setCurrentPage('for-growing-businesses');
        setCurrentSlug(undefined);
      } else if (hash === 'portfolio' || hash === 'case-studies') {
        setCurrentPage('portfolio');
        setCurrentSlug(undefined);
      } else if (hash.startsWith('case-studies/') || hash.startsWith('portfolio/')) {
        const slug = hash.replace(/^(case-studies|portfolio)\//, '');
        setCurrentPage('case-study-detail');
        setCurrentSlug(slug);
      } else if (hash.startsWith('contact')) {
        setCurrentPage('contact');
        setCurrentSlug(undefined);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute, slug?: string) => {
    setCurrentPage(page);
    setCurrentSlug(slug);

    if (page === 'contact' && slug) {
      setContactSubject(slug);
    } else if (page !== 'contact') {
      setContactSubject(undefined);
    }

    // Update URL hash
    let hash = '';
    if (page === 'home') hash = '';
    else if (page === 'about') hash = 'about';
    else if (page === 'services') hash = 'services';
    else if (page === 'service-detail') hash = `services/${slug || ''}`;
    else if (page === 'for-startups') hash = 'for-startups';
    else if (page === 'for-growing-businesses') hash = 'for-growing-businesses';
    else if (page === 'portfolio') hash = 'portfolio';
    else if (page === 'case-study-detail') hash = `case-studies/${slug || ''}`;
    else if (page === 'contact') hash = 'contact';

    window.location.hash = hash ? `#/${hash}` : '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#344054] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Global Sticky Navigation */}
      <Header
        currentPage={currentPage}
        currentSlug={currentSlug}
        onNavigate={navigateTo}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={navigateTo} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={navigateTo} />
        )}
        {currentPage === 'service-detail' && currentSlug && (
          <ServiceDetailPage slug={currentSlug} onNavigate={navigateTo} />
        )}
        {currentPage === 'for-startups' && (
          <ForStartupsPage onNavigate={navigateTo} />
        )}
        {currentPage === 'for-growing-businesses' && (
          <ForGrowingBusinessesPage onNavigate={navigateTo} />
        )}
        {currentPage === 'portfolio' && (
          <PortfolioPage onNavigate={navigateTo} />
        )}
        {currentPage === 'case-study-detail' && currentSlug && (
          <CaseStudyDetailPage slug={currentSlug} onNavigate={navigateTo} />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            initialSubject={contactSubject}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Global Consulting Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenWordPressNotes={() => setIsWordPressModalOpen(true)}
      />

      {/* WordPress Architecture Specification Modal */}
      <WordPressNotesModal
        isOpen={isWordPressModalOpen}
        onClose={() => setIsWordPressModalOpen(false)}
      />
    </div>
  );
}
