/**
 * 3 sis xclusive | Sylhet — Application Constants
 * JUST FOR WOMEN | 17 Years of Trust in Fashion
 * Authentic Pakistani Designer Fashion & Luxury Ethnic Wear
 * Website: https://3sisxclusivebd.com — https://www.facebook.com/3.sis.xclusive/
 */

// Delivery Charges (BDT)
export const DELIVERY_CHARGE = {
  SYLHET_INSIDE: 80,
  OUTSIDE_SYLHET: 150,
  // Backward compatibility aliases
  DHAKA_INSIDE: 80,
  OUTSIDE_DHAKA: 150,
} as const;

// Order Number Prefix
export const ORDER_PREFIX = "3SIS";

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

// Business Info — 3 sis xclusive
export const BUSINESS = {
  NAME: "3 sis xclusive",
  NAME_SHORT: "3 sis",
  NAME_BN: "থ্রি সিস এক্সক্লুসিভ",
  TAGLINE: "JUST FOR WOMEN",
  TAGLINE_SUB: "17 Years of Trust in Fashion",
  TAGLINE_BN: "জাস্ট ফর উইমেন • ফ্যাশনে ১৭ বছরের বিশ্বস্ততা",
  PHONE: "01674-054386",
  PHONE_INTL: "+880 1674-054386",
  WHATSAPP: "+8801674054386",
  WHATSAPP_LINK: "https://wa.me/8801674054386",
  EMAIL: "info@3sisxclusivebd.com",
  ADDRESS: "Sylhet, Bangladesh",
  ADDRESS_BN: "সিলেট, বাংলাদেশ",
  LOCATION_LANDMARK: "Sylhet Fashion Boutique Zone",
  FACEBOOK: "https://www.facebook.com/3.sis.xclusive/",
  INSTAGRAM: "https://www.facebook.com/3.sis.xclusive/",
  YOUTUBE: "",
  WEBSITE: "https://3sisxclusivebd.com",
  ESTABLISHED: "17 Years of Trust in Fashion",
  FOLLOWERS: "53K+",
  RATING: "5.0 ★",
  RECOMMEND_RATE: "100%",
  OPEN_PARCEL_POLICY: true,
  STORE_HOURS: "Sat–Thu: 10:00 AM – 10:00 PM | Fri: 3:00 PM – 10:00 PM",
  STORE_HOURS_BN: "শনিবার–বৃহস্পতিবার: সকাল ১০:০০ – রাত ১০:০০ | শুক্রবার: বিকাল ৩:০০ – রাত ১০:০০",
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
  THREESIS10: { type: "percent", value: 10, label: "10% off your order" },
  THREESISVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  FESTIVE2026: { type: "percent", value: 15, label: "15% Festive Luxury Special" },
  WELCOME5: { type: "percent", value: 5, label: "5% Welcome Discount" },
  FLAT500: { type: "flat", value: 500, label: "৳500 flat discount" },
  // Backward compatibility aliases
  ENAYA10: { type: "percent", value: 10, label: "10% off your order" },
  STYLE10: { type: "percent", value: 10, label: "10% off your order" },
  STYLE15: { type: "percent", value: 15, label: "15% off your order" },
} as const;

