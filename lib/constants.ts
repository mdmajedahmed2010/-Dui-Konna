/**
 * 365 Fashion House — Application Constants
 * Pioneer in Authentic Pakistani Attires in Bangladesh
 * 100% ORIGINAL PAKISTANI & INDIAN DESIGNER WEAR • LUXURY LAWN, ORGANZA & PRET
 * Dhaka - 1206, Bangladesh
 * Official Facebook: https://www.facebook.com/365FashionHouse/
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
export const ORDER_PREFIX = "365F";

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

// Business Info — 365 Fashion House
export const BUSINESS = {
  NAME: "365 Fashion House",
  NAME_SHORT: "365 Fashion House",
  NAME_BN: "৩৬৫ ফ্যাশন হাউস",
  TAGLINE: "Pioneer in Authentic Pakistani Attires in Bangladesh",
  TAGLINE_SUB: "100% ORIGINAL PAKISTANI & INDIAN DESIGNER WEAR • LUXURY LAWN, ORGANZA & PRET",
  TAGLINE_BN: "বাংলাদেশে ১০০% অথেনটিক পাকিস্তানি ড্রেসের বিশ্বস্ত ফ্যাশন হাউস",
  PHONE: "01714-404008",
  PHONE_INTL: "+880 1714-404008",
  WHATSAPP: "+8801714404008",
  WHATSAPP_LINK: "https://wa.me/8801714404008",
  EMAIL: "khsajib2015@gmail.com",
  ADDRESS: "Dhaka - 1206, Bangladesh",
  ADDRESS_BN: "ঢাকা - ১২০৬, বাংলাদেশ",
  LOCATION_LANDMARK: "Dhaka 1206, Bangladesh",
  FACEBOOK: "https://www.facebook.com/365FashionHouse/",
  INSTAGRAM: "https://www.instagram.com/365fashionhouse",
  TIKTOK: "https://www.tiktok.com/@365fashionhouse",
  YOUTUBE: "",
  WEBSITE: "https://365fashionhouse.com",
  ESTABLISHED: "Pioneer in Authentic Pakistani Fashion",
  FOLLOWERS: "58K+",
  RATING: "5.0 ★",
  RECOMMEND_RATE: "100%",
  OPEN_PARCEL_POLICY: true,
  STORE_HOURS: "Everyday: 10:00 AM – 10:00 PM | Online Support 24/7",
  STORE_HOURS_BN: "প্রতিদিন: সকাল ১০:০০ – রাত ১০:০০ | অনলাইন সাপোর্ট ২৪/৭ সক্রিয়",
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
  PAKISTANI10: { type: "percent", value: 10, label: "10% off your order" },
  "365VIP": { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  EID365: { type: "percent", value: 15, label: "15% Festive Luxury Special" },
  WELCOME5: { type: "percent", value: 5, label: "5% Welcome Discount" },
  FLAT500: { type: "flat", value: 500, label: "৳500 flat discount" },
  // Backward compatibility aliases
  TANZZ10: { type: "percent", value: 10, label: "10% off your order" },
  TANZZVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  EID2026: { type: "percent", value: 15, label: "15% Festive Luxury Special" },
  THREESIS10: { type: "percent", value: 10, label: "10% off your order" },
  THREESISVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  ENAYA10: { type: "percent", value: 10, label: "10% off your order" },
  STYLE10: { type: "percent", value: 10, label: "10% off your order" },
} as const;
