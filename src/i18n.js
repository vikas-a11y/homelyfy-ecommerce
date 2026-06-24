import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import hi from "./locales/hi/common.json";

// 🔥 SAFE localStorage check
const savedLang =
  typeof window !== "undefined"
    ? localStorage.getItem("lang")
    : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  lng: savedLang || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// language change listener
i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});

export default i18n;