import React from 'react';
import { promoBanners } from '../../data/mockData';

export const PromoBanners: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-[#F8FAF9]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Promotional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {promoBanners.map((banner) => (
            <div
              key={banner.id}
              className={`relative overflow-hidden rounded-3xl p-6 sm:p-7 border ${banner.borderColor} bg-gradient-to-br ${banner.bgGradient} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group`}
            >
              {/* Background ambient glow */}
              <div
                className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full blur-2xl opacity-40 pointer-events-none"
                style={{ backgroundColor: banner.accentColor }}
              />

              {/* Top Meta: Tag & Badge */}
              <div className="flex items-center justify-between mb-4 z-10">
                <span
                  className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white shadow-2xs"
                  style={{ backgroundColor: banner.accentColor }}
                >
                  {banner.tag}
                </span>
                <span className="text-xs font-semibold text-gray-500 bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-gray-100">
                  {banner.badge}
                </span>
              </div>

              {/* Content & Product Image Layout */}
              <div className="flex items-center justify-between gap-4 my-2 z-10">
                <div className="flex-1">
                  <h3 className={`text-lg sm:text-xl font-extrabold ${banner.textColor} leading-snug mb-2`}>
                    {banner.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {banner.subtitle}
                  </p>
                </div>

                {/* Product Thumbnail Packshot */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-white/80 backdrop-blur-xs rounded-2xl p-2 border border-white shadow-sm flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-contain filter drop-shadow-xs"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-5 pt-4 border-t border-gray-200/50 z-10 flex items-center justify-between">
                <a
                  href={banner.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold transition-transform group-hover:-translate-x-1"
                  style={{ color: banner.accentColor }}
                >
                  <span>{banner.ctaText}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
                  </svg>
                </a>

                <span className="text-[11px] text-gray-400 font-medium">
                  مشاهده تنوع فرمولاسیون
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
