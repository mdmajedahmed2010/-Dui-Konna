/**
 * Enaya's | Sylhet — Application Constants
 * Elevate Your Style | Luxury Women's Boutique & Authentic Pakistani Designer Fashion
 * Nayasarak Point, Sylhet, Bangladesh — https://www.facebook.com/Enayas.Sylhet/
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
export const ORDER_PREFIX = "ENY";

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

// Business Info — Enaya's | Sylhet
export const BUSINESS = {
  NAME: "Enaya's | Sylhet",
  NAME_SHORT: "Enaya's",
  NAME_BN: "এনায়াস সিলেট",
  TAGLINE: "Elevate Your Style",
  TAGLINE_BN: "স্টাইল • ঐতিহ্য • আভিজাত্য",
  PHONE: "01766-568408",
  PHONE_INTL: "+880 1766-568408",
  WHATSAPP: "+8801766568408",
  WHATSAPP_LINK: "https://wa.me/8801766568408",
  EMAIL: "enayas.sylhet@gmail.com",
  ADDRESS: "Parents View (1st Floor), R/A AL-Helal, 20 Nayasarak Point, Sylhet, Bangladesh",
  ADDRESS_BN: "প্যারেন্টস ভিউ (২য় তলা / ১ম ফ্লোর), আর/এ আল-হেলাল, ২০ নয়াসড়ক পয়েন্ট, সিলেট",
  LOCATION_LANDMARK: "Beside Noyashorok Kabab / Nari Shop Building",
  FACEBOOK: "https://www.facebook.com/Enayas.Sylhet/",
  INSTAGRAM: "https://www.instagram.com/enaya_s_/",
  YOUTUBE: "",
  WEBSITE: "https://enayas-sylhet.com",
  ESTABLISHED: "Nayasarak Point, Sylhet",
  FOLLOWERS: "34K+",
  RATING: "5.0 ★",
  RECOMMEND_RATE: "100%",
  OPEN_PARCEL_POLICY: true,
  STORE_HOURS: "Sat–Thu: 10:30 AM – 9:30 PM | Fri: 3:00 PM – 10:00 PM",
  STORE_HOURS_BN: "শনিবার–বৃহস্পতিবার: সকাল ১০:৩০ – রাত ৯:৩০ | শুক্রবার: বিকাল ৩:০০ – রাত ১০:০০",
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
  ENAYA10: { type: "percent", value: 10, label: "10% off your order" },
  ENAYASVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  EID2026: { type: "percent", value: 15, label: "15% Eid Luxury Special" },
  WELCOME5: { type: "percent", value: 5, label: "5% Welcome Discount" },
  FLAT500: { type: "flat", value: 500, label: "৳500 flat discount" },
  // Backward compatibility aliases
  STYLE10: { type: "percent", value: 10, label: "10% off your order" },
  STYLE15: { type: "percent", value: 15, label: "15% off your order" },
} as const;

