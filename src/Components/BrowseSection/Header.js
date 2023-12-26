import React from 'react';
import { LOGO } from '../../utils/constants';
import background from '../../Assets/background.jpg'

const Header = () => {
  return (
    <div className='relative'>
        <img className='h-screen w-screen' src={background}></img>
        <img className=' w-96 absolute  top-0  ' src={LOGO}></img>

    </div>
  )
}

export default Header
