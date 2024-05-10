import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../../utils/moviesSlice';
import useMovieTrailer from '../customHooks/useMovieTrailer';

const VideoBackground = () => {
   const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieTrailer();
 

    return (
        <div>
            <iframe className='w-screen aspect-video'
            src={"https://www.youtube.com/embed/" +trailerVideo?.key +"?&autoplay=1&mute=1"}
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
        </div>
    )
}

export default VideoBackground
