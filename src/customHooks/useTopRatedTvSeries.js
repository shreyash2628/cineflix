import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import { addTopRatedTvSeries } from '../utils/Store/tvSeriesSlice';

const useTopRatedTvSeries = () => {
    const dispatch = useDispatch();
    const getTopRatedTvSeries = async () => {
        const data = await 
        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', TMDBoptions)
        const json = await data.json();
        dispatch(addTopRatedTvSeries(json));
    };

    useEffect(() => {
        getTopRatedTvSeries()
    }, [])
}

export default useTopRatedTvSeries;
