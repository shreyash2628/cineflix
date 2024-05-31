import React from 'react';
import Header from './Header';
import MainVideoContainer from './MainVideoContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedTvSeries from '../../customHooks/useTopRatedTvSeries';
import useTopRatedMovies from '../../customHooks/useTopRatedMovies';

const Browse = () => {
  useTopRatedMovies();
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
