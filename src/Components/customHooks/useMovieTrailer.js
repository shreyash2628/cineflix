import { useDispatch } from "react-redux";
import { TMDBoptions } from "../../utils/constants";
import { addTrailerVideo } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = () => {
    const dispatch = useDispatch();
    const getMoviesTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/823482/videos?language=en-US', TMDBoptions);
        const jsonData = await data.json();
        const filteredData = jsonData.results?.filter((vid) => vid.type === "Trailer");
        const movieTrailer = filteredData.length ? filteredData[0] : jsonData.results[0]
        dispatch(addTrailerVideo(movieTrailer));
    };

    useEffect(() => {
        getMoviesTrailer()
    }, [])
}

export default useMovieTrailer;
