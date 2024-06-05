import React, { useState, useEffect } from 'react';
import UserAccountManage from './UserAccountManage';
import { auth } from '../../utils/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../utils/Store/userSlice';
import { useNavigate } from 'react-router-dom';

import { addGptSearchedValue } from '../../utils/Store/GptSearchedSlice';
import useSearchContent from '../../customHooks/useSearchContent';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showUserAccountManage, setShowUserAccountManage] = useState(false);
  const [showGPTSearchBar, setShowGPTSearchBar] = useState(false);
  const [GptSearchedValue, setGptSearchedValue] = useState('');
  const handleUserAccountManage = () => {
    setShowUserAccountManage(!showUserAccountManage);
  }


  // console.log(GptSearchedValue);

  useEffect(() => {
    //whenever auth ischanged means whenever someone login or logout
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    dispatch(addGptSearchedValue(GptSearchedValue));
  }, [GptSearchedValue]);


  // const fetchData = useSearchContent(GptSearchedValue);
 

  const handleSearchButton = ()=>{
    // fetchData();
  }


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-end">
      <div className='flex justify-center items-center'>
        {showGPTSearchBar ?
          <div className='flex flex-row items-center mr-3 rounded-lg bg-gray-800'>

            <input
              className="my-2 bg-gray-800  text-gray-400 w-96 rounded-md px-3 mx-3 "
              type="text"
              value={GptSearchedValue}
              onChange={(e) => setGptSearchedValue(e.target.value)}
            />

            <button className='pr-3 ' onClick={handleSearchButton}>🔍</button>

          </div> : <></>
        }
        <button className='text-white border py-1 rounded-md px-2' onClick={() => setShowGPTSearchBar(!showGPTSearchBar)}
        >{showGPTSearchBar ? "❌ Close-Search" : "🔍 GPT-Search"}</button>
      </div>
      <div className='flex p-2 h-14 flex-col ' onMouseEnter={handleUserAccountManage}
        onMouseLeave={handleUserAccountManage}>
        <img className='h-11 mr-4 rounded-lg ' src="https://occ-0-4608-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRhunw1-HwxU3HlvmFM9UycO_VOxatA9nWQ4aaCKTCxOVOv5OchUTFO6RJznhN4G2scAmgXUpHzkkVdq9_8f9ui0RksluPFA3w.png?r=229"></img>
        {
          showUserAccountManage ? <UserAccountManage handleUserAccountManage={handleUserAccountManage} /> : <></>
        }
      </div>
    </div>
  )
}

export default Header
