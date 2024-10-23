import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { signOut } from "firebase/auth";
import UserContext from '../utils/UserContext';
import { auth } from '../utils/firebase';
import { LOGO_URL, SEARCH_PATH, NOTIF_PATH, EMOJI_ICON, MANAGE_PATH, TRANSFER_PATH, ACCOUNT_PATH, HELP_PATH } from '../utils/constants';
import LanguageSelector from './LanguageSelector';

const BrowseHeader = () => {

    const { t } = useTranslation();
    
    const { home, tvshows, movies, newandpopular, mylist, browsebylanguages, bingebaba, manage, transfer, account, help, signout } = t("browseheader")
    
    const { isBingeBaba, setIsBingeBaba } = useContext(UserContext);

    const [showOptions, setShowOptions] = useState(false);

    const handleSignOut = () => {
        
        signOut(auth)

            .then(() => {})

            .catch((error) => {});
    };
    
    return (

        <div className="absolute flex flex-col md:flex-row justify-between w-screen p-0 md:px-10 md:py-2 text-white bg-gradient-to-b from-black z-30">
        
            <div className="flex justify-between flex-col md:flex-row">
                
                <Link to='/browse'>
                    <img
                        className="m-auto md:m-0 w-[125px] h-auto fill-[#e50914] cursor-pointer"
                        style={{ left: '5%' }}
                        src={LOGO_URL}
                        alt="">
                    </img>
                </Link>

                <div className="text-base flex justify-between ml-4 my-1 md:m-3">

                    <div className="mx-2 cursor-pointer" onClick={() => setIsBingeBaba(!isBingeBaba)}>{home}</div>

                    <div className="mx-2 cursor-pointer">{tvshows}</div>

                    <div className="mx-2 cursor-pointer">{movies}</div>

                    <div className="mx-2 cursor-pointer">{newandpopular}</div>

                    <div className="mx-2 cursor-pointer">{mylist}</div>

                    <div className="mx-2 cursor-pointer">{browsebylanguages}</div>

                </div>

            </div>

            <div className="flex items-center justify-between text-sm md:text-base m-3">

                <LanguageSelector/>
                
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mx-3 cursor-pointer"
                    >
                    <path
                        fill-rule="evenodd"
                        d={SEARCH_PATH}
                        fill="currentColor"
                    />
                </svg>

                <div className="flex items-center bg-purple-800 hover:bg-purple-900 mx-3 w-28 px-2 py-1 rounded-md cursor-pointer" onClick={() => setIsBingeBaba(!isBingeBaba)}>{bingebaba}</div>

                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mx-3 cursor-pointer"
                >
                    <path
                        fillRule="evenodd"
                        d={NOTIF_PATH}
                        fill="currentColor"
                    />
                </svg>

                <div

                    onMouseEnter={() => setShowOptions(!showOptions)}
                    onMouseLeave={() => setShowOptions(!showOptions)} 
                    className="px-1">
                    
                    <div className="flex cursor-pointer">
                        
                        <img className="ml-3 w-7 h-7 rounded-full" src={EMOJI_ICON} alt=""></img>

                        {showOptions && <span className="mx-2 py-1 text-sm">&#9650;</span>}
                        {!showOptions && <span className="mx-2 py-1 text-sm">&#9660;</span>}

                    </div>
                    
                    { showOptions && (
                        
                        <div className="absolute top-36 right-[12px] md:top-12 md:right-16 py-3">

                            <div className="absolute right-7 top-0 text-sm text-white">&#9650;</div>

                            <div className=" bg-black bg-opacity-80 mt-2 p-2">

                                <div className="border-b border-gray-500">

                                    <div className="flex m-4 cursor-pointer hover:underline">

                                        <svg width="24" height="24">
                                            <path 
                                                fillRule="evenodd" 
                                                clipRule="evenodd" 
                                                d={MANAGE_PATH} 
                                                fill="rgb(155, 155, 155)"
                                            />
                                        </svg>

                                        <div className="mx-2">{manage}</div>
                                    </div>

                                    <div className="flex m-4 cursor-pointer hover:underline">
                                        
                                        <svg width="24" height="24">
                                            <path 
                                                fillRule="evenodd" 
                                                clipRule="evenodd" 
                                                d={TRANSFER_PATH} 
                                                fill="rgb(155, 155, 155)"
                                            />
                                        </svg>

                                        <div className="mx-2">{transfer}</div>
                                    </div>

                                    <div className="flex m-4 cursor-pointer hover:underline">
                                        
                                        <svg width="24" height="24">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d={ACCOUNT_PATH}
                                                fill="rgb(155, 155, 155)"
                                            />
                                        </svg>

                                        <div className="mx-2">{account}</div>
                                    </div>

                                    <div className="flex m-4 cursor-pointer hover:underline">
                                        
                                        <svg width="24" height="24">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d={HELP_PATH}
                                                fill="rgb(155, 155, 155)"
                                            />
                                        </svg>

                                        <div className="mx-2">{help}</div>
                                    </div>

                                </div>

                                <div className="mx-5 mt-3 cursor-pointer hover:underline" onClick={handleSignOut}>{signout}</div>

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </div>
  )
}

export default BrowseHeader;