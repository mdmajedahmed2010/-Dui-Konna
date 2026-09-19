/**
 * Tazeen's (tazeensbd) — Application Constants
 * Smart & Elegant Heritage Sarees & Designer Boutique Wear
 * Pink City Shopping Complex, Gulshan-2 & Sector 11, Uttara, Dhaka, Bangladesh
 * Official Facebook: https://www.facebook.com/tazeensbd/
 */

// Delivery Charges (BDT)
export const DELIVERY_CHARGE = {
  DHAKA_INSIDE: 80,
  OUTSIDE_DHAKA: 150,
  // Backward compatibility aliases
  SYLHET_INSIDE: 80,
  OUTSIDE_SYLHET: 150,
} as const;

// Order Number Prefix
export const ORDER_PREFIX = "TZ";

// Product Status
export const PRODUCT_STATUS = {
  DRAFT: "DRAFT",
  ACTIVE: "ACTIVE",
  OUT_OF_STOCK: "OUT_OF_STOCK",
  ARCHIVED: "ARCHIVED",
} as const;

// Order Status
export const ORDER_STATUS = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  PROCESSING: "PROCESSING",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
  RETURNED: "RETURNED",
  REFUNDED: "REFUNDED",
} as const;

// Payment Methods
export const PAYMENT_METHOD = {
  COD: "COD",
  BKASH: "BKASH",
  NAGAD: "NAGAD",
  SSLCOMMERZ: "SSLCOMMERZ",
} as const;

// Rate Limiting
export const RATE_LIMITS = {
  LOGIN: { requests: 5, window: "15m" },
  REGISTER: { requests: 3, window: "1h" },
  PASSWORD_RESET: { requests: 3, window: "1h" },
  CHECKOUT: { requests: 10, window: "1m" },
  API: { requests: 100, window: "1m" },
  ADMIN: { requests: 50, window: "1m" },
} as const;

// Image Upload Limits
export const UPLOAD_LIMITS = {
  MAX_SIZE_MB: 10,
  MAX_SIZE_BYTES: 10 * 1024 * 1024,
  ALLOWED_TYPES: ["image/jpeg", "image/png", "image/webp", "image/gif"],
  ALLOWED_EXTENSIONS: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
  MAX_DIMENSION: 4000,
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 48,
} as const;

// Session & Auth
export const AUTH = {
  ACCESS_TOKEN_EXPIRY: 15 * 60,
  REFRESH_TOKEN_EXPIRY: 7 * 24 * 60 * 60,
  ADMIN_SESSION_TIMEOUT: 30 * 60,
  BCRYPT_SALT_ROUNDS: 12,
  PASSWORD_RESET_EXPIRY: 60 * 60,
} as const;

// Business Info — Tazeen's
export const BUSINESS = {
  NAME: "Tazeen's",
  NAME_SHORT: "Tazeen's",
  NAME_BN: "তাজিন্স",
  TAGLINE: "Smart & Elegant Heritage Sarees & Boutique Collections",
  TAGLINE_SUB: "EXCLUSIVE SEQUIN SAREES, BRIDAL KATAN & BOUTIQUE 3-PIECE • GULSHAN & UTTARA SHOWROOMS",
  TAGLINE_BN: "স্মার্ট ও এলিগ্যান্ট শাড়ি, ঐতিহ্যবাহী ব্রাইডাল কাতান ও প্রিমিয়াম বুটিক ৩-পিস কালেকশন",
  PHONE: "01790-030434",
  PHONE_INTL: "+880 1790-030434",
  PHONE_ALT: "01773-770042",
  WHATSAPP: "+8801790030434",
  WHATSAPP_LINK: "https://wa.me/8801790030434",
  EMAIL: "tazeens2001@gmail.com",
  ADDRESS: "Shop #55 (1st Floor), Pink City Shopping Complex, Gulshan-2, Dhaka",
  ADDRESS_BN: "দোকান #৫৫ (১ম তলা), পিংক সিটি শপিং কমপ্লেক্স, গুলশান-২, ঢাকা",
  SHOWROOM_GULSHAN: "Shop #55 (1st Floor), Pink City Shopping Complex, Plot 15, Road 103, Gulshan-2, Dhaka",
  SHOWROOM_GULSHAN_BN: "দোকান #৫৫ (১ম তলা), পিংক সিটি শপিং কমপ্লেক্স, প্লট ১৫, রোড ১০৩, গুলশান-২, ঢাকা",
  SHOWROOM_UTTARA: "Fairytale (Tahfeem Fashion), Meena Bazar Building (3rd Floor), Sector 11, Uttara, Dhaka",
  SHOWROOM_UTTARA_BN: "ফেয়ারিটেল (তাহফিম ফ্যাশন), মীনা বাজার বিল্ডিং (৩য় তলা), সেক্টর ১১, উত্তরা, ঢাকা",
  LOCATION_LANDMARK: "Pink City Gulshan-2 & Meena Bazar Building Sector 11 Uttara",
  FACEBOOK: "https://www.facebook.com/tazeensbd/",
  INSTAGRAM: "https://www.instagram.com/tazeensbd",
  TIKTOK: "https://www.tiktok.com/@tazeensbd",
  YOUTUBE: "https://www.youtube.com/@tazeensbd",
  WEBSITE: "https://tazeensbd.com",
  ESTABLISHED: "Smart & Elegant Fashion Heritage at Budget-Friendly Prices",
  FOLLOWERS: "50K+",
  RATING: "4.9 ★",
  RECOMMEND_RATE: "98%",
  OPEN_PARCEL_POLICY: true,
  STORE_HOURS: "Everyday: 10:30 AM – 10:00 PM | Showroom & Online Support",
  STORE_HOURS_BN: "প্রতিদিন: সকাল ১০:৩০ – রাত ১০:০০ | গুলশান ও উত্তরা শোরুম এবং অনলাইন ডেলিভারি সক্রিয়",
  DELIVERY_CHARGE_INSIDE: 80,
  DELIVERY_CHARGE_OUTSIDE: 150,
} as const;

// Currency
export const CURRENCY = {
  CODE: "BDT",
  SYMBOL: "৳",
  LOCALE: "en-BD",
} as const;

// Coupon Codes
export const COUPON_CODES: Record<
  string,
  { type: "percent" | "flat"; value: number; label: string }
> = {
  TAZEEN10: { type: "percent", value: 10, label: "10% off your order" },
  TAZEENVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  EIDTAZEEN: { type: "percent", value: 15, label: "15% Festive Luxury Special" },
  SARILOVE: { type: "percent", value: 10, label: "10% Saree Lovers Special" },
  WELCOME5: { type: "percent", value: 5, label: "5% Welcome Discount" },
  FLAT500: { type: "flat", value: 500, label: "৳500 flat discount" },
  // Backward compatibility aliases
  ASH10: { type: "percent", value: 10, label: "10% off your order" },
  ASPENVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  EIDASH: { type: "percent", value: 15, label: "15% Festive Luxury Special" },
  PAKISTANI10: { type: "percent", value: 10, label: "10% off your order" },
  "365VIP": { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  EID365: { type: "percent", value: 15, label: "15% Festive Luxury Special" },
  TANZZ10: { type: "percent", value: 10, label: "10% off your order" },
  TANZZVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  EID2026: { type: "percent", value: 15, label: "15% Festive Luxury Special" },
  THREESIS10: { type: "percent", value: 10, label: "10% off your order" },
  THREESISVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  ENAYA10: { type: "percent", value: 10, label: "10% off your order" },
  STYLE10: { type: "percent", value: 10, label: "10% off your order" },
} as const;
