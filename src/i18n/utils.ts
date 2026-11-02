/**
 * i18n utility functions (German default, English secondary).
 */

import { ui, defaultLang, type Lang } from './ui';

/**
 * Extract the current language from the URL pathname.
 * Returns 'en' for /en/..., otherwise returns the default ('de').
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Returns a translation function for the given language.
 * Falls back to defaultLang if a key is missing.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)?.[key] ?? ui[defaultLang][key];
  };
}

/**
 * Generate a localized path.
 * - For 'de' (default): returns path as-is (e.g. '/blog')
 * - For 'en': prepends /en (e.g. '/en/blog')
 */
export function getLocalizedPath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path === '/' ? '' : path}`;
}

/**
 * Get both locale variants of the current path for hreflang / language switcher.
 */
export function getAlternateLocales(currentPath: string): { lang: Lang; href: string }[] {
  // Strip any existing /en prefix to get the canonical (German) path
  const cleanPath = currentPath.replace(/^\/en(\/|$)/, '/').replace(/\/$/, '') || '/';
  return [
    { lang: 'de', href: cleanPath },
    { lang: 'en', href: `/en${cleanPath === '/' ? '' : cleanPath}` },
  ];
}
