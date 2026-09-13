import React from 'react';
import { footerLinks } from '../../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8FAF9] text-gray-700 border-t border-gray-200/80 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Banner inside Footer */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-2xs mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#1F8A5B] flex items-center justify-center shrink-0 shadow-2xs border border-emerald-100">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                پاسخگویی و مشاوره تخصصی سلامت کانسپت E
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                تیم دکتر داروساز و مشاوران تغذیه در تمام ساعات کاری آماده پاسخ به پرسش‌های دارویی شما هستند.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:02188990022"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#1F8A5B] hover:bg-[#166945] text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-700/20 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>تماس مستقیم: ۰۲۱-۸۸۹۹۰۰۲۲</span>
            </a>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-gray-200">
          
          {/* Col 1: About & Info (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1F8A5B] to-[#145337] flex items-center justify-center text-white shadow-md shadow-emerald-700/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold text-gray-900 tracking-tight">کانسپت <span className="text-[#1F8A5B]">E</span></span>
                <span className="block text-[11px] text-gray-500 font-medium">داروخانه تخصصی مکمل‌های سلامت</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
              {footerLinks.about.description}
            </p>

            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1F8A5B] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{footerLinks.about.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#1F8A5B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{footerLinks.about.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Categories (2.5 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 text-sm mb-4 pb-2 border-b border-gray-200/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F8A5B]"></span>
              دسته‌بندی‌های مکمل
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              {footerLinks.categories.map((c, i) => (
                <li key={i}>
                  <a href={c.href} className="hover:text-[#1F8A5B] transition-colors flex items-center gap-1.5">
                    <span className="text-gray-300">›</span>
                    <span>{c.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Customer Services (2.5 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-sm mb-4 pb-2 border-b border-gray-200/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F8A5B]"></span>
              خدمات مشتریان
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              {footerLinks.services.map((s, i) => (
                <li key={i}>
                  <a href={s.href} className="hover:text-[#1F8A5B] transition-colors flex items-center gap-1.5">
                    <span className="text-gray-300">›</span>
                    <span>{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Regulatory Certifications & Trust Badges (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 text-sm mb-4 pb-2 border-b border-gray-200/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F8A5B]"></span>
              مجوزها و تاییدیه‌های قانونی
            </h4>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              فعالیت کانسپت E دارای کلیه تاییدیه‌های نظارتی بهداشت و پروانه رسمی داروخانه است.
            </p>

            {/* Regulatory Badges Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-white p-2.5 rounded-2xl border border-gray-200 flex flex-col items-center text-center shadow-2xs hover:border-emerald-300 transition-colors">
                <img src="assets/logos/ttac.svg" alt="سازمان غذا و دارو TTAC" className="h-10 w-full object-contain mb-1" />
                <span className="text-[10px] font-bold text-gray-700">سامانه TTAC</span>
              </div>

              <div className="bg-white p-2.5 rounded-2xl border border-gray-200 flex flex-col items-center text-center shadow-2xs hover:border-emerald-300 transition-colors">
                <img src="assets/logos/sib-salamat.svg" alt="نشان سیب سلامت" className="h-10 w-full object-contain mb-1" />
                <span className="text-[10px] font-bold text-gray-700">سیب سلامت</span>
              </div>

              <div className="bg-white p-2.5 rounded-2xl border border-gray-200 flex flex-col items-center text-center shadow-2xs hover:border-emerald-300 transition-colors">
                <img src="assets/logos/pharmacy-license.svg" alt="پروانه تاسیس داروخانه" className="h-10 w-full object-contain mb-1" />
                <span className="text-[10px] font-bold text-gray-700">پروانه داروخانه</span>
              </div>

              <div className="bg-white p-2.5 rounded-2xl border border-gray-200 flex flex-col items-center text-center shadow-2xs hover:border-emerald-300 transition-colors">
                <img src="assets/logos/enamad.svg" alt="اینماد اعتماد الکترونیکی" className="h-10 w-full object-contain mb-1" />
                <span className="text-[10px] font-bold text-gray-700">نماد اعتماد الکترونیکی</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Medical Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-center md:text-right leading-relaxed">
            تمامی حقوق مادی و معنوی این وب‌سایت برای <strong className="text-gray-800">کانسپت E</strong> محفوظ است. فرآورده‌های این سامانه مکمل تغذیه‌ای بوده و جهت تشخیص، درمان یا پیشگیری از بیماری نیستند.
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <a href="/privacy" className="hover:text-[#1F8A5B] transition-colors">حریم خصوصی</a>
            <span>•</span>
            <a href="/terms" className="hover:text-[#1F8A5B] transition-colors">شرایط و قوانین</a>
            <span>•</span>
            <a href="/sitemap" className="hover:text-[#1F8A5B] transition-colors">نقشه سایت</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
