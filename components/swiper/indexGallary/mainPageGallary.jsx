import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


export default function MainPageGallary() {
  return (
    <>
    <h4 className='index-title'>نگارخانه سیمون</h4>
    <div className='mt-12 mb-6'>
      <Swiper
        pagination={{
            clickable: true,
        }}
        breakpoints={{
          0 : {
            slidesPerView : 1,
          },
          700 : {
            slidesPerView : 2,
            spaceBetween : 20,
          }, 
          1200 : {
            slidesPerView : 3,
            spaceBetween : 30,
          }
        }}
        modules={[Pagination]}
        className="index-gallary"
        >
        <SwiperSlide><img loading="lazy" className='rounded-3xl shadow-lg w-full max-h-[23rem]' alt="gallary-image-1" src='/images/gallary/1.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='rounded-3xl shadow-lg w-full max-h-[23rem]' alt="gallary-image-2" src='/images/gallary/2.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='rounded-3xl shadow-lg w-full max-h-[23rem]' alt="gallary-image-3" src='/images/gallary/3.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='rounded-3xl shadow-lg w-full max-h-[23rem]' alt="gallary-image-4" src='/images/gallary/4.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='rounded-3xl shadow-lg w-full max-h-[23rem]' alt="gallary-image-5" src='/images/gallary/5.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='rounded-3xl shadow-lg w-full max-h-[23rem]' alt="gallary-image-6" src='/images/gallary/6.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='rounded-3xl shadow-lg w-full max-h-[23rem]' alt="gallary-image-7" src='/images/gallary/7.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='rounded-3xl shadow-lg w-full max-h-[23rem]' alt="gallary-image-8" src='/images/gallary/8.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='rounded-3xl shadow-lg w-full max-h-[17rem]' alt="gallary-image-9" src='/images/gallary/9.png'/></SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}