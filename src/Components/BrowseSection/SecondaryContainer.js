import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black '>

      <div className='md:-mt-52 md:relative md:z-20 md:px-5'>
        <MovieList title={"Trending"} movies={movies.upcomingMovies} />

        <MovieList title={"Upcoming "} movies={movies.upcomingMovies} />

        <MovieList title={"Top Rating "} movies={movies.upcomingMovies} />

        <MovieList title={"Now Playing "} movies={movies.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
