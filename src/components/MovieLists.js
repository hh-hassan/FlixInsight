import { useSelector } from "react-redux";
import MovieContainer from "./MovieContainer";

const MovieLists = () => {
  
    const movieStore = useSelector(store => store.movie);
  
    return (
        
        <div>
            <MovieContainer title={"Now Playing"} movies={movieStore.nowPlayingMovies}/>
        </div>
  )

}

export default MovieLists;