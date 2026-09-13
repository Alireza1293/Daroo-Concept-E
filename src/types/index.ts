export interface Product {
  id: string;
  title: string;
  en_title: string;
  brand: string;
  brand_en: string;
  category: string;
  category_badge: string;
  need: string;
  ingredient: string;
  spec: string;
  benefit: string;
  price: number;
  old_price?: number;
  discount?: number;
  badge?: string;
  badge_type?: 'bestseller' | 'premium' | 'special';
  image: string;
  origin: string;
  dosage: string;
  packaging: string;
  ttac: string;
  rating: number;
  reviews: number;
  in_stock: boolean;
}

export interface CategoryItem {
  id: string;
  title: string;
  icon: string;
  count: string;
  colorBg: string;
  colorText: string;
  colorBorder: string;
}

export interface PromoBanner {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  ctaText: string;
  href: string;
  image: string;
  badge: string;
  bgGradient: string;
  accentColor: string;
  borderColor: string;
  textColor: string;
}

export interface TrustFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  authorRole: string;
}

export interface BrandItem {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  country: string;
  description: string;
}

export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  hasDropdown?: boolean;
}
