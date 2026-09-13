'use client';

import React from 'react';
import { Product } from '../../types';
import { formatPrice, toPersianDigits } from '../../data/mockData';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden text-right animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors"
          aria-label="بستن پنجره"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 p-6 sm:p-8 gap-6">
          {/* Image & TTAC Badge */}
          <div className="flex flex-col items-center justify-center bg-gray-50/80 rounded-2xl p-6 border border-gray-100 relative">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-60 object-contain drop-shadow-md"
            />
            <div className="mt-4 px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-800 text-[11px] font-bold flex items-center gap-1.5 shadow-2xs">
              <svg className="w-3.5 h-3.5 text-[#1F8A5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{product.ttac}</span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-[#1F8A5B] bg-emerald-50 px-2.5 py-0.5 rounded-md">
                  {product.brand} ({product.brand_en})
                </span>
                <span className="text-xs text-gray-400">ساخت {product.origin}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
                {product.title}
              </h3>
              <p className="text-xs text-gray-400 font-sans mb-3" dir="ltr">
                {product.en_title}
              </p>

              <div className="space-y-2 text-xs text-gray-600 mb-4 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <div>
                  <span className="font-bold text-gray-800">مشخصات: </span>
                  <span>{product.spec}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-800">دستور مصرف: </span>
                  <span>{product.dosage}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-800">اثربخشی اصلی: </span>
                  <span className="text-emerald-800 font-medium">{product.benefit}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
              <div>
                {product.old_price && (
                  <span className="text-xs text-gray-400 line-through">
                    {formatPrice(product.old_price)}
                  </span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xs text-gray-500">تومان</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="px-6 py-3 rounded-xl bg-[#1F8A5B] hover:bg-[#166945] text-white font-bold text-sm shadow-md shadow-emerald-700/20 active:scale-95 transition-all"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
