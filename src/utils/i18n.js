import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translateText from "./tranlateText";
import { englishKeys } from "./constants";

const translateAllKeys = async (englishKeys, targetLanguage) => {
    
    const translatedKeys = {};

    for (const key in englishKeys) {
        
        if (typeof englishKeys[key] === 'object')
            translatedKeys[key] = await translateAllKeys(englishKeys[key], targetLanguage);

        else {
            const textToTranslate = (englishKeys[key].includes('{{g}}') || englishKeys[key].includes('{{o}}'))
                ? englishKeys[key]
                : await translateText(englishKeys[key], targetLanguage);

            translatedKeys[key] = textToTranslate;
        }
    }

    return translatedKeys;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: englishKeys
      },
    },
    interpolation: {
        escapeValue: false,
    },
  });

const applyTranslationsForLanguage = async (language) => {
    
    if (language !== 'en') {
        
        const translatedKeys = await translateAllKeys(englishKeys, language);
  
        i18n.addResourceBundle(language, 'translation', translatedKeys, true, true);
  
        return true;
    }

    return language === 'en' || false;
};
  
export const checkAndApplyLanguage = async (language) => {

    const translationsReady = await applyTranslationsForLanguage(language);
    
    if (translationsReady) i18n.changeLanguage(language);
};

checkAndApplyLanguage('en');