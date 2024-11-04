import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import MovieContainer from "./MovieContainer";

const MovieSection = () => {
  
  const movieStore = useSelector(store => store.movie);

  const { t } = useTranslation();
    
  const { title1, title2, title3, title4 } = t("browse")

  return (
      
      <div>
          <MovieContainer ind="0" title={title1} movies={movieStore.nowPlayingMovies}/>
          <MovieContainer ind="1" title={title2} movies={movieStore.popularMovies}/>
          <MovieContainer ind="2" title={title3} movies={movieStore.topRatedMovies}/>
          <MovieContainer ind="3" title={title4} movies={movieStore.upcomingMovies}/>
      </div>
  )
}

export default MovieSection;