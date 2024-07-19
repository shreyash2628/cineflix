import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import SearchedContentContainer from './SearchedContentContainer';

const Browse = () => {
  const dispatch=useDispatch();
  const [searchedContent,setSearchedContent]=useState(null);

  const mode = useSelector(store => store.switchMode?.mode);

  useTopRatedMovies();
  useTopRatedTvSeries();
  useUpcomingMovies();
  useUpcomingTvSeries();
  useNowPlayingMovies();
  useNowPlayingTvSeries();
  usePopularMovies();
  usePopularTvSeries();
const searchedValue = useSelector(store => store.gptSearchedValue?.value);
  return (
    <div className=''>
      <Header />
      {
        searchedValue==='' ? 
        <>
        <MainVideoContainer />
        <SecondaryContainer />
        </>
        :
        <>
        <SearchedContentContainer/>
         </>
      } 
    </div>
  )
}

export default Browse
