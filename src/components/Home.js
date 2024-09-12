import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BG_IMG_URL, LOGO_URL } from '../utils/constants';

const Home = () => {
  
  const navigate = useNavigate();
  
  return (

    <div className="flex flex-col items-center">
            
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
        <div className="text-lg font-bold m-2 p-2">Ready to watch? Enter your email to create or restart your membership.</div>

        <form className="flex items-center">

          <input 
            className="w-[400px] h-14  bg-transparent m-[10px] p-[15px] border border-[#acacac] rounded-[3px] caret-white text-white text-[15px] placeholder-[#bababa]"
            type="text" 
            placeholder="Email address">
          </input>

          <button className="flex items-center justify-center w-[250px] h-14 bg-red-500 hover:bg-red-700 m-[10px] text-2xl font-semibold rounded-[3px] cursor-pointer">
              <span>Get started</span>
              <span className="ml-3 text-xl" dangerouslySetInnerHTML={{ __html: '&#10095;' }}/>
          </button>

        </form>

      </div>

    </div>
  )
}

export default Home