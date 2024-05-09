
import React ,{useEffect, useState} from 'react';
import UserAuthForm from './UserAuthForm';
import Header from '../BrowseSection/Header';
import { auth } from '../../utils/Firebase';

const Login = () => {  
  const [showHeader,setShowHeader] = useState(true);

  useEffect(()=>{
if(auth.currentUser===null){
  setShowHeader(!showHeader);
}
  },[])

  return (
    <div className='flex flex-col items-center justify-center h-screen sm:flex sm:items-center sm:justify-center sm:h-screen md:flex md:items-center md:justify-center md:h-screen lg:flex lg:items-center lg:justify-center lg:h-screen'>
     {showHeader?<Header/>:<></>}
      <img className='h-full w-full sm:h-screen sm:w-screen md:h-screen md:w-screen lg:h-screen lg:w-screen' src='https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt="Background"></img>
      <div className='absolute top-0 flex flex-col items-center justify-center w-full h-full sm:absolute sm:top-0 sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-full sm:h-full md:absolute md:top-0 md:flex md:flex-col md:items-center md:justify-center md:w-full md:h-full lg:absolute lg:top-0 lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-full lg:h-full'>
        <UserAuthForm  />
      </div>
    </div>
  );
}

export default Login;
