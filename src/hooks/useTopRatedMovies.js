import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getMovieDetails from "../utils/getMovieDetails";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const useTopRatedMovies = () => {
    
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(store => store.movie.topRatedMovies);
  
    const getTopRatedMovies = async () => {

        const data = await fetch(MOVIES_URL + "top_rated", API_OPTIONS);
        const json = await data.json();
        const movies = json.results;

        const moviesWithDetails = await Promise.all(movies.map(async (movie) => {
            const movieDetails = await getMovieDetails(movie.id);
            return { ...movie, ...movieDetails };
        }));

        dispatch(addTopRatedMovies(moviesWithDetails));
    }

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;