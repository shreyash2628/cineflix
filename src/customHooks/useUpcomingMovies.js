import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import { addUpcomingMovies } from '../utils/Store/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await 
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=5', TMDBoptions)
        const json = await data.json();
        dispatch(addUpcomingMovies(json));
    };
    useEffect(() => {
        getUpcomingMovies()
    }, [])
}

export default useUpcomingMovies;
