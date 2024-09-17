import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getMovieTrailer from "../utils/getMovieTrailer";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const useTopRatedMovies = () => {
    
    const dispatch = useDispatch();
  
    const getTopRatedMovies = async () => {

        const data = await fetch(MOVIES_URL + "top_rated", API_OPTIONS);
        const json = await data.json();
        const movies = json.results;

        const moviesWithTrailers = await Promise.all(movies.map(async (movie) => {
            const trailerKey = await getMovieTrailer(movie.id);
            return { ...movie, trailerKey };
        }));

        dispatch(addTopRatedMovies(moviesWithTrailers));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;