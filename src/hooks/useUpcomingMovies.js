import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getMovieTrailer from "../utils/getMovieTrailer";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const useUpcomingMovies = () => {
    
    const dispatch = useDispatch();
  
    const getUpcomingMovies = async () => {

        const data = await fetch(MOVIES_URL + "upcoming", API_OPTIONS);
        const json = await data.json();
        const movies = json.results;

        const moviesWithTrailers = await Promise.all(movies.map(async (movie) => {
            const trailerKey = await getMovieTrailer(movie.id);
            return { ...movie, trailerKey };
        }));

        dispatch(addUpcomingMovies(moviesWithTrailers));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;