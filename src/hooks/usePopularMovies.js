import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const usePopularMovies = () => {
    
    const dispatch = useDispatch();
  
    const getPopularMovies = async () => {

        const data = await fetch(MOVIES_URL + "popular", API_OPTIONS);
        const json = await data.json();

        dispatch(addPopularMovies(json.results));
        console.log(json.results);
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;