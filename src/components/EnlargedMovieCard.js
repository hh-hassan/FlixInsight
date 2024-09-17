const EnlargedMovieCard = ({movie}) => {
  
    const { id, title, overview, backdrop_path, poster_path, vote_average, trailerKey} = movie;
    
    return (
        
        <div 
            className="absolute w-full h-full top-0 rounded transition-opacity duration-1000 ease-in-out" 
            style={{ backgroundColor: "rgb(20, 20, 20)" }}>
            
            <div className="relative h-[180px] overflow-hidden rounded-t">
                
                <iframe
                    className="relative top-0 left-0 w-full h-[calc(100%+60px)] transform scale-[1.3] translate-y-[-30px] rounded-t-lg"
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=0&mute=1&rel=0&modestbranding=1&fs=1&iv_load_policy=3&vq=hd1080`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>

                <div className="absolute inset-0 bg-transparent" onContextMenu={(e) => e.preventDefault()}></div>
            
            </div>

            <div>

                <div className="flex m-3 justify-between">

                    <div className="flex">

                        <button className="flex items-center justify-center w-10 h-10 m-1 bg-white text-black rounded-full hover:bg-opacity-30 cursor-pointer">
                            <span className="ml-1 mb-1 text-2xl leading-none">&#9654;</span>
                        </button>

                        <button className="flex items-center justify-center w-10 h-10 m-1 bg-inherit border-2 border-gray-500  bg-opacity-50 text-white rounded-full hover:bg-opacity-30 cursor-pointer">
                            <span className="mb-2 text-3xl leading-none">+</span>
                        </button>

                    </div>

                    <div>
                        <button className="flex items-center justify-center w-10 h-10 m-1 bg-inherit border-2 border-gray-500  bg-opacity-50 text-white rounded-full hover:bg-opacity-30 cursor-pointer">
                            <span className="text-xl">&#9660;</span>
                        </button>
                    </div>

                </div>

                <div className="text-white">
                    Genres
                </div>

            </div>
            
        </div>
  )
}

export default EnlargedMovieCard;