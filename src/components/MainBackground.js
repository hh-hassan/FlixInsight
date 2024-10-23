import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import translateText from "../utils/tranlateText";

const MainBackground = () => {
  
    const { i18n, t } = useTranslation();
    
    const { play, info } = t("browse");

    const movie = useSelector(store => store.movie?.nowPlayingMovies);

    const [videoKey, setVideoKey] = useState(null);
    const [overview, setOverview] = useState(null);

    useEffect(() => {
      
      if(!movie) return;

      setOverview(movie[0].overview);
      setVideoKey(movie[0].trailerKey);
      
      const translateOverview = async () => {
        
        const translatedOverview = await translateText(movie[0].overview, i18n.language);

        const overviewWithInterpolation = t('browse.overview', { o: translatedOverview });

        setOverview(overviewWithInterpolation);
      };

      translateOverview();

    }, [movie, i18n.language]);

    if(!movie) return null;

    const { title } = movie[0];

    return (
      
      <div>

        <div className="absolute w-screen md:h-screen bg-gradient-to-t from-black z-20">

          <div className="absolute top-[23vh] left-[5vw] md:top-52 md:left-10 w-2/3 md:w-1/3 text-white z-30">
            
            <div className="m-2 text-xl md:text-2xl font-bold">{title}</div>
            
            <div className="m-2 text-sm md:text-base">{overview}</div>
            
            <div className="flex text-lg md:text-xl font-bold">

              <button className="flex items-center bg-white m-2 px-2 md:px-7 py-0.5 md:py-1.5 text-black rounded hover:bg-opacity-30">
                <span className="mr-2 text-2xl">&#9654;</span>
                <span>{play}</span>
              </button>

              <button className="flex items-center justify-between bg-gray-700 bg-opacity-50 m-2 px-1 md:px-3 py-0.5 md:py-1.5 text-white rounded hover:bg-opacity-30">
                
                <span className="flex items-center justify-center mx-1 w-7 h-7  text-white text-xl font-bold border-2 border-white rounded-full">i</span>
                <span className="mx-1">{info}</span>

              </button>
            
            </div>

          </div>

        </div>

        {
          videoKey && 

            <div className="absolute w-screen h-screen overflow-hidden">

              <iframe
                className = "absolute w-[calc(100%+0px)] h-[calc(100%+40px)] transform scale-[1.3] translate-x-[-0px] translate-y-[-150px] md:translate-y-[-20px]  z-10" 
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=0&mute=1&rel=0&modestbranding=1&fs=1&iv_load_policy=3&vq=hd1080`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>

              <div className="absolute inset-0 bg-transparent" onContextMenu={(e) => e.preventDefault()}></div>

            </div>
        }

      </div>
  );
}

export default MainBackground;