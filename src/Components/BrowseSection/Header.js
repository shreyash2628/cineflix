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
    <div className='flex flex-row justify-between  h-10  md:h-16 w-screen'>
  
        <img className='  ' src={CineflixGptLogo}></img>
        
        <div className='flex p-2 h-14 flex-col ' onClick={handleUserAccountManageClicked}>
        <img className='h-10 ' src="https://occ-0-4608-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRhunw1-HwxU3HlvmFM9UycO_VOxatA9nWQ4aaCKTCxOVOv5OchUTFO6RJznhN4G2scAmgXUpHzkkVdq9_8f9ui0RksluPFA3w.png?r=229"></img>
        {
          showUserAccountManage?<UserAccountManage />:<></>
        }
        </div>
       

    </div>
  )
}

export default Header
