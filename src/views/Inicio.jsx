import React from 'react';
import { Link } from 'react-router-dom';


const inicio = () => {
  return (
    <div className='lg:bg-fondoInicio sm:bg-fondoInicio md:bg-fondoInicio xs:bg-fondoInicio lg:bg-center xs:bg-center xs:h-screen xs:bg-cover lg:bg-cover sm:bg-center sm:bg-cover md:bg-center md:bg-cover lg:items-center md:items-center sm:items-center xs:items-center sm:h-screen md:h-screen lg:h-screen font-text'>
      <h1 className='py-20  lg:text-9xl text-center justify-center font-bold text-secondaryLight md:text-9xl sm:text-8xl xs:text-7xl'>Castro Barros</h1>
      <h2 className='text-center justify-center lg:text-7xl md:text-7xl sm:text-6xl xs:text-6xl md:leading-20 sm:leading-20 xs:leading-32 lg:mx-28 mx-24 font-bold  text-secondaryLight'>Donde la serenidad de la naturaleza se fusiona con la rica tradición riojana.</h2>
      <h2 className='xs:py-1 py-4 text-right justify-right lg:mx-16 xs:text-center md:mx-12 xs:m-12 sm:mx-12 lg:text-5xl md:text-5xl sm:text-4xl xs:text-3xl font-bold text-secondaryLight'>¡Descubre el encanto escondido de La Rioja!</h2>
      <Link to='/home' className='flex justify-end text-center sm:pt-3 xs:pt-8 md:pt-4 lg:pt-16 sm:mr-24 lg:mr-40 xs:mr-20 md:mr-28'>
        <button className='lg:w-[240px] lg:h-[70px] md:w-[200px] md:h-[65px] sm:w-[200px] xs:w-[180px] xs:h-[60px] sm:h-[65px] bg-secondaryDark text-primaryDark lg:rounded-xl font-bold text-3xl xs:text-2xl md:rounded-md sm:rounded-md xs:rounded-md text-center'>
          Ven a conocerla
        </button>
      </Link>
    </div>
  )
}

export default inicio;
