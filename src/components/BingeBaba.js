import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import MovieCard from "./MovieCard";
import getMovieDetails from "../utils/getMovieDetails";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { FaLightbulb } from 'react-icons/fa';

const BingeBaba = () => {
  
    const { t } = useTranslation();
    
    const { placeholder } = t("bingebaba")
    
    const searchText = useRef(null);

    const [movies, setMovies] = useState(null);

    const getDetails = async (movie) => {
        
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=true`, API_OPTIONS);
        const json = await data.json();

        const matchingResults = json?.results.filter(m => 
            m.title.toLowerCase() === movie.toLowerCase() && m.poster_path !== null
          );
        
        const moviesWithDetails = await Promise.all(matchingResults.map(async (m) => {
            const movieDetails = await getMovieDetails(m.id);
            return { ...m, ...movieDetails };
        }));

        return moviesWithDetails;
    }

    const handleSearch = () => {

        async function main() {
            
            const query = `Act as a movie recommendation system and based on the following mood or preferences: ${searchText.current.value}, recommend a list of exactly 10 complete movie names sorted by user reviews from high to low and separated by commas. Please provide exactly the movie title only, without any additional text or descriptions, and ensure the list only contains the 10 movie names separated by commas.`;
            
            const chatCompletion = await client.chat.completions.create({
              messages: [{ role: 'user', content: query }],
              model: 'gpt-3.5-turbo',
            });
           
            const movieArray = chatCompletion?.choices?.[0].message.content.split(',').map(movie => movie.trim());

            const results = await Promise.all(movieArray.map(m => getDetails(m)));

            setMovies(results.flat());
        }
          
        main();
    };
  
    return (
    
        <div className={`mx-5 ${movies ? 'my-40 md:my-20' : 'my-80 md:my-40'}`}>
            
            <div className="flex w-[90vw] md:w-[575px] mx-auto bg-white px-3 py-1 rounded-md border-4 border-yellow-500">
                
                <input 
                    className="w-[500px] text-lg font-semibold focus:outline-none caret-red-500 placeholder-gray-500 placeholder:text-base"
                    ref={searchText}
                    type="text"
                    placeholder={placeholder}
                >   
                </input>

                <div className="py-1 cursor-pointer" onClick={handleSearch}>
                    <FaLightbulb size={50} color="#FFA500" />
                </div>

            </div>

            {movies &&
                
                (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-10 my-10 justify-center relative">
                        
                        {movies?.map((movie, index) => {
                            
                            const isLastInSSRow = (index + 1) % 2 === 0
                            const isLastInBSRow = (index + 1) % 5 === 0;
                            
                            return (
                                
                                <div
                                    key={movie.id}
                                    style={{ transition: 'transform 2000ms, width 2000ms',}}
                                    className={`transform transition-all duration-300 relative hover:w-[350px] hover:h-[360px] hover:z-10 ${isLastInSSRow ? 'hover:-translate-x-44' : ''} md:${isLastInBSRow ? 'hover:-translate-x-32' : ''} `}
                                >
                                    <MovieCard movie={movie} />
                                </div>

                            );
                        })}

                    </div>
                )  
            }

        </div>
  )
}

export default BingeBaba;