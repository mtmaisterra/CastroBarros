import React from 'react';
import Mapa from '../assets/images/Mapa.jpg'

const Home = () => {
  return (
    <div className='items-center font-text'>
     <div className='m-7 mt-4 items-center text-center'>
        <h1 className='text-8xl  text-primaryDark font-bold'>Características</h1>
      </div>
      <div className='flex justify-between my-6 mx-auto'>
        <img src={ Mapa } className='w-1/2 h-[581px] ml-6 mr-4 justify-center'/>
        <div className='mx-8 mt-3.5 mb-4'>
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

export default Home;
