import React from 'react';
import { PageRoute } from '../types';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  page?: PageRoute;
  slug?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-500">
        <li className="flex items-center gap-1.5">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-[#14243A] transition-colors cursor-pointer text-slate-500 font-medium"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast || !item.page ? (
                <span className="text-[#14243A] font-semibold truncate max-w-[260px] sm:max-w-md">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate(item.page!, item.slug)}
                  className="hover:text-[#14243A] transition-colors cursor-pointer text-slate-500 font-medium"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
