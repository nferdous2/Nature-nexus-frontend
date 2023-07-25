import React from 'react'
import './FreshFarmBanner.css'
import { Typography } from '@mui/material'
import deliveryicon from '../../../../img/delivery-icon-2.webp'

const FreshFarmBanner = () => {
  return (
    <div
      className="hero"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <p className="organic">
        ORGANIC
        <br />
        GROCERY
      </p>

      <div className="delivery-icon-text">
        <img src={deliveryicon} />
        <p>Free delivery around 5 KM</p>
      </div>
      <button className="shop-online-btn">Shop Now</button>
    </div>
  )
}

export default FreshFarmBanner
