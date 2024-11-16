import React from 'react';
import LogoLaRioja from '../assets/images/LogoByN.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='bg-primaryDark h-20 justify-between items-center flex'>
      <div className='ml-20'>
        <img src={LogoLaRioja} className='w-40' />
      </div>
      <div className='mr-20 text-secondaryLight text-2xl font-bold'>
        <Link to='/home'>
          <button className='px-4 py-2 rounded-lg mx-6 hover:bg-secondaryDark hover:text-primaryDark'>Inicio</button>
        </Link>
        <Link to='/imperdibles'>
          <button className='px-4 py-2 rounded-lg mx-6 hover:bg-secondaryDark hover:text-primaryDark'>Imperdibles</button>
        </Link>
        <Link to='/queVisitar'>
          <button className='px-4 py-2 rounded-lg mx-6 hover:bg-secondaryDark hover:text-primaryDark' >¿Qué visitar?</button>
        </Link>
        <Link to='/queHacer'>
          <button className='px-4 py-2 rounded-lg mx-6 hover:bg-secondaryDark hover:text-primaryDark'>¿Qué hacer?</button>
        </Link>
        <Link to='informacion'>
          <button className='px-4 py-2 rounded-lg mx-6 hover:bg-secondaryDark hover:text-primaryDark'>Información</button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;
