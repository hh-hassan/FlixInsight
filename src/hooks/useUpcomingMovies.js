import { useDispatch } from "react-redux";
import getMovieDetails from "../utils/getMovieDetails";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const useUpcomingMovies = () => {
    
    const dispatch = useDispatch();
  
    const getUpcomingMovies = async (page) => {

        const data = await fetch(`${MOVIES_URL}upcoming?page=${page}`, API_OPTIONS);
        const json = await data.json();
        const movies = json.results;

        const moviesWithDetails = await Promise.all(movies.map(async (movie) => {
            const movieDetails = await getMovieDetails(movie.id);
            return { ...movie, ...movieDetails };
        }));

        dispatch(addUpcomingMovies(moviesWithDetails));
    };

    return getUpcomingMovies;
}

export default useUpcomingMovies;