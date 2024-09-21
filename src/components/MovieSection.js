import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import MovieContainer from "./MovieContainer";

const MovieSection = () => {
  
  const movieStore = useSelector(store => store.movie);

  const { t } = useTranslation();
    
  const { title1, title2, title3, title4 } = t("browse")

  return (
      
      <div>
          <MovieContainer title={title1} movies={movieStore.nowPlayingMovies}/>
          <MovieContainer title={title2} movies={movieStore.popularMovies}/>
          <MovieContainer title={title3} movies={movieStore.topRatedMovies}/>
          <MovieContainer title={title4} movies={movieStore.upcomingMovies}/>
      </div>
  )
}

export default MovieSection;