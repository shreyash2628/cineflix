import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import { addNowPlayingTvSeries } from '../utils/Store/tvSeriesSlice';

const useNowPlayingTvSeries = () => {
    const dispatch = useDispatch();
    const getNowPlayingTvSeries = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', TMDBoptions)
        const json = await data.json();
        dispatch(addNowPlayingTvSeries(json));
    };
    useEffect(() => {
        getNowPlayingTvSeries();
    }, [])
}

export default useNowPlayingTvSeries;
