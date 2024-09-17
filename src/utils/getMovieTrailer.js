import { MOVIES_URL, API_OPTIONS } from "./constants";

const getMovieTrailer = async (movieId) => {
    const data = await fetch(MOVIES_URL + movieId + "/videos", API_OPTIONS);
    const json = await data?.json();
    const trailer = json?.results?.filter(video => video?.name === "Official Trailer");
    return trailer[0]?.key || json?.results[0]?.key;
}

export default getMovieTrailer;