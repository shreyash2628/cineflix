import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addSwitchMode } from '../../utils/Store/switchModeSlice';

const UserAccountManage = ({ handleUserAccountManage }) => {
  const dispatch = useDispatch();
  
  const handleMoviesButtonClicked = () => {
    dispatch(addSwitchMode("Movies"));
    handleUserAccountManage();
  };

  const handleTvSeriesButtonClicked = () => {
    dispatch(addSwitchMode("TvSeries"));
    handleUserAccountManage();
  };


  const handleSignOut = () => {
    handleUserAccountManage();
    signOut(auth)
      .then(() => {
        // Sign out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute mt-10 w-auto right-8 top-5 bg-gray-800 rounded-md shadow-md">

      <ul className="flex flex-col">
        <li>
          <button className="block px-4 py-2 text-left text-gray-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={handleMoviesButtonClicked}>
            Movies
          </button>
        </li>
        <li>
          <button className="block px-4 py-2 text-left text-gray-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={handleTvSeriesButtonClicked}>
            TV Series
          </button>
        </li>
        <li>
          <button
            onClick={handleSignOut}
            className="block px-4 py-2 text-left text-gray-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Sign Out
          </button>
        </li>
      </ul>

    </div>
  );
};

export default UserAccountManage;
