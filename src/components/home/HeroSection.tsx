import React from 'react';
import { heroTrustBadges } from '../../data/mockData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F3FBF6] via-white to-[#F8FAF9] pt-8 pb-14 md:py-16 border-b border-gray-100">
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Right Column: Hero Content & CTAs (approx 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-right z-10">
            
            {/* Pharmacy Credibility Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/80 text-[#145337] text-xs font-semibold mb-5 shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1F8A5B]"></span>
              </span>
              <span>داروخانه تخصصی آنلاین مکمل و سلامت کانسپت E</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.25] sm:leading-[1.2] mb-5">
              سلامتی، <span className="text-[#1F8A5B] relative inline-block">
                انتخاب آگاهانه است
                <svg className="absolute -bottom-2 right-0 w-full h-2.5 text-[#1F8A5B]/20 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-7 max-w-lg">
              مجموعه‌ای کامل از مکمل‌های دارویی، ویتامین‌ها و فرآورده‌های سلامت از معتبرترین برندهای جهان، با نظارت مستقیم دکتر داروساز و تضمین اصالت رسمی TTAC.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#1F8A5B] hover:bg-[#166945] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>مشاهده محصولات</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
                </svg>
              </a>

              <a
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-emerald-50/50 text-gray-800 hover:text-[#1F8A5B] font-semibold text-sm sm:text-base border border-gray-200 hover:border-emerald-300 transition-all duration-200 shadow-2xs"
              >
                <svg className="w-5 h-5 text-[#1F8A5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>مشاوره با داروساز</span>
              </a>
            </div>

            {/* Live Stats Row */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-200/70 text-right">
              <div>
                <span className="block text-xl sm:text-2xl font-black text-gray-900" dir="ltr">۳۵۰+</span>
                <span className="text-xs text-gray-500 font-medium">مکمل دارویی فعال</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-gray-900" dir="ltr">۱۰۰٪</span>
                <span className="text-xs text-gray-500 font-medium">ضمانت اصالت TTAC</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-gray-900" dir="ltr">۲۴h</span>
                <span className="text-xs text-gray-500 font-medium">پشتیبانی و ارسال سریع</span>
              </div>
            </div>

          </div>

          {/* Center Column: Packshot Platform Image (approx 4 cols) */}
          <div className="lg:col-span-4 relative flex items-center justify-center">
            
            {/* Visual Pedestal Card */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-gradient-to-b from-white/90 to-emerald-50/40 p-3 shadow-[0_15px_40px_rgba(20,83,55,0.08)] border border-emerald-100/70">
              
              {/* Product Packshot Photo */}
              <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#F3FAF6] to-white flex items-center justify-center">
                <img
                  src="assets/pharma_hero_supplements_1789298795617.jpg"
                  alt="مجموعه مکمل‌های تخصصی و ویتامین‌های اصل در داروخانه کانسپت E"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Badge 1: Authenticity */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-200/80 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1F8A5B]"></span>
                  <span className="text-[11px] font-bold text-gray-800">برندهای بین‌المللی</span>
                </div>

                {/* Floating Badge 2: Pharmacist Verification */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-gray-100 shadow-md flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#1F8A5B] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-900">تاییدیه رسمی داروساز</span>
                    <span className="block text-[9px] text-gray-500">پایش تاریخ مصرف و کیفیت</span>
                  </div>
                </div>

              </div>

              {/* Caption */}
              <div className="mt-2.5 px-2 py-1 flex items-center justify-between text-xs text-gray-500">
                <span className="font-medium text-[#1F8A5B] flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  انبارش استاندارد دارویی GDP
                </span>
                <span className="text-[11px] text-gray-400">بدون دخالت دست</span>
              </div>
            </div>

          </div>

          {/* Left Column (in RTL, 3rd column): Hero Trust Stack (approx 3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              مزیت‌های استاندارد کانسپت E
            </div>

            {heroTrustBadges.map((badge) => (
              <div
                key={badge.id}
                className="bg-white/90 hover:bg-white rounded-2xl p-3.5 border border-gray-200/70 hover:border-emerald-300 shadow-2xs hover:shadow-md transition-all duration-200 flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 group-hover:bg-[#1F8A5B] text-[#1F8A5B] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                  {badge.icon === 'shield-check' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {badge.icon === 'user-check' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                  {badge.icon === 'thermometer' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {badge.icon === 'truck' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#1F8A5B] transition-colors leading-snug">
                    {badge.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed mt-0.5">
                    {badge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
