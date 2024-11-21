import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const slides = [
  {
    photo: 'path-to-your-image1.jpg',
    alt: 'Image 1 description',
    description: 'Description 1'
  },
  {
    photo: 'path-to-your-image2.jpg',
    alt: 'Image 2 description',
    description: 'Description 2'
  },
  {
    photo: 'path-to-your-image3.jpg',
    alt: 'Image 3 description',
    description: 'Description 3'
  }
];

const QueVisitar = () => {
  return (
    <div className='items-center'>
      <div className='flex-col mb-4'>
        <h1 className='text-8xl text-primaryDark font-bold text-center mt-9 mb-0'>Lo que no puedes dejar de visitar</h1>
        <div className='bg-primaryDark w-24 justify-center rounded-xl ml-auto p-2 mr-10 items-center text-center mt-[-48px]'>
          <Link to='/home' className='text-center justify-center text-2xl text-secondaryLight'>Atrás</Link>
        </div>
      </div>
      <div className="flex items-center w-full mt-16">
        <Swiper className='w-full mx-8' spaceBetween={30} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} pagination={{ clickable: true }} >
          {slides.map((slide, id) => (
            <SwiperSlide key={id}>
              <img src={slide.photo} alt={slide.alt} className="w-screen mx-4" />
              <h2 className='bg-primaryDark text-secondaryLight text-3xl text-center font-bold mx-4'>
                {slide.description}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default QueVisitar;
