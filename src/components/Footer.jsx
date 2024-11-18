import React from 'react';
import logoCastroBarros from '../assets/images/LogoCastroBarros.png';
import logoLaRiojaTurismo from '../assets/images/logoLaRiojaTurismo.png';
import logoPropio from '../assets/images/MaisterraLogo.png';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-primaryDark flex mt-1.5 h-[163px] flex-col items-center justify-center text-center'>
      <div className='flex justify-centeritems-center text-center mb-6'>        
          <img src={logoCastroBarros} className='w-24 mx-2' />
          <img src={logoLaRiojaTurismo} className='w-32 mx-2' />
          <img src={logoPropio} className='w-24 mx-2' />
        </div>
        <div className='justify-center items-center text-center'>
        <p className='text-center text-secondaryLight text-1xl mb-1.5'>Copyright &copy; -  {year} - Maisterra digital designs</p>
      </div>
    </footer>
  )
}

export default Footer;