import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import SearchedVideoShimmerUi from './SearchedVideoShimmerUi';

const SearchedContentContainer = () => {

    const [searchedContent, setSearchedContent] = useState('');
    const arr=[];

    // const i=0;
    // while(i<20)
    //     {
    //         arr[i]=0;
    //         i++;
    //     }

    const data = useSelector(store => store.gptSearchedValue?.content);
    // const filteredData = data?.results?.filter((item) => item.poster_path != null);

    const filteredData = data?.results?.filter((items)=>items.poster_path!=null);

    console.log("filteredData",filteredData);
    return (
        <div className='bg-black w-screen h-auto flex items-center justify-center'>

            <div className='h-full mt-[160px] w-full  p-10 flex flex-wrap  md:min-h-screen'>
                {
                    filteredData === "" || filteredData === undefined ? <>
                    {
                        // arr.map((item)=>{
                        //    return <SearchedVideoShimmerUi/>
                        // })
                    }

                    
                    
                    </> : <>

                        {
                            filteredData?.map((data) => (
                                

                                <>

                                    <MovieCard key={data.id} posterPath={data?.poster_path} name={data?.original_title} id={data?.id} vote={data?.vote_average} overview={data?.overview}/>

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
