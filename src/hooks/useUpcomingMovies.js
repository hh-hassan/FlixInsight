import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getMovieDetails from "../utils/getMovieDetails";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const useUpcomingMovies = () => {
    
    const dispatch = useDispatch();

    const upcomingMovies = useSelector(store => store.movie.upcomingMovies);
  
    const getUpcomingMovies = async () => {

        const data = await fetch(MOVIES_URL + "upcoming", API_OPTIONS);
        const json = await data.json();
        const movies = json.results;

        const moviesWithDetails = await Promise.all(movies.map(async (movie) => {
            const movieDetails = await getMovieDetails(movie.id);
            return { ...movie, ...movieDetails };
        }));

        dispatch(addUpcomingMovies(moviesWithDetails));
    }

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;