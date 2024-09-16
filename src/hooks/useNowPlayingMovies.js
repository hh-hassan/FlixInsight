import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIES_URL } from '../utils/constants';

const useNowPlayingMovies = () => {
    
    const dispatch = useDispatch();
  
    const getNowPlayingMovies = async () => {

        const data = await fetch(MOVIES_URL + "now_playing", API_OPTIONS);
        const json = await data.json();

        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;