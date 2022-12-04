import { nextTick } from "vue";
import { createI18n } from "vue-i18n";
// import messages from './messages.js';
import en from "./locales/en.json";

// const messagesIndex = {
//   en:{
//       buttonLogin: {
//           login: 'Log In',
//           logout: 'Log Out'
//       }
//   },
//   th: {
//       buttonLogin: {
//           login: 'เข้าสู่ระบบ',
//           logout: 'ออกจากระบบ'
//       }
//   }
// };

const DEFAULT_LOCALE = 'en';

export const SUPPORT_LOCALES = ["en", "th"];

export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === "legacy") {
    i18n.global.locale.value = locale;
  } else {
    i18n.global.locale.value = locale;
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector("html").setAttribute("lang", locale);
}

export async function loadLocaleMessages(i18n, locale) {
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `@/i18n/locales/${locale}.json`
  );

  // set locale and locale message
  i18n.setLocaleMessage(locale, messages.default);

  return nextTick();
}

function getDefaultLocale() {

  return DEFAULT_LOCALE;
}

export default createI18n({
  locale: getDefaultLocale(), // defaule local
  legacy: false, // if want to switch to the new Composition API set false
  fallbackLocale: "en",
  globalInjection: true,
  messages: { en },
});
