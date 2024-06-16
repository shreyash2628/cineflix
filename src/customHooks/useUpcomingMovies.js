import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import { addUpcomingMovies } from '../utils/Store/moviesSlice';
import { addContent } from '../utils/Store/contentSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const mode = useSelector(store => store.switchMode?.mode);
    const getUpcomingMovies = async () => {
        const data = await
            fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3', TMDBoptions)
        const json = await data.json();
        dispatch(addUpcomingMovies(json));

        if (mode == "Movies") {
            dispatch(addContent(
                {
                    id: json.results[0]?.id,
                    name: json.results[0]?.original_title,
                    vote: json.results[0]?.vote_average,
                    overview: json.results[0]?.overview,
                }
            ));
        }
    };
    useEffect(() => {
        getUpcomingMovies()
    }, [])
}

export default useUpcomingMovies;
