import { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const MovieContainer = ({ind, title, movies}) => {
    
    const containerRef = useRef(null);

    const [shouldFetchNowPlaying, setShouldFetchNowPlaying] = useState(false);

    const fetchNowPlayingMovies = useNowPlayingMovies();
    const fetchPopularMovies = usePopularMovies();
    const fetchTopRatedMovies = useTopRatedMovies();
    const fetchUpcomingMovies = useUpcomingMovies();

    useEffect(() => {
        if (shouldFetchNowPlaying) {
            
            if(ind==="0") fetchNowPlayingMovies(movies.length/20 + 1);
            else if(ind==="1") fetchPopularMovies(movies.length/20 + 1);
            else if(ind==="2") fetchTopRatedMovies(movies.length/20 + 1);
            else fetchUpcomingMovies(movies.length/20 + 1);
            
            setShouldFetchNowPlaying(false);
        }
    }, [shouldFetchNowPlaying]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

            if (scrollLeft + clientWidth + 1 >= scrollWidth) setShouldFetchNowPlaying(true);
        };

        const container = containerRef.current;
        container.addEventListener("scroll", handleScroll);

        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        
        <div className="relative m-5">
            
            <div className="text-2xl font-bold text-white">{title}</div>

            <div ref={containerRef} className="my-2 overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar">
                
                {movies.length!==0 && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}

            </div>

        </div>

  )
}

export default MovieContainer;