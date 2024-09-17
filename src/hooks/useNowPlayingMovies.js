import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getMovieTrailer from "../utils/getMovieTrailer";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const useNowPlayingMovies = () => {
    
    const dispatch = useDispatch();
  
    const getNowPlayingMovies = async () => {

        const data = await fetch(MOVIES_URL + "now_playing", API_OPTIONS);
        const json = await data.json();
        const movies = json.results;

        const moviesWithTrailers = await Promise.all(movies.map(async (movie) => {
            const trailerKey = await getMovieTrailer(movie.id);
            return { ...movie, trailerKey };
        }));

        dispatch(addNowPlayingMovies(moviesWithTrailers));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;