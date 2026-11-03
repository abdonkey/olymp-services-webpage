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
    'nav.menu': 'Menü',
    'nav.services': 'Leistungen',
    'nav.servicesItem': 'Unsere Leistungen',
    'nav.servicesItemDesc': 'Hosting, Serverinfrastruktur & KI.',
    'nav.caseStudies': 'Case Studies',
    'nav.caseStudiesDesc': 'Erfolgsgeschichten aus unseren Projekten.',
    'nav.resources': 'Ressourcen',
    'nav.blogDesc': 'Neuigkeiten und Einblicke.',
    'nav.cta': 'Kontakt aufnehmen',
    'nav.about': 'Über uns',

    // About page
    'about.title': 'Über uns',
    'about.subtitle': 'Managed Infrastruktur, damit Sie sich auf Ihr Geschäft konzentrieren können.',
    'about.missionTitle': 'Unsere Mission',
    'about.missionText':
      'Wir führen Organisationen zu professionell betriebener Managed Infrastruktur. Hosting, Server und KI-Umgebungen liegen bei uns in verlässlichen Händen – damit sich unsere Kunden voll auf ihr Kerngeschäft und ihre eigenen Kunden konzentrieren können.',
    'about.portalsTitle': 'Schlanke, nutzerzentrierte Portale',
    'about.portalsText':
      'Wir entwickeln schlanke, nutzerzentrierte Portale, die den Zugang zu datengetriebenen Anwendungen einfach machen. Klare Oberflächen und kurze Wege bringen Daten dorthin, wo Entscheidungen getroffen werden.',

    // Case studies
    'caseStudies.title': 'Case Studies',
    'caseStudies.description':
      'Einblicke in unsere Projekte – von sicherer Infrastruktur bis zu geschützten KI-Umgebungen.',
    'caseStudies.clientLabel': 'Kunde',
    'caseStudies.industryLabel': 'Branche',
    'caseStudies.backToList': 'Alle Case Studies',
    'caseStudies.empty': 'Noch keine Case Studies vorhanden.',

    // Hero
    'hero.badge': 'Website im Aufbau',
    'hero.titleStart': 'Managed Infrastruktur für',
    'hero.titleHighlight': 'Web und KI',
    'hero.description':
      'Wir managen die Infrastruktur Ihrer Web-Anwendungen, betreiben Ihre eigene Serverlandschaft und schaffen sichere Umgebungen für agentische Workflows.',
    'hero.primaryCta': 'Kontakt aufnehmen',
    'hero.secondaryCta': 'Unsere Leistungen',

    // Blog
    'blog.title': 'Neuigkeiten',
    'blog.description': 'Aktuelle Neuigkeiten rund um Olymp Services.',
    'blog.readMore': 'Weiterlesen',
    'blog.backHome': 'Zurück zur Startseite',
    'blog.backToList': 'Alle Beiträge',
    'blog.empty': 'Noch keine Beiträge vorhanden.',

    // Trusted by
    'trustedBy.title': 'Im Einsatz bei innovativen Anwendungen',

    // Services
    'services.title': 'Unsere Leistungen',
    'services.subtitle': 'Was wir für Sie tun können – von der Website bis zur KI-Infrastruktur.',

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
    'footer.navigation': 'Seitenübersicht',
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
    'nav.menu': 'Menu',
    'nav.services': 'Services',
    'nav.servicesItem': 'Our Services',
    'nav.servicesItemDesc': 'Hosting, server infrastructure & AI.',
    'nav.caseStudies': 'Case Studies',
    'nav.caseStudiesDesc': 'Success stories from our projects.',
    'nav.resources': 'Resources',
    'nav.blogDesc': 'News and insights.',
    'nav.cta': 'Get in touch',
    'nav.about': 'About',

    // About page
    'about.title': 'About Us',
    'about.subtitle': 'Managed infrastructure, so you can focus on your business.',
    'about.missionTitle': 'Our Mission',
    'about.missionText':
      'We lead organisations to professionally managed infrastructure. Hosting, servers and AI environments are in reliable hands with us — so our customers can focus entirely on their core business and the people they serve.',
    'about.portalsTitle': 'Lean, user-centric portals',
    'about.portalsText':
      'We build lean, user-centric portals that make data-driven applications easy to access. Clear interfaces and short paths bring data to where decisions are made.',

    // Case studies
    'caseStudies.title': 'Case Studies',
    'caseStudies.description':
      'Insights into our projects — from secure infrastructure to protected AI environments.',
    'caseStudies.clientLabel': 'Client',
    'caseStudies.industryLabel': 'Industry',
    'caseStudies.backToList': 'All case studies',
    'caseStudies.empty': 'No case studies yet.',

    // Hero
    'hero.badge': 'Website under construction',
    'hero.titleStart': 'Managed infrastructure for',
    'hero.titleHighlight': 'web and AI',
    'hero.description':
      'We manage your web application infrastructure, operate your own server landscape and build secure environments for agentic workflows.',
    'hero.primaryCta': 'Get in touch',
    'hero.secondaryCta': 'Our services',

    // Blog
    'blog.title': 'News',
    'blog.description': 'Latest news from Olymp Services.',
    'blog.readMore': 'Read more',
    'blog.backHome': 'Back to home',
    'blog.backToList': 'All posts',
    'blog.empty': 'No posts yet.',

    // Trusted by
    'trustedBy.title': 'Trusted by innovative applications',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'What we can do for you — from websites to AI infrastructure.',

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
    'footer.navigation': 'Site map',
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
