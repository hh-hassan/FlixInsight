import { API_OPTIONS, MOVIES_URL } from "./constants";

const getMovieDetails = async (movieId) => {

    const DETAILS_URL = MOVIES_URL + movieId + "?append_to_response=images,videos,credits,similar,recommendations";
    
    const data = await fetch(DETAILS_URL, API_OPTIONS);
    const json = await data?.json();

    const { runtime, genres, images, videos, credits, similar, recommendations } = json;

    const trailer = videos?.results?.filter(video => video?.name === "Official Trailer");

    const trailerKey = trailer.length === 0 ? videos?.results[0]?.key : trailer[0]?.key;

    return { runtime, genres, images, videos, credits, similar, recommendations, trailerKey };
};

export default getMovieDetails;