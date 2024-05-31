import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  
  const movies = useSelector((store) => store.movies);
  const tvSeries = useSelector((store)=> store.tvSeries);

  return (
    <div className='bg-black '>

      <div className='md:-mt-72 md:relative md:z-20 md:px-5 '>

        <MovieList title={"Upcoming "} movies={tvSeries.upComingTvSeries} />

        <MovieList title={"Popular"} movies={movies.popularMovies} />


        <MovieList title={"Top Rating "} movies={movies.topRatedMovies} />

        <MovieList title={"Now Playing "} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
