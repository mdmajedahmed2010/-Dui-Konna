/**
 * Shopping Queen by Orni (Shoppingqueenbyorni) — Application Constants
 * Authentic Pakistani Lawn, Festive Couture & Kim Pearl Skincare
 * Official Facebook: https://www.facebook.com/Shoppingqueenbyorni
 * Hotlines: 01611-467735 / 01935-711304
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
export const ORDER_PREFIX = "SQO";

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
  ALLOWED_TYPES: ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"],
  ALLOWED_EXTENSIONS: [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"],
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

// Business Info — Shopping Queen by Orni
export const BUSINESS = {
  NAME: "Shopping Queen by Orni",
  NAME_SHORT: "Shopping Queen",
  NAME_BN: "শপিং কুইন বাই অর্নি",
  FOUNDER: "Orni Islam",
  FOUNDER_BN: "অর্ণি ইসলাম",
  TAGLINE: "Exclusive Pakistani Suits, Designer Attires & Natural Glow Essentials",
  TAGLINE_SUB: "দেশী-বিদেশী বিভিন্ন ব্র্যান্ডের মেয়েদের সালোয়ার কামিজ ও রূপচর্চা • ১৯০,০০০+ আপুদের ভরসা",
  TAGLINE_BN: "দেশী-বিদেশী বিভিন্ন ব্র্যান্ডের মেয়েদের সালোয়ার কামিজ সুলভ মূল্যে খুচরা ও পাইকারি বিক্রয় করা হয়।",
  MOTTO_BN: "কিছু আত্মবিশ্বাসী প্রতিদিন, রাতের যত্নে প্রাকৃতিক উজ্জ্বলতা ✨",
  PHONE: "01611-467735",
  PHONE_INTL: "+880 1611-467735",
  PHONE_ALT: "01935-711304",
  PHONE_ALT_INTL: "+880 1935-711304",
  WHATSAPP: "+8801611467735",
  WHATSAPP_LINK: "https://wa.me/8801611467735",
  EMAIL: "shoppingqueenbyorni@gmail.com",
  ADDRESS: "House #14, Road #07, Sector #03, Uttara, Dhaka, Bangladesh",
  ADDRESS_BN: "হাউস #১৪, রোড #০৭, সেক্টর #০৩, উত্তরা, ঢাকা, বাংলাদেশ",
  CITY: "Dhaka",
  COUNTRY: "Bangladesh",
  LOCATION_LANDMARK: "Uttara, Dhaka (Nationwide Fast Delivery)",
  FACEBOOK: "https://www.facebook.com/Shoppingqueenbyorni",
  INSTAGRAM: "https://www.instagram.com/Shoppingqueenbyorni",
  TIKTOK: "https://www.tiktok.com/@Shoppingqueenbyorni",
  YOUTUBE: "https://www.youtube.com/@Shoppingqueenbyorni",
  WEBSITE: "https://shoppingqueenbyorni.com",
  ESTABLISHED: "Trusted Women's Fashion & Skincare Brand in Bangladesh",
  FOLLOWERS: "190K+",
  FOLLOWERS_EXACT: "190,561+ Followers",
  RATING: "4.9 ★",
  RECOMMEND_RATE: "99%",
  OPEN_PARCEL_POLICY: true,
  STORE_HOURS: "Saturday – Thursday: 10:00 AM – 11:00 PM | Online 24/7 Hotline",
  STORE_HOURS_BN: "শনি – বৃহস্পতিবার: সকাল ১০:০০ – রাত ১১:০০ | অনলাইন ২৪/৭ হটলাইন ও ইনবক্স সেবা সক্রিয়",
  DELIVERY_CHARGE_INSIDE: 80,
  DELIVERY_CHARGE_OUTSIDE: 150,
  FREE_DELIVERY_MIN_ITEMS: 2,
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
  ORNI10: { type: "percent", value: 10, label: "10% off with Orni Special Promo" },
  QUEENVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  EIDQUEEN: { type: "percent", value: 15, label: "15% Festive Luxury Special" },
  LAWNLOVE: { type: "percent", value: 10, label: "10% Pakistani Lawn Special" },
  GLOW10: { type: "percent", value: 10, label: "10% off Skincare Glow Routine" },
  WELCOME5: { type: "percent", value: 5, label: "5% Welcome Discount" },
  FLAT300: { type: "flat", value: 300, label: "৳300 flat discount on 2+ dresses" },
  // Backward compatibility aliases
  TAZEEN10: { type: "percent", value: 10, label: "10% off your order" },
  TAZEENVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  ASH10: { type: "percent", value: 10, label: "10% off your order" },
  ASPENVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
} as const;
