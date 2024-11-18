import React from 'react';
import datoIglesias from '../data/iglesias';

const iglesias = () => {
  return (
    <>
      <div className='items-center justify-center'>
        <h1 className='flex text-8xl justify-center text-primaryDark font-bold text-center mb-3.5 mt-4'>Iglesias</h1>
        <div className='flex justify-center items-center text-center'>
        <div className='grid grid-cols-3 gap-3 justify-center text-center pt-1.5 pb-1'>
          {datoIglesias.map((dato, id) => (
            <div key={id} className='flex flex-col items-center text-center mx-auto justify-center'>
              <img src={dato.photo} className='w-1/2' />
              <h2 className='text-center mx-auto my-2'>{dato.description}</h2>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default iglesias;
