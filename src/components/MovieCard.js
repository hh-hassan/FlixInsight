import { useState } from "react";
import EnlargedMovieCard from "./EnlargedMovieCard";
import { BASE_URL } from "../utils/constants";

const MovieCard = ({movie}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleMouseEnter = () => {

        const timeout = setTimeout(() => {
            setIsHovered(true);
        }, 2000);

        setHoverTimeout(timeout);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        setIsHovered(false);
    };

    return (
        
        <div className={`relative inline-block m-2 text-white cursor-pointer`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <img 
                className={`h-56 w-48 transition-transform duration-1000 ease-in-out ${isHovered ? 'w-[350px] h-[360px]' : 'scale-100'} rounded`}
                src={BASE_URL + movie.poster_path} 
                alt=""
            >    
            </img>

            {isHovered && <EnlargedMovieCard movie={movie} />}

        </div>
  )
}

export default MovieCard;