import { useDispatch } from "react-redux";
import { TMDBoptions } from "../utils/constants";
import { addMovieTrailerVideo } from "../utils/Store/moviesSlice";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

const useMovieTrailer = (id) => {
//fetch movie trailer to show on video bg
    const dispatch = useDispatch();
    
    // console.log(id);
    const getMoviesTrailer = async () => {
        if(id==null || id==undefined) return;
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', TMDBoptions)
        const jsonData = await data.json();
        const filteredData = jsonData?.results?.filter((vid) => vid.type === "Trailer");
        const movieTrailer = filteredData?.length ? filteredData[0] : jsonData.results[0];
        console.log("MovieTrailer", movieTrailer);
        dispatch(addMovieTrailerVideo(movieTrailer));
    };

    useEffect(() => {
        getMoviesTrailer();
    }, []);


    // return  useSelector(store => store.movies?.trailerVideo);

}

export default useMovieTrailer;
