import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';
import { CardContent, Typography } from '@mui/material';
import Rating from 'react-rating';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import './Review.css';
 
const Review = ({ review }) => {
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
        {review.map((reviewItem, index) => (
          <SwiperSlide className="review-swiper-slide" key={index}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {reviewItem.className}
              </Typography>
              <CardContent>
                <Typography variant="subtitle2">
                  Rating: {reviewItem.rating}
                </Typography>
                <Typography variant="subtitle2">
                  {reviewItem.opinion}
                </Typography>
                <Rating
                  initialRating={reviewItem.rating}
                  emptySymbol={
                    <CiStar
                      className="emptyIcon"
                      style={{ color: 'rgb(170, 170, 170)' }}
                    />
                  }
                  fullSymbol={
                    <FaStar
                      className="icon-color"
                      style={{ color: 'yellow', fill: 'yellow' }}
                    />
                  }
                  readonly
                />
              </CardContent>
            </CardContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
 
export default Review;