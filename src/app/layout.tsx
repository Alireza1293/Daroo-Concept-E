import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'کانسپت E | داروخانه تخصصی آنلاین مکمل‌های سلامت و ویتامین',
  description:
    'مرجع رسمی و تخصصی عرضه مکمل‌های دارویی، ویتامین‌ها و املاح معدنی از معتبرترین برندهای جهانی با تضمین اصالت TTAC و نظارت مستقیم دکتر داروساز.',
  keywords: [
    'مکمل غذایی',
    'ویتامین D3',
    'امگا ۳',
    'منیزیم',
    'داروخانه آنلاین',
    'کلاژن',
    'کانسپت E',
    'تقویت سیستم ایمنی',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FCFDFC] text-gray-800 font-sans antialiased min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
