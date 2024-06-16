import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { TMDBoptions } from '../utils/constants';
import { addImdbId } from '../utils/Store/contentSlice';

const useExternalId = () => {
    const dispatch = useDispatch();
    const externalId = useSelector((store)=>store.content.contentId);

    const getImdbId = async () => {
        const data = await 
        fetch(`https://api.themoviedb.org/3/movie/`+externalId+`/external_ids`, TMDBoptions)
        const json = await data.json();
        dispatch(addImdbId(json.imdb_id));
    };
    useEffect(() => {
        getImdbId();
    }, []);
}

export default useExternalId;
