import React from 'react'
import background from '../../Assets/background.jpg'
import UserAuthForm from './UserAuthForm';
const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen '>
    <img className='h-screen w-screen' src={background} alt="Background"></img>
    <div className='absolute top-0 flex flex-col items-center justify-center w-full h-full'>
      {/* <h1 className='w-96 absolute top-0 left-0   text-red-500 text-5xl' >VDO-GPT</h1> */}
      <UserAuthForm className='opacity-50'/>
    </div>
  </div>
  
  )
}

export default Login;
