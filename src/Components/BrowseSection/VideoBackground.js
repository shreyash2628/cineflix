import React from 'react'
import useMovieTrailer from '../../customHooks/useMovieTrailer';
import useTvSeriesTrailer from '../../customHooks/useTvSeriesTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ id }) => {
    const selectedViewOption = useSelector(store => store.switchMode.mode);
    // console.log("vdobg",id);
    useMovieTrailer(id);
    //useTvSeriesTrailer(id)

    const movieTrailer = useSelector(store => store.movies.trailerVideo);
    //const tvSeriesTrailer ;

    // if (selectedViewOption === "Movies") {
    // } else if (selectedViewOption === "TvSeries") {
    // } else {
    //     return;
    // }

    return (
        <div >
            <iframe className='w-screen aspect-video '

                src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackground
