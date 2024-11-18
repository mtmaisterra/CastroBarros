import React from 'react';
import StaVeraCruz2 from '../assets/images/SantaVeraCruz2.jpg';
import StaVeraCruz3 from '../assets/images/SantaVeraCruz3.jpg';
import Castillo4 from '../assets/images/Castillo4.jpg';

const castillo = () => {
  return (
    <div className='items-center'>
      <h1 className='flex text-8xl justify-center text-primaryDark font-bold text-center mb-3'>Castillo de Dionisio</h1>
      <div className='flex mt-2 items-center'>
        <h2 className='w-1/2 mx-4 text-3xl text-center items-center'>
        Entre los pintorescos cerros del cordón oeste de la Sierra del Velazco, podrás encontrar
        un lugar único, mistico e inexplicablemente hermoso que ayuda a adornar el verde colorido del paisaje.
        </h2>
        <img src={StaVeraCruz2} className='mr-10 h-64 w-[600px] text-center' />
      </div>
      <div className='grid grid-cols-2 gap-2 mb-2'>
        <div className='grid-cols-1 mt-[-60px] ml-10 mb-4'>
          <img src={StaVeraCruz3} className='h-[400px] w-4/5' />
        </div>
        <div className='grid-cols-2 mt-1.5 mb-1.5'>
          <div className='flex flex-col'>
            <h2 className='text-3xl mr-8 ml-[-180px]'>
            A 1800 metros de altura, rodeado de los cordones milenarios, lo agreste y pintoresco del solitario paisaje, aparece misterioso y solemne al
            paso del tiempo la obra de un hombre tan particular como ermitaño, llamado Dionisio Aiscorbe, que en su mente imaginó un hermoso castillo.
            </h2>
            <img src={Castillo4} className='mt-3.5 mb-2 h-[241px] w-3/4 items-center'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default castillo;
