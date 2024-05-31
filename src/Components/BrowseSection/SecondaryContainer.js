import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const mode = useSelector(store => store.switchMode?.mode);
  const { movies, tvSeries } = useSelector(store => ({
    movies: store.movies,
    tvSeries: store.tvSeries
  }));

  const sections = [
    { title: mode === "Movies" ? "Upcoming Movies" : "Upcoming TvSeries", content: mode === "Movies" ? movies.upcomingMovies : tvSeries.upComingTvSeries },
    { title: mode === "Movies" ? "Popular Movies" : "Popular TvSeries", content: mode === "Movies" ? movies.popularMovies : tvSeries.popularTvSeries },
    { title: mode === "Movies" ? "Top Rated Movies" : "Top Rated TvSeries", content: mode === "Movies" ? movies.topRatedMovies : tvSeries.topRatedTvSeries },
    { title: mode === "Movies" ? "Now Playing Movies" : "Now Playing TvSeries", content: mode === "Movies" ? movies.nowPlayingMovies : tvSeries.nowPlayingTvSeries }
  ];

  return (
    <div className='bg-black '>
      <div className='md:-mt-72 md:relative md:z-20 md:px-5 '>
        {
          sections.map(section => (
            <MovieList key={section.title} title={section.title} content={section.content} />
          ))
        }
      </div>
    </div>
  )
}

export default SecondaryContainer
