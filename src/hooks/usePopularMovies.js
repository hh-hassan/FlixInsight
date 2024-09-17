import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getMovieTrailer from "../utils/getMovieTrailer";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const usePopularMovies = () => {
    
    const dispatch = useDispatch();
  
    const getPopularMovies = async () => {

        const data = await fetch(MOVIES_URL + "popular", API_OPTIONS);
        const json = await data.json();
        const movies = json.results;

        const moviesWithTrailers = await Promise.all(movies.map(async (movie) => {
            const trailerKey = await getMovieTrailer(movie.id);
            return { ...movie, trailerKey };
        }));

        dispatch(addPopularMovies(moviesWithTrailers));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;