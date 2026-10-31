import React from 'react';
import { X, CheckCircle2, AlertTriangle, Layers, Code, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface WordPressNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressNotesModal: React.FC<WordPressNotesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#14243A] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#1B8A89]/20 rounded text-[#1B8A89]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-['Manrope'] text-white">
                WordPress.com Architecture & Gutenberg Compatibility Guide
              </h3>
              <p className="text-xs text-slate-300">
                Specification for Section 13 requirements & theme deployment
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#203B57] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#344054]">
          <div>
            <h4 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B8A89]" />
              1. Gutenberg Block-Based Architecture
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Every section in this application has been designed to translate directly into native WordPress Block Editor (Gutenberg) patterns:
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <span className="font-semibold text-slate-900 block mb-1">Reusable Service Block</span>
                Maps to: <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">core/group</code> with custom CSS classes. Supports title, client challenge list, deliverables repeater, and consultation CTA.
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <span className="font-semibold text-slate-900 block mb-1">13-Point Case Study Template</span>
                Custom Post Type (CPT) or structured Gutenberg template with 13 repeatable section blocks for consistent, unpadded client reporting.
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <span className="font-semibold text-slate-900 block mb-1">Consulting Process Flow</span>
                Maps to: <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">core/columns</code> (4 columns) with numerical indicators and descriptive cards.
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <span className="font-semibold text-slate-900 block mb-1">Global Color Palette (theme.json)</span>
                Primary Navy (#14243A), Secondary (#203B57), Teal Accent (#1B8A89), Background (#F5F7FA), Border (#E3E8EF).
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-5">
            <h4 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              2. WordPress.com Plan Compatibility & Limitations
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-900">
                <span className="font-semibold block mb-0.5">Free / Personal / Premium Plans:</span>
                Supports all core Gutenberg blocks, customized color palettes, standard pages, blog articles, and native contact form blocks (Jetpack Form). <em>Does NOT support custom plugins, custom PHP post types, or external SFTP scripts.</em>
              </div>
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-900">
                <span className="font-semibold block mb-0.5">Creator / Business Plan (Recommended for Custom CPTs):</span>
                Required if installing custom plugins (e.g. Advanced Custom Fields for structured 13-point case study inputs, Custom Post Type UI, or custom Webhook Zapier integrations for lead handling).
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-5">
            <h4 className="text-base font-bold text-[#14243A] font-['Manrope'] mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#1B8A89]" />
              3. Recommended theme.json Color & Typography Tokens
            </h4>
            <pre className="p-3 bg-slate-900 text-slate-100 rounded text-[11px] font-mono overflow-x-auto">
{`{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        { "slug": "navy-primary", "color": "#14243A", "name": "Primary Navy" },
        { "slug": "navy-secondary", "color": "#203B57", "name": "Secondary Navy" },
        { "slug": "teal-accent", "color": "#1B8A89", "name": "Accent Teal" },
        { "slug": "bg-grey", "color": "#F5F7FA", "name": "Background Grey" },
        { "slug": "border-grey", "color": "#E3E8EF", "name": "Border Grey" },
        { "slug": "text-body", "color": "#344054", "name": "Body Text" }
      ]
    },
    "typography": {
      "fontFamilies": [
        { "fontFamily": "'Manrope', sans-serif", "slug": "heading", "name": "Manrope" },
        { "fontFamily": "'Plus Jakarta Sans', sans-serif", "slug": "body", "name": "Plus Jakarta Sans" }
      ]
    }
  }
}`}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#14243A] text-white text-xs font-semibold rounded hover:bg-[#203B57] transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
