import { useState, useRef } from "react";
import client from "../utils/openai";
import { FaLightbulb } from 'react-icons/fa';

import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const BingeBaba = () => {
  
    const searchText = useRef(null);

    const [show, setShow] = useState(false);
    const movies = useSelector(store => store.movie.nowPlayingMovies);

    const handleSearch = () => {

        // async function main() {
        //     const chatCompletion = await client.chat.completions.create({
        //       messages: [{ role: 'user', content: searchText.current.value }],
        //       model: 'gpt-3.5-turbo',
        //     });
        //     console.log(chatCompletion?.choices);
        //   }
          
        // main();

        setShow(!show);
    };
  
    return (
    
        <div className={`mx-5 ${show ? 'my-20' : 'my-40'}`}>
            
            <div className="flex w-[575px] mx-auto bg-white px-3 py-1 rounded-md border-4 border-yellow-500">
                
                <input 
                    className="w-[500px] text-lg font-semibold focus:outline-none caret-red-500 placeholder-gray-500 placeholder:text-base"
                    ref={searchText}
                    type="text"
                    placeholder="What’s your binge mood today ?"
                >   
                </input>

                <div className="py-1 cursor-pointer" onClick={handleSearch}>
                    <FaLightbulb size={50} color="#FFA500" />
                </div>

            </div>

            {show &&
                
                (
                    <div className="grid grid-cols-5 gap-10 my-10 justify-center relative">
                        
                        {movies?.map((movie, index) => {
                            
                            const isLastInRow = (index + 1) % 5 === 0;
                            
                            return (
                                
                                <div
                                    key={movie.id}
                                    style={{ transition: 'transform 2000ms, width 2000ms',}}
                                    className={`transform transition-all duration-300 relative hover:w-[350px] hover:h-[360px] hover:z-10 ${isLastInRow ? 'hover:-translate-x-36' : ''} `}
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