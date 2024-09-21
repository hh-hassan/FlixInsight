import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import translateText from "../utils/tranlateText";
import EnlargedMovieCard from "./EnlargedMovieCard";
import { BASE_URL } from "../utils/constants";

const MovieCard = ({movie}) => {

    const { i18n, t } = useTranslation();
    const { genres } = movie;
    const [translatedGenres, setTranslatedGenres]= useState(genres);

    const [isHovered, setIsHovered] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    useEffect(() => {
        
        const translateGenres = async () => {

            const translatedGenresArray = await Promise.all(
                
                genres.map(async (g) => {
    
                    const translatedGenre = await translateText(g.name, i18n.language);

                    const genreString = t('browse.genre', { g: translatedGenre });

                    return {
                        id: g.id,
                        name: genreString
                    };
                })
            );

            setTranslatedGenres(translatedGenresArray);
        };

        translateGenres();

    }, [i18n.language]);

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

            {isHovered && <EnlargedMovieCard movie={{ ...movie, genres: translatedGenres }} />}

        </div>
  )
}

export default MovieCard;