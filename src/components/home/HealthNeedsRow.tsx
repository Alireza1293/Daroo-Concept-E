import React from 'react';
import { categories } from '../../data/mockData';
import { SectionHeader } from '../common/SectionHeader';

interface HealthNeedsRowProps {
  activeCategory?: string;
  onSelectCategory?: (categoryId: string) => void;
}

export const HealthNeedsRow: React.FC<HealthNeedsRowProps> = ({
  activeCategory = 'all',
  onSelectCategory,
}) => {
  return (
    <section className="py-12 md:py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="مسیرهای سلامتی"
          title="بر اساس نیاز سلامتی خود جستجو کنید"
          subtitle="دسترسی سریع و هوشمند به مکمل‌های دارویی بر پایه علائم و توصیه‌های سلامت"
          actionText="مشاهده تمام دسته‌ها"
          actionHref="#all-categories"
        />

        {/* Categories Grid / Scroll Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className={`group relative flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-50/80 border-[#1F8A5B] shadow-sm ring-2 ring-[#1F8A5B]/10'
                    : 'bg-gray-50/60 hover:bg-white border-gray-100 hover:border-emerald-200/80 hover:shadow-md'
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5 transition-transform duration-200 group-hover:scale-110 shadow-2xs ${
                    cat.colorBg
                  }`}
                >
                  {cat.icon === 'shield' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {cat.icon === 'bone' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11a3 3 0 00-3-3m0 0a3 3 0 00-3 3m3-3v8m0 0a3 3 0 003 3m-3-3a3 3 0 00-3-3m-6-2a3 3 0 00-3-3m0 0a3 3 0 00-3 3m3-3v8m0 0a3 3 0 003 3m-3-3a3 3 0 00-3-3" />
                    </svg>
                  )}
                  {cat.icon === 'sparkles' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                  {cat.icon === 'activity' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {cat.icon === 'moon' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                  {cat.icon === 'heart' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                  {cat.icon === 'user' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                  {cat.icon === 'smile' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {cat.icon === 'droplets' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )}
                  {cat.icon === 'grid' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  )}
                </div>

                {/* Label */}
                <span className="text-xs font-bold text-gray-800 group-hover:text-[#1F8A5B] transition-colors leading-tight mb-1">
                  {cat.title}
                </span>

                {/* Subtitle / Count */}
                <span className="text-[10px] text-gray-400 font-medium">
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
