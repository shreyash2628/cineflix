import React from 'react';
import { IMG_CDN_URL } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addContent, addImdbId } from '../../utils/Store/contentSlice';

const MovieCard = ({key,posterPath,name,id,vote,overview}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClicked = ()=>{
    dispatch(addImdbId(null));
    navigate('/content');


    dispatch(addContent(
      {
        id:id,
        name:name,
        vote:vote,
        overview:overview,
      }
    ));
    }

  return (
    <div className='p-4 w-64 h-auto rounded-lg flex flex-col py-10 ' onClick={handleCardClicked}>
      <img className='shadow-sm shadow-white rounded-lg md:h-full md:w-96' src={IMG_CDN_URL+posterPath}/>
      <div className='w-full h-16  flex flex-row justify-between '>
        <h1 className='text-white font-bold w-2/3 py-2'>{name}</h1>
        <h1 className='text-white font-bold py-2'>{vote.toFixed(1)} ⭐</h1>

      </div>
    </div>
  )
}

export default MovieCard
