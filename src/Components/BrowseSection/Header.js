import React,{useState,useEffect} from 'react';
import UserAccountManage from './UserAccountManage';
import CineflixGptLogo from "../../Assets/cineflixgpt.gif";
import { auth } from '../../utils/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/userSlice';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showUserAccountManage,setShowUserAccountManage] = useState(false);

  const handleUserAccountManageClicked = ()=>{
    console.log("clicked");
    setShowUserAccountManage(!showUserAccountManage);
  }

  useEffect(()=>{
    //whenever authischanged means whenever someone login or logout
    onAuthStateChanged(auth, (user) => {
      if (user) {    
        const {uid,email,displayName} = user;
        dispatch(addUser({ uid:uid, email:email, displayName:displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  },[]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-end">
  
        {/* <img className='  ' src={CineflixGptLogo}></img> */}
        
        <div className='flex p-2 h-14 flex-col ' onClick={handleUserAccountManageClicked}>
        <img className='h-11 mr-4 rounded-lg ' src="https://occ-0-4608-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRhunw1-HwxU3HlvmFM9UycO_VOxatA9nWQ4aaCKTCxOVOv5OchUTFO6RJznhN4G2scAmgXUpHzkkVdq9_8f9ui0RksluPFA3w.png?r=229"></img>
        {
          showUserAccountManage?<UserAccountManage />:<></>
        }
        </div>
       

    </div>
  )
}

export default Header
