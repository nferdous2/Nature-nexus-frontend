import React from 'react'
import Gallery2 from './Gallery2/Gallery'
import Hww from './Hww'
import AboutUs from './AboutUs'
import Goal from './Goal'
import NewsLetter from './NewsLetter'
import Banner from './Banner/Banner'
import Facilities from './Facilities'
const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <Gallery2></Gallery2>
      <AboutUs />

      <Goal />
      <Hww />
      <NewsLetter />
      <Facilities/>
    </div>
  )
}

export default Home
