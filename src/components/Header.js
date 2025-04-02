import React from 'react'
import { NETFLIX_LOGO_F } from '../utils/constant'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from black z-10'>
        <img src={NETFLIX_LOGO_F} alt='logo' className='w-44' />
    </div>
  )
}

export default Header;