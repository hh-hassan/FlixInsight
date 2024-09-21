import { CLOUD_TRANSLATE_API_URL } from "./constants";

const translateText = async (text, targetLanguage) => {
    
    try {

        const response = await fetch(CLOUD_TRANSLATE_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q: text,
                target: targetLanguage,
            }),
        });

        const data = await response.json();

        return data.data.translations[0].translatedText;
    } 
    
    catch (error) {
        return null;
    }
};

export default translateText;