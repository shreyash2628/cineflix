import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import { addUpcomingTvSeries } from '../utils/Store/tvSeriesSlice';

const useUpcomingTvSeries = () => {
    const dispatch = useDispatch();
    const getUpcomingTvSeries = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', TMDBoptions)
        const json = await data.json();
       
        dispatch(addUpcomingTvSeries(json));
    };
    useEffect(() => {
        getUpcomingTvSeries()
    }, [])
}

export default useUpcomingTvSeries;
