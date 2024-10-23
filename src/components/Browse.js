import { useState } from 'react';
import UserContext from '../utils/UserContext';

import Authentication from './Authentication';
import BrowseHeader from './BrowseHeader';
import MainBackground from './MainBackground';
import MovieSection from './MovieSection';
import BingeBaba from './BingeBaba';
import Footer from './Footer';

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  
  const [isBingeBaba, setIsBingeBaba] = useState(true);
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (

    <UserContext.Provider value={{ isBingeBaba, setIsBingeBaba }}>
      
      <div className="relative min-h-screen overflow-x-hidden overflow-y-auto bg-black z-0">

        <Authentication/>

        <BrowseHeader/>

        {isBingeBaba ?
              
              (<>
                <MainBackground/>
                <div className="absolute pt-[100%] md:pt-screen z-20">
                  <MovieSection />
                  <Footer />
                </div>
              </>) :

                    <div className="mt-16">
                      <BingeBaba />
                      <Footer />
                    </div>
        }

      </div>

    </UserContext.Provider> 
  )
}

export default Browse;