import React from 'react';
import { Link } from 'react-router-dom';


const inicio = () => {
  return (
    <div className='bg-fondoInicio bg-center bg-cover items-center h-screen font-text'>
      <h1 className='pt-14 text-11xl text-center justify-center font-extrabold  text-secondaryLight'>Castro Barros</h1>
<h2 className='pt-16 text-center justify-center text-8xl mx-96 font-extrabold  text-secondaryLight'>Donde la serenidad de la naturaleza se fusiona con la rica tradición riojana.</h2>
<h2 className='pt-16 text-right justify-right mr-40 text-5xl font-extrabold text-secondaryLight'>¡Descubre el encanto escondido de La Rioja!</h2>
   <Link to='/home' className='flex justify-end text-right pt-16 mr-40 items-end'>
    <button className='w-[240px] h-[70px] bg-secondaryDark text-primaryDark rounded-xl font-bold text-3xl text-center'>
Ven a conocerla
    </button>
   </Link>
    </div>
  )
}

export default inicio;
