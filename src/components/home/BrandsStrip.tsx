import React from 'react';
import { brands } from '../../data/mockData';

export const BrandsStrip: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#F8FAF9] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#1F8A5B] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 inline-block mb-2">
            اصالت تضمین‌شده
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            برندهای معتبر، انتخابی مطمئن
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            تامین مستقیم مکمل‌های اورجینال از کمپانی‌های داروسازی پیشرو انگلستان، آلمان و فرانسه
          </p>
        </div>

        {/* Brands Horizontal Row / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={`/brand/${brand.id}`}
              className="bg-white rounded-2xl p-4 border border-gray-200/70 hover:border-emerald-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center group h-28"
              title={`${brand.name} (${brand.nameEn}) - ${brand.description}`}
            >
              <div className="h-10 w-full flex items-center justify-center mb-2 px-2">
                <img
                  src={brand.logo}
                  alt={brand.nameEn}
                  className="max-h-8 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200 opacity-75 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              <span className="text-xs font-bold text-gray-700 group-hover:text-[#1F8A5B] transition-colors leading-none">
                {brand.name}
              </span>
              <span className="text-[10px] text-gray-400 font-mono mt-1" dir="ltr">
                {brand.country}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom Certificate Verification Note */}
        <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
          <span className="flex items-center gap-1.5 font-medium text-emerald-800">
            <svg className="w-4 h-4 text-[#1F8A5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            واردات قانونی با مجوز رسمی سازمان غذا و دارو (IRC)
          </span>
          <span className="text-gray-300 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#1F8A5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            پلمپ شرکتی دست‌نخورده و کد رهگیری یکتا
          </span>
        </div>

      </div>
    </section>
  );
};
