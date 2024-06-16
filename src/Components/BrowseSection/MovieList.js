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
                            content?.results.map((content =>
                                <MovieCard key={content?.id} posterPath={content?.poster_path} name={content?.original_title} id={content?.id} vote={content?.vote_average} overview={content?.overview}/>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieList;
