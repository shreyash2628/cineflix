import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../utils/Firebase';

const UserAccountManage = () => {

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
        });
    }
  return (
    <div className='absolute mt-10 w-36 h-24  right-2 top-3 bg-slate-700'>
        <ul className='flex flex-col h-auto '>
        <button className='underline p-2 text-start text-slate-300'>Manage User</button>
        <button className='underline p-2 text-start text-slate-300' onClick={handleSignOut}>Sign Out</button>
        </ul>

    </div>
  )
}

export default UserAccountManage
