import React from 'react';
import MovieCard from './MovieCard';

const MainPageShimmer = () => {
    const arr=[1,2,2,2,2,2,2,2,2,2];
    return (
        <div className="w-full h-screen pt-[6%] px-6 md:px-24  text-white bg-gradient-to-r from-black to-slate-600  justify-center align-center">
            <h1 className="md:text-6xl font-bold h-10 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[480px] mb-6 animate-pulse"></h1>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4 animate-pulse"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4 animate-pulse"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-4 animate-pulse"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4 animate-pulse"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4 animate-pulse"></div>

            <div className="w-full" id="shimmer-ui-overview">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[410px] mb-4 animate-pulse"></div>
                <div className="flex flex-row">
                    <div className="h-12 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mr-4 animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded-full dark:bg-gray-700 w-48 animate-pulse"></div>
                </div>
            </div>

            <div className='flex overflow-x-scroll no-scrollbar overflow-y: auto '>
                    <div className='flex'>
                        {
                            arr.map((movies =>
                                <div className="w-64 h-64 bg-gray-800 rounded-lg shadow-lg mx-4 my-10 relative overflow-hidden animate-pulse">
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  {/* <div className="animate-pulse w-3/4 h-3/4 bg-gray-700 rounded-lg"></div> */}
                                </div>
                              </div>
                            ))
                        }
                    </div>

                </div>
            
        </div>

        
    );
};

export default MainPageShimmer;
