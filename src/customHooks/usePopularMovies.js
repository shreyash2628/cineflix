import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import {  addPopularMovies } from '../utils/Store/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=5', TMDBoptions)
        const json = await data.json();
        dispatch(addPopularMovies(json));
    };
    useEffect(() => {
        getPopularMovies()
    }, [])
}

export default usePopularMovies;
