import { useDispatch } from "react-redux";
import { TMDBoptions } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedTvSeries } from "../utils/Store/tvSeriesSlice";

const useTvSeriesTrailer = (id) => {

    const dispatch = useDispatch();
    const getTvSeriesTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/' + id + '/videos?language=en-US', TMDBoptions);
        const jsonData = await data.json();
        const filteredData = jsonData.results?.filter((vid) => vid.type === "Trailer");
        const tvSeriesTrailer = filteredData?.length ? filteredData[0] : jsonData.results[0];
        console.log("tvSeriesTrailer", jsonData);
        dispatch(addTopRatedTvSeries(tvSeriesTrailer));
    };

    useEffect(() => {
        getTvSeriesTrailer()
    }, [])
}

export default useTvSeriesTrailer;
