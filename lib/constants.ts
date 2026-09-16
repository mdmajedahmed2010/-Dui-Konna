/**
 * Closet by Tanzz — Application Constants
 * Wear Tanzz, Wear confidence
 * INTERNATIONAL LUXURY COLLECTION • HIGHEST QUALITY WOMEN'S FASHION
 * Flagship Outlet: Natore Tower, 2nd Floor (Lift-2), Shop 12, Rajlokkhi, Sector 3, Uttara, Dhaka
 * Official Facebook: https://www.facebook.com/Closetbytanzz/
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
export const ORDER_PREFIX = "TANZ";

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

// Business Info — Closet by Tanzz
export const BUSINESS = {
  NAME: "Closet by Tanzz",
  NAME_SHORT: "Closet by Tanzz",
  NAME_BN: "ক্লোজেট বাই তানয",
  TAGLINE: "Wear Tanzz, Wear confidence",
  TAGLINE_SUB: "INTERNATIONAL LUXURY COLLECTION • HIGHEST QUALITY WOMEN'S FASHION",
  TAGLINE_BN: "পরিধান করুন তানয, থাকুন আত্মবিশ্বাসী",
  PHONE: "01610-663812",
  PHONE_INTL: "+880 1610-663812",
  WHATSAPP: "+8801610663812",
  WHATSAPP_LINK: "https://wa.me/8801610663812",
  EMAIL: "closetbytanzz01@gmail.com",
  ADDRESS: "Natore Tower, 2nd Floor (Lift-2), Shop No. 12, Rajlokkhi, Sector 3, Road 2, Uttara, Dhaka - 1230, Bangladesh",
  ADDRESS_BN: "নাটোরে টাওয়ার, লিফট-২ (৩য় তলা), শপ নং ১২, রাজলক্ষ্মী, সেক্টর ৩, রোড ২, উত্তরা, ঢাকা - ১২৩০",
  LOCATION_LANDMARK: "Natore Tower, Rajlokkhi, Uttara Sector 3",
  FACEBOOK: "https://www.facebook.com/Closetbytanzz/",
  INSTAGRAM: "https://www.instagram.com/closetbytanzz",
  TIKTOK: "https://www.tiktok.com/@closet.by.tanzz",
  YOUTUBE: "",
  WEBSITE: "https://closetbytanzz.com",
  ESTABLISHED: "Authentic Luxury Women's Boutique",
  FOLLOWERS: "51K+",
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
  TANZZ10: { type: "percent", value: 10, label: "10% off your order" },
  TANZZVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  EID2026: { type: "percent", value: 15, label: "15% Festive Luxury Special" },
  WELCOME5: { type: "percent", value: 5, label: "5% Welcome Discount" },
  FLAT500: { type: "flat", value: 500, label: "৳500 flat discount" },
  // Backward compatibility aliases
  THREESIS10: { type: "percent", value: 10, label: "10% off your order" },
  THREESISVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  ENAYA10: { type: "percent", value: 10, label: "10% off your order" },
  STYLE10: { type: "percent", value: 10, label: "10% off your order" },
} as const;
