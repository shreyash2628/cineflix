import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, content }) => {
    return (
        <div>
            <div className='md:p-10 md:px-10 '>
                <h1 className='font-bold text-3xl md:pl-4 md:mb-2 text-white'>{title}</h1>
                <div className='flex overflow-x-scroll no-scrollbar overflow-y: auto '>
                    <div className='flex'>
                        {
                            content?.results.map((movies =>
                                <MovieCard key={movies.id} posterPath={movies?.poster_path} name={movies?.original_title}/>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieList;
