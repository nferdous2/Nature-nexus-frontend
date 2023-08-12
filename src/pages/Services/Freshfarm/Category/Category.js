import React  from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {  Typography } from '@mui/material'

// Import Swiper styles
import 'swiper/css'

import './Category.css'

export default function Category() {
  return (
    <div>
     <Typography
        variant="h3"
        gutterBottom
        sx={{ marginBottom: 3, color: '#444', fontWeight: 'bold' }}
      >
        Browse Category
      </Typography>
      <br />
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={1}
        className="myCategorySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide className="category-swiper-slide">
          <div className="slide-content">
            <p className="text">Text in the middle</p>
            <ArrowForwardIcon className="slide-icon" />
          </div>
        
          <div
            slot="container-start"
            className="category-slide-1"
            data-swiper-parallax="-23%"
          ></div>
        </SwiperSlide>

        <SwiperSlide className="category-swiper-slide ">
          <div
            slot="container-start"
            className="category-slide-2"
            // className="gallery-slide-1"
            data-swiper-parallax="-23%"
          ></div>
        </SwiperSlide>
        <SwiperSlide className="category-swiper-slide ">
          <div
            slot="container-start"
            className="category-slide-3"
            // className="gallery-slide-1"
            data-swiper-parallax="-23%"
          ></div>
        </SwiperSlide>
        <SwiperSlide className="category-swiper-slide ">
          <div
            slot="container-start"
            className="category-slide-4"
            // className="gallery-slide-1"
            data-swiper-parallax="-23%"
          ></div>
        </SwiperSlide>
        <SwiperSlide className="category-swiper-slide ">
          <div
            slot="container-start"
            className="category-slide-5"
            // className="gallery-slide-1"
            data-swiper-parallax="-23%"
          ></div>
        </SwiperSlide>
        <SwiperSlide className="category-swiper-slide ">
          <div
            slot="container-start"
            className="category-slide-6"
            // className="gallery-slide-1"
            data-swiper-parallax="-23%"
          ></div>
        </SwiperSlide>
        <SwiperSlide className="category-swiper-slide ">
          <div
            slot="container-start"
            className="category-slide-7"
            // className="gallery-slide-1"
            data-swiper-parallax="-23%"
          ></div>
        </SwiperSlide>
        <SwiperSlide className="category-swiper-slide ">
          <div
            slot="container-start"
            className="category-slide-8"
            // className="gallery-slide-1"
            data-swiper-parallax="-23%"
          ></div>
        </SwiperSlide>
        <SwiperSlide className="category-swiper-slide ">
          <div
            slot="container-start"
            className="category-slide-9"
            // className="gallery-slide-1"
            data-swiper-parallax="-23%"
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
