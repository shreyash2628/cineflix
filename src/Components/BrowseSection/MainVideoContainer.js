import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainVideoContainer = () => {
    const [originalTitle, setOriginalTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [voteAverage, setVoteAverage] = useState(0);
    const [videoId, setVideoId] = useState(null);

    const moviesFromStore = useSelector(store => store.movies?.topRatedMovies);
    const tvSeriesFromStore = useSelector(store => store.tvSeries?.topRatedTvSeries);

    const mode = useSelector(store => store.switchMode?.mode);
    const supposevideoId = useSelector(store => store.switchMode?.trailer);

    useEffect(() => {
        if (mode === "Movies") {
            if (moviesFromStore && moviesFromStore.results.length > 0) {
                const movieTrailer = moviesFromStore.results[3];
                console.log("movtr", movieTrailer);
                setOriginalTitle(movieTrailer.original_title);
                setOverview(movieTrailer.overview);
                setVoteAverage(movieTrailer.vote_average);
                setVideoId(movieTrailer.id);
            }
        } else {
            if (tvSeriesFromStore && tvSeriesFromStore.results.length > 1) {
                const tvSeriesTrailer = tvSeriesFromStore.results[1];
                setOriginalTitle(tvSeriesTrailer.original_name);
                setOverview(tvSeriesTrailer.overview);
                setVoteAverage(tvSeriesTrailer.vote_average);
                setVideoId(tvSeriesTrailer.id);
            }
        }
    }, [moviesFromStore, tvSeriesFromStore, mode]);

    if (videoId === null) return;

    return (
        <div className=''>
            <VideoTitle title={originalTitle} overview={overview} vote_average={voteAverage?.toFixed(1)} />
            <VideoBackground id={videoId} />
        </div>
    );
};

export default MainVideoContainer;
