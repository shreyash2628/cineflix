import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import Header
 from './Header';
const MainVideoContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (movies == null) return;
    const movieTrailer = movies.results[0];
    // console.log("Trailer", movieTrailer);

    const {original_title,overview,popularity} = movieTrailer;

    return (
        <div className=''>
                  {/* <Header/> */}
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground />
        </div>
    )
}

export default MainVideoContainer;
