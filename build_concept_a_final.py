#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Concept A (کانسپت A) Complete Homepage Generator
Produces high-fidelity, production-ready Persian RTL ecommerce homepage.
"""

import json

# Product database with authentic images from assets/products/
products_data = [
    {
        "id": "mivolis_magnesium",
        "title": "قرص منیزیم ۸گانه ۳۷۵ میلی‌گرم دپو میوولیس",
        "en_title": "Mivolis Magnesium 8-Fach Depot 375mg (30 Tablets)",
        "brand": "میوولیس | Mivolis",
        "brand_en": "Mivolis",
        "category": "مواد معدنی",
        "category_badge": "منیزیم ترکیبی",
        "need": "muscle",
        "ingredient": "Magnesium",
        "ingredient_fa": "منیزیم",
        "spec": "۳۰ عدد قرص دپو | آزادسازی دو مرحله‌ای",
        "benefit": "کمک به عملکرد طبیعی عضلات، رفع گرفتگی شبانه و کاهش خستگی عصبی",
        "price": 680000,
        "old_price": 790000,
        "discount": 14,
        "badge": "پرفروش",
        "badge_type": "bestseller",
        "image": "assets/products/mivolis_magnesium_8fach.jpg",
        "origin": "آلمان",
        "dosage": "روزانه ۱ عدد همراه با یک لیوان آب، ترجیحاً عصرها بعد از غذا",
        "packaging": "بسته ۳۰ عددی بلیستر دارویی استاندارد",
        "ttac": "TTAC-948102938102",
        "rating": 4.9,
        "reviews": 42,
        "in_stock": True,
        "audience": ["myself", "women", "men", "over50"]
    },
    {
        "id": "vitabiotics_ultra_d3",
        "title": "قرص اولترا ویتامین D3 دوز ۳۰۰۰ واحد ویتابیوتیکس",
        "en_title": "Vitabiotics Ultra Vitamin D3 3000 IU (96 Tablets)",
        "brand": "ویتابیوتیکس | Vitabiotics",
        "brand_en": "Vitabiotics",
        "category": "ویتامین‌ها",
        "category_badge": "ویتامین D3",
        "need": "immunity",
        "ingredient": "Vitamin D",
        "ingredient_fa": "ویتامین D",
        "spec": "۹۶ عدد قرص | دوز درمانی ۳۰۰۰ واحد",
        "benefit": "تقویت سیستم ایمنی، سلامت استخوان و دندان و حفظ نشاط روزانه",
        "price": 790000,
        "old_price": 890000,
        "discount": 11,
        "badge": "پیشنهاد منتخب",
        "badge_type": "special",
        "image": "assets/products/vitabiotics_ultra_d3_3000.jpg",
        "origin": "انگلستان",
        "dosage": "روزانه ۱ عدد همراه با وعده ناهار برای حداکثر جذب همراه با چربی سالم",
        "packaging": "بسته اقتصادی ۹۶ عددی (دوره مصرف ۳ ماهه)",
        "ttac": "TTAC-182940182391",
        "rating": 4.8,
        "reviews": 56,
        "in_stock": True,
        "audience": ["myself", "women", "men", "over50"]
    },
    {
        "id": "imedeen_time_perfection",
        "title": "قرص ضد پیری و جوانسازی تخصصی تایم پرفکشن ایمدین +۴۰",
        "en_title": "Imedeen Time Perfection Anti-Aging Formula 40+ (120 Tablets)",
        "brand": "ایمدین | IMEDEEN",
        "brand_en": "Imedeen",
        "category": "پوست و مو",
        "category_badge": "کلاژن دریایی",
        "need": "skin_hair",
        "ingredient": "Biotin",
        "ingredient_fa": "کلاژن دریایی و زینک",
        "spec": "۱۲۰ عدد قرص | دوره مصرف ۲ ماهه کامل",
        "benefit": "کاهش خطوط ریز، تحریک کلاژن‌سازی طبیعی درم و ارتقای رطوبت پوست",
        "price": 2950000,
        "old_price": 3350000,
        "discount": 12,
        "badge": "پریمیوم",
        "badge_type": "premium",
        "image": "assets/products/imedeen_time_perfection.jpg",
        "origin": "دانمارک / هالیون انگلستان",
        "dosage": "روزانه ۲ عدد قرص ترجیحاً همراه با وعده غذایی و یک لیوان آب",
        "packaging": "باکس اورجینال ۱۲۰ عددی شرکت هالیون",
        "ttac": "TTAC-748392019482",
        "rating": 5.0,
        "reviews": 89,
        "in_stock": True,
        "audience": ["myself", "women", "over50"]
    },
    {
        "id": "altapharma_omega3",
        "title": "کپسول امگا ۳ روغن ماهی دریایی ۱۰۰۰ میلی‌گرم آلتافارما",
        "en_title": "Altapharma Omega-3 Seefischöl 1000mg (60 Capsules)",
        "brand": "آلتافارما | Altapharma",
        "brand_en": "Altapharma",
        "category": "امگا ۳",
        "category_badge": "روغن ماهی دریایی",
        "need": "heart",
        "ingredient": "Omega 3",
        "ingredient_fa": "امگا ۳",
        "spec": "۶۰ عدد کپسول | غنی از اسیدهای چرب EPA و DHA",
        "benefit": "حمایت از عملکرد طبیعی قلب و عروق و بهبود تمرکز و حافظه",
        "price": 740000,
        "old_price": 850000,
        "discount": 13,
        "badge": "اصالت تضمینی",
        "badge_type": "trust",
        "image": "assets/products/altapharma_omega3.jpg",
        "origin": "آلمان",
        "dosage": "روزانه ۱ تا ۲ کپسول بعد از غذا همراه آب کافی",
        "packaging": "قوطی ۶۰ عددی پلمپ دارویی",
        "ttac": "TTAC-592810394812",
        "rating": 4.7,
        "reviews": 31,
        "in_stock": True,
        "audience": ["myself", "women", "men", "over50"]
    },
    {
        "id": "vitabiotics_osteocare_original",
        "title": "قرص استئوکر اورجینال کلسیم، منیزیم، زینک و D3 ویتابیوتیکس",
        "en_title": "Vitabiotics Osteocare Original Bone Support (30 Tablets)",
        "brand": "ویتابیوتیکس | Vitabiotics",
        "brand_en": "Vitabiotics",
        "category": "استخوان و مفاصل",
        "category_badge": "کلسیم و املاح",
        "need": "bones",
        "ingredient": "Calcium",
        "ingredient_fa": "کلسیم",
        "spec": "۳۰ عدد قرص | فرمولاسیون هم‌افزای املاح",
        "benefit": "پیشگیری از پوکی استخوان، حفظ تراکم بافت اسکلتی و سلامت دندان‌ها",
        "price": 540000,
        "old_price": 620000,
        "discount": 13,
        "badge": "پرفروش",
        "badge_type": "bestseller",
        "image": "assets/products/vitabiotics_osteocare_original.jpg",
        "origin": "انگلستان",
        "dosage": "روزانه ۲ عدد قرص با وعده اصلی غذایی و آب فراوان",
        "packaging": "جعبه ۳۰ عددی دارویی",
        "ttac": "TTAC-384910294817",
        "rating": 4.9,
        "reviews": 64,
        "in_stock": True,
        "audience": ["myself", "women", "men", "over50"]
    },
    {
        "id": "doppelherz_k2_d3",
        "title": "مکمل هم‌افزای ویتامین K2 + D3 دوز ۲۵۰۰ واحد دوپلهرتز سیستم",
        "en_title": "Doppelherz System Vitamin K2 + D3 2500 IU (60 Tablets)",
        "brand": "دوپلهرتز | Doppelherz",
        "brand_en": "Doppelherz",
        "category": "ویتامین‌ها",
        "category_badge": "K2 + D3",
        "need": "bones",
        "ingredient": "Vitamin D",
        "ingredient_fa": "ویتامین D و K2",
        "spec": "۶۰ عدد قرص | فرم فعال مناکینون MK-7",
        "benefit": "هدایت هدفمند کلسیم به بافت استخوان و ممانعت از رسوب در دیواره عروق",
        "price": 1120000,
        "old_price": 1290000,
        "discount": 13,
        "badge": "فرمول پیشرفته",
        "badge_type": "special",
        "image": "assets/products/doppelherz_k2_d3.jpg",
        "origin": "آلمان",
        "dosage": "روزانه ۱ عدد قرص بعد از ناهار همراه آب کافی",
        "packaging": "بسته ۶۰ عددی بلیستر",
        "ttac": "TTAC-491829401823",
        "rating": 4.9,
        "reviews": 43,
        "in_stock": True,
        "audience": ["myself", "women", "men", "over50"]
    },
    {
        "id": "priorin_capsules",
        "title": "کپسول تخصصی ضد ریزش و محرک رشد مو پریورین بایر آلمان",
        "en_title": "Priorin Hair Growth Capsules (120 Capsules) Bayer",
        "brand": "بایر | Bayer",
        "brand_en": "Bayer",
        "category": "پوست و مو",
        "category_badge": "تغذیه فولیکول مو",
        "need": "skin_hair",
        "ingredient": "Biotin",
        "ingredient_fa": "سیستین و ارزن",
        "spec": "۱۲۰ کپسول | دوره درمانی کامل ۳ ماهه",
        "benefit": "تغذیه میکروکراتیتی پیاز مو و افزایش ضخامت و تراکم تارهای مو",
        "price": 3450000,
        "old_price": 3950000,
        "discount": 12,
        "badge": "پرفروش",
        "badge_type": "bestseller",
        "image": "assets/products/priorin_capsules.jpg",
        "origin": "آلمان",
        "dosage": "ماه اول و دوم روزانه ۲ کپسول، ماه سوم ۱ کپسول نگهدارنده",
        "packaging": "بسته ۱۲۰ عددی شرکتی بایر",
        "ttac": "TTAC-948192039182",
        "rating": 4.9,
        "reviews": 105,
        "in_stock": True,
        "audience": ["myself", "women", "men"]
    },
    {
        "id": "vitabiotics_immunace_extra",
        "title": "قرص ایمیونیس اکسترا پروتکشن ویتابیوتیکس تقویت ایمنی",
        "en_title": "Vitabiotics Immunace Extra Protection (30 Tablets)",
        "brand": "ویتابیوتیکس | Vitabiotics",
        "brand_en": "Vitabiotics",
        "category": "سیستم ایمنی",
        "category_badge": "آنتی‌اکسیدان جامع",
        "need": "immunity",
        "ingredient": "Zinc",
        "ingredient_fa": "زینک و سلنیوم",
        "spec": "۳۰ عدد قرص | ۲۸ آنتی‌اکسیدان و کوفاکتور",
        "benefit": "تقویت جامع سد دفاعی بدن در برابر ویروس‌ها و تغییرات آب‌وهوایی",
        "price": 820000,
        "old_price": 950000,
        "discount": 14,
        "badge": "پیشنهاد فصل",
        "badge_type": "special",
        "image": "assets/products/vitabiotics_immunace_extra.jpg",
        "origin": "انگلستان",
        "dosage": "روزانه ۱ قرص همراه با وعده اصلی ناهار یا شام",
        "packaging": "بسته ۳۰ عددی بلیستر",
        "ttac": "TTAC-384918294821",
        "rating": 4.8,
        "reviews": 47,
        "in_stock": True,
        "audience": ["myself", "women", "men", "over50"]
    },
    {
        "id": "mivolis_iron_c_b",
        "title": "قرص آهن + ویتامین C و ویتامین‌های گروه B میوولیس",
        "en_title": "Mivolis Eisen + Vitamin C + B-Vitamine (40 Tablets)",
        "brand": "میوولیس | Mivolis",
        "brand_en": "Mivolis",
        "category": "مواد معدنی",
        "category_badge": "آهن و ویتامین C",
        "need": "energy",
        "ingredient": "Iron",
        "ingredient_fa": "آهن",
        "spec": "۴۰ عدد قرص | جذب بالا بدون عوارض گوارشی",
        "benefit": "کمک به ساخت گلبول‌های قرمز و رفع خستگی مفرط روزانه",
        "price": 490000,
        "old_price": 570000,
        "discount": 14,
        "badge": "تحمل گوارشی عالی",
        "badge_type": "trust",
        "image": "assets/products/mivolis_iron_c_b.jpg",
        "origin": "آلمان",
        "dosage": "روزانه ۱ قرص صبح‌ها همراه آب میوه یا آب فراوان",
        "packaging": "بسته ۴۰ عددی",
        "ttac": "TTAC-294819284912",
        "rating": 4.7,
        "reviews": 34,
        "in_stock": True,
        "audience": ["myself", "women"]
    },
    {
        "id": "vitabiotics_ultra_b_complex",
        "title": "قرص اولترا ب کمپلکس پیشرفته ۸ ویتامین B ویتابیوتیکس",
        "en_title": "Vitabiotics Ultra B-Complex (60 Tablets)",
        "brand": "ویتابیوتیکس | Vitabiotics",
        "brand_en": "Vitabiotics",
        "category": "ویتامین‌ها",
        "category_badge": "ویتامین‌های گروه B",
        "need": "energy",
        "ingredient": "B Complex",
        "ingredient_fa": "ب کمپلکس",
        "spec": "۶۰ عدد قرص | فرمول متوازن ۸ ویتامین B",
        "benefit": "تبدیل غذا به انرژی پایدار سلولی، بهبود تمرکز و کاهش تنش‌های عصبی",
        "price": 690000,
        "old_price": 790000,
        "discount": 12,
        "badge": "پرفروش",
        "badge_type": "bestseller",
        "image": "assets/products/vitabiotics_ultra_b_complex.jpg",
        "origin": "انگلستان",
        "dosage": "روزانه ۱ تا ۲ قرص همراه غذا",
        "packaging": "بسته ۶۰ عددی",
        "ttac": "TTAC-192849102948",
        "rating": 4.8,
        "reviews": 52,
        "in_stock": True,
        "audience": ["myself", "women", "men", "over50"]
    },
    {
        "id": "mivolis_biotin",
        "title": "قرص بیوتین ۵ میلی‌گرم (دوز درمانی ۵۰۰۰ میکروگرم) میوولیس",
        "en_title": "Mivolis Biotin 5mg High Potency (60 Tablets)",
        "brand": "میوولیس | Mivolis",
        "brand_en": "Mivolis",
        "category": "پوست و مو",
        "category_badge": "بیوتین درمانی",
        "need": "skin_hair",
        "ingredient": "Biotin",
        "ingredient_fa": "بیوتین",
        "spec": "۶۰ عدد قرص | دوز درمانی ۵۰۰۰mcg",
        "benefit": "تقویت کراتین طبیعی تارهای مو، درمان پوسته شدن ناخن و شفافیت پوست",
        "price": 520000,
        "old_price": 590000,
        "discount": 11,
        "badge": "دوز تقویتی",
        "badge_type": "trust",
        "image": "assets/products/mivolis_biotin.jpg",
        "origin": "آلمان",
        "dosage": "روزانه ۱ قرص ترجیحاً ناشتا یا قبل از غذا",
        "packaging": "بسته ۶۰ عددی",
        "ttac": "TTAC-849201948192",
        "rating": 4.7,
        "reviews": 41,
        "in_stock": True,
        "audience": ["myself", "women", "men"]
    },
    {
        "id": "vitabiotics_jointace_original",
        "title": "قرص جوینت‌یس اورجینال گلوکوزآمین و کندروئیتین ویتابیوتیکس",
        "en_title": "Vitabiotics Jointace Original Glucosamine & Chondroitin (30 Tablets)",
        "brand": "ویتابیوتیکس | Vitabiotics",
        "brand_en": "Vitabiotics",
        "category": "استخوان و مفاصل",
        "category_badge": "غضروف‌ساز",
        "need": "bones",
        "ingredient": "Calcium",
        "ingredient_fa": "گلوکوزآمین و زنجبیل",
        "spec": "۳۰ عدد قرص | فرمولاسیون محافظت غضروف",
        "benefit": "حفظ انعطاف‌پذیری مفاصل، کاهش خشکی حرکتی صبحگاهی و حمایت غضروفی",
        "price": 890000,
        "old_price": 1020000,
        "discount": 13,
        "badge": "حمایت مفصلی",
        "badge_type": "special",
        "image": "assets/products/vitabiotics_jointace_original.jpg",
        "origin": "انگلستان",
        "dosage": "روزانه ۲ عدد قرص همراه با وعده ناهار",
        "packaging": "جعبه ۳۰ عددی",
        "ttac": "TTAC-491820491823",
        "rating": 4.8,
        "reviews": 55,
        "in_stock": True,
        "audience": ["myself", "over50", "men", "women"]
    },
    {
        "id": "vitabiotics_menopace",
        "title": "قرص منوپیس اورجینال مکمل دوران یائسگی بانوان",
        "en_title": "Vitabiotics Menopace Original (30 Tablets)",
        "brand": "ویتابیوتیکس | Vitabiotics",
        "brand_en": "Vitabiotics",
        "category": "مکمل بانوان",
        "category_badge": "سلامت هورمونی بانوان",
        "need": "daily",
        "ingredient": "Multivitamin",
        "ingredient_fa": "ایزوفلاون سویا و ویتامین‌ها",
        "spec": "۳۰ عدد قرص | ۲۲ ماده مغذی غیرهورمونی",
        "benefit": "تنظیم فعالیت هورمونی، کاهش گرگرفتگی شبانه و بهبود کیفیت خواب",
        "price": 860000,
        "old_price": 980000,
        "discount": 12,
        "badge": "ویژه بانوان ۵۰+",
        "badge_type": "special",
        "image": "assets/products/vitabiotics_menopace.jpg",
        "origin": "انگلستان",
        "dosage": "روزانه ۱ قرص بعد از غذای اصلی",
        "packaging": "بسته ۳۰ عددی",
        "ttac": "TTAC-192840192834",
        "rating": 4.9,
        "reviews": 38,
        "in_stock": True,
        "audience": ["women", "over50"]
    },
    {
        "id": "vitabiotics_pregnacare_bf",
        "title": "مکمل پرگناکر برست‌فیدینگ دوران شیردهی بانوان ویتابیوتیکس",
        "en_title": "Vitabiotics Pregnacare Breast-Feeding (56 Tabs + 28 DHA Caps)",
        "brand": "ویتابیوتیکس | Vitabiotics",
        "brand_en": "Vitabiotics",
        "category": "مکمل بانوان",
        "category_badge": "مادر و نوزاد",
        "need": "daily",
        "ingredient": "Multivitamin",
        "ingredient_fa": "کلسیم، آهن، فولات و DHA",
        "spec": "پک دوگانه ۵۶ قرص + ۲۸ کپسول امگا ۳",
        "benefit": "تأمین جامع نیازهای بدن مادر در دوران شیردهی و ارتقای تکامل نوزاد",
        "price": 1650000,
        "old_price": 1890000,
        "discount": 13,
        "badge": "تخصصی دوران شیردهی",
        "badge_type": "trust",
        "image": "assets/products/vitabiotics_pregnacare_bf.jpg",
        "origin": "انگلستان",
        "dosage": "روزانه ۲ قرص مولتی‌ویتامین و ۱ کپسول امگا ۳ همراه با وعده اصلی",
        "packaging": "باکس ۸۴ عددی کامل",
        "ttac": "TTAC-384910293849",
        "rating": 4.9,
        "reviews": 49,
        "in_stock": True,
        "audience": ["women"]
    },
    {
        "id": "kirkland_fish_oil",
        "title": "سافت‌ژل روغن ماهی غلیظ امگا ۳ کرکلند آمریکا ۱۰۰۰mg",
        "en_title": "Kirkland Signature Fish Oil 1000mg Concentrated (400 Softgels)",
        "brand": "کرکلند | Kirkland",
        "brand_en": "Kirkland",
        "category": "امگا ۳",
        "category_badge": "امگا ۳ تغلیظ‌شده",
        "need": "heart",
        "ingredient": "Omega 3",
        "ingredient_fa": "امگا ۳",
        "spec": "۴۰۰ سافت‌ژل | تصفیه مولکولی بدون جیوه",
        "benefit": "روغن ماهی خالص تصفیه شده جهت ارتقای سلامت عروق کرونر و مفاصل",
        "price": 2850000,
        "old_price": 3250000,
        "discount": 12,
        "badge": "اقتصادی پرفروش",
        "badge_type": "bestseller",
        "image": "assets/products/kirkland_fish_oil.jpg",
        "origin": "آمریکا",
        "dosage": "روزانه ۱ تا ۲ عدد با غذا",
        "packaging": "قوطی غول‌پیکر ۴۰۰ عددی",
        "ttac": "TTAC-748192039182",
        "rating": 4.8,
        "reviews": 118,
        "in_stock": True,
        "audience": ["myself", "men", "women", "over50"]
    },
    {
        "id": "doppelherz_leber_plus",
        "title": "کپسول سم‌زدایی کبد لبر پلاس دوپلهرتز (آرتیشو و خارمریم)",
        "en_title": "Doppelherz System Leber Plus Artischocke + Mariendistel (60 Capsules)",
        "brand": "دوپلهرتز | Doppelherz",
        "brand_en": "Doppelherz",
        "category": "سلامت گوارش",
        "category_badge": "سلامت کبد و صفرا",
        "need": "digestive",
        "ingredient": "Multivitamin",
        "ingredient_fa": "سیلیمارین و کولین",
        "spec": "۶۰ عدد کپسول | کولین و روی دارویی",
        "benefit": "محافظت و پاکسازی سلول‌های کبدی، تسهیل گوارش چربی‌ها و کاهش کبد چرب",
        "price": 1190000,
        "old_price": 1360000,
        "discount": 12,
        "badge": "تخصصی کبد",
        "badge_type": "trust",
        "image": "assets/products/doppelherz_leber_plus.jpg",
        "origin": "آلمان",
        "dosage": "روزانه ۱ کپسول بعد از ناهار یا شام",
        "packaging": "بسته ۶۰ عددی",
        "ttac": "TTAC-192849182736",
        "rating": 4.9,
        "reviews": 41,
        "in_stock": True,
        "audience": ["myself", "men", "women", "over50"]
    },
    {
        "id": "altapharma_az_depot",
        "title": "قرص مولتی‌ویتامین و مینرال A-Z دپو آلتافارما آلمان",
        "en_title": "Altapharma A-Z Depot Multi-Vitamin + Mineralien (100 Tablets)",
        "brand": "آلتافارما | Altapharma",
        "brand_en": "Altapharma",
        "category": "مولتی‌ویتامین",
        "category_badge": "مولتی‌ویتامین روزانه",
        "need": "daily",
        "ingredient": "Multivitamin",
        "ingredient_fa": "۲۴ ویتامین و مینرال کامل",
        "spec": "۱۰۰ عدد قرص | آزادسازی تدریجی در طول شبانه‌روز",
        "benefit": "تأمین ۱۰۰٪ نیاز روزانه به تمام املاح، آهن، زینک، سلنیوم و ویتامین‌ها",
        "price": 890000,
        "old_price": 1050000,
        "discount": 15,
        "badge": "پرفروش",
        "badge_type": "bestseller",
        "image": "assets/products/altapharma_az_depot.jpg",
        "origin": "آلمان",
        "dosage": "روزانه ۱ عدد قرص بعد از صبحانه",
        "packaging": "بسته ۱۰۰ عددی مقرون به‌صرفه",
        "ttac": "TTAC-591829384719",
        "rating": 4.8,
        "reviews": 79,
        "in_stock": True,
        "audience": ["myself", "men", "women", "over50"]
    },
    {
        "id": "tru_niagen",
        "title": "کپسول تقویت انرژی سلولی ترونیوژن NAD+ بوستر آمریکا",
        "en_title": "Tru Niagen NAD+ Booster 300mg Cellular Health (30 Capsules)",
        "brand": "ترونیوژن | Tru Niagen",
        "brand_en": "Tru Niagen",
        "category": "انرژی و خستگی",
        "category_badge": "ارتقای NAD+ سلولی",
        "need": "energy",
        "ingredient": "CoQ10",
        "ingredient_fa": "نیکوتینامید ریبوزید NAD+",
        "spec": "۳۰ کپسول ۳۰۰mg | فرمول انحصاری کرومادکس",
        "benefit": "ارتقای متابولیسم انرژی میتوکندری، ترمیم سلولی و بهبود سرزندگی عمومی",
        "price": 3800000,
        "old_price": 4200000,
        "discount": 10,
        "badge": "فرمول انحصاری",
        "badge_type": "premium",
        "image": "assets/products/tru_niagen.jpg",
        "origin": "آمریکا",
        "dosage": "روزانه ۱ کپسول صبح‌ها با یا بدون غذا",
        "packaging": "قوطی اورجینال ۳۰ عددی",
        "ttac": "TTAC-819203948192",
        "rating": 5.0,
        "reviews": 26,
        "in_stock": True,
        "audience": ["myself", "over50", "men", "women"]
    },
    {
        "id": "ivybears_mens_hair",
        "title": "پاستیل ویتامینی تقویت مو و ریش آقایان آیوی‌برز آلمان",
        "en_title": "IvyBears Men's Hair Vitamins Gummy Bears (60 Gummies)",
        "brand": "آیوی‌برز | IvyBears",
        "brand_en": "IvyBears",
        "category": "مکمل آقایان",
        "category_badge": "پاستیل وگان آقایان",
        "need": "skin_hair",
        "ingredient": "Biotin",
        "ingredient_fa": "بیوتین، زینک و B12",
        "spec": "۶۰ عدد پاستیل خرسی گیاهی (۱۰۰٪ وگان)",
        "benefit": "بدون نیاز به بلع با آب، طعم سیب طبیعی و جلوگیری از ریزش موی آقایان",
        "price": 1420000,
        "old_price": 1620000,
        "discount": 12,
        "badge": "جویدنی میوه‌ای",
        "badge_type": "special",
        "image": "assets/products/ivybears_mens_hair.jpg",
        "origin": "آلمان",
        "dosage": "روزانه ۲ عدد پاستیل جویدنی به عنوان میان‌وعده سالم",
        "packaging": "قوطی ۶۰ عددی وگان",
        "ttac": "TTAC-918293847192",
        "rating": 4.7,
        "reviews": 46,
        "in_stock": True,
        "audience": ["men"]
    },
    {
        "id": "afteravo_multifirst",
        "title": "قرص جوشان مولتی‌ویتامین و مینرال روزانه افترآوو",
        "en_title": "AfterAvo MultiFirst Daily Essential Multivitamin (20 Effervescent)",
        "brand": "افترآوو | AfterAvo",
        "brand_en": "AfterAvo",
        "category": "مولتی‌ویتامین",
        "category_badge": "جوشان روزانه",
        "need": "daily",
        "ingredient": "Multivitamin",
        "ingredient_fa": "ویتامین C، روی و B کمپلکس",
        "spec": "۲۰ عدد قرص جوشان با طعم پرتقالی طبیعی",
        "benefit": "جذب سریع و رفع بی‌حالی اول صبح با تأمین ویتامین‌های پایه و الکترولیت‌ها",
        "price": 290000,
        "old_price": 340000,
        "discount": 15,
        "badge": "جوشان محبوب",
        "badge_type": "trust",
        "image": "assets/products/afteravo_multifirst.jpg",
        "origin": "ایران / تحت لیسانس",
        "dosage": "روزانه ۱ قرص حل‌شده در یک لیوان آب خنک",
        "packaging": "تیوب ۲۰ عددی استاندارد",
        "ttac": "TTAC-102938475819",
        "rating": 4.6,
        "reviews": 61,
        "in_stock": True,
        "audience": ["myself", "men", "women", "kids"]
    },
    {
        "id": "vitabiotics_cardioace",
        "title": "قرص کاردیویس سلامت قلب و عروق با CoQ10 ویتابیوتیکس",
        "en_title": "Vitabiotics Cardioace Heart Support with CoQ10 (30 Tablets)",
        "brand": "ویتابیوتیکس | Vitabiotics",
        "brand_en": "Vitabiotics",
        "category": "مواد معدنی",
        "category_badge": "سلامت قلب و CoQ10",
        "need": "heart",
        "ingredient": "CoQ10",
        "ingredient_fa": "کوآنزیم Q10 و اسیدفولیک",
        "spec": "۳۰ عدد قرص | پشتیبانی جامع سیستم گردش خون",
        "benefit": "تنظیم ریتم طبیعی ماهیچه قلب، ارتجاع دیواره رگ‌ها و محافظت سلولی",
        "price": 920000,
        "old_price": 1050000,
        "discount": 12,
        "badge": "تخصصی قلب",
        "badge_type": "special",
        "image": "assets/products/vitabiotics_cardioace.jpg",
        "origin": "انگلستان",
        "dosage": "روزانه ۱ قرص همراه با وعده ناهار یا شام",
        "packaging": "بسته ۳۰ عددی",
        "ttac": "TTAC-719284910293",
        "rating": 4.8,
        "reviews": 31,
        "in_stock": True,
        "audience": ["myself", "over50", "men", "women"]
    },
    {
        "id": "nourkrin_man",
        "title": "قرص تخصصی نورکرین آقایان با کمپلکس ماریلکس ضد ریزش",
        "en_title": "Nourkrin Man Hair Preservation Formula (60 Tablets)",
        "brand": "نورکرین | Nourkrin",
        "brand_en": "Nourkrin",
        "category": "مکمل آقایان",
        "category_badge": "تخصصی موی آقایان",
        "need": "skin_hair",
        "ingredient": "Biotin",
        "ingredient_fa": "پروتئوگلیکان ماریلکس دریایی",
        "spec": "۶۰ عدد قرص | پشتوانه ۳۰ سال کارآزمایی بالینی",
        "benefit": "بازیابی چرخه طبیعی رشد مو، مقابله با الگوی طاسی مردانه و تقویت ریشه",
        "price": 3200000,
        "old_price": 3650000,
        "discount": 12,
        "badge": "نتایج بالینی",
        "badge_type": "premium",
        "image": "assets/products/nourkrin_man.jpg",
        "origin": "دانمارک",
        "dosage": "روزانه ۲ عدد قرص به مدت حداقل ۶ ماه متوالی",
        "packaging": "جعبه ۶۰ عددی",
        "ttac": "TTAC-849102938471",
        "rating": 4.9,
        "reviews": 39,
        "in_stock": True,
        "audience": ["men"]
    },
    {
        "id": "orthomol_hair_intense",
        "title": "کپسول ارتمول هیر اینتنس ریزمغذی‌های متمرکز مو و ناخن",
        "en_title": "Orthomol Hair Intense Micronutrient Capsules (60 Capsules)",
        "brand": "ارتمول | Orthomol",
        "brand_en": "Orthomol",
        "category": "پوست و مو",
        "category_badge": "ریزمغذی دارویی",
        "need": "skin_hair",
        "ingredient": "Biotin",
        "ingredient_fa": "کراتازین، بیوتین و روی",
        "spec": "۶۰ کپسول | استاندارد داروسازی آلمان",
        "benefit": "تقویت ساختار پروتئینی مو، درخشندگی تارهای مو و استحکام بستر ناخن",
        "price": 2980000,
        "old_price": 3400000,
        "discount": 12,
        "badge": "کیفیت دارویی",
        "badge_type": "premium",
        "image": "assets/products/orthomol_hair_intense.jpg",
        "origin": "آلمان",
        "dosage": "روزانه ۲ کپسول با مایعات کافی هنگام غذا",
        "packaging": "بسته ۶۰ عددی",
        "ttac": "TTAC-581920491823",
        "rating": 4.9,
        "reviews": 32,
        "in_stock": True,
        "audience": ["myself", "women", "men"]
    },
    {
        "id": "abtei_mariendistel_plus",
        "title": "کپسول عصاره خار مریم و کولین ابتی پلاس آلمان",
        "en_title": "Abtei Mariendistel Plus Cholin Leberfunktion (30 Capsules)",
        "brand": "ابتی | Abtei",
        "brand_en": "Abtei",
        "category": "سلامت گوارش",
        "category_badge": "عصاره گیاهی کبد",
        "need": "digestive",
        "ingredient": "Multivitamin",
        "ingredient_fa": "عصاره سیلیمارین و کولین",
        "spec": "۳۰ کپسول گیاهی | بهبود چربی‌های کبدی",
        "benefit": "محافظت طبیعی از بافت کبد در برابر استرس اکسیداتیو و غذاهای سنگین",
        "price": 780000,
        "old_price": 890000,
        "discount": 12,
        "badge": "عصاره طبیعی",
        "badge_type": "trust",
        "image": "assets/products/abtei_mariendistel_plus.jpg",
        "origin": "آلمان",
        "dosage": "روزانه ۱ کپسول همراه با غذا",
        "packaging": "جعبه ۳۰ عددی",
        "ttac": "TTAC-391829401928",
        "rating": 4.8,
        "reviews": 37,
        "in_stock": True,
        "audience": ["myself", "men", "women", "over50"]
    }
]

print(f"Total products configured: {len(products_data)}")

# Helpers
def fa_num(n):
    s = f"{n:,}"
    persian_digits = {'0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴', '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹'}
    for eng, per in persian_digits.items():
        s = s.replace(eng, per)
    return s

products_json = json.dumps(products_data, ensure_ascii=False)

def render_product_card(p, is_bestseller=False):
    disc_badge = ""
    if p.get("discount"):
        disc_badge = f'<span class="bg-[#F4B66A]/20 text-[#1E2D36] border border-[#F4B66A]/50 font-bold text-[11px] px-2 py-0.5 rounded-full">{fa_num(p["discount"])}٪ تخفیف</span>'
    
    badge_html = ""
    if p.get("badge"):
        badge_color = "bg-[#E8F3EE] text-[#125C58] border border-[#125C58]/20"
        if p.get("badge_type") == "bestseller":
            badge_color = "bg-[#125C58] text-white font-medium shadow-xs"
        elif p.get("badge_type") == "premium":
            badge_color = "bg-[#17354A] text-white font-medium shadow-xs"
        elif p.get("badge_type") == "special":
            badge_color = "bg-[#F4B66A] text-[#1E2D36] font-bold shadow-xs"
        badge_html = f'<span class="{badge_color} text-[11px] px-2.5 py-0.5 rounded-full">{p["badge"]}</span>'

    old_price_html = ""
    if p.get("old_price"):
        old_price_html = f'<span class="text-xs text-slate-400 line-through decoration-slate-300 mr-1.5">{fa_num(p["old_price"])}</span>'

    return f'''
    <article class="product-card group relative bg-white rounded-2xl p-4 border border-[#E4E9E7] shadow-[0_4px_20px_rgba(23,53,74,0.03)] hover:shadow-[0_12px_32px_rgba(18,92,88,0.09)] hover:border-[#125C58]/30 transition-all duration-300 flex flex-col justify-between" data-id="{p["id"]}" data-category="{p["category"]}" data-need="{p["need"]}" data-ingredient="{p["ingredient"]}">
      
      <!-- Top Image Area -->
      <div class="relative w-full aspect-square rounded-xl bg-[#F8F9F8] overflow-hidden flex items-center justify-center p-3 mb-3.5 border border-slate-100/80">
        <!-- Badges -->
        <div class="absolute top-2.5 right-2.5 z-10 flex flex-col gap-1.5 items-start pointer-events-none">
          {badge_html}
          {disc_badge}
        </div>

        <!-- Action Icons: Favorite & Quick View -->
        <div class="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
          <button onclick="toggleFavorite('{p["id"]}'); event.stopPropagation();" aria-label="افزودن به علاقه‌مندی‌ها" class="w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-rose-500 hover:scale-110 active:scale-95 transition-all shadow-xs fav-btn-{p["id"]}">
            <svg class="w-4 h-4 heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>
          <button onclick="openQuickView('{p["id"]}'); event.stopPropagation();" aria-label="مشاهده سریع" class="w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-[#125C58] hover:scale-110 active:scale-95 transition-all shadow-xs hidden sm:flex">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          </button>
        </div>

        <!-- Product Packshot Image -->
        <img src="{p["image"]}" alt="{p["title"]}" loading="lazy" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300 filter drop-shadow-sm cursor-pointer" onclick="openQuickView('{p["id"]}')">
      </div>

      <!-- Information Hierarchy -->
      <div class="flex flex-col flex-1">
        <!-- Brand Row -->
        <div class="flex items-center justify-between text-xs mb-1.5">
          <span class="font-medium text-[#125C58] hover:underline cursor-pointer flex items-center gap-1.5" onclick="filterByBrand('{p["brand_en"]}')">
            <span class="w-1.5 h-1.5 rounded-full bg-[#125C58] inline-block"></span>
            {p["brand"]}
          </span>
          <span class="text-[11px] text-[#68767D] font-mono" dir="ltr">{p["origin"]}</span>
        </div>

        <!-- Product Persian Title -->
        <h3 class="font-bold text-[15px] sm:text-[16px] text-[#1E2D36] group-hover:text-[#125C58] transition-colors leading-snug line-clamp-2 mb-2 cursor-pointer" onclick="openQuickView('{p["id"]}')" title="{p["title"]}">
          {p["title"]}
        </h3>

        <!-- Specification Line -->
        <div class="text-[12px] text-[#68767D] mb-2 flex items-center gap-2">
          <span class="bg-[#F3F5F3] px-2.5 py-0.5 rounded-md border border-[#E4E9E7] text-[#1E2D36] font-medium">{p["spec"]}</span>
        </div>

        <!-- Benefit Supporting Tag (only 1 short line) -->
        <p class="text-[12px] text-[#125C58] bg-[#E8F3EE]/80 border border-[#125C58]/15 rounded-lg p-2 mb-3.5 line-clamp-2 leading-relaxed flex items-start gap-1.5">
          <svg class="w-3.5 h-3.5 text-[#125C58] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
          <span>{p["benefit"]}</span>
        </p>

        <!-- Stock State -->
        <div class="flex items-center gap-1.5 text-[11px] text-teal-800 font-medium mb-3">
          <span class="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse"></span>
          <span>موجود در انبار کانسپت A | شناسه رسمی TTAC</span>
        </div>

        <!-- Price and CTA -->
        <div class="mt-auto pt-3 border-t border-[#E4E9E7] flex items-center justify-between gap-2">
          <div class="flex flex-col">
            {old_price_html}
            <div class="flex items-baseline gap-1">
              <span class="font-extrabold text-[17px] text-[#1E2D36] tracking-tight">{fa_num(p["price"])}</span>
              <span class="text-[11px] text-[#68767D] font-medium">تومان</span>
            </div>
          </div>

          <button onclick="addToCart('{p["id"]}');" class="bg-[#125C58] hover:bg-[#0E4A47] active:scale-95 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl transition-all shadow-xs flex items-center gap-1.5 group/btn" aria-label="افزودن {p['title']} به سبد خرید">
            <svg class="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span class="hidden sm:inline">افزودن به سبد</span>
          </button>
        </div>

      </div>

    </article>
    '''

featured_cards = "\n".join([render_product_card(p, False) for p in products_data[:8]])
bestseller_cards = "\n".join([render_product_card(p, True) for p in products_data[4:16]])
print("Rendered cards successfully.")
