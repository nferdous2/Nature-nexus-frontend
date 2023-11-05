// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
// import { Typography } from '@mui/material'

// // Import Swiper styles
// import 'swiper/css'

// import './AnimalSlider.css'

// export default function Category() {
//   return (
//     <div>
//       <br />
//       <Swiper
//         watchSlidesProgress={true}
//         slidesPerView={1}
//         className="myCategorySwiper"
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//       >
//         <SwiperSlide className="category-swiper-slide">
//           <div className="slide-content">
//             <p className="text">Text in the middle</p>
//             <ArrowForwardIcon className="slide-icon" />
//           </div>

//           <div
//             slot="container-start"
//             className="category-slide-1"
//             data-swiper-parallax="-23%"
//           ></div>
//         </SwiperSlide>

//         <SwiperSlide className="category-swiper-slide ">
//           <div
//             slot="container-start"
//             className="category-slide-2"
//             // className="gallery-slide-1"
//             data-swiper-parallax="-23%"
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide className="category-swiper-slide ">
//           <div
//             slot="container-start"
//             className="category-slide-3"
//             // className="gallery-slide-1"
//             data-swiper-parallax="-23%"
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide className="category-swiper-slide ">
//           <div
//             slot="container-start"
//             className="category-slide-4"
//             // className="gallery-slide-1"
//             data-swiper-parallax="-23%"
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide className="category-swiper-slide ">
//           <div
//             slot="container-start"
//             className="category-slide-5"
//             // className="gallery-slide-1"
//             data-swiper-parallax="-23%"
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide className="category-swiper-slide ">
//           <div
//             slot="container-start"
//             className="category-slide-6"
//             // className="gallery-slide-1"
//             data-swiper-parallax="-23%"
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide className="category-swiper-slide ">
//           <div
//             slot="container-start"
//             className="category-slide-7"
//             // className="gallery-slide-1"
//             data-swiper-parallax="-23%"
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide className="category-swiper-slide ">
//           <div
//             slot="container-start"
//             className="category-slide-8"
//             // className="gallery-slide-1"
//             data-swiper-parallax="-23%"
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide className="category-swiper-slide ">
//           <div
//             slot="container-start"
//             className="category-slide-9"
//             // className="gallery-slide-1"
//             data-swiper-parallax="-23%"
//           ></div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   )
// }


// import { Grid, Typography } from '@mui/material'
// import React from 'react'
// import Accordion from './Accordion'
// import AnimalSlider from './AnimalSlider/AnimalSlider'
// // import AnimalSlider from './AnimalSlider' // Adjust the relative path as needed

// const Animal = () => {
//   return (
//     <div>
//       {' '}
//       <Grid container spacing={2} sx={{ pt: 5, p: 10 }}>
//         <Grid item xs={12} sm={12} md={6} lg={6}>
//           <Typography
//             variant="h4"
//             className="changing-nature-title"
//             sx={{ pt: 18 }}
//           >
//             FAQs
//           </Typography>
//           <Accordion />
//         </Grid>
//         <Grid item xs={12} sm={12} md={6} lg={6}>
//           <Typography
//             variant="h4"
//             className="changing-nature-title"
//             sx={{ pt: 18 }}
//           >
//             Changing Nature of Business
//           </Typography>
//           <AnimalSlider />
//         </Grid>
//       </Grid>
//     </div>
//   )
// }

// export default Animal
