'use client';

import React, { useState } from 'react';
import { TopBar } from '../components/common/TopBar';
import { Header } from '../components/common/Header';
import { NavBar } from '../components/common/NavBar';
import { Footer } from '../components/common/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { HealthNeedsRow } from '../components/home/HealthNeedsRow';
import { PromoBanners } from '../components/home/PromoBanners';
import { BestSellers } from '../components/home/BestSellers';
import { TrustFeatures } from '../components/home/TrustFeatures';
import { HealthMagazine } from '../components/home/HealthMagazine';
import { BrandsStrip } from '../components/home/BrandsStrip';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { QuickViewModal } from '../components/home/QuickViewModal';
import { Product } from '../types';

export default function HomePage() {
  const [cartCount, setCartCount] = useState(2);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartCount((prev) => prev + 1);
    setToastMessage(`«${product.title}» به سبد خرید اضافه شد.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FCFDFC]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#145337] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-emerald-500/40 text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1) Top Utility Bar */}
      <TopBar />

      {/* 2) Main Header */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => alert('سبد خرید کانسپت E باز شد.')}
      />

      {/* 3) Navigation Bar */}
      <NavBar />

      {/* 4) Hero Section */}
      <HeroSection />

      {/* 5) Health-Need Category Icon Row */}
      <HealthNeedsRow />

      {/* 6) Promotional Category Banners */}
      <PromoBanners />

      {/* 7) Best-Selling Products Section */}
      <BestSellers
        onAddToCart={handleAddToCart}
        onQuickView={(product) => setQuickViewProduct(product)}
      />

      {/* 8) Trust / Service Features Row */}
      <TrustFeatures />

      {/* 9) Articles / Health Magazine Section */}
      <HealthMagazine />

      {/* 10) Trusted Brands Strip */}
      <BrandsStrip />

      {/* 11) Newsletter Section */}
      <NewsletterSection />

      {/* 12) Footer */}
      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
}
