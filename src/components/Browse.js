import Authentication from './Authentication';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import BrowseHeader from './BrowseHeader';
import MainBackground from './MainBackground';

const Browse = () => {
  
  useNowPlayingMovies();

  return (

    <div className="relative overflow-hidden">

      <Authentication/>

      <BrowseHeader/>
      <MainBackground/>

      <div className="pt-screen">
        <div>HASSAN</div>
        <div>HASSAN</div>
        <div>HASSAN</div>
        <div>HASSAN</div>
      </div>

    </div>
  )
}

export default Browse;