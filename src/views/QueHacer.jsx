import React from 'react';
import { Link } from 'react-router-dom';
import Festival2 from '../assets/images/Festival2.jpg';
import Festival3 from '../assets/images/Festival3.jpg';
import Festival4 from '../assets/images/Festival4.jpg';

const QueHacer = () => {
  return (
    <div className='items-center mb-7'>
      <div className='flex-col mb-4'>
        <h1 className='text-8xl text-primaryDark font-bold text-center mt-8 mb-0'>Festivales</h1>
        <div className='bg-primaryDark w-24 justify-center rounded-xl ml-auto p-2 mr-10 items-center text-center mt-[-47px]'>
          <Link to='/home' className='text-center justify-center text-2xl text-secondaryLight'>Atrás</Link>
        </div>
      </div>
      <div className='bg-secondaryDark mx-8 mt-10 mb-4 flex items-center'>
        <img src={Festival2} className='p-4 w-[350px] h-40' />
        <h2 className='items-center text-4xl text-primaryDark text-center px-4'>
          Cada verano nos espera el Corzo Javier Cuero Vega, donde las coplas, la harina y la albaca pintan de colores el cielo oscuro de la plaza de Anjullón.
        </h2>
      </div>
      <div className='bg-secondaryDark mx-8 mt-10 mb-4 items-center flex'>       
        <h2 className='items-center text-4xl text-primaryDark text-center px-4'>
          La destreza de los jinetes se demuestran cada año mezclandose con las tradiciones gauchas en el festival de La doma y el folcklore de Pinchas.
        </h2>
        <img src={Festival3} className='p-4 w-[450px] h-40' />
      </div>
      <div className='bg-secondaryDark mx-8 mt-10 mb-4 items-center flex '>
        <img src={Festival4} className='p-4 w-[350px] h-40' />
        <h2 className='items-center text-4xl text-primaryDark text-center px-4'>
          Uno de los festivales tradicionales llega cada febrero a coronar de fiesta a la Costa Riojana, vení a disfrutar del Carnaval de La Plaza en Los Molinos.
        </h2>
      </div>
    </div>
  )
}

export default QueHacer;

