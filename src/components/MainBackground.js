import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const MainBackground = () => {
  
    const movie = useSelector(store => store.movie?.nowPlayingMovies);

    const [videoKey, setVideoKey] = useState(null);

    useEffect(()=> {
      
      if(!movie) return;

      const getVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS);
        const json = await data.json();
        const trailer = json.results.filter(video => video.name === "Official Trailer");
        setVideoKey(trailer[0].key);
      }

      getVideo();

    }, [movie]);

    if(!movie) return null;

    const { id, title, overview, backdrop_path, poster_path, vote_average} = movie[0];

    return (
      
      <div>

        <div className="absolute w-screen h-screen bg-gradient-to-t from-black  z-20">

          <div className="absolute top-52 left-10 w-1/3 text-white z-30">
            
            <div className="m-2 text-2xl font-bold">{title}</div>
            
            <div className="m-2">{overview}</div>
            
            <div className="flex text-xl font-bold">

              <button className="flex items-center bg-white m-2 px-7 py-1.5 text-black rounded hover:bg-opacity-30">
                <span className="mr-2 text-2xl">&#9654;</span>
                <span>Play</span>
              </button>

              <button className="flex items-center justify-between bg-gray-700 bg-opacity-50 m-2 px-3 py-1.5 text-white rounded hover:bg-opacity-30">
                
                <span className="flex items-center justify-center mx-1 w-7 h-7  text-white text-xl font-bold border-2 border-white rounded-full">i</span>
                <span className="mx-1">More info</span>

              </button>
            
            </div>

          </div>

        </div>

        {
          videoKey && 

            <div className="absolute w-screen h-screen overflow-hidden">

              <iframe
                className = "absolute w-[calc(100%+0px)] h-[calc(100%+40px)] transform scale-[1.3] translate-x-[-0px] translate-y-[-20px] z-10" 
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=0&mute=1&rel=0&modestbranding=1&fs=1&iv_load_policy=3&vq=hd1080`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>

              <div className="absolute inset-0 bg-transparent" onContextMenu={(e) => e.preventDefault()}></div>

            </div>
        }

      </div>
  )
}

export default MainBackground;