import React from 'react';
import Mapa from '../assets/images/Mapa.jpg'

const home = () => {
  return (
    <div className='flex flex-col items-center font-text'>
     <div className='flex m-7 mt-8'>
        <h1 className='text-6xl text-primaryDark font-bold'>Características</h1>
      </div>
      <div className='flex justify-between my-10'>
        <img src={ Mapa } className='w-1/2 h-[582px] mx-4'/>
        <div className='bg-secondaryLight mx-8'>
        <h2 className='p-10 text-6xl text-justify items-center'>
          Es conocido popularmente como “la costa riojana”. Este apelativo se debe a que las localidades se ubican sobre el “costado” oriental del cordón del Velazco.
          Su nombre honra la memoria del sacerdote riojano Pedro Ignacio de Castro Barros, miembro del cuarto período de la Asamblea del Año XIII y del Congreso de Tucumán.
          Tiene una extensión de 1.420 km2 y limita al norte y nordeste con el departamento Arauco, al este con el departamento Capital, al sur con el departamento Sanagasta y al oeste con los
          departamentos Famatina y San Blas de Los Sauces.
        </h2>
        </div>
      </div>
    </div>
  )
}

export default home;
