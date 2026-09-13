'use client';

import React, { useState } from 'react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Green Rounded Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#EAF7F0] via-[#F3FBF6] to-[#E2F3E9] p-8 sm:p-12 md:p-14 border border-emerald-200/80 shadow-sm">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#1F8A5B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            
            {/* Icon */}
            <div className="w-12 h-12 rounded-2xl bg-white text-[#1F8A5B] flex items-center justify-center mx-auto mb-4 shadow-sm border border-emerald-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
              عضو خبرنامه تخصصی سلامت شوید
            </h2>

            {/* Subtext */}
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg mx-auto">
              از تخفیف‌های ویژه، موجود شدن مکمل‌های کمیاب و آخرین یافته‌های علمی داروسازی زودتر از دیگران باخبر شوید.
            </p>

            {/* Form */}
            {submitted ? (
              <div className="mt-8 p-4 rounded-2xl bg-white/90 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center justify-center gap-2 shadow-xs animate-in fade-in">
                <svg className="w-5 h-5 text-[#1F8A5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>سپاس! عضویت شما در خبرنامه کانسپت E با موفقیت ثبت شد.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-2.5 max-w-md mx-auto">
                <div className="relative w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ایمیل خود را وارد کنید..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-200/80 text-gray-900 text-xs sm:text-sm placeholder-gray-400 focus:outline-hidden focus:border-[#1F8A5B] focus:ring-2 focus:ring-[#1F8A5B]/20 shadow-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#1F8A5B] hover:bg-[#166945] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-emerald-700/20 shrink-0 active:scale-95"
                >
                  عضویت در خبرنامه
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#1F8A5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                بدون ارسال هرزنامه
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#1F8A5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                حفظ کامل حریم خصوصی
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
