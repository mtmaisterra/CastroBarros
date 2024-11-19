import React from 'react';
import Yacurmana from '../assets/images/Yacurmana.jpg';
import Castillo3 from '../assets/images/Castillo3.jpg';
import Castillo1 from '../assets/images/Castillo1.jpg';
import Castillo2 from '../assets/images/Castillo2.jpg';
import LaGruta from '../assets/images/LaGruta.jpg';

const Paisajes = () => {
  return (
    <div className='items-center'>
      <h1 className='flex text-primaryDark text-6xl text-center justify-center font-semibold my-6'>
        Donde las bellezas de la naturaleza muestran sus distintos colores
      </h1>
      <div className='justify-center flex items-center'>
        <img src={Yacurmana} className='w-[500px] h-[240px] ml-auto mr-20 mt-[-320px]' />
        <img src={Castillo3} className='w-[400px] h-[600px] mt-6 mb-16' />
        <img src={Castillo1} className='w-[500px] h-[200px] mr-auto ml-20 mt-[-320px]' />
      </div>
      <div>
        <img src={Castillo2} className='w-[500px] h-[240px] mr-auto ml-72 mt-[-348px] mb-96' />
        <img src={LaGruta} className='w-[400px] h-[300px] ml-auto mr-96 mt-[-625px] mb-8' />
      </div>
    </div>
  )
}

export default Paisajes;

