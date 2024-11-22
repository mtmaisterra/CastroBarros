import React from 'react';
import { Link } from 'react-router-dom';
import { facebook, instagram, mail, phone, youtube } from '../assets';

const Informacion = () => {
  return (
    <div className='items-center'>
      <h1 className='mt-5 mb-4 text-primaryDark text-7xl text-center font-bold'>Información</h1>
      <div className='w-full text-right mt-[-75px] mb-8'>
        <Link to='/home' className='text-2xl text-secondaryLight'>
          <button className='bg-primaryDark w-24 rounded-xl p-2 mr-8 text-center justify-right'>
            Atrás
          </button>
        </Link>
      </div>
      <div className='mb-4 items-center'>
        <h2 className='text-6xl text-primaryDark font-bold text-center my-4'>Teléfonos útiles</h2>
      </div>
      <div className='flex items-center'>
        <img src={phone} className='ml-6 bg-secondaryDark w-16 h-16 p-4 rounded-xl' />
        <h2 className='ml-2 my-3 text-4xl text-primaryDark'>
          Municipalidad Castro Barros - 3827-123456
        </h2>
      </div>
      <div className='flex items-center'>
        <img src={phone} className='ml-6 bg-secondaryDark w-16 h-16 p-4 rounded-xl' />
        <h2 className='ml-2 my-3 text-4xl text-primaryDark'>
          Defensa Civil - 3827-456789
        </h2>
      </div>
      <div className='flex items-center'>
        <img src={phone} className='ml-6 bg-secondaryDark w-16 h-16 p-4 rounded-xl' />
        <h2 className='ml-2 my-3 text-4xl text-primaryDark'>
          Hospital Mohibe Akil de Menem - Emergencias - 3827- 987654
        </h2>
      </div>
      <div className='mb-4 items-center'>
        <h2 className='text-6xl text-primaryDark font-bold text-center my-4'>Correo electrónico</h2>
        <div className='flex items-center'>
          <img src={mail} className='ml-6 bg-secondaryDark w-16 h-16 p-4 rounded-xl' />
          <h2 className='ml-2 my-3 text-5xl text-primaryDark'>
            lacosta@muniCB.com
          </h2>
        </div>
      </div>
      <div className='items-center'>
        <h2 className='text-6xl text-primaryDark font-bold text-center mb-2.5'>Redes sociales</h2>
        <div className='flex items-center mb-8'>
          <img src={instagram} className='mx-6 bg-secondaryDark w-16 h-16 p-4 rounded-xl' />
          <img src={facebook} className='mx-6 bg-secondaryDark w-16 h-16 p-4 rounded-xl' />
          <img src={youtube} className='mx-6 bg-secondaryDark w-16 h-16 p-4 rounded-xl' />
        </div>
      </div>      
    </div>
  )
}

export default Informacion

