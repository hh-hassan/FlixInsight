import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const useTopRatedMovies = () => {
    
    const dispatch = useDispatch();
  
    const getTopRatedMovies = async () => {

        const data = await fetch(MOVIES_URL + "top_rated", API_OPTIONS);
        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;