import { useState } from "react";
import EnlargedMovieCard from "./EnlargedMovieCard";
import { BASE_URL } from "../utils/constants";

const MovieCard = ({movie}) => {


    //     // hoverTimeout = setTimeout(() => {
            
            
    //     // }, 500);
    //     setHoveredMovieId(movie.id);

    //     // const boundingRect = event.currentTarget.getBoundingClientRect();
            
    //     // const windowWidth = window.innerWidth;

    //     // if (boundingRect.right > windowWidth - 50) setPositionStyle({right: 0})

    //     // else if (boundingRect.left < 50) setPositionStyle({left: 0})

    //     // else setPositionStyle({transform: 'translateX(-25%)'})

    //     const { clientX, clientY } = event;

    //     // const offsetX = 10; // Offset from cursor
    //     // const offsetY = 10; // Offset from cursor

    //     if (clientX < 200) setPositionStyle({left: 0})

    //     else if (clientX > 1000) setPositionStyle({right: 0})

    //     else setPositionStyle({left: `${clientX - 70}px`})
        
    //     // console.log(clientX, clientY, "HASSAN");

    //     // setPositionStyle({
    //     //     // left: `${clientX + offsetX}px`,
    //     //     // top: `${clientY + offsetY}px`,
    //     //     left: `${clientX}px`,
    //     //     top:"0px",
    //     // });
    // };

    // // console.log(hoveredMovieId);
    // // console.log(movie);

    // const handleMouseLeave = () => {
    //     // clearTimeout(hoverTimeout);
    //     setHoveredMovieId(null);
    //     setPositionStyle({});
    // };
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        
        <div className={"relative inline-block m-2 text-white cursor-pointer"} 
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        >

            <img 
                className={`h-56 w-48 transition-transform duration-1000 ease-in-out ${isHovered ? 'w-[350px] h-[360px]' : 'scale-100'} rounded`}
                src={BASE_URL + movie.poster_path} 
                alt=""
            >    
            </img>

            {isHovered && <EnlargedMovieCard movie={movie}/>}

        </div>
  )
}

export default MovieCard;