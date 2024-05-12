import React from 'react';
import Header from './Header';
import MainVideoContainer from './MainVideoContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from './../../customHooks/useUpcomingMovies';
import useTopRatedTvSeries from '../../customHooks/useTopRatedTvSeries';

const Browse = () => {
  useUpcomingMovies();
  useTopRatedTvSeries();
  return (
    <div className=''>
      <Header/>
      <MainVideoContainer/>
      <SecondaryContainer/>

    </div>
  )
}

export default Browse
