import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const useUpcomingMovies = () => {
    
    const dispatch = useDispatch();
  
    const getUpcomingMovies = async () => {

        const data = await fetch(MOVIES_URL + "upcoming", API_OPTIONS);
        const json = await data.json();

        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;