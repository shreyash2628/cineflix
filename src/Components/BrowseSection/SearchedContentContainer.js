import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import SearchedVideoShimmerUi from './SearchedVideoShimmerUi';

const SearchedContentContainer = () => {
    const data = useSelector(store => store.gptSearchedValue?.content);
    const showShimmer = useSelector(store => store.gptSearchedValue?.showShimmer);
    const movieCards = data?.map((moviesListData) =>
        moviesListData?.map((movieData, i) => {
            if (movieData.poster_path !== null) {
                return (
                    <MovieCard
                        key={movieData?.id}
                        posterPath={movieData.poster_path}
                        name={movieData.original_title}
                        id={movieData.id}
                        vote={movieData.vote_average}
                        overview={movieData.overview}
                    />
                );
            }
        })
    );

    return (
        <div className='bg-black w-screen h-auto flex items-center justify-center'>

            <div className='h-full mt-[160px] w-full  p-10 flex flex-wrap  md:min-h-screen'>
                {
                    (showShimmer || data === undefined) ? <>
                        {
                            <SearchedVideoShimmerUi />
                        }
                    </> : <>
                        {movieCards}

                    </>
                }

            </div>
        </div>
    )
}

export default SearchedContentContainer;
