import de from "./de.json";
import en from "./en.json";

export type Locale = "de" | "en";
export const defaultLocale: Locale = "de";

const translations: Record<Locale, Record<string, string>> = { de, en };

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations[defaultLocale]?.[key] ?? key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const pathname = url.pathname.replace(base, "");
  if (pathname.startsWith("/en/") || pathname === "/en") {
    return "en";
  }
  return "de";
}

export const routeMap: Record<string, Record<Locale, string>> = {
  "/": { de: "/", en: "/en/" },
  "/leistungen": { de: "/leistungen", en: "/en/services" },
  "/kontakt": { de: "/kontakt", en: "/en/contact" },
  "/impressum": { de: "/impressum", en: "/en/imprint" },
  "/datenschutz": { de: "/datenschutz", en: "/en/privacy" },
  "/haftungsausschluss": { de: "/haftungsausschluss", en: "/en/disclaimer" },
  "/nachricht-gesendet": { de: "/nachricht-gesendet", en: "/en/message-sent" },
  "/en/": { de: "/", en: "/en/" },
  "/en/services": { de: "/leistungen", en: "/en/services" },
  "/en/contact": { de: "/kontakt", en: "/en/contact" },
  "/en/imprint": { de: "/impressum", en: "/en/imprint" },
  "/en/privacy": { de: "/datenschutz", en: "/en/privacy" },
  "/en/disclaimer": { de: "/haftungsausschluss", en: "/en/disclaimer" },
  "/en/message-sent": { de: "/nachricht-gesendet", en: "/en/message-sent" },
};

export function getLocalizedPath(currentPath: string, targetLocale: Locale): string {
  const normalized = currentPath === "/" ? "/" : currentPath.replace(/\/$/, "");
  const mapping = routeMap[normalized];
  if (mapping) {
    return mapping[targetLocale];
  }
  return targetLocale === "en" ? "/en/" : "/";
}
