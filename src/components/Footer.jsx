import React from 'react';
import logoCastroBarros from '../assets/images/LogoCastroBarros.png';
import logoLaRioja from '../assets/images/LogoByN.png';
import logoPropio from '../assets/images/MaisterraLogo.png';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-primaryDark flex h-40 flex-col items-center justify-center text-center'>
      <div className='flex justify-centeritems-center text-center mb-6'>        
          <img src={logoCastroBarros} className='w-24' />
          <img src={logoLaRioja} className='w-24' />
          <img src={logoPropio} className='w-24' />
        </div>
        <div className='justify-center items-center text-center'>
        <p className='text-center text-secondaryLight text-1xl'>Copyright &copy; -  {year} - Maisterra digital designs</p>
      </div>
    </footer>
  )
}

export default Footer;