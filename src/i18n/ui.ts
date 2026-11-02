/**
 * Translation dictionaries for UI strings (German default, English secondary).
 *
 * Usage:
 *   import { getLangFromUrl, useTranslations } from '../i18n/utils';
 *   const lang = getLangFromUrl(Astro.url);
 *   const t = useTranslations(lang);
 *   t('nav.blog')
 */

export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export const defaultLang = 'de' as const;

export type Lang = keyof typeof languages;

export const ui = {
  de: {
    // Navigation
    'nav.home': 'Start',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',

    // Hero / under construction
    'hero.badge': 'Im Aufbau',
    'hero.title': 'Unsere neue Website entsteht gerade.',
    'hero.description':
      'Wir arbeiten mit Hochdruck an unserem neuen Auftritt. Schauen Sie bald wieder vorbei – in der Zwischenzeit erreichen Sie uns jederzeit per E-Mail.',
    'hero.primaryCta': 'Mehr erfahren',
    'hero.secondaryCta': 'Kontakt aufnehmen',

    // Blog
    'blog.title': 'Neuigkeiten',
    'blog.description': 'Aktuelle Neuigkeiten rund um Olymp Services.',
    'blog.readMore': 'Weiterlesen',
    'blog.backHome': 'Zurück zur Startseite',
    'blog.backToList': 'Alle Beiträge',
    'blog.empty': 'Noch keine Beiträge vorhanden.',

    // Contact page
    'contact.formTitle': 'Nachricht senden',
    'contact.firstName': 'Vorname',
    'contact.lastName': 'Nachname',
    'contact.email': 'E-Mail-Adresse',
    'contact.message': 'Ihre Nachricht',
    'contact.submit': 'Nachricht senden',
    'contact.emailLabel': 'E-Mail',
    'contact.phoneLabel': 'Telefon',
    'contact.hqLabel': 'Standort',
    'contact.mailtoNote':
      'Beim Absenden öffnet sich Ihr E-Mail-Programm mit der vorbereiteten Nachricht.',

    // Footer
    'footer.tagline': 'Unsere Website befindet sich derzeit im Aufbau.',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.copyright': 'Alle Rechte vorbehalten.',

    // Misc
    skipToContent: 'Zum Inhalt springen',
    lastUpdated: 'Zuletzt aktualisiert',
    notFoundTitle: 'Seite nicht gefunden',
    notFoundText: 'Die angeforderte Seite existiert nicht.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Hero / under construction
    'hero.badge': 'Under construction',
    'hero.title': 'Our new website is on its way.',
    'hero.description':
      "We're hard at work on our new online presence. Please check back soon — in the meantime you can always reach us by email.",
    'hero.primaryCta': 'Learn more',
    'hero.secondaryCta': 'Get in touch',

    // Blog
    'blog.title': 'News',
    'blog.description': 'Latest news from Olymp Services.',
    'blog.readMore': 'Read more',
    'blog.backHome': 'Back to home',
    'blog.backToList': 'All posts',
    'blog.empty': 'No posts yet.',

    // Contact page
    'contact.formTitle': 'Send us a message',
    'contact.firstName': 'First name',
    'contact.lastName': 'Last name',
    'contact.email': 'Email address',
    'contact.message': 'Your message',
    'contact.submit': 'Send message',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.hqLabel': 'Location',
    'contact.mailtoNote':
      'Submitting opens your email client with the prepared message.',

    // Footer
    'footer.tagline': 'Our website is currently under construction.',
    'footer.legal': 'Legal',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
    'footer.copyright': 'All rights reserved.',

    // Misc
    skipToContent: 'Skip to main content',
    lastUpdated: 'Last updated',
    notFoundTitle: 'Page not found',
    notFoundText: 'The page you requested does not exist.',
  },
} as const;
