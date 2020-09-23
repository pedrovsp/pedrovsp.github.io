import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const Languages = ['en', 'pt']

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      pt: {
          Index: require('../locales/pt/Index.json'),
          Layout: require('../locales/pt/Layout.json'),
          404: require('../locales/pt/404.json'),
          Navbar: require('../locales/pt/Navbar.json')
        },
      en: {
          Index: require('../locales/en/Index.json'),
          Layout: require('../locales/en/Layout.json'),
          404: require('../locales/en/404.json'),
          Navbar: require('../locales/en/Navbar.json')
      }
    },
    fallbackLng: 'en',
    preload: Languages,
    supportedLngs: Languages,
    ns: ["Index", "Layout", "404", "Navbar"],
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true,
    },
  });

i18next.languages = Languages;

export default i18next;