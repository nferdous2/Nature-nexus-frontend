import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Banner.css'

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper'

export default function App() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="banner-swiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        {/* 1st slide */}

        <SwiperSlide className="slider">
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>

          <div className="btn-div" data-swiper-parallax="-200">
            <button className="banner-btn"> Welcome to NatureNexus</button>
          </div>
          <div className="title" data-swiper-parallax="-300">
            Delicious Food Selection <br></br>
            <span className="span">Farm Fresh!</span>
          </div>
          <div className="btn-div-2" data-swiper-parallax="-200">
            <button className="banner-btn-2"> Explore Now !</button>
          </div>
        </SwiperSlide>
        {/* second slide */}
        <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg-2"
            data-swiper-parallax="-23%"
          ></div>
          <div className="btn-div" data-swiper-parallax="-200">
            <button className="banner-btn"> Welcome to NatureNexus</button>
          </div>
          <div className="title" data-swiper-parallax="-300">
            Explore and Protect <br></br>
            <span className="span"> Wild Life!</span>
          </div>
          <div className="btn-div-2" data-swiper-parallax="-200">
            <button className="banner-btn-2"> Explore Now !</button>
          </div>
        </SwiperSlide>
        {/* third slide */}
        <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg-3"
            data-swiper-parallax="-23%"
          ></div>
          <div className="btn-div" data-swiper-parallax="-200">
            <button className="banner-btn"> Welcome to NatureNexus</button>
          </div>
          <div className="title" data-swiper-parallax="-300">
            Tree Plantation Services <br></br>{' '}
            <span className="span">Green Future !</span>
          </div>
          <div className="btn-div-2" data-swiper-parallax="-200">
            <button className="banner-btn-2"> Explore Now !</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
