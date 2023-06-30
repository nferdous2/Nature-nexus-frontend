import React from 'react'
import Banner from '../Banner/Banner'
import Gallery2 from '../Gallery2/Gallery'
import Hww from '../Hww'
import AboutUs from '../AboutUs'
import Goal from '../Goal'
import NewsLetter from '../NewsLetter'
import VHome from '../../Vegetables/VHome'
const Home = () => {
  return (
    <div>
      {/* <Hero></Hero> */}
   
      <Banner></Banner>
      <Gallery2></Gallery2>
      <AboutUs/>

      <Goal/>
      <Hww/>
      <NewsLetter/>
<VHome/>
      {/* <Gallery></Gallery> */}
    </div>
  )
}

export default Home
