'use client';

import React from 'react';
import { Product } from '../../types';
import { formatPrice, toPersianDigits } from '../../data/mockData';

interface ProductCardProps {
  product: Product;
  isWishlisted?: boolean;
  onToggleWishlist?: (productId: string) => void;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted = false,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}) => {
  return (
    <article className="group relative bg-white rounded-3xl p-4 sm:p-5 border border-gray-200/80 hover:border-emerald-300 shadow-2xs hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Packshot & Badges Area */}
      <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-b from-gray-50/80 to-white overflow-hidden p-4 mb-4 border border-gray-100 flex items-center justify-center">
        
        {/* Badges Stack (Top Right in RTL) */}
        <div className="absolute top-2.5 right-2.5 z-10 flex flex-col gap-1.5 items-start pointer-events-none">
          {product.badge && (
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs ${
                product.badge_type === 'bestseller'
                  ? 'bg-[#1F8A5B] text-white'
                  : product.badge_type === 'premium'
                  ? 'bg-slate-900 text-white'
                  : 'bg-emerald-100 text-[#145337] border border-emerald-200'
              }`}
            >
              {product.badge}
            </span>
          )}

          {product.discount && (
            <span className="bg-amber-100 text-amber-900 border border-amber-200 font-black text-[10px] px-2 py-0.5 rounded-full">
              {toPersianDigits(product.discount)}٪ تخفیف
            </span>
          )}
        </div>

        {/* Action Icons: Wishlist & QuickView (Top Left in RTL) */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist && onToggleWishlist(product.id);
            }}
            aria-label="افزودن به علاقه‌مندی‌ها"
            className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 shadow-xs ${
              isWishlisted
                ? 'bg-rose-50 text-rose-500 border-rose-200 scale-105'
                : 'bg-white/90 text-gray-400 hover:text-rose-500 hover:bg-rose-50 border-gray-200/80'
            }`}
          >
            <svg
              className="w-4 h-4"
              fill={isWishlisted ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView && onQuickView(product);
            }}
            aria-label="مشاهده مشخصات دارویی"
            className="w-8 h-8 rounded-full bg-white/90 text-gray-500 hover:text-[#1F8A5B] hover:bg-emerald-50 border border-gray-200/80 flex items-center justify-center transition-all duration-200 shadow-xs opacity-0 group-hover:opacity-100 hidden sm:flex"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onClick={() => onQuickView && onQuickView(product)}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300 filter drop-shadow-sm cursor-pointer"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1">
        
        {/* Brand & Origin Line */}
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-[#1F8A5B] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F8A5B]"></span>
            {product.brand}
            <span className="text-[10px] text-gray-400 font-normal">({product.brand_en})</span>
          </span>
          <span className="text-[11px] text-gray-400 font-medium">{product.origin}</span>
        </div>

        {/* Persian Title */}
        <h3
          onClick={() => onQuickView && onQuickView(product)}
          className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#1F8A5B] transition-colors leading-snug line-clamp-2 mb-2 cursor-pointer"
          title={product.title}
        >
          {product.title}
        </h3>

        {/* Dosage / Packaging Spec */}
        <div className="text-[11px] text-gray-500 mb-2.5 flex items-center gap-1.5">
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md font-medium truncate max-w-full">
            {product.spec}
          </span>
        </div>

        {/* Benefit Tag */}
        <p className="text-xs text-[#145337] bg-emerald-50/80 border border-emerald-100 rounded-xl p-2 mb-3.5 line-clamp-2 leading-relaxed flex items-start gap-1.5">
          <svg className="w-3.5 h-3.5 text-[#1F8A5B] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
          <span>{product.benefit}</span>
        </p>

        {/* Rating & Stock */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-1">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold text-gray-800">{toPersianDigits(product.rating)}</span>
            <span className="text-[10px] text-gray-400">({toPersianDigits(product.reviews)})</span>
          </div>

          <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            موجود در داروخانه
          </span>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            {product.old_price && (
              <span className="text-xs text-gray-400 line-through decoration-rose-300">
                {formatPrice(product.old_price)}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-base sm:text-lg font-black text-gray-900 tracking-tight">
                {formatPrice(product.price)}
              </span>
              <span className="text-[11px] text-gray-500 font-medium">تومان</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart && onAddToCart(product)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-[#1F8A5B] text-[#1F8A5B] hover:text-white font-bold text-xs sm:text-sm border border-emerald-200/80 hover:border-transparent transition-all duration-200 shadow-2xs active:scale-95 shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 4v16m8-8H4" />
            </svg>
            <span>خرید</span>
          </button>
        </div>

      </div>
    </article>
  );
};
