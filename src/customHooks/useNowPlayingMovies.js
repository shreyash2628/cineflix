import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/Store/moviesSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await 
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDBoptions)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json));
    };
    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;
