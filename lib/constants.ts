/**
 * Ash and Aspen (ash and aspen) — Application Constants
 * Luxury Pakistani Designer Attires & Ready-to-Wear Pret
 * 100% ORIGINAL PAKISTANI & INDIAN DESIGNER WEAR • LUXURY LAWN, ORGANZA & PRET
 * House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230, Bangladesh
 * Official Facebook: https://www.facebook.com/ashandaspenclothing/
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
export const ORDER_PREFIX = "AA";

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

// Business Info — Ash and Aspen
export const BUSINESS = {
  NAME: "Ash and Aspen",
  NAME_SHORT: "Ash and Aspen",
  NAME_BN: "অ্যাশ অ্যান্ড অ্যাসপেন",
  TAGLINE: "Luxury Pakistani Designer Attires & Ready-to-Wear Pret",
  TAGLINE_SUB: "100% ORIGINAL PAKISTANI & INDIAN DESIGNER WEAR • UTTARA SHOWROOM & ONLINE",
  TAGLINE_BN: "উত্তরা শোরুম ও অনলাইনে ১০০% অরিজিনাল পাকিস্তানি ডিজাইনার পোশাকের নির্ভরযোগ্য ফ্যাশন হাউস",
  PHONE: "01721-396111",
  PHONE_INTL: "+880 1721-396111",
  WHATSAPP: "+8801721396111",
  WHATSAPP_LINK: "https://wa.me/8801721396111",
  EMAIL: "mohonashamima79@gmail.com",
  ADDRESS: "House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230, Bangladesh",
  ADDRESS_BN: "বাড়ি #৭৬, গাউসুল আজম এভিনিউ, সেক্টর #১৩, উত্তরা, ঢাকা - ১২৩০, বাংলাদেশ",
  LOCATION_LANDMARK: "House 76, Gausul Azam Avenue, Sector 13, Uttara, Dhaka",
  FACEBOOK: "https://www.facebook.com/ashandaspenclothing/",
  INSTAGRAM: "https://www.instagram.com/ashandaspenclothing",
  TIKTOK: "https://www.tiktok.com/@ashandaspen",
  YOUTUBE: "",
  WEBSITE: "https://ashandaspen.com",
  ESTABLISHED: "Committed to Customer Satisfaction & Authentic Pakistani Fashion",
  FOLLOWERS: "81K+",
  RATING: "4.9 ★",
  RECOMMEND_RATE: "96%",
  OPEN_PARCEL_POLICY: true,
  STORE_HOURS: "Everyday: 10:30 AM – 10:00 PM | Showroom & Online Support",
  STORE_HOURS_BN: "প্রতিদিন: সকাল ১০:৩০ – রাত ১০:০০ | উত্তরা শোরুম ও অনলাইন ডেলিভারি সক্রিয়",
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
  ASH10: { type: "percent", value: 10, label: "10% off your order" },
  ASPENVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  EIDASH: { type: "percent", value: 15, label: "15% Festive Luxury Special" },
  WELCOME5: { type: "percent", value: 5, label: "5% Welcome Discount" },
  FLAT500: { type: "flat", value: 500, label: "৳500 flat discount" },
  // Backward compatibility aliases
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
