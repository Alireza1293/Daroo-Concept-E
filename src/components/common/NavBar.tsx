'use client';

import React, { useState } from 'react';
import { navItems } from '../../data/mockData';

export const NavBar: React.FC = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <nav className="hidden lg:block bg-[#F8FAF9] border-b border-gray-200/80 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Main Navigation Links */}
          <div className="flex items-center gap-1">
            {/* All Categories Pill Trigger */}
            <div
              className="relative py-2.5"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1F8A5B] text-white font-bold hover:bg-[#166945] transition-colors shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>دسته‌بندی مکمل‌ها</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Dropdown Menu */}
              {megaMenuOpen && (
                <div className="absolute right-0 top-full w-[680px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 border-b border-emerald-100 pb-2 mb-3 text-xs flex items-center gap-2 text-[#1F8A5B]">
                        <span className="w-2 h-2 rounded-full bg-[#1F8A5B]"></span>
                        ویتامین‌ها و املاح
                      </h4>
                      <ul className="space-y-2 text-xs text-gray-600">
                        <li><a href="/category/vitamin-d" className="hover:text-[#1F8A5B] transition-colors block py-0.5">ویتامین D3 و K2</a></li>
                        <li><a href="/category/vitamin-c" className="hover:text-[#1F8A5B] transition-colors block py-0.5">ویتامین C و زینک</a></li>
                        <li><a href="/category/b-complex" className="hover:text-[#1F8A5B] transition-colors block py-0.5">ب-کمپلکس و انرژی</a></li>
                        <li><a href="/category/magnesium" className="hover:text-[#1F8A5B] transition-colors block py-0.5">منیزیم و آرامش عضلات</a></li>
                        <li><a href="/category/calcium" className="hover:text-[#1F8A5B] transition-colors block py-0.5">کلسیم و سلامت استخوان</a></li>
                        <li><a href="/category/iron" className="hover:text-[#1F8A5B] transition-colors block py-0.5">آهن و رفع کم‌خونی</a></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 border-b border-emerald-100 pb-2 mb-3 text-xs flex items-center gap-2 text-[#1F8A5B]">
                        <span className="w-2 h-2 rounded-full bg-[#1F8A5B]"></span>
                        اهداف و نیازهای سلامت
                      </h4>
                      <ul className="space-y-2 text-xs text-gray-600">
                        <li><a href="/needs/immunity" className="hover:text-[#1F8A5B] transition-colors block py-0.5">تقویت سیستم ایمنی</a></li>
                        <li><a href="/needs/skin-hair" className="hover:text-[#1F8A5B] transition-colors block py-0.5">پوست، مو و جوانی (کلاژن)</a></li>
                        <li><a href="/needs/heart" className="hover:text-[#1F8A5B] transition-colors block py-0.5">قلب و عروق (امگا ۳)</a></li>
                        <li><a href="/needs/joints" className="hover:text-[#1F8A5B] transition-colors block py-0.5">مفاصل و غضروف‌سازها</a></li>
                        <li><a href="/needs/sleep" className="hover:text-[#1F8A5B] transition-colors block py-0.5">خواب عمیق و کاهش استرس</a></li>
                        <li><a href="/needs/digestive" className="hover:text-[#1F8A5B] transition-colors block py-0.5">پروبیوتیک و سلامت گوارش</a></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 border-b border-emerald-100 pb-2 mb-3 text-xs flex items-center gap-2 text-[#1F8A5B]">
                        <span className="w-2 h-2 rounded-full bg-[#1F8A5B]"></span>
                        گروه‌های سنی و تخصصی
                      </h4>
                      <ul className="space-y-2 text-xs text-gray-600">
                        <li><a href="/target/women" className="hover:text-[#1F8A5B] transition-colors block py-0.5">مکمل‌های بانوان و بارداری</a></li>
                        <li><a href="/target/men" className="hover:text-[#1F8A5B] transition-colors block py-0.5">مکمل‌های اختصاصی آقایان</a></li>
                        <li><a href="/target/kids" className="hover:text-[#1F8A5B] transition-colors block py-0.5">کودکان و نوجوانان</a></li>
                        <li><a href="/target/seniors" className="hover:text-[#1F8A5B] transition-colors block py-0.5">سالمندان و بالای ۵۰ سال</a></li>
                        <li><a href="/target/diabetic" className="hover:text-[#1F8A5B] transition-colors block py-0.5">فرمول‌های سازگار دیابتی</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Standard Nav Items */}
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="px-3.5 py-3 text-gray-700 hover:text-[#1F8A5B] font-medium transition-colors relative flex items-center gap-1 group"
              >
                <span>{item.title}</span>
                {item.hasDropdown && (
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-[#1F8A5B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Pharmacist Consultation Badge */}
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-gray-600">داروساز آنلاین:</span>
            <a
              href="/consultation"
              className="text-[#1F8A5B] font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>مشاوره رایگان تخصصی</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};
