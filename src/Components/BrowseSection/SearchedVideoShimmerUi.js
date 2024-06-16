import React from 'react';

const SearchedVideoShimmerUi = () => {
  return (
    <div  className="  border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 lg:w-60 shadow-2xl lg:m-3 lg:p-1 lg:h-72 pb-8">
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700 ">
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
     
    </div>
  );
};

export default SearchedVideoShimmerUi;
