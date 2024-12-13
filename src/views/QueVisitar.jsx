import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import solarCastroBarros from '../assets/images/SolarCastroBarros.jpg';
import museo2 from '../assets/images/MuseoPteMenem.jpg';
import laRosadita from '../assets/images/LaRosadita.jpg';
import left from '../assets/svg/circleLeft.svg';
import right from '../assets/svg/circleRight.svg';

const QueVisitar = () => {
  const slides = [
    {
      photo: solarCastroBarros,
      description: 'Museo del prócer riojano Pedro Ignacio de Castro Barros, cura párroco que representó a la provincia en la Asamblea del Año XIII y el Congreso de Tucumán.'
    },
    {
      photo: museo2,
      description: 'Visita obligada para los turistas, el museo del ex Presidente Carlos Saúl Menem, nos muestra su figura sentada frente a su escritorio.'
    },
    {
      photo: laRosadita,
      description: 'Casa familiar del ex Presidente Carlos Saúl Menem, su nombre hace referencia a la casa de gobierno nacional.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className='items-center'>
      <div className='flex-col mb-4'>
        <h1 className='text-8xl text-primaryDark font-bold text-center mt-4'>Cultura e historia</h1>
        <div className='bg-primaryDark w-24 justify-center rounded-xl ml-auto p-2 mr-10 items-center text-center mt-[-47px]'>
          <Link to='/home' className='text-center justify-center text-2xl text-secondaryLight'>Atrás</Link>
        </div>
      </div>
      <div className="relative mt-4">
        <div className="items-center w-full flex overflow-hidden">
          {slides.map((slide, id) => (
            <div key={id} className={`transition-transform duration-500 ease-in-out transform ${id === currentSlide ? 'translate-x-0' : 'translate-x-full'} w-full flex-shrink-0`}>
              <img src={slide.photo} className="w-full mx-4" alt={`slide-${id}`} />
              <h2 className="bg-primaryDark text-secondaryLight text-3xl text-center font-bold mx-4">
                {slide.description}
              </h2>
            </div>
          ))}
        </div>
        <button className="absolute left-3 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-xl bg-primaryDark text-secondaryLight" onClick={prevSlide}>
          <img src= { left }/>
        </button>
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-xl bg-primaryDark text-secondaryLight" onClick={nextSlide}>
        <img src= { right }/>
        </button>
      </div>
    </div>
  );
};

export default QueVisitar;

