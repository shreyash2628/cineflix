import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import MovieCard from './MovieCard';

const SearchedContentContainer = () => {

    const [searchedContent, setSearchedContent] = useState('');

    const data = useSelector(store => store.gptSearchedValue?.content);

    console.log(data);
    return (
        <div className='bg-black w-screen h-auto flex items-center justify-center'>

            <div className='h-full mt-[160px] w-full border border-white p-10 flex flex-wrap'>
                {
                    data === "" ? <></> : <>

                        {
                            data.results?.map((d) => (

                                <>

                                    <MovieCard key={d.id} posterPath={d?.poster_path} name={d?.original_title}/>

                                </>
                                // console.log(d.id)
                            )
                            )
                        }
                    </>
                }

            </div>
        </div>
    )
}

export default SearchedContentContainer;
