import React from 'react';
import { IMG_CDN_URL } from '../../utils/constants';

const MovieCard = ({posterPath,name}) => {
  return (
    <div className='p-4 w-64  rounded-lg '>
      <img className='shadow-sm shadow-white rounded-lg md:h-full md:w-96' src={IMG_CDN_URL+posterPath}/>
      {/* <h1 className='text-white'>{name}</h1> */}
    </div>
  )
}

export default MovieCard
