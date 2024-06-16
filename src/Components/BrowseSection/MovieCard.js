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

    console.log("checking data",key,' ',posterPath,' ',name,' ',id,' ' ,vote);

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
    <div className='p-4 w-64 h-80 rounded-lg ' onClick={handleCardClicked}>
      <img className='shadow-sm shadow-white rounded-lg md:h-full md:w-96' src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard
