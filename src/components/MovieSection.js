import { useSelector } from "react-redux";
import MovieContainer from "./MovieContainer";

const MovieSection = () => {
  
  const movieStore = useSelector(store => store.movie);

  return (
      
      <div>
          <MovieContainer title={"Now Playing"} movies={movieStore.nowPlayingMovies}/>
          <MovieContainer title={"Popular"} movies={movieStore.popularMovies}/>
          <MovieContainer title={"Top Rated"} movies={movieStore.topRatedMovies}/>
          <MovieContainer title={"Upcoming"} movies={movieStore.upcomingMovies}/>
      </div>
  )
}

export default MovieSection;