import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './Gallery2.css'

// import required modules
import { Pagination } from 'swiper'

export default function Gallery2() {
  return (
    <div>
        <p className='gallery-mini-title'>NatureNexus Tour!</p>
         <p className='gallery-title'>Discover Animal <span className='span'>Way!</span></p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="gallery-swiper"
      >
       
        <SwiperSlide>
          {' '}
          <div
            slot="container-start"
            className="gallery-slide-1"
            data-swiper-parallax="-23%"
          ></div>
          <div className="gallery-slide-text" data-swiper-parallax="-100">
            Get memories for life<br></br>
            <span className="span">Farm Fresh!</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div
            slot="container-start"
            className="gallery-slide-2"
            data-swiper-parallax="-23%"
          ></div>
          <div className="gallery-slide-text" data-swiper-parallax="-100">
            Get memories for life<br></br>
            <span className="span">Farm Fresh!</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div
            slot="container-start"
            className="gallery-slide-3"
            data-swiper-parallax="-23%"
          ></div>
          <div className="gallery-slide-text" data-swiper-parallax="-100">
            Get memories for life<br></br>
            <span className="span">Farm Fresh!</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div
            slot="container-start"
            className="gallery-slide-4"
            data-swiper-parallax="-23%"
          ></div>
          <div className="gallery-slide-text" data-swiper-parallax="-100">
            Get memories for life<br></br>
            <span className="span">Farm Fresh!</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div
            slot="container-start"
            className="gallery-slide-5"
            data-swiper-parallax="-23%"
          ></div>
          <div className="gallery-slide-text" data-swiper-parallax="-100">
            Get memories for life<br></br>
            <span className="span">Farm Fresh!</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div
            slot="container-start"
            className="gallery-slide-6"
            data-swiper-parallax="-23%"
          ></div>
          <div className="gallery-slide-text" data-swiper-parallax="-100">
            Get memories for life<br></br>
            <span className="span">Farm Fresh!</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div
            slot="container-start"
            className="gallery-slide-7"
            data-swiper-parallax="-23%"
          ></div>
          <div className="gallery-slide-text" data-swiper-parallax="-100">
            Get memories for life<br></br>
            <span className="span">Farm Fresh!</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div
            slot="container-start"
            className="gallery-slide-8"
            data-swiper-parallax="-23%"
          ></div>
          <div className="gallery-slide-text" data-swiper-parallax="-100">
            Get memories for life<br></br>
            <span className="span">Farm Fresh!</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div
            slot="container-start"
            className="gallery-slide-9"
            data-swiper-parallax="-23%"
          ></div>
          <div className="gallery-slide-text" data-swiper-parallax="-100">
            Get memories for life<br></br>
            <span className="span">Farm Fresh!</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
