import { TMDBoptions } from "../../utils/constants"
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../../utils/moviesSlice';
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=5', TMDBoptions)
        const json = await data.json();
        // console.log("Data=>", json);
        dispatch(addNowPlayingMovies(json));
    };

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;
