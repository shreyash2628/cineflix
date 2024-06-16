import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import { addUpcomingTvSeries } from '../utils/Store/tvSeriesSlice';
import { addContent } from '../utils/Store/contentSlice';

const useUpcomingTvSeries = () => {
    const dispatch = useDispatch();
    const mode = useSelector(store => store.switchMode?.mode);
    const getUpcomingTvSeries = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', TMDBoptions)
        const json = await data.json();
        if (mode == "TvSeries") {
            dispatch(addContent(
                {
                    id: json.results[0]?.id,
                    name: json.results[0]?.name,
                    vote: json.results[0]?.vote_average,
                    overview: json.results[0]?.overview,
                }
            ));
        }
        dispatch(addUpcomingTvSeries(json));
    };
    useEffect(() => {
        getUpcomingTvSeries()
    }, [])
}

export default useUpcomingTvSeries;
