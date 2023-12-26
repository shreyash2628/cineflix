import React, { useState } from 'react'

const UserAuthForm = () => {
const [toggleSignIn,setToggleSignIn] = useState(true);
  const handleOnSignUpClick = () =>{
      setToggleSignIn(!toggleSignIn);
  }

  return (
    <div className='border border-blue-950 p-8 bg-gradient from-black absolute top-16'>
      <form className='flex flex-col w-96 '>
      {toggleSignIn?"":<input className='my-2 bg-gray-800 pl-2 py-1 text-gray-400 w-auto'  placeholder='Username' type='text'></input>}
        <input className='my-2 bg-gray-800 pl-2 py-1 text-gray-400 w-auto'  placeholder='Email' type='email'></input>
        <input className='my-2 bg-gray-800 pl-2 py-1 text-gray-400 w-auto'  placeholder='Password' type='password'></input>
        <button className='my-2 bg-green-500 pl-2 py-1 text-white w-auto'>{toggleSignIn?'Login':'Sign Up'}</button>

      </form>
      <div className='flex flex-row justify-center'>
      <p className='text-white mr-1'>{toggleSignIn?'New to Vdo-GPT?':'Already have an account?'}</p>
        <p className='text-white underline cursor-pointer' onClick={handleOnSignUpClick}>{toggleSignIn?'SignUp':'LogIn'}</p>
      </div>
       

    </div>
  )
}

export default UserAuthForm;
