import React from 'react';
import { articles } from '../../data/mockData';
import { SectionHeader } from '../common/SectionHeader';

export const HealthMagazine: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="دانش سلامت و تغذیه"
          title="مجله سلامت و راهنمای داروسازی"
          subtitle="آموزش‌های علمی و کاربردی برای انتخاب آگاهانه مکمل‌ها، به قلم داروسازان و متخصصان تغذیه"
          actionText="مشاهده تمام مقالات"
          actionHref="/mag"
        />

        {/* 4 Article Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-emerald-300 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Pill */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-[#145337] shadow-xs">
                  {article.category}
                </div>

                {/* Read Time */}
                <div className="absolute bottom-3 left-3 bg-gray-900/70 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] font-medium text-white">
                  {article.readTime}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2.5">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.authorRole}</span>
                </div>

                <h3 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#1F8A5B] transition-colors leading-snug line-clamp-2 mb-2.5">
                  <a href={`/mag/${article.id}`}>
                    {article.title}
                  </a>
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                {/* Author & Read Link */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#1F8A5B] flex items-center justify-center text-xs font-bold">
                      {article.author.charAt(0)}
                    </div>
                    <span className="text-xs text-gray-700 font-medium truncate max-w-[120px]">
                      {article.author}
                    </span>
                  </div>

                  <a
                    href={`/mag/${article.id}`}
                    className="text-xs font-bold text-[#1F8A5B] hover:text-[#166945] inline-flex items-center gap-1 group-hover:-translate-x-1 transition-transform"
                  >
                    <span>مطالعه</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
