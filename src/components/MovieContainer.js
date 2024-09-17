import { useState } from "react";

import { BASE_URL } from "../utils/constants";

const MovieContainer = ({title, movies}) => {
  
    const [hoveredMovieId, setHoveredMovieId] = useState(null);
    const [positionStyle, setPositionStyle] = useState({});

    const handleMouseEnter = (movieId, event) => {
        
        setHoveredMovieId(movieId);

        const boundingRect = event.currentTarget.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (boundingRect.right > windowWidth - 50) setPositionStyle({right: 0})

        else if (boundingRect.left < 50) setPositionStyle({left: 0})

        else setPositionStyle({transform: 'translateX(-25%)'})
    };

    const handleMouseLeave = () => {
        setHoveredMovieId(null);
        setPositionStyle({});
    };

    return (
        
        <div className="relative m-3">
            
            <div className="text-2xl font-bold text-white">{title}</div>

            <div className="my-2 overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar">
                
                {movies?.map(movie => 
                    
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
                )}
                
            </div>

        </div>
  )
}

export default MovieContainer;