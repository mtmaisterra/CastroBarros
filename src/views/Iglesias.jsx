import React from 'react';
import datoIglesias from '../data/iglesias';

const iglesias = () => {
  return (
    <>
      <div className='items-center justify-center'>
        <h1 className='flex text-8xl justify-center text-primaryDark font-bold text-center mt-[15px] mb-3'>Iglesias</h1>
        <div className='flex justify-center items-center text-center'>
        <div className='grid grid-cols-3 gap-3 justify-center text-center pt-2.5 pb-2'>
          {datoIglesias.map((dato, id) => (
            <div key={id} className='flex flex-col items-center text-center mx-auto justify-center'>
              <img src={dato.photo} className='w-3/4 h-[256px]' />
              <h2 className='text-center mx-auto mt-2 mb-2.5'>{dato.description}</h2>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default iglesias;
