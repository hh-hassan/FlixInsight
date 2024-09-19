import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getMovieDetails from "../utils/getMovieDetails";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const useNowPlayingMovies = () => {
    
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movie.nowPlayingMovies);
  
    const getNowPlayingMovies = async () => {

        const data = await fetch(MOVIES_URL + "now_playing", API_OPTIONS);
        const json = await data.json();
        const movies = json.results;

        const moviesWithDetails = await Promise.all(movies.map(async (movie) => {
            const movieDetails = await getMovieDetails(movie.id);
            return { ...movie, ...movieDetails };
        }));

        dispatch(addNowPlayingMovies(moviesWithDetails));
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;