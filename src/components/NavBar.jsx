import React from 'react';
import LogoLaRioja from '../assets/images/LogoByN.png';
import { Link, useLocation } from 'react-router-dom';


const NavBar = () => {
  const location = useLocation();
  return (
    <nav className='bg-primaryDark h-20 justify-between items-center flex'>
      <div className='ml-20'>
        <img src={LogoLaRioja} className='w-40' />
      </div>
      <div className='mr-20 text-secondaryLight text-2xl font-bold'>
        <Link to='/home' className={`mx-8 ${location.pathname === '/home' ? 'text-primaryDark bg-secondaryLight font-bold py-2 px-4 rounded-lg' : 'hover:text-primaryDark hover:bg-secondaryLight hover:font-bold hover:py-2 hover:px-4 hover:rounded-lg'}`} >
          Inicio
        </Link>
        <Link to='/imperdibles' className={`mx-8 ${location.pathname === '/imperdibles' ? 'text-primaryDark bg-secondaryLight font-bold py-2 px-4 rounded-lg' : 'hover:text-primaryDark hover:bg-secondaryLight hover:font-bold hover:py-2 hover:px-4 hover:rounded-lg'}`}>
          Imperdibles
        </Link>
        <Link to='/queVisitar' className={`mx-8 ${location.pathname === '/queVisitar' ? 'text-primaryDark bg-secondaryLight font-bold py-2 px-4 rounded-lg' : 'hover:text-primaryDark hover:bg-secondaryLight hover:font-bold hover:py-2 hover:px-4 hover:rounded-lg'}`}>
          ¿Qué visitar?
        </Link>
        <Link to='/queHacer' className={`mx-8 ${location.pathname === '/queHacer' ? 'text-primaryDark bg-secondaryLight font-bold py-2 px-4 rounded-lg' : 'hover:text-primaryDark hover:bg-secondaryLight hover:font-bold hover:py-2 hover:px-4 hover:rounded-lg'}`}>
          ¿Qué hacer?
        </Link>
        <Link to='/informacion' className={`mx-8 ${location.pathname === '/informacion' ? 'text-primaryDark bg-secondaryLight font-bold py-2 px-4 rounded-lg' : 'hover:text-primaryDark hover:bg-secondaryLight hover:font-bold hover:py-2 hover:px-4 hover:rounded-lg'}`}>
          Información
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;
