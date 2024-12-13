/* import React from 'react';
import LogoLaRioja from '../assets/images/LogoByN.png';
import { Link, useLocation } from 'react-router-dom';


const NavBar = () => {
  const location = useLocation();
  return (
     <nav className='bg-primaryDark h-20 lg:justify-between items-center flex shadow-xl md:flex md:justify-between'>
      <div className='ml-20 cursor-pointer'>
        <img src={LogoLaRioja} className='w-48 my-2 items-center' />
      </div>
      <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-primaryDark w-full left-0 md:w-full md:my-0 my-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all easy-in duration-500md'>
        <li className='mx-4 my-6 md:my-0'>
          <Link to='/home' className='text-secondaryLight text-center font-bold py-4 px-6 rounded-lg hover:bg-secondaryLight hover:text-primaryDark hover:duration-500'>
            Inicio
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to='/imperdibles' className='text-secondaryLight text-center font-bold py-4 px-6 rounded-lg hover:bg-secondaryLight hover:text-primaryDark  hover:duration-500'>
            Imperdibles
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to='/queVisitar' className='text-secondaryLight text-center font-bold py-4 px-6 rounded-lg hover:bg-secondaryLight hover:text-primaryDark hover:duration-500'>
            ¿Qué visitar?
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to='/queHacer' className='text-secondaryLight text-center font-bold py-4 px-6 rounded-lg hover:bg-secondaryLight hover:text-primaryDark hover:duration-500'>
            ¿Qué hacer?
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to='/informacion' className='text-secondaryLight text-center font-bold py-4 px-6 rounded-lg hover:bg-secondaryLight hover:text-primaryDark hover:duration-500'>
            Información
          </Link>
        </li>
      </ul>
    </nav> 
  
)
}

export default NavBar;
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoLaRioja from '../assets/images/LogoByN.png';
import menu  from '../assets/svg/menu.svg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-primaryDark h-20 justify-between items-center flex shadow-xl md:flex md:justify-between relative'>
      <div className='ml-20 cursor-pointer'>
        <img src={LogoLaRioja} className='lg:w-48 md:w-48 sm:w-48 my-2 items-center' alt='Logo' />
      </div>
      <button
        className='inline-flex items-center justify-center p-2 rounded-md text-secondaryLight hover:text-white md:hidden'
        onClick={toggleMenu}
      >
        <img src= {menu} />
      </button>
      <ul className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center w-full md:w-auto`}>
        <li className='mx-4 my-6 md:my-0'>
          <Link to='/home' className='text-secondaryLight text-center font-bold py-4 px-6 rounded-lg hover:bg-secondaryLight hover:text-primaryDark hover:duration-500'>
            Inicio
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to='/imperdibles' className='text-secondaryLight text-center font-bold py-4 px-6 rounded-lg hover:bg-secondaryLight hover:text-primaryDark hover:duration-500'>
            Imperdibles
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to='/queVisitar' className='text-secondaryLight text-center font-bold py-4 px-6 rounded-lg hover:bg-secondaryLight hover:text-primaryDark hover:duration-500'>
            ¿Qué visitar?
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to='/queHacer' className='text-secondaryLight text-center font-bold py-4 px-6 rounded-lg hover:bg-secondaryLight hover:text-primaryDark hover:duration-500'>
            ¿Qué hacer?
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to='/informacion' className='text-secondaryLight text-center font-bold py-4 px-6 rounded-lg hover:bg-secondaryLight hover:text-primaryDark hover:duration-500'>
            Información
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
