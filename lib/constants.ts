/**
 * Dui Konna (দুই কন্যা) — Application Constants
 * Exclusive Muslin Sarees, Authentic Dhakai Jamdani & Luxury Ethnic Couture
 * Official Facebook: https://www.facebook.com/duikonna01
 * Showroom: House #21/B, Road #01, Nikunja-2, Khilkhet, Dhaka-1229
 * Hotlines: 01339-364462 / +880 1741-954490
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
export const ORDER_PREFIX = "DK";

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

// Business Info — Dui Konna (দুই কন্যা)
export const BUSINESS = {
  NAME: "Dui Konna",
  NAME_SHORT: "Dui Konna",
  NAME_BN: "দুই কন্যা",
  PROPRIETOR: "Shamima Nasrin",
  PROPRIETOR_BN: "শামীমা নাসরিন",
  FOUNDER: "Shamima Nasrin",
  FOUNDER_BN: "শামীমা নাসরিন",
  TAGLINE: "The Most Unique Collection of Muslin Sarees & Ethnic Luxury Couture",
  TAGLINE_SUB: "বাংলার ঐতিহ্যবাহী ঢাকai মসলিন ও এক্সক্লুসিভ শাড়ি • ৪৮৪,০০০+ আপুদের ভরসা",
  TAGLINE_BN: "আমাদের রয়েছে মসলিন শাড়ির সবচেয়ে অনন্য কালেকশন এবং সেরা মান প্রদানের নিশ্চয়তা।",
  MOTTO_BN: "শতবর্ষের ঐতিহ্য ও রাজকীয় আভিজাত্যে বোনা খাঁটি মসলিন ✨",
  PHONE: "01339-364462",
  PHONE_INTL: "+880 1339-364462",
  PHONE_ALT: "01741-954490",
  PHONE_ALT_INTL: "+880 1741-954490",
  WHATSAPP: "+8801741954490",
  WHATSAPP_LINK: "https://wa.me/8801741954490",
  EMAIL: "shamimanasrin1239@gmail.com",
  ADDRESS: "House #21/B, Road #01, Nikunja-2, Khilkhet, Dhaka-1229, Bangladesh",
  ADDRESS_BN: "হাউস #২১/বি, রোড #০১, নিকুঞ্জ-২, খিলক্ষেত, ঢাকা-১২২৯, বাংলাদেশ",
  CITY: "Dhaka",
  COUNTRY: "Bangladesh",
  LOCATION_LANDMARK: "Nikunja-2, Khilkhet, Dhaka (Near Airport Road)",
  FACEBOOK: "https://www.facebook.com/duikonna01",
  INSTAGRAM: "https://www.instagram.com/duikonna01",
  TIKTOK: "https://www.tiktok.com/@duikonna01",
  YOUTUBE: "https://www.youtube.com/@duikonna01",
  WEBSITE: "https://duikonna.com",
  ESTABLISHED: "Exclusive Muslin Saree & Luxury Ethnic Fashion House in Dhaka",
  FOLLOWERS: "484K+",
  FOLLOWERS_EXACT: "484,200+ Followers",
  RATING: "4.9 ★",
  RECOMMEND_RATE: "99%",
  OPEN_PARCEL_POLICY: true,
  STORE_HOURS: "Everyday: 11:00 AM – 9:00 PM | Online 24/7 Hotline",
  STORE_HOURS_BN: "প্রতিদিন: সকাল ১১:০০ – রাত ৯:০০ | অনলাইন ২৪/৭ হটলাইন ও ইনবক্স সেবা সক্রিয়",
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
  DUIKONNA10: { type: "percent", value: 10, label: "10% off with Dui Konna Special Promo" },
  MUSLINVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount on Muslin Sarees" },
  EIDKONNA: { type: "percent", value: 15, label: "15% Festive Muslin Special" },
  JAMDANI10: { type: "percent", value: 10, label: "10% Dhakai Jamdani Heritage Special" },
  WELCOME5: { type: "percent", value: 5, label: "5% Welcome Discount" },
  FLAT500: { type: "flat", value: 500, label: "৳500 flat discount on 2+ Muslin Sarees" },
  // Backward compatibility aliases
  ORNI10: { type: "percent", value: 10, label: "10% promotional discount" },
  QUEENVIP: { type: "percent", value: 15, label: "15% VIP discount" },
  TAZEEN10: { type: "percent", value: 10, label: "10% off your order" },
  TAZEENVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  ASH10: { type: "percent", value: 10, label: "10% off your order" },
  ASPENVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
} as const;
