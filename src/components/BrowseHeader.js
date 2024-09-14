import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { BG_IMG_URL, LOGO_URL, SEARCH_PATH, NOTIF_PATH, EMOJI_ICON, MANAGE_ICON, TRANSFER_ICON, ACCOUNT_ICON, HELP_ICON } from '../utils/constants';

const BrowseHeader = () => {
  
    const navigate = useNavigate();

    const [showOptions, setShowOptions] = useState(false);

    const handleSignOut = () => {
        
        signOut(auth)

            .then(() => {
                console.log("Sign-out successful.");
            })

            .catch((error) => {
                console.log("An error happened.");
            });
    };
    
    return (
    
    <div>

        <img 
            className="fixed top-0 left-0 w-screen h-screen object-cover -z-10 brightness-[40%]" 
            src={BG_IMG_URL} 
            alt="">
        </img>

        <div className="flex justify-between px-10 py-2 text-white bg-gradient-to-b from-black">
        
            <div className="flex justify-between">
                
                <Link to='/browse'>
                    <img
                        className="w-[125px] h-auto fill-[#e50914] cursor-pointer"
                        src={LOGO_URL}
                        alt="">
                    </img>
                </Link>

                <div className="flex justify-between m-3">

                    <div className="mx-2 cursor-pointer" onClick={() => navigate('/browse')}>Home</div>

                    <div className="mx-2 cursor-pointer">TV Shows</div>

                    <div className="mx-2 cursor-pointer">Movies</div>

                    <div className="mx-2 cursor-pointer">New & Popular</div>

                    <div className="mx-2 cursor-pointer">My list</div>

                    <div className="mx-2 cursor-pointer">Browse by Languages</div>

                </div>

            </div>
            
            <div className="flex justify-between m-3">

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

                <div className="mx-3 cursor-pointer">Children</div>

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
                        
                        <div className="absolute top-12 right-16 py-3">

                            <div className="absolute right-7 top-0 text-sm text-white">&#9650;</div>

                            <div className=" bg-black bg-opacity-80 mt-2 p-5">

                                <div className="border-b border-gray-500">

                                    <div className="flex m-2 cursor-pointer hover:underline">
                                        <img className="w-6 h-6 m-1 rounded-sm" src={MANAGE_ICON} alt=""></img>
                                        <div className="m-1">Manage Profiles</div>
                                    </div>

                                    <div className="flex m-2 cursor-pointer hover:underline">
                                        <img className="w-6 h-6 m-1 rounded-sm" src={TRANSFER_ICON} alt=""></img>
                                        <div className="m-1">Transfer Profile</div>
                                    </div>

                                    <div className="flex m-2 cursor-pointer hover:underline">
                                        <img className="w-6 h-6 m-1 rounded-full" src={ACCOUNT_ICON} alt=""></img>
                                        <div className="m-1">Account</div>
                                    </div>

                                    <div className="flex m-2 cursor-pointer hover:underline">
                                        <img className="w-6 h-6 m-1 rounded-full" src={HELP_ICON} alt=""></img>
                                        <div className="m-1">Help Centre</div>
                                    </div>

                                </div>

                                <div className="mx-3 mt-3 cursor-pointer hover:underline" onClick={handleSignOut}>Sign out of Netflix</div>

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </div>

    </div>

  )
}

export default BrowseHeader