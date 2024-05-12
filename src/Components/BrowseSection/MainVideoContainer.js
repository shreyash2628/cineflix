import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainVideoContainer = () => {
    //     const [originalTitle, setOriginalTitle] = useState('');
    //     const [overview, setOverview] = useState('');
    //     const [voteAverage, setVoteAverage] = useState(0);
    //     const [mid, setMid] = useState('');
    //     const [tid, setTid] = useState('');

    //     //ISKO CHANGE KAR TO TOPRATED MOVIES
    //     const movies = useSelector(store => store.movies?.upcomingMovies);
    //     const tvSeries = useSelector(store => store.tvSeries?.topRatedTvSeries);
    //     const selectedViewOption = useSelector(store => store.switchMode.mode);


    //    // if (movies == null || tvSeries == null) return;
    //     const movieTrailer = movies.results[0];
    //     const tvSeriesTrailer = tvSeries.results[1];
    //     console.log("Trailer 22", movieTrailer);

    //     if(selectedViewOption=="movies")
    //     {
    //         setMovies();
    //     }

    //     const setMovies = ()=>{
    //         setOriginalTitle(movieTrailer.original_title);
    //         setOverview(movieTrailer.overview);
    //         setVoteAverage(movieTrailer.vote_average);
    //         setMid(movieTrailer.id);
    //     }

    //         //setTid('New TV Series ID');

    //         //  const {original_title,overview,vote_average,id} = movieTrailer;//if else


    //     console.log("mvc", mid);

    const [originalTitle, setOriginalTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [voteAverage, setVoteAverage] = useState(0);
    const [mid, setMid] = useState(null);
    const [tid, setTid] = useState('');

    //ISKO CHANGE KAR TO TOPRATED MOVIES
    const movies = useSelector(store => store.movies?.upcomingMovies);
    const tvSeries = useSelector(store => store.tvSeries?.topRatedTvSeries);
    // console.log("after",movies);
    useEffect(() => {
        if (movies && movies.results.length > 0) {
            const movieTrailer = movies.results[0];
            setOriginalTitle(movieTrailer.original_title);
            setOverview(movieTrailer.overview);
            setVoteAverage(movieTrailer.vote_average);
            setMid(movieTrailer.id);

        }
    }, [movies]);
    console.log("MID", mid);

    useEffect(() => {
        if (tvSeries && tvSeries.results.length > 1) {
            const tvSeriesTrailer = tvSeries.results[1];
            // Handle TV series trailer data if needed
        }
    }, [tvSeries]);

    if (mid === null) return;

    return (
        <div className=''>
            <VideoTitle title={originalTitle} overview={overview} vote_average={voteAverage?.toFixed(1)} />
            <VideoBackground id={mid} />
        </div>
    )
}

export default MainVideoContainer;
