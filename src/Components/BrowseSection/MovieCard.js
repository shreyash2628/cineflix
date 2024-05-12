import React from 'react';
import { IMG_CDN_URL } from '../../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='p-4 w-64 md:px-6 '>
      <img src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard
