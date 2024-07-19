import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import { addTopRatedMovies } from '../utils/Store/moviesSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await
            fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', TMDBoptions)
        const json = await data.json();
        dispatch(addTopRatedMovies(json));
    };
    useEffect(() => {
        getTopRatedMovies()
    }, [])
}

export default useTopRatedMovies;
