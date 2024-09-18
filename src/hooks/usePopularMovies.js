import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getMovieDetails from "../utils/getMovieDetails";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const usePopularMovies = () => {
    
    const dispatch = useDispatch();
  
    const getPopularMovies = async () => {

        const data = await fetch(MOVIES_URL + "popular", API_OPTIONS);
        const json = await data.json();
        const movies = json.results;

        const moviesWithDetails = await Promise.all(movies.map(async (movie) => {
            const movieDetails = await getMovieDetails(movie.id);
            return { ...movie, ...movieDetails };
        }));

        dispatch(addPopularMovies(moviesWithDetails));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;