import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { checkAndApplyLanguage } from "../utils/i18n";
import { languages, GLOBAL_ICON_PATH } from '../utils/constants';

const LanguageSelector = () => {
  
    const { i18n } = useTranslation();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language]);

    const changeLanguage = async (lng) => {
        setLoading(true);
        checkAndApplyLanguage(lng).finally(() => setLoading(false));
    };

    return (

        <div className="relative flex items-center justify-between w-36 hover:opacity-75">

            <svg 
                className="absolute left-1 h-7 w-7 fill-gray-500 pointer-events-none" 
                viewBox="0 0 24 24" 
            >
                <path d={GLOBAL_ICON_PATH}></path>
            </svg>

            <select
                value={i18n.language}
                onChange={e => changeLanguage(e.target.value)}
                className="w-full pl-10 py-[6px] text-gray-700 font-semibold rounded-md appearance-none focus:outline-none cursor-pointer"
                disabled={loading}
            >
                {languages.map((lng) => (
                    <option
                        key={lng.code}
                        value={lng.code}
                        className=" text-gray-700 cursor-pointer"
                    >
                        {lng.lang}
                    </option>
                ))}
            </select>
            
            <span className="absolute right-2 text-black pointer-events-none">&#9660;</span>
            
        </div>

  );
};

export default LanguageSelector;