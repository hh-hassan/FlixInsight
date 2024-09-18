import MovieCard from "./MovieCard";

const MovieContainer = ({title, movies}) => {
    
    return (
        
        <div className="relative m-5">
            
            <div className="text-2xl font-bold text-white">{title}</div>

            <div className="my-2 overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar">
                
                {movies?.map(movie => <MovieCard key={movie.id} movie={movie}/>)}

            </div>

        </div>

  )
}

export default MovieContainer;