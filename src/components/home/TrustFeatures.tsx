import React from 'react';
import { trustFeatures } from '../../data/mockData';

export const TrustFeatures: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#F3FBF6] border-y border-emerald-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Bar */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#1F8A5B] bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200/60 inline-block mb-2">
            استانداردهای سلامت کانسپت E
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            چرا خرید مکمل از کانسپت E امن و مطمئن است؟
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600">
            ما سلامت شما را اولویت قرار داده‌ایم؛ تمام مراحل از تامین تا ارسال با معیارهای دقیق داروسازی کنترل می‌شود.
          </p>
        </div>

        {/* 5 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {trustFeatures.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#1F8A5B] group-hover:bg-[#1F8A5B] group-hover:text-white transition-colors flex items-center justify-center shadow-2xs">
                    {item.icon === 'stethoscope' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    )}
                    {item.icon === 'shield-check' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {item.icon === 'truck' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    )}
                    {item.icon === 'rotate-ccw' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    )}
                    {item.icon === 'thermometer' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                  </div>

                  {item.badge && (
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-sm text-gray-900 mb-1.5 group-hover:text-[#1F8A5B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-[#1F8A5B] font-medium flex items-center gap-1">
                <span>تضمین کانسپت E</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
