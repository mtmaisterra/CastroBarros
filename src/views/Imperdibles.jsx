import React from 'react';
import { Link } from 'react-router-dom';
import imperdibles from '../data/dataBase';

const Imperdibles = () => {
  return (
    <div className='flex items-center'>
    <div className='flex-col'>
      <h1 className='text-8xl text-primaryDark font-bold text-center mt-9 mb-3'>Lo que no puedes dejar de visitar</h1>      
      <div className='w-full h-full grid grid-cols-3 gap-3 px-8'>
        {imperdibles.map((imperdible, id) => (
          <div className='bg-secondaryDark m-12 mb-6' key={id}>
            <img src={imperdible.photo} className='p-8 w-full h-3/4 rounded-xl' />
            <h2 className='text-secondaryLight text-2xl text-center'>{imperdible.description}</h2>
            <div className='mt-8 mb-9 mr-16 text-right'>
              <Link to={imperdible.link} className='bg-primaryLight text-secondaryLight font-bold text-1xl py-2 px-4 mt-8.5'>
                Más información
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Imperdibles;
