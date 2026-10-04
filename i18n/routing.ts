export const locales = ["en", "si", "ta"] as const;
export const defaultLocale = "en" as const;
export type Locale = (typeof locales)[number];
