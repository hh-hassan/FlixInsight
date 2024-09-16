import { BASE_URL } from "../utils/constants";

const MovieCard = ({props}) => {
  
    // console.log(props);
    
    const { id, title, overview, backdrop_path, poster_path, vote_average} = props;

    // console.log(poster_path);
    
    return (
        <div className="inline-block m-2">
            <img className="h-56 w-48 rounded" src={BASE_URL + poster_path} alt=""></img>
        </div>
  )
}

export default MovieCard;