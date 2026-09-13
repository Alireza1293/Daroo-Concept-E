'use client';

import React, { useState } from 'react';
import { products } from '../../data/mockData';
import { Product } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { ProductCard } from './ProductCard';

interface BestSellersProps {
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const [wishlist, setWishlist] = useState<string[]>(['mivolis_magnesium']);
  const [activeTab, setActiveTab] = useState<'all' | 'immunity' | 'bones' | 'beauty'>('all');

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'all') return true;
    return p.need === activeTab;
  });

  return (
    <section id="products" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#1F8A5B] border border-emerald-200/60 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F8A5B]"></span>
              مکمل‌های دارای تاییدیه TTAC
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              محصولات پرفروش و برگزیده
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              محبوب‌ترین فرآورده‌های دارویی با بیشترین رضایت بالینی مصرف‌کنندگان و نظارت داروساز
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'all'
                  ? 'bg-[#1F8A5B] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              همه مکمل‌ها
            </button>
            <button
              onClick={() => setActiveTab('immunity')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'immunity'
                  ? 'bg-[#1F8A5B] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              سیستم ایمنی
            </button>
            <button
              onClick={() => setActiveTab('bones')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'bones'
                  ? 'bg-[#1F8A5B] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              مفاصل و استخوان
            </button>
            <button
              onClick={() => setActiveTab('beauty')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'beauty'
                  ? 'bg-[#1F8A5B] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              پوست و زیبایی
            </button>
          </div>
        </div>

        {/* Product Cards Grid: 6-8 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={toggleWishlist}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-300 shadow-2xs hover:shadow-md hover:border-[#1F8A5B] transition-all"
          >
            <span>مشاهده کاتالوگ کامل مکمل‌های دارویی (۳۵۰+ کالا)</span>
            <svg className="w-4 h-4 text-[#1F8A5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};
