import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import MainPageShimmer from './MainPageShimmer';

const MainVideoContainer = () => {
    const [originalTitle, setOriginalTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [voteAverage, setVoteAverage] = useState(0);
    const [videoId, setVideoId] = useState(null);

    const mode = useSelector(store => store.switchMode?.mode);

    const content = useSelector(store=>store.content);
    console.log("content",content);
    useEffect(() => {
        window.scrollTo(0, 0);
        setOriginalTitle(content.contentName);
        setOverview(content.contentOverview);
        setVoteAverage(content.contentVote);
        setVideoId(content.contentId);
       
    }, [content, mode]);

    if (videoId === null) return (
        <MainPageShimmer/>
    );

    return (
        <div className=''>
            <VideoTitle title={originalTitle} overview={overview} vote_average={voteAverage?.toFixed(1)} />
            <VideoBackground id={videoId} />
        </div>
    );
};

export default MainVideoContainer;
