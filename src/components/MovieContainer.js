import { useState } from "react";
import MovieCard from "./MovieCard";
import UserContext from "../utils/UserContext";

const MovieContainer = ({title, movies}) => {

    const [hoveredMovieId, setHoveredMovieId] = useState(null);
    const [positionStyle, setPositionStyle] = useState({});
    
    return (
        
        <UserContext.Provider value={{ hoveredMovieId, setHoveredMovieId, positionStyle, setPositionStyle }}>
            
            <div className="relative m-5">
                
                <div className="text-2xl font-bold text-white">{title}</div>

                <div className="my-2 overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar">
                    
                    {movies?.map(movie => <MovieCard key={movie.id} movie={movie}/>)}

                </div>

            </div>

        </UserContext.Provider>
  )
}

export default MovieContainer;