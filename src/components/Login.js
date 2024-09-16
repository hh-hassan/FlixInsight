import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import Authentication from './Authentication';
import { auth } from '../utils/firebase';
import { checkValidEmail, checkValidPassword } from '../utils/validate';
import { BG_IMG_URL, LOGO_URL } from '../utils/constants';

const Login = () => {
  
    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);

    const [emailMsg, setEmailMsg] = useState(null);
    const [passMsg, setPassMsg] = useState(null);

    const [successMsg, setSuccessMsg] = useState(null);
    const [errMsg, setErrMsg] = useState(null);

    const handleClick = () => {
        
        const message_Email = checkValidEmail(email.current.value);
        setEmailMsg(message_Email);

        const message_Password = checkValidPassword(password.current.value);
        setPassMsg(message_Password);

        if(message_Email !== null || message_Password) return;

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)

            .then((userCredential) => {
                const user = userCredential.user;
                setErrMsg(null);
                setSuccessMsg("🎉 You're all set! Time to binge and chill! 🍿");
            })

            .catch((error) => {
                setSuccessMsg(null);
                setErrMsg(error.code + "-" + error.message);
            });
    };
    
    return (
        
        <div className="flex flex-col items-center">
            
            <Authentication/>
            
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

            <form onSubmit={(e) => e.preventDefault()} className="absolute bottom-[5px] flex flex-col items-center p-[10px] text-white bg-black/70">

                <div className="w-full flex justify-start m-[10px] text-3xl font-bold">Sign In</div>

                <input 
                    ref={email}
                    className="w-[315px] h-[55px] bg-black/50 m-[10px] p-[15px] border border-[#acacac] rounded-[3px] caret-white text-white text-[15px] placeholder-[#bababa]"
                    type="email" 
                    placeholder="Email or mobile number">
                </input>

                {emailMsg && <div className="w-full flex justify-start text-red-500 px-8 font-semibold">{emailMsg}</div>}
                
                <input 
                    ref={password}
                    className="w-[315px] h-[55px] bg-black/50 m-[10px] p-[15px] border border-[#acacac] rounded-[3px] caret-white text-white text-[15px] placeholder-[#bababa]"
                    type="password" 
                    placeholder="Password">
                </input>

                {passMsg && <div className="w-full flex justify-start text-red-500 px-8 font-semibold">{passMsg}</div>}

                <div onClick={handleClick} className="flex justify-center items-center w-[315px] h-[45px] bg-red-500 hover:bg-red-700 m-[10px] p-[5px] font-semibold rounded-[3px] cursor-pointer">
                    Sign In
                </div>

                {/* {successMsg && <div className="text-green-500 px-10 font-semibold">{successMsg}</div>} */}
                {errMsg && <div className="text-red-500 px-8 font-semibold">{errMsg}</div>}

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