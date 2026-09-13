'use client';

import React, { useState } from 'react';
import { categories, toPersianDigits } from '../../data/mockData';

interface HeaderProps {
  cartCount?: number;
  wishlistCount?: number;
  onOpenCart?: () => void;
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount = 2,
  wishlistCount = 1,
  onOpenCart,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('همه دسته‌ها');
  const [catMenuOpen, setCatMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-xs backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* Right: Brand Logo & Tagline */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label="منوی اصلی"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <a href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1F8A5B] to-[#145337] flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                {/* Pharmacy Cross / Leaf Icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
                  <circle cx="12" cy="12" r="3" className="text-emerald-300" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">کانسپت <span className="text-[#1F8A5B]">E</span></span>
                  <span className="text-[10px] bg-emerald-100 text-[#145337] font-bold px-1.5 py-0.5 rounded-sm">داروخانه</span>
                </div>
                <span className="text-[11px] sm:text-xs text-gray-500 font-medium hidden sm:inline">
                  مکمل‌های معتبر، زندگی سالم‌تر
                </span>
              </div>
            </a>
          </div>

          {/* Center: Search Bar with Category Trigger */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <form onSubmit={handleSearchSubmit} className="w-full flex items-center bg-gray-50 hover:bg-gray-100/80 focus-within:bg-white border border-gray-200 focus-within:border-[#1F8A5B] focus-within:ring-2 focus-within:ring-[#1F8A5B]/20 rounded-full transition-all duration-200 pl-1.5 pr-2 py-1">
              
              {/* Category Dropdown Trigger */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCatMenuOpen(!catMenuOpen)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200/80 rounded-full hover:bg-gray-50 transition-colors shrink-0 shadow-2xs"
                >
                  <span className="max-w-[100px] truncate">{selectedCat}</span>
                  <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform ${catMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {catMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-1 text-[11px] font-bold text-gray-400 border-b border-gray-100 mb-1">
                      دسته‌بندی‌ها
                    </div>
                    <button
                      type="button"
                      onClick={() => { setSelectedCat('همه دسته‌ها'); setCatMenuOpen(false); }}
                      className="w-full text-right px-3.5 py-1.5 text-xs text-gray-700 hover:bg-emerald-50 hover:text-[#1F8A5B] transition-colors"
                    >
                      همه دسته‌ها
                    </button>
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => { setSelectedCat(c.title); setCatMenuOpen(false); }}
                        className="w-full text-right px-3.5 py-1.5 text-xs text-gray-700 hover:bg-emerald-50 hover:text-[#1F8A5B] transition-colors flex items-center justify-between"
                      >
                        <span>{c.title}</span>
                        <span className="text-[10px] text-gray-400">{c.count}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجوی محصول، برند یا نیاز سلامتی (مانند منیزیم، ویتامین D3)..."
                className="w-full bg-transparent border-0 px-3 py-1.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-hidden focus:ring-0"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-9 h-9 rounded-full bg-[#1F8A5B] hover:bg-[#166945] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-95"
                aria-label="جستجو"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Left: User Actions (Login, Wishlist, Cart) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Wishlist Shortcut */}
            <a
              href="/wishlist"
              className="relative p-2.5 rounded-xl text-gray-600 hover:text-[#1F8A5B] hover:bg-emerald-50/60 transition-all"
              aria-label="علاقه‌مندی‌ها"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute 1 top-1 left-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {toPersianDigits(wishlistCount)}
                </span>
              )}
            </a>

            {/* Account / Login */}
            <a
              href="/account/login"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4 text-[#1F8A5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>ورود / ثبت‌نام</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#1F8A5B] hover:bg-[#166945] rounded-xl transition-all shadow-md shadow-emerald-700/20 active:scale-95"
              aria-label="سبد خرید"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="hidden sm:inline">سبد خرید</span>
              <span className="bg-white/20 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full">
                {toPersianDigits(cartCount)}
              </span>
            </button>

          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 focus-within:border-[#1F8A5B] focus-within:bg-white transition-all">
            <svg className="w-4 h-4 text-gray-400 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجوی مکمل، برند یا ویتامین..."
              className="w-full bg-transparent border-0 text-xs text-gray-800 placeholder-gray-400 focus:outline-hidden"
            />
          </form>
        </div>
      </div>
    </header>
  );
};
