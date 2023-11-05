import React from 'react'
import './WildlifeBanner.css'

const WildlifeBanner = () => {
  return (
    <div
      className="hero"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* <p className="subtitle">Explore our animal</p> */}
      <p className="organic">
        NEW WILDLIFE
        <br />
        EXPERIENCE & JOY
      </p>

      <button className="shop-online-btn">Discover more</button>
    </div>
  )
}

export default WildlifeBanner
