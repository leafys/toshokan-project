import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export const i18nLanguages = [
  {
    locale: 'en',
    nativeName: 'English',
  },
  {
    locale: 'ru',
    nativeName: 'Russian',
  },
];

const supportedLngs = i18nLanguages.map((lng) => lng.locale);

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
  });
