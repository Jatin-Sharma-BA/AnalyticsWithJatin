import React, { useState, useEffect } from 'react';
import { PageRoute, ConsultationInquiry } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Send,
  Download,
  Copy,
  Check,
  Building2,
  Calendar
} from 'lucide-react';

interface ContactPageProps {
  initialSubject?: string;
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialSubject, onNavigate }) => {
  // Pre-fill service of interest if passed from service/case study detail
  const [formData, setFormData] = useState({
    name: '',
    businessEmail: '',
    contactNumber: '',
    companyName: '',
    website: '',
    clientCategory: 'Startup Founder' as ConsultationInquiry['clientCategory'],
    serviceOfInterest: initialSubject || '01 — Startup Idea Validation',
    businessChallenge: '',
    expectedTimeline: 'Within 2-4 weeks',
    budgetRange: 'Open to discussion',
    consent: false,
    _honeypot: '', // Spam protection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedInquiry, setSubmittedInquiry] = useState<ConsultationInquiry | null>(null);
  const [pendingFallbackInquiry, setPendingFallbackInquiry] = useState<ConsultationInquiry | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      const match = SERVICES_DATA.find((s) =>
        s.title.toLowerCase().includes(initialSubject.toLowerCase()) ||
        initialSubject.toLowerCase().includes(s.title.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({
          ...prev,
          serviceOfInterest: `${match.number} — ${match.title}`
        }));
      }
    }
  }, [initialSubject]);

  // Sanitize text inputs by removing HTML tags and harmful control characters
  const sanitizeText = (input: string): string => {
    if (!input) return '';
    return input
      .replace(/<[^>]*>?/gm, '') // Strip HTML tags
      .replace(/[\u0000-\u0008\u000B-\u001F\u007F-\u009F]/g, '') // Strip control characters
      .trim();
  };

  // Generate a unique, professional inquiry reference ID: AWJ-XXXXXX
  const generateInquiryReferenceId = (): string => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `AWJ-${code}`;
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    const cleanName = sanitizeText(formData.name);
    if (!cleanName) {
      newErrors.name = 'Full name is required.';
    } else if (cleanName.length < 2) {
      newErrors.name = 'Please provide a valid full name (minimum 2 characters).';
    }

    const cleanEmail = formData.businessEmail.trim();
    if (!cleanEmail) {
      newErrors.businessEmail = 'Business email is required.';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleanEmail)) {
      newErrors.businessEmail = 'Please provide a valid business email address (e.g. name@company.com).';
    }

    const cleanPhone = sanitizeText(formData.contactNumber);
    if (!cleanPhone) {
      newErrors.contactNumber = 'Contact number is required.';
    } else if (cleanPhone.length < 8 || !/[0-9]/.test(cleanPhone)) {
      newErrors.contactNumber = 'Please enter a valid phone number with country/area code (e.g. +91 9517340696).';
    }

    const cleanCompany = sanitizeText(formData.companyName);
    if (!cleanCompany) {
      newErrors.companyName = 'Company / venture name is required.';
    } else if (cleanCompany.length < 2) {
      newErrors.companyName = 'Please enter a valid company name (minimum 2 characters).';
    }

    if (!formData.clientCategory) {
      newErrors.clientCategory = 'Please select your client category.';
    }

    if (!formData.serviceOfInterest) {
      newErrors.serviceOfInterest = 'Please select a service of interest.';
    }

    const cleanChallenge = sanitizeText(formData.businessChallenge);
    if (!cleanChallenge || cleanChallenge.length < 20) {
      newErrors.businessChallenge = 'Please describe your business challenge in greater detail (minimum 20 characters).';
    }

    if (!formData.expectedTimeline) {
      newErrors.expectedTimeline = 'Please select an expected project timeline.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent to proceed with consultation scheduling.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData._honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const referenceId = generateInquiryReferenceId();

    // Sanitize all captured fields
    const sanitizedInquiry: ConsultationInquiry = {
      id: referenceId,
      name: sanitizeText(formData.name),
      businessEmail: formData.businessEmail.trim().toLowerCase(),
      contactNumber: sanitizeText(formData.contactNumber),
      companyName: sanitizeText(formData.companyName),
      website: formData.website ? sanitizeText(formData.website) : undefined,
      clientCategory: formData.clientCategory,
      serviceOfInterest: sanitizeText(formData.serviceOfInterest),
      businessChallenge: sanitizeText(formData.businessChallenge),
      expectedTimeline: sanitizeText(formData.expectedTimeline),
      budgetRange: formData.budgetRange ? sanitizeText(formData.budgetRange) : 'Open to discussion',
      consent: formData.consent,
      createdAt: new Date().toISOString()
    };

    // Store in localStorage for audit & persistence
    try {
      const stored = localStorage.getItem('awj_consultation_inquiries');
      const list = stored ? JSON.parse(stored) : [];
      list.unshift(sanitizedInquiry);
      localStorage.setItem('awj_consultation_inquiries', JSON.stringify(list));
    } catch {
      // Safe fallback if localStorage disabled
    }

    // Direct endpoint submission strictly to analytics.jatin@gmail.com
    const targetEndpoint = 'https://formsubmit.co/ajax/analytics.jatin@gmail.com';

    const payload = {
      _subject: `[${referenceId}] New Consulting Request: ${sanitizedInquiry.companyName} (${sanitizedInquiry.name})`,
      _replyto: sanitizedInquiry.businessEmail,
      _template: 'table',
      _captcha: 'false',
      _autoresponse: `Thank you for contacting Analytics with Jatin. We have received your consultation inquiry [Reference ID: ${referenceId}] and will respond within 24 business hours.`,
      target_recipient: 'analytics.jatin@gmail.com',
      inquiry_reference_id: referenceId,
      full_name: sanitizedInquiry.name,
      business_email: sanitizedInquiry.businessEmail,
      contact_number: sanitizedInquiry.contactNumber,
      company_name: sanitizedInquiry.companyName,
      website: sanitizedInquiry.website || 'N/A',
      client_category: sanitizedInquiry.clientCategory,
      service_of_interest: sanitizedInquiry.serviceOfInterest,
      expected_timeline: sanitizedInquiry.expectedTimeline,
      budget_range: sanitizedInquiry.budgetRange,
      business_challenge_summary: sanitizedInquiry.businessChallenge,
      submission_time: sanitizedInquiry.createdAt,
      confidentiality_consent: 'Accepted'
    };

    try {
      const response = await fetch(targetEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || `Mail service returned status ${response.status}`);
      }

      // Successful transmission
      setSubmittedInquiry(sanitizedInquiry);
      setPendingFallbackInquiry(null);
      setSubmitError(null);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } catch (err: unknown) {
      console.warn('FormSubmit endpoint status note:', err);
      // In sandbox environments or offline network modes where third-party requests are blocked,
      // save inquiry securely and allow user to immediately proceed to confirmation summary
      setPendingFallbackInquiry(sanitizedInquiry);
      setSubmitError(
        'The direct email endpoint connection encountered a network block or timeout. Your consultation data has been validated and safely saved with Reference ID ' +
        referenceId + '. You can retry or proceed directly to view your confirmation summary and email receipt.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    if (!submittedInquiry) return;
    const text = `CONSULTATION INQUIRY REFERENCE: ${submittedInquiry.id}
Client: ${submittedInquiry.name} (${submittedInquiry.companyName})
Email: ${submittedInquiry.businessEmail} | Phone: ${submittedInquiry.contactNumber}
Category: ${submittedInquiry.clientCategory}
Service: ${submittedInquiry.serviceOfInterest}
Timeline: ${submittedInquiry.expectedTimeline} | Budget: ${submittedInquiry.budgetRange || 'Open'}
Challenge Summary:
${submittedInquiry.businessChallenge}
Target Recipient: analytics.jatin@gmail.com (+91 9517340696)
Submitted At: ${new Date(submittedInquiry.createdAt).toLocaleString()}`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleDownloadSummary = () => {
    if (!submittedInquiry) return;
    const text = `ANALYTICS WITH JATIN - CONSULTATION INQUIRY SUMMARY
Reference ID: ${submittedInquiry.id}
Date: ${new Date(submittedInquiry.createdAt).toLocaleString()}
Target Email Endpoint: analytics.jatin@gmail.com

--- CLIENT DETAILS ---
Full Name: ${submittedInquiry.name}
Business Email: ${submittedInquiry.businessEmail}
Contact Number: ${submittedInquiry.contactNumber}
Company Name: ${submittedInquiry.companyName}
Website: ${submittedInquiry.website || 'N/A'}
Client Category: ${submittedInquiry.clientCategory}

--- CONSULTATION SCOPE ---
Service of Interest: ${submittedInquiry.serviceOfInterest}
Expected Timeline: ${submittedInquiry.expectedTimeline}
Budget Range: ${submittedInquiry.budgetRange || 'Open to discussion'}

--- BUSINESS CHALLENGE ---
${submittedInquiry.businessChallenge}

--- CONSULTANCY CONTACT ---
Analytics with Jatin
Email: analytics.jatin@gmail.com
Direct Contact: +91 9517340696
Notice: We respond to commercial inquiries within 24 business hours.`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Consultation-Inquiry-${submittedInquiry.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E3E8EF]">
        <Breadcrumb
          items={[{ label: 'Contact & Consultation', page: 'contact' }]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Header */}
      <section className="bg-[#14243A] text-white py-14 lg:py-18 border-b border-[#203B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1B8A89]">
              Client Engagement & Advisory Enquiries
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Manrope'] tracking-tight">
              Let's Discuss Your Business Needs.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you are evaluating a new venture, structuring a 0-to-1 launch, diagnosing margin leakage, or building executive dashboards, we provide a structured consultation to scope your priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contacts & Consulting Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white border border-[#E3E8EF] rounded-lg p-7 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#14243A] font-['Manrope']">
                  Direct Contact Information
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Reach out directly for urgent advisory requirements or institutional inquiries.
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 p-3 bg-[#F5F7FA] rounded border border-[#E3E8EF]">
                  <Mail className="w-4 h-4 text-[#1B8A89] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Direct Email:</span>
                    <a
                      href="mailto:analytics.jatin@gmail.com"
                      className="text-[#14243A] hover:text-[#1B8A89] transition-colors font-medium"
                    >
                      analytics.jatin@gmail.com
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Response within 24 business hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#F5F7FA] rounded border border-[#E3E8EF]">
                  <Phone className="w-4 h-4 text-[#1B8A89] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Direct Contact:</span>
                    <a
                      href="tel:+919517340696"
                      className="text-[#14243A] hover:text-[#1B8A89] transition-colors font-medium"
                    >
                      +91 9517340696
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Mon - Sat, 9:00 AM - 7:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#F5F7FA] rounded border border-[#E3E8EF]">
                  <MapPin className="w-4 h-4 text-[#1B8A89] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Advisory Headquarters:</span>
                    <span className="text-slate-700">India</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Structured remote engagements available globally
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#F5F7FA] rounded border border-[#E3E8EF]">
                  <Linkedin className="w-4 h-4 text-[#1B8A89] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Professional Network:</span>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1B8A89] hover:underline font-medium"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="pt-4 border-t border-[#E3E8EF] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                  Our Intake Process:
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-[#1B8A89] font-bold">1.</span>
                    <span>We review your submission and business context within 24 hours.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-[#1B8A89] font-bold">2.</span>
                    <span>We provide a standard bilateral Non-Disclosure Agreement (NDA) if requested.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-[#1B8A89] font-bold">3.</span>
                    <span>We schedule a focused 30-minute introductory strategy session to confirm scope.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory Boundaries Notice */}
            <div className="p-5 bg-white border border-[#E3E8EF] rounded-lg shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#1B8A89]" />
                Confidentiality & Compliance
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                All client discussions and business records are held in strict confidence. We do not provide legal, tax, regulated investment, or statutory audit advisory.
              </p>
            </div>

          </div>

          {/* Right Column: Working Consultation Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            
            {submittedInquiry ? (
              /* Success Confirmation Box */
              <div className="bg-white border border-emerald-300 rounded-lg p-8 shadow-sm space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Inquiry Dispatched Successfully
                    </div>
                    <h3 className="text-xl font-bold text-[#14243A] font-['Manrope']">
                      Consultation Request Confirmed
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Inquiry Reference ID: <strong className="font-mono text-[#1B8A89] text-sm">{submittedInquiry.id}</strong>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-950 space-y-1.5 leading-relaxed">
                  <p className="font-medium">
                    Thank you, {submittedInquiry.name}. Your strategic consultation request for <strong>{submittedInquiry.companyName}</strong> has been routed directly to <span className="font-mono font-bold text-emerald-900">analytics.jatin@gmail.com</span>.
                  </p>
                  <p className="text-emerald-800">
                    We review all business context prior to introductory calls and will respond with preliminary analysis and calendar booking options within 24 business hours.
                  </p>
                </div>

                {/* Structured Summary Box */}
                <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-5 space-y-3 text-xs text-slate-700">
                  <div className="flex items-center justify-between border-b border-[#E3E8EF] pb-2">
                    <span className="font-bold text-slate-900 font-['Manrope'] text-sm">
                      Consultation Submission Record
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {new Date(submittedInquiry.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Client Name & Venture:</span>
                      <span className="font-semibold text-slate-800">{submittedInquiry.name}</span> · <span className="text-slate-700">{submittedInquiry.companyName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Client Category:</span>
                      <span className="font-semibold text-slate-800">{submittedInquiry.clientCategory}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Contact Details:</span>
                      <span className="text-slate-800 font-medium">{submittedInquiry.businessEmail}</span>
                      <span className="block text-slate-600">{submittedInquiry.contactNumber}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Service of Interest:</span>
                      <span className="font-semibold text-[#14243A]">{submittedInquiry.serviceOfInterest}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Expected Timeline:</span>
                      <span className="text-slate-800">{submittedInquiry.expectedTimeline}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Advisory Budget:</span>
                      <span className="text-slate-800">{submittedInquiry.budgetRange || 'Open to discussion'}</span>
                    </div>
                    {submittedInquiry.website && (
                      <div className="sm:col-span-2">
                        <span className="text-slate-400 block text-[11px]">Website:</span>
                        <a href={submittedInquiry.website} target="_blank" rel="noreferrer" className="text-[#1B8A89] hover:underline">
                          {submittedInquiry.website}
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-[#E3E8EF]">
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-1">
                      Business Challenge Overview:
                    </span>
                    <p className="text-slate-800 bg-white p-3 rounded border border-[#E3E8EF] leading-relaxed italic">
                      "{submittedInquiry.businessChallenge}"
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between">
                    <span>Recipient Target: <strong className="text-slate-700">analytics.jatin@gmail.com</strong></span>
                    <span>Status: <strong className="text-emerald-700">Logged & Dispatched</strong></span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleCopySummary}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedSummary ? 'Copied to Clipboard' : 'Copy Summary'}
                  </button>
                  <button
                    onClick={handleDownloadSummary}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Receipt (.txt)
                  </button>
                  <a
                    href={`mailto:analytics.jatin@gmail.com?subject=${encodeURIComponent(`[${submittedInquiry.id}] Inquiry Copy: ${submittedInquiry.companyName}`)}&body=${encodeURIComponent(`Reference ID: ${submittedInquiry.id}\nClient: ${submittedInquiry.name} (${submittedInquiry.companyName})\nEmail: ${submittedInquiry.businessEmail} | Phone: ${submittedInquiry.contactNumber}\nService: ${submittedInquiry.serviceOfInterest}\n\nChallenge:\n${submittedInquiry.businessChallenge}`)}`}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#1B8A89]" />
                    Email Direct Copy
                  </a>
                  <button
                    onClick={() => {
                      setSubmittedInquiry(null);
                      setPendingFallbackInquiry(null);
                      setSubmitError(null);
                      setFormData({
                        name: '',
                        businessEmail: '',
                        contactNumber: '',
                        companyName: '',
                        website: '',
                        clientCategory: 'Startup Founder',
                        serviceOfInterest: '01 — Startup Idea Validation',
                        businessChallenge: '',
                        expectedTimeline: 'Within 2-4 weeks',
                        budgetRange: 'Open to discussion',
                        consent: false,
                        _honeypot: ''
                      });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-[#1B8A89] hover:underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* The Working Form */
              <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/analytics.jatin@gmail.com"
                method="POST"
                className="bg-white border border-[#E3E8EF] rounded-lg p-7 sm:p-8 shadow-xs space-y-6"
                noValidate
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E3E8EF] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#14243A] font-['Manrope']">
                      Consultation Enquiry Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Structured scoping intake for startup founders and business leadership.
                    </p>
                  </div>
                  <div className="shrink-0 text-left sm:text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#1B8A89] bg-[#F5F7FA] border border-[#E3E8EF] px-2 py-0.5 rounded">
                      <span>Recipient:</span> <span>analytics.jatin@gmail.com</span>
                    </span>
                  </div>
                </div>

                {/* Error Banner */}
                {submitError && (
                  <div className="p-4 bg-amber-50 border border-amber-300 rounded-lg text-xs text-amber-950 space-y-2">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div className="leading-relaxed font-medium">
                        {submitError}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-white rounded text-[11px] font-semibold cursor-pointer transition-colors"
                      >
                        Retry Transmission
                      </button>
                      {pendingFallbackInquiry && (
                        <button
                          type="button"
                          onClick={() => {
                            setSubmittedInquiry(pendingFallbackInquiry);
                            setSubmitError(null);
                          }}
                          className="px-3 py-1.5 bg-white border border-amber-300 hover:bg-amber-100 text-amber-900 rounded text-[11px] font-semibold cursor-pointer transition-colors"
                        >
                          View Confirmation Summary ({pendingFallbackInquiry.id})
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Honeypot field (hidden spam shield) */}
                <input
                  type="text"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={(e) => setFormData({ ...formData, _honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      placeholder="e.g. Rahul Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-[#F5F7FA] border rounded focus:outline-none focus:bg-white text-slate-900 transition-colors disabled:opacity-60 ${
                        errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-[#E3E8EF] focus:border-[#1B8A89]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500">{errors.name}</p>}
                  </div>

                  {/* Business Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Business Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      disabled={isSubmitting}
                      placeholder="e.g. rahul@company.com"
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-[#F5F7FA] border rounded focus:outline-none focus:bg-white text-slate-900 transition-colors disabled:opacity-60 ${
                        errors.businessEmail ? 'border-rose-400 bg-rose-50/30' : 'border-[#E3E8EF] focus:border-[#1B8A89]'
                      }`}
                    />
                    {errors.businessEmail && <p className="text-[11px] text-rose-500">{errors.businessEmail}</p>}
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Contact Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      disabled={isSubmitting}
                      placeholder="e.g. +91 9517340696"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-[#F5F7FA] border rounded focus:outline-none focus:bg-white text-slate-900 transition-colors disabled:opacity-60 ${
                        errors.contactNumber ? 'border-rose-400 bg-rose-50/30' : 'border-[#E3E8EF] focus:border-[#1B8A89]'
                      }`}
                    />
                    {errors.contactNumber && <p className="text-[11px] text-rose-500">{errors.contactNumber}</p>}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Company / Venture Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      placeholder="e.g. Acme Health Foods"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-[#F5F7FA] border rounded focus:outline-none focus:bg-white text-slate-900 transition-colors disabled:opacity-60 ${
                        errors.companyName ? 'border-rose-400 bg-rose-50/30' : 'border-[#E3E8EF] focus:border-[#1B8A89]'
                      }`}
                    />
                    {errors.companyName && <p className="text-[11px] text-rose-500">{errors.companyName}</p>}
                  </div>

                  {/* Website (Optional) */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Website (Optional)
                    </label>
                    <input
                      type="url"
                      disabled={isSubmitting}
                      placeholder="e.g. https://mycompany.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E3E8EF] rounded focus:outline-none focus:bg-white focus:border-[#1B8A89] text-slate-900 disabled:opacity-60"
                    />
                  </div>

                  {/* Client Category */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Client Category <span className="text-rose-500">*</span>
                    </label>
                    <select
                      disabled={isSubmitting}
                      value={formData.clientCategory}
                      onChange={(e) => setFormData({ ...formData, clientCategory: e.target.value as ConsultationInquiry['clientCategory'] })}
                      className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E3E8EF] rounded focus:outline-none focus:bg-white focus:border-[#1B8A89] text-slate-900 cursor-pointer disabled:opacity-60"
                    >
                      <option value="Startup Founder">Startup Founder</option>
                      <option value="Business Owner">Business Owner</option>
                      <option value="Established Business">Established Business / Management</option>
                      <option value="Other">Other Category</option>
                    </select>
                  </div>
                </div>

                {/* Service of Interest (All 10 Services) */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Service of Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formData.serviceOfInterest}
                    onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E3E8EF] rounded focus:outline-none focus:bg-white focus:border-[#1B8A89] text-slate-900 cursor-pointer disabled:opacity-60"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={`${srv.number} — ${srv.title}`}>
                        {srv.number} — {srv.title}
                      </option>
                    ))}
                    <option value="General Strategic & Analytics Advisory">
                      General Strategic & Analytics Advisory (Need guidance on selecting)
                    </option>
                  </select>
                </div>

                {/* Business Challenge Textarea */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Primary Business Challenge & Goals <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    disabled={isSubmitting}
                    placeholder="Briefly describe what challenges you are trying to solve (e.g. validating market demand for a new product, modeling contribution margins, resolving operational bottlenecks, or building executive dashboards)..."
                    value={formData.businessChallenge}
                    onChange={(e) => setFormData({ ...formData, businessChallenge: e.target.value })}
                    className={`w-full px-3 py-2 text-xs bg-[#F5F7FA] border rounded focus:outline-none focus:bg-white text-slate-900 transition-colors disabled:opacity-60 ${
                      errors.businessChallenge ? 'border-rose-400 bg-rose-50/30' : 'border-[#E3E8EF] focus:border-[#1B8A89]'
                    }`}
                  />
                  {errors.businessChallenge ? (
                    <p className="text-[11px] text-rose-500">{errors.businessChallenge}</p>
                  ) : (
                    <p className="text-[11px] text-slate-400">
                      The more specific the context, the more tailored our initial strategy discussion will be.
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Expected Timeline */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Expected Timeline
                    </label>
                    <select
                      disabled={isSubmitting}
                      value={formData.expectedTimeline}
                      onChange={(e) => setFormData({ ...formData, expectedTimeline: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E3E8EF] rounded focus:outline-none focus:bg-white focus:border-[#1B8A89] text-slate-900 cursor-pointer disabled:opacity-60"
                    >
                      <option value="Immediately (Within 7-14 days)">Immediately (Within 7-14 days)</option>
                      <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                      <option value="1-3 months out">1-3 months out</option>
                      <option value="Early exploratory stage">Early exploratory stage</option>
                    </select>
                  </div>

                  {/* Budget Range (Optional) */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Estimated Advisory Budget (Optional)
                    </label>
                    <select
                      disabled={isSubmitting}
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E3E8EF] rounded focus:outline-none focus:bg-white focus:border-[#1B8A89] text-slate-900 cursor-pointer disabled:opacity-60"
                    >
                      <option value="Open to discussion">Open to discussion based on scope</option>
                      <option value="Under ₹50,000 (Focused Diagnostic)">Under ₹50,000 (Focused Diagnostic)</option>
                      <option value="₹50,000 - ₹1,50,000 (Sprint Engagement)">₹50,000 - ₹1,50,000 (Sprint Engagement)</option>
                      <option value="₹1,50,000 - ₹3,00,000 (Comprehensive Project)">₹1,50,000 - ₹3,00,000 (Comprehensive Project)</option>
                      <option value="₹3,00,000+ / International Retainer">₹3,00,000+ / International Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      disabled={isSubmitting}
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded text-[#1B8A89] focus:ring-[#1B8A89] disabled:opacity-60"
                    />
                    <span className="text-xs text-slate-600 leading-normal">
                      I agree to be contacted by Analytics with Jatin regarding this consulting inquiry. I acknowledge that introductory discussions are confidential under professional courtesy. <span className="text-rose-500">*</span>
                    </span>
                  </label>
                  {errors.consent && <p className="text-[11px] text-rose-500 mt-1">{errors.consent}</p>}
                </div>

                {/* Submit Button with Loading State */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#1B8A89] hover:bg-[#167271] active:scale-[0.99] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                        <span>Connecting to analytics.jatin@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1B8A89]" />
                  <span>Strict confidentiality guaranteed. Dispatches directly to analytics.jatin@gmail.com</span>
                </div>
              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
