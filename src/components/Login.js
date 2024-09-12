import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BG_IMG_URL, LOGO_URL } from '../utils/constants';

const Login = () => {
  
    const navigate = useNavigate();
    
    return (
        
        <div className="flex flex-col items-center">
            
            <img 
                className="fixed top-0 left-0 w-screen h-screen object-cover -z-10 brightness-[40%]" 
                src={BG_IMG_URL} 
                alt="">
            </img>

            <Link to='/'>
                <img
                    className="absolute left-[125px] top-[5px] w-[200px] h-auto fill-[#e50914] cursor-pointer"
                    src={LOGO_URL}
                    alt="">
                </img>
            </Link>
            
            <form className="absolute bottom-[5px] flex flex-col items-center p-[10px] text-white bg-black/70">

                <div className="w-full flex justify-start m-[10px] text-3xl font-bold">Sign In</div>

                <input 
                    className="w-[315px] h-[55px] bg-black/50 m-[10px] p-[15px] border border-[#acacac] rounded-[3px] caret-white text-white text-[15px] placeholder-[#bababa]"
                    type="text" 
                    placeholder="Email or mobile number">
                </input>
                
                <input 
                    className="w-[315px] h-[55px] bg-black/50 m-[10px] p-[15px] border border-[#acacac] rounded-[3px] caret-white text-white text-[15px] placeholder-[#bababa]"
                    type="text" 
                    placeholder="Password">
                </input>

                <div className="flex justify-center items-center w-[315px] h-[45px] bg-red-500 hover:bg-red-700 m-[10px] p-[5px] font-semibold rounded-[3px] cursor-pointer">
                    Sign In
                </div>

                <div>OR</div>

                <div className="flex justify-center items-center w-[315px] h-[45px] bg-gray-50/20 hover:bg-gray-50/15 text-center m-[10px] p-[5px] font-semibold rounded-[3px] cursor-pointer">
                    Use a sign-in code
                </div>

                <div className="cursor-pointer hover:underline">Forgot password?</div>

                <div className="m-[10px] p-[5px]">
                    <span>New to netflix? </span>
                    <span 
                        className="font-semibold cursor-pointer hover:underline"
                        onClick={() => navigate('/')}>
                            Sign up now.
                    </span>
                </div>

                <div className="flex flex-col items-center text-[#acacac] text-[14px]">
                    <div>This page is protected by Google reCaptcha to ensure you're not a bot. </div>
                    <div className="text-[#0071eb] font-semibold cursor-pointer hover:underline">Learn more</div>  
                </div>

            </form>
                
        </div>
  )
};

export default Login;