import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from './../customHooks/useNowPlayingMovies';
import MainVideoContainer from './MainVideoContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
 
useNowPlayingMovies();

  return (
    <div className=' h-screen'>
      <Header/>
      <MainVideoContainer/>
      <SecondaryContainer/>

    </div>
  )
}

export default Browse
