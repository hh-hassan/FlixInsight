import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Authentication from './Authentication';

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from '../utils/firebase';
import { checkValidEmail, checkValidPassword } from '../utils/validate';
import { BG_IMG_URL, LOGO_URL } from '../utils/constants';

const Home = () => {
  
  const navigate = useNavigate();

  const [em, setEm] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleEmail = () => {

    const message = checkValidEmail(email.current.value);
    setErrMsg(message);

    if(message !== null) return;

    setEm(email.current.value);
    email.current.value = '';
  }

  const handlePassword = () => {
    
    const message = checkValidPassword(password.current.value);
    setErrMsg(message);

    if(message !== null) return;

    createUserWithEmailAndPassword(auth, em, password.current.value)
      
      .then((userCredential) => {
      
        const user = userCredential.user;
        setErrMsg(null);
        setSuccessMsg("🎉 You're in! Welcome to endless entertainment and epic binge sessions! 🍿");
      })

      .catch((error) => {
        setSuccessMsg(null);
        setErrMsg(error.code + "-" + error.message);
      });

    password.current.value = '';
  }
  
  return (

    <div className="flex flex-col items-center">
            
      <Authentication/>
      
      <img 
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10 brightness-[30%]" 
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

      <button
        className="absolute right-[125px] m-7 px-4 py-1 text-white bg-red-500 hover:bg-red-700 font-semibold rounded-[3px] cursor-pointer"
        onClick={() => navigate('/login')}>
          Sign In
      </button>

      <div className="absolute bottom-5 flex flex-col items-center p-[10px] text-white">

        <div className="text-4xl font-bold m-4 p-4">Unlimited movies, TV shows and more...</div>
        <div className="text-lg font-bold m-2 p-2">Starts at ₹149. Cancel anytime.</div>
        
        <div className="text-lg font-bold m-2 p-2">
          {(em !==null)? "Enter your password and you'll be watching in no time." 
            : "Ready to watch? Enter your email to create or restart your membership."}
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex items-center">

          <input
            ref= {(em !==null)? password : email}
            className="w-[400px] h-14  bg-transparent m-[10px] p-[15px] border border-[#acacac] rounded-[3px] caret-white text-white text-[15px] placeholder-[#bababa]"
            type={(em !==null)? "password" : "email"}
            placeholder={(em !==null)? "Enter your password" : "Email address"}>
          </input>
          
          <button 
            className="flex items-center justify-center w-[250px] h-14 bg-red-500 hover:bg-red-700 m-[10px] text-2xl font-semibold rounded-[3px] cursor-pointer"
            onClick={em !== null ? handlePassword : handleEmail}
          >
              <span>{(em !==null)? "Next" : "Get started"}</span>
              <span className="ml-3 text-xl" dangerouslySetInnerHTML={{ __html: '&#10095;' }}/>
          </button>

        </form>

        {/* {successMsg && <div className="w-full flex justify-start text-green-500 px-8 font-semibold">{successMsg}</div>} */}
        {errMsg && <div className="w-full flex justify-start text-red-500 px-8 font-semibold">{errMsg}</div>}

      </div>

    </div>
  )
}

export default Home;