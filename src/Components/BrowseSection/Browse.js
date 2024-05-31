import React from 'react';
import Header from './Header';
import MainVideoContainer from './MainVideoContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedTvSeries from '../../customHooks/useTopRatedTvSeries';
import useTopRatedMovies from '../../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../../customHooks/useUpcomingMovies';
import useNowPlayingMovies from '../../customHooks/useNowPlayingMovies';
import usePopularMovies from '../../customHooks/usePopularMovies';
import useUpcomingTvSeries from '../../customHooks/useUpcomingTvSeries';
import usePopularTvSeries from '../../customHooks/usePopularTvSeries';
import useNowPlayingTvSeries from '../../customHooks/useNowPlayingTvSeries';

const Browse = () => {
  useTopRatedMovies();
  useTopRatedTvSeries();
  useUpcomingMovies();
  useUpcomingTvSeries();
  useNowPlayingMovies();
  useNowPlayingTvSeries();
  usePopularMovies();
  usePopularTvSeries();

  return (
    <div className=''>
      <Header/>
      <MainVideoContainer/>
      <SecondaryContainer/>

    </div>
  )
}

export default Browse
