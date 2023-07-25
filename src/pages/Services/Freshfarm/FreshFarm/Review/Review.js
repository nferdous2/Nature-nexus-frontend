import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './Review.css'
import { EffectCoverflow, Pagination } from 'swiper'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function Review() {
  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ marginBottom: 3, color: '#444', fontWeight: 'bold' }}
      >
        What Our Clients Say
      </Typography>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="review-Swiper"
      >
        <SwiperSlide className="review-swiper-slide">
          <Card>
            <CardMedia
              sx={{ width: '50%', mx: 'auto' }}
              component="img"
              src="//cdn.shopify.com/s/files/1/0768/6533/9704/files/grocery-testimonial-01.png?v=1684730847&amp;"
              alt="Customer 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Alexa
              </Typography>
              <CardContent>
                <Typography variant="subtitle2">Maureen biologist</Typography>
              </CardContent>
            </CardContent>
          </Card>{' '}
        </SwiperSlide>
        <SwiperSlide className="review-swiper-slide">
          <Card>
            <CardMedia
              sx={{ width: '50%', mx: 'auto' }}
              component="img"
              src="//cdn.shopify.com/s/files/1/0768/6533/9704/files/grocery-testimonial-02.png?v=1684730888&amp;"
              alt="Customer 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ale
              </Typography>
              <CardContent>
                <Typography variant="subtitle2">Maureen biologist</Typography>
              </CardContent>
            </CardContent>
          </Card>{' '}
        </SwiperSlide>
        <SwiperSlide className="review-swiper-slide">
          <Card>
            <CardMedia
              sx={{ width: '50%', mx: 'auto' }}
              component="img"
              src="//cdn.shopify.com/s/files/1/0768/6533/9704/files/grocery-testimonial-03.png?v=1684730857&amp;"
              alt="Customer 3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Denial
              </Typography>
              <CardContent>
                <Typography variant="subtitle2">Maureen biologist</Typography>
              </CardContent>
            </CardContent>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
