import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import { addPopularTvSeries } from '../utils/Store/tvSeriesSlice';

const usePopularTvSeries = () => {
    const dispatch = useDispatch();
    const getPopularTvSeries = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', TMDBoptions)
        const json = await data.json();
        dispatch(addPopularTvSeries(json));
    };
    useEffect(() => {
        getPopularTvSeries();
    }, [])
}

export default usePopularTvSeries;
