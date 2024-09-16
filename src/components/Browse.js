import Authentication from './Authentication';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

import BrowseHeader from './BrowseHeader';
import MainBackground from './MainBackground';
import MovieSection from './MovieSection';
import Footer from './Footer';

const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (

    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto bg-black z-0">

      <Authentication/>

      <BrowseHeader/>
      <MainBackground/>

      <div className="absolute pt-screen z-20">
        <MovieSection />
        <Footer />
      </div>

    </div>
  )
}

export default Browse;