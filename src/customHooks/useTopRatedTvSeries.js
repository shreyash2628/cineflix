import { useDispatch ,useSelector} from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import { addTopRatedTvSeries } from '../utils/Store/tvSeriesSlice';
import { addContent } from '../utils/Store/contentSlice';

const useTopRatedTvSeries = () => {
    const dispatch = useDispatch();
    const mode = useSelector(store => store.switchMode?.mode);
    const getTopRatedTvSeries = async () => {
        const data = await 
        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', TMDBoptions)
        const json = await data.json();
        dispatch(addTopRatedTvSeries(json));
        if (mode == "TvSeries") {
            dispatch(addContent(
                {
                    id: json.results[1]?.id,
                    name: json.results[1]?.name,
                    vote: json.results[1]?.vote_average,
                    overview: json.results[1]?.overview,
                }
            ));
        }
    };

    useEffect(() => {
        getTopRatedTvSeries()
    }, [mode])
}

export default useTopRatedTvSeries;
