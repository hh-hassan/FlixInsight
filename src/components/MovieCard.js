import { useState } from "react";
import { BASE_URL } from "../utils/constants";

const MovieCard = ({movie}) => {

    const { id, title, overview, backdrop_path, poster_path, vote_average} = movie;
    
    return (
        
        <div 
            className="inline-block m-2 text-white" 
            key={movie.id}
            onMouseEnter={(e) => handleMouseEnter(movie.id, e)}
            onMouseLeave={handleMouseLeave}
        >

            <img className="relative h-56 w-48 rounded" src={BASE_URL + movie.poster_path} alt=""></img>

            {hoveredMovieId === movie.id && (
                <div className="absolute top-0 w-[350px] h-[360px] bg-gray-300 border-2 border-red-500 z-30" style={positionStyle}>
                    <h1>HASSAN</h1>
                    <h1>HASSAN</h1>
                    <h1>HASSAN</h1>
                    <h1>HASSAN</h1>
                </div>
            )}

        </div>
        
  )
}

export default MovieCard;