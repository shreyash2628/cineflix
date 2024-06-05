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
import { useSelector } from 'react-redux';
import MainPageShimmer from './MainPageShimmer';

const Browse = () => {
  useTopRatedMovies();
  useTopRatedTvSeries();
  useUpcomingMovies();
  useUpcomingTvSeries();
  useNowPlayingMovies();
  useNowPlayingTvSeries();
  usePopularMovies();
  usePopularTvSeries();

  const value = useSelector(store => store.gptSearchedValue?.value);

  return (
    <div className=''>
      <Header />

      {
        value ? <><MainPageShimmer/></> : <><MainVideoContainer />
          <SecondaryContainer /></> 
      }



    </div>
  )
}

export default Browse
